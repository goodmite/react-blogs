import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.scss';
import {Provider} from 'react-redux';
// import thunk from "redux-thunk";
import {createStore, applyMiddleware, combineReducers} from "redux";
import registerServiceWorker from './registerServiceWorker';
import {composeWithDevTools} from "redux-devtools-extension";
import {loadState,/*loadState,*/ saveState} from "./localstorage";
import createSagaMiddleware from 'redux-saga';
import {rootSaga} from "./store/saga-init";
import {user} from "./store/login/reducers";

const sagaMiddleware = createSagaMiddleware();
const classBasedToPojo = (store:any) => (next:any) => (action:any) => {
  /*class based actions arent allowed in redux
  * https://github.com/reduxjs/redux/issues/2361
  * */
  next({ ...action });
};
// import { rootSaga } from './store/sagas';

const persistedState = loadState();
const store = createStore(combineReducers(
  {users: user}),
  persistedState || {},
  composeWithDevTools(applyMiddleware(classBasedToPojo, sagaMiddleware)));

sagaMiddleware.run(rootSaga);

store.subscribe(() => {
  saveState(store.getState())
});

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>
  ,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();

