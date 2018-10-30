import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { shallow } from 'enzyme';
import DefaultHome, { Home } from '../../src/components/Home';

const mockStore = configureMockStore([thunk]);

const props = {
  auth: false,
  user: {
    email: 'juliet',
    exp: 1540907850,
    iat: 1540886250,
    id: '48a698a0-1641-5aca-bc1b-de9b1a482ee1',
    user_role: 'user',
    username: 'juliet'
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

describe('Home component', () => {
  it('render home component correctly', () => {
    const wrapper = shallow(<Home {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render connected component', () => {
    const wrapper = shallow(<DefaultHome store={store} {...props} />);
    expect(wrapper.state()).toEqual({});
  });
  it('should Render user dashboard on login', () => {
    const newProps = {
      ...props,
      auth: true,
      history: {
        push: jest.fn()
      }
    };
    const wrapper = shallow(<Home {...newProps} />);
    expect(wrapper.state()).toEqual({});
  });
  it('should Render admin dashboard on login', () => {
    const newProps = {
      ...props,
      user: {
        user_role: 'admin'
      },
      auth: true,
      history: {
        push: jest.fn()
      }
    };
    const wrapper = shallow(<Home {...newProps} />);
    expect(wrapper.state()).toEqual({});
  });
});
