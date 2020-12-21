import { actions } from './index'

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

  it('nameChangeAction', () => {
    const nameChangeAction = {
      type: "NAME_CHANGE",
      payload: {
        name: "test"
      }
    }
    expect(actions.nameChange({name: "test"})).toEqual(nameChangeAction)
  })
})