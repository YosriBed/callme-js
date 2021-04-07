import React from 'react';

import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import Routes from './Routes';

import { reducer } from '../slice';
import mySaga from '../saga';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
// mount it on the Store
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware),
);

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;
