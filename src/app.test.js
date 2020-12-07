import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import FugaFuga from './FugaFuga';
Enzyme.configure({ adapter: new Adapter() });

function sum(a, b) {
  return a + b;
}
module.exports = sum;


test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

describe('FugaFuga.tsx', () => {

  const makeComponent = (args = {}) => (<FugaFuga  />);

  test('show', () => {
    const component = shallow(makeComponent());
    expect(component.find('#test').text()).toEqual('FugaaaPiyoooooo');
  })

})