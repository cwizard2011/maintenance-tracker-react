import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../../src/components/common/Footer';

describe('Guest Navigation', () => {
  it('render guest navigation correctly', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toMatchSnapshot();
  });
});
