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


// const counter = (state:CounterState = initialCounterState, action:ActionsType) => {
//   switch (action.type) {
//     case 'INCREMENT':

//       return {
//         ...state,
//         count: state.count + 1
//       }
//     case 'DECREMENT':
//       return {
//         ...state,
//         count: state.count - 1
//       }
//     case 'NAME_CHANGE':
//         return {
//           ...state,
//           name: action.payload.name
//         }
//     default:
//       return state
//   }
// }

// export default counter

const reducer = handleActions(
  {
    INCREMENT: (state, action) => ({
      ...state,
      count: state.count + 1
    }),

    DECREMENT: (state, action) => ({
      ...state,
      count: state.count - 1
    }),
    NAME_CHANGE: (state, action) => ({
      ...state,
      name: action.payload.name
    })
  },
  initialCounterState
);

export default reducer