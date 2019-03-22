/**
 * long description for the file
 *
 * @summary short description for the file
 * @author wandouni (2539419557@qq.com)
 *
 * Created at     : 2019-03-21 22:01:15
 * Last modified  : 2019-03-22 23:58:19
 */

import { applyMiddleware, combineReducers, createStore } from "redux";
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

const store = createStore(
  reducer,
  process.env.NODE_ENV === "development" &&
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);
export default store;
