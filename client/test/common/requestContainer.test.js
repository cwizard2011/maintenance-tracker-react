import React from 'react';
import { shallow } from 'enzyme';
import RequestContainer from '../../src/components/common/RequestContainer';

describe('Request container', () => {
  it('render request container correctly', () => {
    const wrapper = shallow(<RequestContainer />);
    expect(wrapper).toMatchSnapshot();
  });
});
