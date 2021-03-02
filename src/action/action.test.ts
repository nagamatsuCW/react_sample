// import { actions } from './index'
import { increment, decrement, nameChange } from '../store/counter'

describe('actions', () => {
  it('incrementAction', () => {
    const incrementAction = {
      type: "counter/increment"
    }
    expect(increment()).toEqual(incrementAction)
  })
  it('decrementAction', () => {
    const decrementAction = {
      type: "counter/decrement"
    }
    expect(decrement()).toEqual(decrementAction)
  })

  it('nameChangeAction', () => {
    const nameChangeAction = {
      type: "counter/nameChange",
      payload: {
        name: "test"
      }
    }
    expect(nameChange({name: "test"})).toEqual(nameChangeAction)
  })
})