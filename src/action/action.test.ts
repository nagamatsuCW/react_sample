import { actions } from './index'
import { actionTypes } from './index'

describe('actions', () => {
  it('incrementAction', () => {
    const incrementAction = {
      type: "INCREMENT"
    }
    expect(actions.increment()).toEqual(incrementAction)
  })
  it('decrementAction', () => {
    const decrementAction = {
      type: "DECREMENT"
    }
    expect(actions.decrement()).toEqual(decrementAction)
  })
})