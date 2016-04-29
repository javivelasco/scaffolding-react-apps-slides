import 'babel-polyfill';
import React from 'react';
import { Router } from 'express';
import { trigger } from 'redial';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import { addLocaleData, IntlProvider } from 'react-intl';
import { match, createMemoryHistory, RouterContext } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import en from 'react-intl/locale-data/en';
import es from 'react-intl/locale-data/es';

import * as messages from './locale';
import { getApiClient } from './middleware/api';
import configureStore from './store/configureStore';
import { toAccount } from '../../core/domain-model/accounts/aggregate';
import getRoutes from './routes';

module.exports = ({ assetsPath }) => {
  function handleRender(req, res, next) {
    const account = req.session && req.session.account && toAccount(req.session.account);
    const store = configureStore({ session: { account } });
    const routes = getRoutes(store);
    const { getState, dispatch } = store;

    if (process.env.DISABLE_SSR === 'true') {
      return res.send(renderFullPage({ initialState: getState() }));
    }

    const history = syncHistoryWithStore(createMemoryHistory(req.path), store);

    match({ routes, history }, (error, redirectLocation, renderProps) => {
      if (error) {
        res.status(500).send(error.message);
      } else if (redirectLocation) {
        res.redirect(302, redirectLocation.pathname + redirectLocation.search);
      } else if (renderProps) {
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
      } else {
        next();
      }
    });

    return null;
  }

  function renderFullPage({ html = '', initialState = {} }) {
    return `
      <!doctype html>
      <html>
        <head>
          <title>SocialBro Nebula 0.1</title>
          <link rel="stylesheet" href="${assetsPath}bundle.css">
          <script src="https://use.typekit.net/evv8xwk.js"></script>
          <script>try{Typekit.load({ async: true });}catch(e){}</script>
        </head>
        <body>
          <div id="root">${html}</div>
          <script>
            window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
          </script>
          <script src="${assetsPath}bundle.js"></script>
        </body>
      </html>
      `;
  }

  const router = new Router();
  router.get('*', handleRender);
  return router;
};
