export const actionTypes = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT"
}


export const increment = () => {
  return {
    type: actionTypes.INCREMENT
  } as const
}

export const decrement = () => {
  return {
    type: actionTypes.DECREMENT
  } as const
}

export const actions = { increment, decrement }

export type ActionsType = ReturnType<typeof increment | typeof decrement>