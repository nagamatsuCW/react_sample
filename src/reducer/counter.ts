import { ActionsType } from '../action'
import {
  useNavigate,
} from 'react-router-dom';
export interface CounterState {
  count: number
}

const initialState: CounterState = {
  count: 0
};

const counter = (state:CounterState = initialState, action:ActionsType) => {
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