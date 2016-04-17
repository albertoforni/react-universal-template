import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import todosApp from './reducers';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import routes from './routes';

// Grab the state from a global injected into server-generated HTML
const initialState = window.__INITIAL_STATE__;

const loggerMiddleware = createLogger();

// Create Redux store with initial state
const store = createStore(
  todosApp,
  initialState,
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware // neat middleware that logs actions
  )
);

render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('root')
);
