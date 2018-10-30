import React from 'react';
import { shallow } from 'enzyme';
import Loading from '../../src/components/Loading';

describe('Loader', () => {
  it('render loader correctly', () => {
    const wrapper = shallow(<Loading />);
    expect(wrapper).toMatchSnapshot();
  });
});
