import { reducerWithInitialState } from "typescript-fsa-reducers";
import { actions } from '../action'
export interface CounterState {
  count: number,
  name: string
}

export const initialCounterState: CounterState = {
  count: 0,
  name: ""
};


const reducer = reducerWithInitialState(initialCounterState)
    .caseWithAction(actions.increment, (state) => ({
        ...state,
        count: state.count +1
      }))
    .caseWithAction(actions.decrement, (state) => ({
      ...state,
      count: state.count -1
    }))
    .caseWithAction(actions.nameChange, (state, action) => ({
      ...state,
      name: action.payload.name
    }));

export default reducer