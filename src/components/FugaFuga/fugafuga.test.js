import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import FugaFugaContainer from './index';
import FugaFugaComponent from './FugaFuga';

import store from '../../store'
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import counterReducer from '../../reducer/counter'
Enzyme.configure({ adapter: new Adapter() });


describe("<FugaFuga /> コンポーネント", () => {

  describe("Shallowレンダリング", () => {
    const props = {
      count: 0,
      increment: jest.fn(),
    };
    const shallowComponent = mount(<FugaFugaComponent {...props} />);
    it("ボタンをクリックしてカウントアップする", () => {
      expect(props.increment.mock.calls.length).toBe(0)
      shallowComponent.props().increment() // addTodoが1回呼ばれる
      expect(props.increment.mock.calls.length).toBe(1)
    });
  });

  describe("Fullレンダリング", () => {
    const getWrapper = () =>
    mount(
      <Provider store={store}>
        <FugaFugaContainer />
      </Provider>
    );
    it("ボタンをクリックしてカウントアップする", () => {
      const wrapper = getWrapper();
      expect(wrapper.find("#count").text()).toEqual("0");
      wrapper.find('#incrementButton').simulate("click");
      expect(wrapper.find("#count").text()).toEqual("1");
    });
  });
});