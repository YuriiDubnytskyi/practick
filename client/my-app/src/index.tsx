import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import user from "./store/reducers/user"
import users from "./store/reducers/users"
import messages from "./store/reducers/messages"
import room from "./store/reducers/room"
import notifications from './store/reducers/notifications'
import {IStoreRedux} from './interfaces/IRedux'

const rootReducer = combineReducers<IStoreRedux>({
  user:user,
  users:users,
  messages:messages,
  room:room,
  notifications:notifications
});

const logger = (store:any) => {
  return (next:any) => {
      return (action:any) => {
          console.log('[Middleware] Dispatching', action);
          const result = next(action);
          console.log('[Middleware] next state', store.getState());
          return result;
      }
  }
};

const composeEnhancers = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)));

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();