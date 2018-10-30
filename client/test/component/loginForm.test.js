import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { shallow } from 'enzyme';
import DefaultLoginForm, { LoginForm } from '../../src/components/LoginForm';

const mockStore = configureMockStore([thunk]);

const props = {
  login: jest.fn(),
  userLogin: {
    loading: false,
    error: {}
  }
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
    isAuthenticated: false
  }
};
const store = mockStore(initialState);

describe('Login Form', () => {
  it('render login form correctly', () => {
    const wrapper = shallow(<LoginForm {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render connected component', () => {
    const wrapper = shallow(<DefaultLoginForm store={store} {...props} />);
    expect(wrapper.state()).toEqual({});
  });
  it('should call onSubmit', () => {
    const wrapper = shallow(<LoginForm {...props} />);
    const e = {
      preventDefault: jest.fn()
    };
    const instance = wrapper.instance();
    instance.onSubmit(e);
    expect(props.login).toHaveBeenCalled();
  });
  it('should call onchange event', () => {
    const event = {
      preventDefault: jest.fn(),
      target: {
        name: 'userInput',
        value: 'cwizard'
      }
    };
    const wrapper = shallow(<LoginForm {...props} />);
    const instance = wrapper.instance();
    instance.onChange(event);
    expect(wrapper.state().userInput).toEqual('cwizard');
  });
  it('should Render Loading when user submit login information', () => {
    const newProps = {
      ...props,
      userLogin: {
        loading: true,
      }
    };
    const wrapper = shallow(<LoginForm {...newProps} />);
    expect(wrapper.find('Loading')).toBeTruthy();
  });
  it('should Display login error code', () => {
    const newProps = {
      ...props,
      userLogin: {
        loading: false,
        error: {
          code: 401,
          message: 'Access Denied'
        },
      }
    };
    const wrapper = shallow(<LoginForm {...newProps} />);
    expect(wrapper.find('.red-text')).toBeTruthy();
  });
});
