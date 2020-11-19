import { defaultCipherList } from 'constants'
import { combineReducers } from 'redux'
import counter from './counter'
import { connectRouter } from 'connected-react-router'
import history, { History } from '../history'


const createRootReducer = (history: History) => combineReducers({
  router: connectRouter(history),
  counter
})
export default createRootReducer

export type RootState = ReturnType<typeof createRootReducer>