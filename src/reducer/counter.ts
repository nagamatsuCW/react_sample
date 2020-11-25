import { ActionsType } from '../action'
export interface CounterState {
  count: number
}

export const initialCounterState: CounterState = {
  count: 0
};

const counter = (state:CounterState = initialCounterState, action:ActionsType) => {
  switch (action.type) {
    case 'INCREMENT':

      return {
        ...state,
        count: state.count + 1
      }
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1
      }
    default:
      return state
  }
}

export default counter