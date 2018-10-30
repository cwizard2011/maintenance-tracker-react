import React from 'react';
import { shallow } from 'enzyme';
import RequestContainer from '../../src/components/common/RequestContainer';

describe('Guest Navigation', () => {
  it('render guest navigation correctly', () => {
    const wrapper = shallow(<RequestContainer />);
    expect(wrapper).toMatchSnapshot();
  });
});
