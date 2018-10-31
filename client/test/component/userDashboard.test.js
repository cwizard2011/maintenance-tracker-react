import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import DefaultUserDashboard, { UserDashboard } from '../../src/components/UserDashboard';

const mockStore = configureMockStore([thunk]);

const props = {
  fetchRequests: jest.fn(),
  postRequest: jest.fn().mockResolvedValue(Promise.resolve(
    {
      data: {
        code: 201
      }
    }
  )),
  logout: jest.fn(),
  user: {
    user_role: 'user'
  },
  history: {
    push: jest.fn()
  },
  requests: {
    loading: false,
    requests: [
      {
        created_at: '2018-10-30T13:32:54.578Z',
        currentstatus: 'pending',
        details: 'testing now',
        request_id: 'b50b13ef-f8f8-4b99-a33c-0d3a159f320b',
        title: 'Test request',
        updated_at: '2018-10-30T13:32:54.578Z',
        user_id: '48a698a0-1641-5aca-bc1b-de9b1a482ee1'
      },
      {
        created_at: '2018-10-30T13:32:54.578Z',
        currentstatus: 'approved',
        details: 'testing now1',
        request_id: 'b50b13eg-f8f8-4b99-a33c-0d3a159f320b',
        title: 'Test request1',
        updated_at: '2018-10-30T13:32:54.578Z',
        user_id: '48a698a0-1641-5aca-bc1b-de9b1a482ee1'
      },
      {
        created_at: '2018-10-30T13:32:54.578Z',
        currentstatus: 'resolved',
        details: 'testing now1',
        request_id: 'b50b13eg-f8f8-4b99-a33c-0d3a159f320b',
        title: 'Test request1',
        updated_at: '2018-10-30T13:32:54.578Z',
        user_id: '48a698a0-1641-5aca-bc1b-de9b1a482ee1'
      },
      {
        created_at: '2018-10-30T13:32:54.578Z',
        currentstatus: 'rejected',
        details: 'testing now1',
        request_id: 'b50b13eg-f8f8-4b99-a33c-0d3a159f320b',
        title: 'Test request1',
        updated_at: '2018-10-30T13:32:54.578Z',
        user_id: '48a698a0-1641-5aca-bc1b-de9b1a482ee1'
      },
      {
        created_at: '2018-10-30T13:32:54.578Z',
        details: 'testing now1',
        request_id: 'b50b13eg-f8f8-4b99-a33c-0d3a159f320b',
        title: 'Test request1',
        updated_at: '2018-10-30T13:32:54.578Z',
        user_id: '48a698a0-1641-5aca-bc1b-de9b1a482ee1'
      }
    ]
  }
};
const initialState = {
  requestReducer: {
    requests: {}
  },
  authReducer: {
    user: {
      user_role: 'admin'
    }
  }
};
const store = mockStore(initialState);

describe('User Dashboard', () => {
  it('render user dashboard correctly', () => {
    const wrapper = shallow(<UserDashboard {...props} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('div').length).toEqual(7);
  });
  it('should return null for getDerivedstate for authenticated user', () => {
    const newProps = {
      ...props,
      auth: true
    };
    const wrapper = shallow(<UserDashboard {...newProps} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('div').length).toEqual(7);
  });
  it('render loading when the page is loading', () => {
    const newProps = {
      ...props,
      requests: {
        loading: true,
        requests: []
      }
    };
    const wrapper = shallow(<UserDashboard {...newProps} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('Loading')).toBeTruthy();
    expect(wrapper.find('div').length).toEqual(1);
  });
  it('should redirect to to home if not user', () => {
    const newProps = {
      ...props,
      user: {
        user_role: 'admin'
      }
    };
    const wrapper = shallow(<UserDashboard {...newProps} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('div').length).toEqual(0);
  });
  it('render no request div if there is no request', () => {
    const newProps = {
      ...props,
      requests: {
        requests: {}
      }
    };
    const wrapper = shallow(<UserDashboard {...newProps} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.center-heading')).toBeTruthy();
    expect(wrapper.find('div').length).toEqual(3);
  });
  it('render connected component', () => {
    const wrapper = shallow(<DefaultUserDashboard store={store} {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should call submitRequest method', () => {
    const wrapper = shallow(<UserDashboard {...props} />);
    const instance = wrapper.instance();
    instance.submitRequest();
    expect(props.postRequest).toHaveBeenCalled();
  });
});
