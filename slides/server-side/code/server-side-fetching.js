const { components } = renderProps;
const locals = {
  client: getApiClient(req),
  params: renderProps.params,
  path: renderProps.location.pathname,
  query: renderProps.location.query,
  dispatch
};

trigger('fetch', components, locals).then(() => {
  const html = renderToString(
    <Provider store={store}>
      <RouterContext {...renderProps} />
    </Provider>
  );
  res.send(renderFullPage({ html, initialState: getState() }));
});
