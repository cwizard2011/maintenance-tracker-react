import React from 'react';
import { shallow } from 'enzyme';
import AppRouter from '../../src/routes/AppRouter';

describe('App Router', () => {
  it('render App correctly', () => {
    const wrapper = shallow(<AppRouter />);
    expect(wrapper).toMatchSnapshot();
  });
});
