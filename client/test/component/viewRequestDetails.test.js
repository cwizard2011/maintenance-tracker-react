import React from 'react';
import { shallow } from 'enzyme';
import ViewRequestDetail from '../../src/components/ViewRequestDetail';

const props = {
  requestId: '1',
  sender: 'peter',
  title: 'new title',
  email: 'petti4eva@gmail.com',
  details: 'new details',
  status: 'pending',
  date: 'Oct 30, 2018'
};
describe('Table Row', () => {
  it('should render pending details correctly', () => {
    const wrapper = shallow(<ViewRequestDetail {...props} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('div').length).toEqual(1);
  });
  it('should render approved details correctly', () => {
    const newProps = {
      ...props,
      status: 'approved'
    };
    const wrapper = shallow(<ViewRequestDetail {...newProps} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('div').length).toEqual(1);
  });
  it('should render resolved details correctly', () => {
    const newProps = {
      ...props,
      status: 'resolved'
    };
    const wrapper = shallow(<ViewRequestDetail {...newProps} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('div').length).toEqual(1);
  });
  it('should render rejected details correctly', () => {
    const newProps = {
      ...props,
      status: 'rejected'
    };
    const wrapper = shallow(<ViewRequestDetail {...newProps} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('div').length).toEqual(1);
  });
});
