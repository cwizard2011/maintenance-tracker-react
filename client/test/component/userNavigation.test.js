import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { shallow } from 'enzyme';
import DefaultUserNavigation, { UserNavigation } from '../../src/components/UserNavigation';

const mockStore = configureMockStore([thunk]);

const props = {
  user: {
    email: 'juliet',
    exp: 1540907850,
    iat: 1540886250,
    id: '48a698a0-1641-5aca-bc1b-de9b1a482ee1',
    user_role: 'user',
    username: 'juliet'
  },
  auth: true,
  logout: jest.fn()
};
const initialState = {
  authReducer: {
    user: {
      email: 'juliet',
      exp: 1540907850,
      iat: 1540886250,
      id: '48a698a0-1641-5aca-bc1b-de9b1a482ee1',
      user_role: 'user',
      username: 'juliet'
    },
    isAuthenticated: true
  }
};
const store = mockStore(initialState);

describe('User Navigation', () => {
  it('render user navigation correctly', () => {
    const wrapper = shallow(<UserNavigation {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render connected component', () => {
    const wrapper = shallow(<DefaultUserNavigation store={store} {...props} />);
    expect(wrapper.state()).toEqual({});
  });
  it('should logout a user when logout is clicked', () => {
    const event = {
      preventDefault: jest.fn(),
    };
    const wrapper = shallow(<UserNavigation {...props} />);
    const instance = wrapper.instance();
    instance.handleLogout(event);
    expect(props.logout).toHaveBeenCalled();
  });
});
