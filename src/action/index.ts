
export const increment = () => {
  return {
    type: "INCREMENT"
  } as const
}

export const decrement = () => {
  return {
    type: "DECREMENT"
  } as const
}


export type ActionsType = ReturnType<typeof increment | typeof decrement>