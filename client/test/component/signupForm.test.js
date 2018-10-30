import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { shallow } from 'enzyme';
import DefaultSignupForm, { SignupForm } from '../../src/components/SignupForm';

const mockStore = configureMockStore([thunk]);

const props = {
  register: jest.fn().mockResolvedValue(Promise.resolve()),
  userRegistration: {
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

describe('Signup Form', () => {
  it('render signup form component correctly', () => {
    const wrapper = shallow(<SignupForm {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render connected component', () => {
    const wrapper = shallow(<DefaultSignupForm store={store} {...props} />);
    expect(wrapper.state()).toEqual({});
  });
  it('should call onSubmit', () => {
    const wrapper = shallow(<SignupForm {...props} />);
    const e = {
      preventDefault: jest.fn()
    };
    const instance = wrapper.instance();
    instance.onSubmit(e);
    expect(props.register).toHaveBeenCalled();
  });
  it('should set error in the state with password mismatch', () => {
    const wrapper = shallow(<SignupForm {...props} />);
    const e = {
      preventDefault: jest.fn()
    };
    wrapper.setState({
      password: '123',
      passwordConfirm: '1234'
    });
    const instance = wrapper.instance();
    instance.onSubmit(e);
    expect(props.register).toHaveBeenCalled();
    expect(wrapper.state().error).toBeTruthy();
  });
  it('should set server error in the state', () => {
    const newProps = {
      ...props,
      userRegistration: {
        error: {
          message: {
            errors: {
              firstname: ['Invalid'],
              lastname: ['Invalid'],
              email: ['Invalid'],
              password: ['Invalid'],
              username: ['Invalid'],
            }
          }
        }
      }
    };
    const wrapper = shallow(<SignupForm {...newProps} />);
    const e = {
      preventDefault: jest.fn()
    };
    const instance = wrapper.instance();
    instance.onSubmit(e);
    expect(props.register).toHaveBeenCalled();
    expect(wrapper.state().serverError).toBeTruthy();
  });
  it('should call onchange event', () => {
    const event = {
      target: {
        name: 'username',
        value: 'cwizard'
      }
    };
    const wrapper = shallow(<SignupForm {...props} />);
    const instance = wrapper.instance();
    instance.onChange(event);
    expect(wrapper.state().username).toEqual('cwizard');
  });
  it('should Render Loading when user submit login information', () => {
    const newProps = {
      ...props,
      userRegistration: {
        loading: true,
      }
    };
    const wrapper = shallow(<SignupForm {...newProps} />);
    expect(wrapper.find('Loading')).toBeTruthy();
  });
  it('should Display login error code', () => {
    const newProps = {
      ...props,
      userRegistration: {
        loading: false,
        error: {
          code: 409,
          message: {}
        },
      }
    };
    const wrapper = shallow(<SignupForm {...newProps} />);
    expect(wrapper.find('.red-text')).toBeTruthy();
  });
});
