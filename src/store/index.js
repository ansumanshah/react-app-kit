import { applyMiddleware, createStore, compose } from 'redux';
import createLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import combineReducers from './reducers';
import combineSagas from '../sagas';

const sagaMiddleware = createSagaMiddleware();
const logger = createLogger({
  collapsed: true,
  duration: true,
});

export default function configureStore() {
  const middleware = [];
  const enhancers = [];
  /* ----- Custom Middlewares ----- */
  middleware.push(sagaMiddleware);
  middleware.push(logger);
  /* ----- Custom Enhancers ----- */
  enhancers.push(applyMiddleware(...middleware));
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    combineReducers(),
    composeEnhancers(...enhancers),
  );

  sagaMiddleware.run(combineSagas);

  return store;
}
