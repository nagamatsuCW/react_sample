import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import { createStore, applyMiddleware, compose } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import logger from 'redux-logger'

// それぞれ slice.reducer を default export している前提
import counterReducer from "./counter";


export const history = createBrowserHistory()

const composeEnhancers = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const enhancer = composeEnhancers(
  applyMiddleware(
    routerMiddleware(history),
    logger
  )
);

const reducer = combineReducers({
  router: connectRouter(history),
  counter: counterReducer,
})

export type RootState = ReturnType<typeof reducer>

const store = configureStore({
  reducer,
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(routerMiddleware(history))
  },
  devTools: process.env.NODE_ENV !== 'production',
  enhancers: [enhancer],
})

export default store
