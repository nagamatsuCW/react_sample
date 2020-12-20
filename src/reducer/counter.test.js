import reducer, { initialCounterState as initialState } from './counter'

describe('reducer', () => {
  // initialStateがそのまま返ってくるか

  it("initialState test", () => {
    expect(reducer(undefined,{})).toEqual(initialState);
  })
  test('increment', () => {
    expect(reducer(initialState, { type: 'INCREMENT' })).toEqual({
      count: 1,
      name: ""
    })
  })
  test('increment', () => {
    expect(reducer(initialState, { type: 'DECREMENT' })).toEqual({
      count: -1,
      name: ""
    })
  })
})