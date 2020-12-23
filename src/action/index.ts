// typescript-fsa
import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

const ActionNames = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  NAME_CHANGE: 'NAME_CHANGE'
} as const

export const increment = actionCreator(ActionNames.INCREMENT);

export const decrement = actionCreator(ActionNames.DECREMENT);

export const nameChange = actionCreator<{name: string}>(ActionNames.NAME_CHANGE);


export const actions = { increment, decrement, nameChange }

export type ActionsType = ReturnType<typeof increment | typeof decrement | typeof nameChange>