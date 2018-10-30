import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { shallow } from 'enzyme';
import DefaultRequestDetails, { RequestDetails } from '../../src/components/RequestDetails';

const mockStore = configureMockStore([thunk]);

const props = {
  fetchSingleRequest: jest.fn(),
  loading: false,
  match: {
    params: {
      requestId: 'aa9-vv-33e'
    }
  },
  request: {
    created_at: '2018-10-30T13:32:54.578Z',
    currentstatus: 'pending',
    details: 'testing now',
    request_id: 'b50b13ef-f8f8-4b99-a33c-0d3a159f320b',
    title: 'Test request',
    updated_at: '2018-10-30T13:32:54.578Z',
    user_id: '48a698a0-1641-5aca-bc1b-de9b1a482ee1'
  }
};
const initialState = {
  requestReducer: {
    request: {
      created_at: '2018-10-30T13:32:54.578Z',
      currentstatus: 'pending',
      details: 'testing now',
      request_id: 'b50b13ef-f8f8-4b99-a33c-0d3a159f320b',
      title: 'Test request',
      updated_at: '2018-10-30T13:32:54.578Z',
      user_id: '48a698a0-1641-5aca-bc1b-de9b1a482ee1'
    },
    loading: false,
  }
};
const store = mockStore(initialState);

describe('Edit Request', () => {
  it('render pending requests correctly', () => {
    const wrapper = shallow(<RequestDetails {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render connected component', () => {
    const wrapper = shallow(<DefaultRequestDetails store={store} {...props} />);
    expect(wrapper.state()).toEqual({});
  });
  it('should render resolved request correctly', () => {
    const newProps = {
      ...props,
      request: {
        created_at: '2018-10-30T13:32:54.578Z',
        currentstatus: 'resolved',
        details: 'testing now',
        request_id: 'b50b13ef-f8f8-4b99-a33c-0d3a159f320b',
        title: 'Test request',
        updated_at: '2018-10-30T13:32:54.578Z',
        user_id: '48a698a0-1641-5aca-bc1b-de9b1a482ee1'
      }
    };
    const wrapper = shallow(<RequestDetails {...newProps} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render resolved request correctly', () => {
    const newProps = {
      ...props,
      request: {
        created_at: '2018-10-30T13:32:54.578Z',
        currentstatus: 'approved',
        details: 'testing now',
        request_id: 'b50b13ef-f8f8-4b99-a33c-0d3a159f320b',
        title: 'Test request',
        updated_at: '2018-10-30T13:32:54.578Z',
        user_id: '48a698a0-1641-5aca-bc1b-de9b1a482ee1'
      }
    };
    const wrapper = shallow(<RequestDetails {...newProps} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render resolved request correctly', () => {
    const newProps = {
      ...props,
      request: {
        created_at: '2018-10-30T13:32:54.578Z',
        currentstatus: 'rejected',
        details: 'testing now',
        request_id: 'b50b13ef-f8f8-4b99-a33c-0d3a159f320b',
        title: 'Test request',
        updated_at: '2018-10-30T13:32:54.578Z',
        user_id: '48a698a0-1641-5aca-bc1b-de9b1a482ee1'
      }
    };
    const wrapper = shallow(<RequestDetails {...newProps} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should display loading component', () => {
    const newProps = {
      ...props,
      request: {},
      loading: true,
    };
    const wrapper = shallow(<RequestDetails {...newProps} />);
    expect(wrapper.find('Loading')).toBeDefined();
  });
  it('should display loading component', () => {
    const newProps = {
      ...props,
      request: {},
      loading: false,
    };
    const wrapper = shallow(<RequestDetails {...newProps} />);
    expect(wrapper.state()).toEqual(null);
  });
});
