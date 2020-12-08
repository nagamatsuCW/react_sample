import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import CountUp from './CountUp';
import store from './store'
Enzyme.configure({ adapter: new Adapter() });


describe("<CountUp /> コンポーネント", () => {
  const enzymeWrapper = shallow(<CountUp />);
  it("ボタンをクリックしてカウントアップする", () => {
    expect(enzymeWrapper.find("h3").text()).toEqual("count: 0");
    enzymeWrapper.find("#countUp").simulate("click");
    expect(enzymeWrapper.find("h3").text()).toEqual("count: 1");
    enzymeWrapper.find("#countDown").simulate("click");
    expect(enzymeWrapper.find("h3").text()).toEqual("count: 0");
  });

  it("child コンポーネント", () => {
    const todoInputProps = enzymeWrapper.find('ClickTest').props()
    expect(todoInputProps.title).toBe("countUp")
    todoInputProps.clickHandler()
    expect(enzymeWrapper.find("h3").text()).toEqual("count: 1");
  });
});