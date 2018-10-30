import React from 'react';
import { shallow } from 'enzyme';
import NotFoundPage from '../../src/components/NotFoundPage';

describe('Not found page', () => {
  it('render not found page correctly', () => {
    const wrapper = shallow(<NotFoundPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
