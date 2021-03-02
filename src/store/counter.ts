import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  count: number,
  name: string
}

export const initialState: CounterState = {
  count: 0,
  name: ""
};


// Sliceを生成する
export const slice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: state => {
      return Object.assign({}, state, { count: state.count + 1 })
    },
    decrement: state => {
          return Object.assign({}, state, { count: state.count + 1 })
    },
    nameChange: (state, action) => {
          return Object.assign({}, state, { name: action.payload })
    },
    // etc...
  }
});

// Reducerをエクスポートする
export default slice.reducer;

// Action Creatorsをエクスポートする
export const { increment, decrement, nameChange } = slice.actions;

export type ActionsType = ReturnType<typeof increment | typeof decrement | typeof nameChange>