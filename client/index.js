import React from 'react';
import ReactDOM from 'react-dom';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import routes from './routes';

import reducers from './reducers';

import { AUTH } from './actions/actionTypes.js';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

const token = localStorage.getItem('token');
if (token) {
  store.dispatch({type: AUTH});
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      {routes}
    </Router>
  </Provider>
  , document.getElementById('app'));
