import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import configureStore from './store'

// reducer
import { preloadedState } from './reducer'

export const MediaContext = React.createContext('pc');

export const store = configureStore(preloadedState())
export function dispatch(action: any) {
  return store.dispatch(action);
}

ReactDOM.render(
  <React.StrictMode>
    <MediaContext.Provider value="sp">
      <Provider store={store}>
        <App />
      </Provider>
    </MediaContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
