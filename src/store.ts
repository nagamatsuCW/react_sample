import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer, { StoreState, preloadedState } from './reducer'
import { createBrowserHistory } from 'history'
import logger from 'redux-logger'
export const history = createBrowserHistory()

const composeEnhancers = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const enhancer = composeEnhancers(
  applyMiddleware(
    routerMiddleware(history),
    logger
    // other store enhancers if any
  )
);


function configureStore(preloadedState: StoreState) {
  const store = createStore(
    createRootReducer(history),
    preloadedState,
    enhancer
  )

  return store
}

const store = configureStore(preloadedState())
export default store

export function dispatch(action: any) {
  return store.dispatch(action);
}
