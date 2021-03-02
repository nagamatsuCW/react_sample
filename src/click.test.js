import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import ClickTest from './ClickTest';
Enzyme.configure({ adapter: new Adapter() });


function setup() {
  const props = {
    // addTodoはjestのモック関数
    clickHandler: jest.fn(),
    title: "test"
  }

  // Headerのshallowレンダリング : propsとしてaddTodoを渡す
  const enzymeWrapper = shallow(<ClickTest {...props} />)

  return {
    props,
    enzymeWrapper
  }
}


describe('components', () => {
  describe('ClickTest', () => {

    // EnzymeのDOM操作を利用したテスト
    it('should render self and subcomponents', () => {
      const props = {
        // addTodoはjestのモック関数
        clickHandler: jest.fn(),
        title: "test"
      }
      const enzymeWrapper = mount(<ClickTest {...props} />)

      // propsの確認
      expect(enzymeWrapper.props().title).toBe('test');
      expect(enzymeWrapper.find('#button').text()).toBe('test')

      // eventの確認
      expect(enzymeWrapper.props().clickHandler.mock.calls.length).toBe(0)
      enzymeWrapper.find('#button').simulate('click');
      expect(enzymeWrapper.props().clickHandler.mock.calls.length).toBe(1)

      // const todoInputProps = enzymeWrapper.find('TodoTextInput').props()
      // expect(todoInputProps.newTodo).toBe(true)
      // expect(todoInputProps.placeholder).toEqual('What needs to be done?')
    })

  })
})