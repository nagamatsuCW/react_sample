// typescript-fsa
import actionCreatorFactory from 'typescript-fsa';

// redux-actions
import { createActions } from 'redux-actions';

import {Action} from 'redux'


const actionCreator = actionCreatorFactory();

enum ActionNames {
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT',
  NAME_CHANGE = 'NAME_CHANGE'
}

// interface IncrementAction extends Action {
//   type: ActionNames.INCREMENT
// }
// interface DecrementAction extends Action {
//   type: ActionNames.DECREMENT
// }

// interface NameChangeAction extends Action {
//   type: ActionNames.NAME_CHANGE,
//   payload: {
//     name: string
//   }
// }

export const increment = actionCreator(ActionNames.INCREMENT);

// export const increment = (): IncrementAction => ({
//   type: ActionNames.INCREMENT
// })


export const decrement = actionCreator(ActionNames.DECREMENT);

// export const decrement = (): DecrementAction => ({
//   type: ActionNames.DECREMENT
// })

export const nameChange = actionCreator<{name: string}>(ActionNames.NAME_CHANGE);


// export const nameChange = (value:string): NameChangeAction => ({
//   type: ActionNames.NAME_CHANGE,
//   payload: {
//     name: `${value}さん`
//   }
// })


// export const actions = createActions(
//   {
//     [ActionNames.NAME_CHANGE]: (value:string) => ({
//       name: `${value}さん`
//     }),
//   },
//   ActionNames.DECREMENT,
//   ActionNames.INCREMENT
// );


export const actions = { increment, decrement, nameChange }

export type ActionsType = ReturnType<typeof increment | typeof decrement | typeof nameChange>