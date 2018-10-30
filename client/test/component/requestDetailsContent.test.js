import React from 'react';
import { shallow } from 'enzyme';
import RequestDetailsContent from '../../src/components/RequestDetailsContent';

describe('Request detail', () => {
  it('render request detail correctly', () => {
    const wrapper = shallow(<RequestDetailsContent />);
    expect(wrapper).toMatchSnapshot();
  });
});
