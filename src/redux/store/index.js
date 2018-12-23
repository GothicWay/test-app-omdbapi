import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux'

import rootSaga from '../sagas';
import reducers from '../reducers';

export const history = createHistory();

export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();

  const middleware = [sagaMiddleware, routerMiddleware(history)];

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    reducers,
    initialState,
    composeEnhancers(applyMiddleware(...middleware))
  );
  sagaMiddleware.run(rootSaga);

  return store;
}
