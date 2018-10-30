import React from 'react';
import { shallow } from 'enzyme';
import Button from '../../src/components/common/Button';

describe('Guest Navigation', () => {
  it('render guest navigation correctly', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper).toMatchSnapshot();
  });
});
