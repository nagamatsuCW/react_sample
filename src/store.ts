import { createStore } from 'redux'
import reducer from './reducer'
import { CounterState } from './reducer/counter'
// import { combineReducers, createStore, compose, applyMiddleware} from 'redux'

export type AppState = {
  state: {
    counter: CounterState
  }
}


const store = createStore(reducer)

export default store