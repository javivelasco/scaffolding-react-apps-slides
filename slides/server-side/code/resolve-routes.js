router.get('*', function handleRender(req, res, next) {
  const store = configureStore({ session: { account: req.session && req.session.account } });
  const history = syncHistoryWithStore(createMemoryHistory(req.path), store);

  match({ routes, history }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      const html = renderToString(
        <Provider store={store}>
          <RouterContext {...renderProps} />
        </Provider>
      );
      res.send(renderFullPage({ html, initialState: store.getState() }));
    } else {
      next();
    }
  });
});
