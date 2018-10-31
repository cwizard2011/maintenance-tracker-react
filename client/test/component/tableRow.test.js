import React from 'react';
import { shallow } from 'enzyme';
import TableRow from '../../src/components/TableRow';

const props = {
  request: {
    currentstatus: 'pending'
  },
  viewDetails: jest.fn(),
  approveRequest: jest.fn(),
  resolveRequest: jest.fn(),
  rejectRequest: jest.fn()
};
describe('Table Row', () => {
  it('should render table pending row correctly', () => {
    const wrapper = shallow(<TableRow {...props} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('td').length).toEqual(5);
  });
  it('should render approved table row correctly', () => {
    const newProps = {
      ...props,
      request: {
        currentstatus: 'approved'
      }
    };
    const wrapper = shallow(<TableRow {...newProps} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('td').length).toEqual(5);
  });
  it('should render resolved table row correctly', () => {
    const newProps = {
      ...props,
      request: {
        currentstatus: 'resolved'
      }
    };
    const wrapper = shallow(<TableRow {...newProps} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('td').length).toEqual(4);
  });
  it('should render rejected table row correctly', () => {
    const newProps = {
      ...props,
      request: {
        currentstatus: 'rejected'
      }
    };
    const wrapper = shallow(<TableRow {...newProps} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('td').length).toEqual(4);
  });
});
