import { browserHistory } from 'react-router';
import { trigger } from 'redial';
import { match } from 'react-router';
import configureStore from './store/configureStore';
import routes from './routes';
const store = configureStore(window.__INITIAL_STATE__);

browserHistory.listen(location => {
  match({ routes, location }, (error, redirect, props) => {
    if (!redirect) {
      const locals = {
        params: props.params,
        path: props.location.pathname,
        query: props.location.query,
        dispatch: store.dispatch
      };

      if (window.__INITIAL_STATE__) {
        delete window.__INITIAL_STATE__;
      } else {
        trigger('fetch', props.components, locals);
      }

      trigger('defer', props.components, locals);
    }
  });
});
