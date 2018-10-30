import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { shallow } from 'enzyme';
import DefaultCreateRequest, { CreateRequest } from '../../src/components/CreateRequest';

const mockStore = configureMockStore([thunk]);

const props = {
  postRequest: jest.fn(),
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

describe('Create Request', () => {
  it('render create request component correctly', () => {
    const wrapper = shallow(<CreateRequest {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render connected component', () => {
    const wrapper = shallow(<DefaultCreateRequest store={store} {...props} />);
    expect(wrapper.state()).toEqual({});
  });
  it('should logout a user when logout is clicked', () => {
    const wrapper = shallow(<CreateRequest {...props} />);
    const instance = wrapper.instance();
    instance.submitRequest();
    expect(props.postRequest).toHaveBeenCalled();
  });
});
