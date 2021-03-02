import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import FugaFuga from './index';

import store from '../../store/index'
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import counterReducer from '../../reducer/counter'
Enzyme.configure({ adapter: new Adapter() });


describe("<FugaFuga /> コンポーネント", () => {

  describe("Fullレンダリング", () => {
    const getWrapper = () =>
    mount(
      <Provider store={store}>
        <FugaFuga />
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