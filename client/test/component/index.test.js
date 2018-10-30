import React from 'react';
import { shallow } from 'enzyme';
import App from '../../src/components/index';

describe('Guest Navigation', () => {
  it('render guest navigation correctly', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
