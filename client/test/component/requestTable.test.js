import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import DefaultRequestTable, { RequestTable } from '../../src/components/RequestTable';

const mockStore = configureMockStore([thunk]);

const props = {
  fetchAllRequests: jest.fn(),
  loading: false,
  requests: {
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
        currentstatus: 'pending',
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

describe('Request Table', () => {
  it('render request table correctly', () => {
    const wrapper = shallow(<RequestTable {...props} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('div').length).toEqual(3);
  });
  it('render loading when the page is loading', () => {
    const newProps = {
      fetchAllRequests: jest.fn(),
      loading: true,
    };
    const wrapper = shallow(<RequestTable {...newProps} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('Loading')).toBeTruthy();
  });
  it('render loading when the page is loading', () => {
    const newProps = {
      fetchAllRequests: jest.fn(),
      loading: false,
      requests: {
        requests: []
      }
    };
    const wrapper = shallow(<RequestTable {...newProps} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.center')).toBeTruthy();
    expect(wrapper.find('h2')).toBeTruthy();
  });
  it('render connected component', () => {
    const wrapper = shallow(<DefaultRequestTable store={store} {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should call handleViewRequest method', () => {
    const wrapper = shallow(<RequestTable {...props} />);
    const e = {
      preventDefault: jest.fn()
    };
    const instance = wrapper.instance();
    const view = {};
    const request = instance.handleViewRequest(view);
    request(e);
    expect(wrapper.state().showModal).toEqual(true);
  });
  it('should call handleApproveRequest method', () => {
    const wrapper = shallow(<RequestTable {...props} />);
    const e = {
      preventDefault: jest.fn()
    };
    const instance = wrapper.instance();
    const view = {};
    const request = instance.handleApproveRequest(view);
    request(e);
  });
  it('should call handleResolveRequest method', () => {
    const wrapper = shallow(<RequestTable {...props} />);
    const e = {
      preventDefault: jest.fn()
    };
    const instance = wrapper.instance();
    const view = {};
    const request = instance.handleResolveRequest(view);
    request(e);
  });
  it('should call handleRejectRequest method', () => {
    const wrapper = shallow(<RequestTable {...props} />);
    const e = {
      preventDefault: jest.fn()
    };
    const instance = wrapper.instance();
    const view = {};
    const request = instance.handleRejectRequest(view);
    request(e);
  });
  it('should call handleHideModal method', () => {
    const wrapper = shallow(<RequestTable {...props} />);
    const instance = wrapper.instance();
    instance.handleHideModal();
    expect(wrapper.state().showModal).toEqual(false);
  });
});
