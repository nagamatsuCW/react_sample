import { ActionsType } from '../action'
export interface CounterState {
  count: number,
  name: string
}

export const initialCounterState: CounterState = {
  count: 0,
  name: ""
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
    case 'NAME_CHANGE':
        return {
          ...state,
          name: action.payload.name
        }
    default:
      return state
  }
}

export default counter