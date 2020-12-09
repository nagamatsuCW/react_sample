import reducer, { initialCounterState as initialState } from './counter'
import { decrement, increment } from '../action'


describe('reducer test', () => {
  it('increment', () => {
    const next = reducer(initialState, increment())
    expect(next).toMatchSnapshot()
  })
  it('decrement', () => {
    const next = reducer(initialState, decrement())
    expect(next).toMatchSnapshot()
  })
})