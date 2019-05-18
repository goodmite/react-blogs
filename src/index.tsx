import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.scss';
import { Provider } from 'react-redux';
import thunk from "redux-thunk";
import {createStore, applyMiddleware, combineReducers} from "redux";
import registerServiceWorker from './registerServiceWorker';
import {users} from "./reducers/auth";
import {composeWithDevTools} from "redux-devtools-extension";
import {loadState,/*loadState,*/ saveState} from "./localstorage";



const persistedState = loadState();
const store = createStore(combineReducers({users:users}),persistedState||{}, composeWithDevTools(applyMiddleware(thunk) ));

store.subscribe(()=>{
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

