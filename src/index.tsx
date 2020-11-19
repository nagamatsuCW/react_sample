import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux'
import { ConnectedRouter, routerMiddleware } from 'connected-react-router';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createBrowserHistory } from 'history'
import history from './history'

// reducer
import createRootReducer from './reducer'

export const MediaContext = React.createContext('pc');

export const store = createStore(
  createRootReducer(history),
  compose(
    applyMiddleware(routerMiddleware(history))
  )
)


ReactDOM.render(
  <React.StrictMode>
    <MediaContext.Provider value="sp">
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
    </MediaContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
