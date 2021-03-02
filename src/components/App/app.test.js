import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import FugaFuga from '../FugaFuga/index';
import { increment } from '../../store/counter'
import { useSelector, useDispatch } from 'react-redux'
const useSelectorMock = jest.fn()
const useDispatchMock = jest.fn()

Enzyme.configure({ adapter: new Adapter() });

function sum(a, b) {
  return a + b;
}
module.exports = sum;


// 事前準備
jest.mock('react-redux')

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

describe('FugaFuga.tsx', () => {
  afterEach(() => {
    jest.resetAllMocks()
  })
  beforeEach(() => {
    useSelectorMock.mockReturnValue({count: 0})
    useDispatchMock.mockReturnValue(jest.fn())
  })

it('dispatches increment action', () => {
    const wrapper = shallow(<FugaFuga />)
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('#test').text()).toEqual('FugaaaPiyoooooo名前: increment');
  })
})