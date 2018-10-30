import React from 'react';
import { shallow } from 'enzyme';
import GuestNavigation from '../../src/components/GuestNavigation';

describe('Guest Navigation', () => {
  it('render guest navigation correctly', () => {
    const wrapper = shallow(<GuestNavigation />);
    expect(wrapper).toMatchSnapshot();
  });
});
