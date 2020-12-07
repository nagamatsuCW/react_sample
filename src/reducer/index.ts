import { defaultCipherList } from 'constants'
import { combineReducers } from 'redux'
import counter from './counter'
import { connectRouter } from 'connected-react-router'
import { initialCounterState } from './counter'
import 'react-redux'
import { Store, Dispatch } from 'redux'
import { history } from '../store'

const createRootReducer = (history: any) => combineReducers({
  router: connectRouter(history),
  counter
})
export default createRootReducer

export type RootState = ReturnType<typeof createRootReducer>

export const preloadedState = () => {
  return {
    counter: initialCounterState,
    router: history,
  };
};

export type StoreState = ReturnType<typeof preloadedState>;
export type ReduxStore = Store<StoreState>;

declare module 'react-redux' {
  interface DefaultRootState extends StoreState {}
  // export function useDispatch<TDispatch = Dispatch<Actions>>(): TDispatch
  // export function useStore<S = DefaultRootState>(): Store<S, Actions>
}