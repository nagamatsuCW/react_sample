import reducerTester from 'reducer-tester'
import reducer, { initialCounterState as initialState } from './counter'
import { actions } from '../action'

reducerTester({
  reducer,
  state: initialState,
  tests: [actions.increment(), actions.decrement()]
})