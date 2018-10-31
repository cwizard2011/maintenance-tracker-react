import React from 'react';
import { shallow } from 'enzyme';
import RequestButton from '../../src/components/common/RequestButton';

describe('Request button', () => {
  it('render request button correctly', () => {
    const wrapper = shallow(<RequestButton />);
    expect(wrapper).toMatchSnapshot();
  });
});
