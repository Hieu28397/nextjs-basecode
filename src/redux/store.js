import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from './reducers';

export const sagaMiddleware = createSagaMiddleware();

const enhancers = typeof window !== 'undefined' && process.env.REACT_APP_ENVIRONMENT !== 'development'
  ? window.__REDUX_DEVTOOLS_EXTENSION__
  && window.__REDUX_DEVTOOLS_EXTENSION__()
  : (f) => f;

export default createStore(reducers, compose(applyMiddleware(sagaMiddleware), enhancers));
