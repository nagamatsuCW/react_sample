import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createBrowserHistory } from 'history'

// reducer
import rootReducer from './reducer'

export const MediaContext = React.createContext('pc');


const store = createStore(rootReducer)


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
