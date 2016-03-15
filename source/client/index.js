import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import { syncHistory, routeReducer } from 'react-router-redux';
import rootReducer from 'shared/reducers';

import { Router, Route } from 'react-router';
import createApp from 'shared/Books/components/app';
import createTestData from 'shared/Books/components/test-data';

// Sync dispatched route actions to the history
const reduxRouterMiddleware = syncHistory(browserHistory);
const createStoreWithMiddleware = applyMiddleware(
  reduxRouterMiddleware
)(createStore);

const store = createStoreWithMiddleware(rootReducer);

// Required for replaying actions from devtools to work
// reduxRouterMiddleware.listenForReplays(store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={ browserHistory }>
      <Route path="/" component={ createApp(React) } />
      <Route path="/test-data" component={ createTestData(React) } />
    </Router>
  </Provider>,
  document.getElementById('root')
);
