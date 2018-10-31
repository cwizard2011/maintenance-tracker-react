import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import DefaultAdminDashboard, { AdminDashboard } from '../../src/components/AdminDashboard';

const mockStore = configureMockStore([thunk]);

const props = {
  userRole: 'admin'
};
const initialState = {
  authReducer: {
    user: {
      user_role: 'admin'
    }
  }
};
const store = mockStore(initialState);

describe('Admin dashboard', () => {
  it('render admin dashboard correctly', () => {
    const wrapper = shallow(<AdminDashboard {...props} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('div').length).toEqual(2);
  });
  it('render redirect non admin', () => {
    const newProps = {
      userRole: 'user',
      history: {
        push: jest.fn()
      }
    };
    const wrapper = shallow(<AdminDashboard {...newProps} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('div').length).toEqual(0);
  });
  it('render connected component', () => {
    const wrapper = shallow(<DefaultAdminDashboard store={store} {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
