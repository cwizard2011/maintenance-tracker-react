import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { shallow } from 'enzyme';
import DefaultRequestForm, { RequestForm } from '../../src/components/RequestForm';

const mockStore = configureMockStore([thunk]);

const props = {
  fetchSingleRequest: jest.fn(),
  handleSubmit: jest.fn(),
  history: {
    push: jest.fn()
  },
  request: {
    postLoading: false,
    error: {
      message: {
        errors: {},
      }
    }
  }
};
const initialState = {
  requestReducer: {
  }
};
const store = mockStore(initialState);

describe('Request Form', () => {
  it('render request form correctly', () => {
    const wrapper = shallow(<RequestForm {...props} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('div').length).toBe(3);
  });
  it('should render connected component', () => {
    const wrapper = shallow(<DefaultRequestForm store={store} {...props} />);
    expect(wrapper.state()).toEqual({});
  });
  it('should return null when there is no error in derived state', () => {
    const newProps = {
      fetchSingleRequest: jest.fn(),
      handleSubmit: jest.fn(),
      request: {
        postLoading: false,
        error: {}
      }
    };
    const wrapper = shallow(<RequestForm {...newProps} />);
    expect(wrapper.state()).toEqual({
      details: '', error: {}, title: ''
    });
  });
  it('should fetch Single Article', () => {
    const newProps = {
      fetchSingleRequest: jest.fn().mockResolvedValue(Promise.resolve()),
      handleSubmit: jest.fn(),
      request: {
        postLoading: false,
        error: {
          message: {
            errors: {},
          }
        }
      },
      match: {
        params: {
          requestId: '11-dd-22'
        }
      }
    };
    const wrapper = shallow(<RequestForm {...newProps} />);
    wrapper.setState({
      title: 'edited title',
      details: 'edited details',
    });
    expect(wrapper.state()).toEqual({
      title: 'edited title',
      details: 'edited details',
      error: {},
    });
  });
  it('should call onchange event', () => {
    const event = {
      preventDefault: jest.fn(),
      target: {
        name: 'title',
        value: 'New request'
      }
    };
    const wrapper = shallow(<RequestForm {...props} />);
    const instance = wrapper.instance();
    instance.onChange(event);
    expect(wrapper.state().title).toEqual('New request');
  });
  it('should call onsubmit event', () => {
    const e = {
      preventDefault: jest.fn(),
    };
    const wrapper = shallow(<RequestForm {...props} />);
    const instance = wrapper.instance();
    instance.onSubmit(e);
    expect(props.handleSubmit).toHaveBeenCalled();
  });
  it('should display loading component', () => {
    const newProps = {
      ...props,
      request: {
        postLoading: true,
        error: {
          message: {
            errors: {},
          }
        }
      }
    };
    const wrapper = shallow(<RequestForm {...newProps} />);
    expect(wrapper.find('Loading')).toBeDefined();
  });
  it('should Bad request error', () => {
    const newProps = {
      ...props,
      request: {
        postLoading: false,
        error: {
          message: {
            errors: {
              title: ['No title'],
              details: ['No details']
            },
          }
        }
      }
    };
    const wrapper = shallow(<RequestForm {...newProps} />);
    expect(wrapper.state().error.title[0]).toEqual('No title');
    expect(wrapper.state().error.details[0]).toEqual('No details');
  });
  it('should display Conflict error', () => {
    const newProps = {
      ...props,
      request: {
        postLoading: false,
        error: {
          code: 409,
          message: 'Conflict error'
        }
      }
    };
    const wrapper = shallow(<RequestForm {...newProps} />);
    expect(newProps.request.error.message).toEqual('Conflict error');
    expect(wrapper.state()).toEqual({
      title: '',
      details: '',
    });
  });
});
