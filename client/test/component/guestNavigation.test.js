import React from 'react';
import { shallow } from 'enzyme';
import GuestNavigation from '../../src/components/GuestNavigation';

const props = {
  history: {
    push: jest.fn()
  }
};
describe('Guest Navigation', () => {
  it('render guest navigation correctly', () => {
    const wrapper = shallow(<GuestNavigation {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
