import { Action } from "redux";
import { reducerWithInitialState } from "typescript-fsa-reducers";
import { combineActions, handleActions } from 'redux-actions';
import { ActionsType, actions } from '../action'
export interface CounterState {
  count: number,
  name: string
}

export const initialCounterState: CounterState = {
  count: 0,
  name: ""
};


const reducer = reducerWithInitialState(initialCounterState)
    .case(actions.increment, (state) => ({
        ...state,
        count: state.count +1
      }))
    .case(actions.decrement, (state) => ({
      ...state,
      count: state.count -1
    }))
    .case(actions.nameChange, (state, action) => ({
      ...state,
      name: action.name
    }));

export default reducer