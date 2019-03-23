/**
 * long description for the file
 *
 * @summary short description for the file
 * @author wandouni (2539419557@qq.com)
 *
 * Created at     : 2019-03-21 22:01:15
 * Last modified  : 2019-03-23 11:02:00
 */

import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import createSagaMiddleware from "redux-saga";
// import { fork } from 'redux-saga/effects'

const reducer = combineReducers({
  'test': (state = 1, action) => {
    return state
  }
})

const sagaMiddleware = createSagaMiddleware();

const rootSaga = function* () {
  yield []
}

const composeEnhancers =
  typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware),
  // other store enhancers if any
);

const store = createStore(
  reducer,
  enhancer
);
sagaMiddleware.run(rootSaga);
export default store
