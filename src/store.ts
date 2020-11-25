import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer, { StoreState } from './reducer'
import { createBrowserHistory } from 'history'
export const history = createBrowserHistory()

const composeEnhancers = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const enhancer = composeEnhancers(
  applyMiddleware(
    routerMiddleware(history)
    // other store enhancers if any
  )
);


export default function configureStore(preloadedState: StoreState) {
  const store = createStore(
    createRootReducer(history),
    preloadedState,
    enhancer
  )

  return store
}