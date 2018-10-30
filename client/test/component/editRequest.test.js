import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { shallow } from 'enzyme';
import DefaultEditRequest, { EditRequest } from '../../src/components/EditRequest';

const mockStore = configureMockStore([thunk]);

const props = {
  editRequest: jest.fn().mockResolvedValue(Promise.resolve()),
  fetchSingleRequest: jest.fn(),
  history: {
    push: '/dashboard'
  },
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
  it('render edit request component correctly', () => {
    const wrapper = shallow(<EditRequest {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render connected component', () => {
    const wrapper = shallow(<DefaultEditRequest store={store} {...props} />);
    expect(wrapper.state()).toEqual({});
  });
  it('should Edit a request on Edit request', () => {
    const wrapper = shallow(<EditRequest {...props} />);
    const instance = wrapper.instance();
    instance.submitRequest();
    expect(props.editRequest).toHaveBeenCalled();
  });
  it('should display loading component', () => {
    const newProps = {
      ...props,
      loading: true,
    };
    const wrapper = shallow(<EditRequest {...newProps} />);
    expect(wrapper.find('Loading')).toBeDefined();
  });
});
