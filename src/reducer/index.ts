import { defaultCipherList } from 'constants'
import { combineReducers } from 'redux'
import counter from './counter'
import { connectRouter } from 'connected-react-router'
import { initialCounterState } from './counter'


const createRootReducer = (history: any) => combineReducers({
  router: connectRouter(history),
  counter
})
export default createRootReducer

export type RootState = ReturnType<typeof createRootReducer>

export const preloadedState = () => {
  return { counter: initialCounterState };
};

export type StoreState = ReturnType<typeof preloadedState>;