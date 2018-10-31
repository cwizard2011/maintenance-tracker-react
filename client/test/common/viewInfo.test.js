import React from 'react';
import { shallow } from 'enzyme';
import { ViewInfo, LabelTag } from '../../src/components/common/ViewInfo';

describe('View Info and Label Tag', () => {
  it('render View Info correctly', () => {
    const wrapper = shallow(<ViewInfo />);
    expect(wrapper).toMatchSnapshot();
  });
  it('render Label Tag correctly', () => {
    const wrapper = shallow(<LabelTag />);
    expect(wrapper).toMatchSnapshot();
  });
});
