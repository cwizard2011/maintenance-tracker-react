import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import AdminAction from '../../src/actions/AdminActions';
import config from '../../src/utils/config';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const response = {
  data: {
    data: {
      title: 'new request',
      details: 'new request details',
    }
  }
};
const error = {
  response: {
    data: {
      message: 'fetch failed'
    }
  }
};
describe('Request Action', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  it('creates FETCH_REQUESTS when request is successfully fetched', (done) => {
    moxios.stubRequest(`${config.apiUrl}/requests`, {
      status: 200,
      response: response.data
    });

    const expectedActions = [
      {
        type: 'FETCH_REQUESTS_BEGINS'
      },
      {
        type: 'FETCH_REQUESTS',
        requests: response.data.data
      }
    ];
    const store = mockStore({});
    store.dispatch(AdminAction.fetchAllRequest())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    done();
  });
  it('creates FETCH_REQUESTS_FAILS when request fails', (done) => {
    moxios.stubRequest(`${config.apiUrl}/requests`, {
      status: 400,
      response: error
    });

    const expectedActions = [
      {
        type: 'FETCH_REQUESTS_BEGINS'
      },
      {
        type: 'FETCH_REQUESTS_FAILS',
        error
      }
    ];
    const store = mockStore({});
    store.dispatch(AdminAction.fetchAllRequest())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    done();
  });
  it('should dispatch REQUEST_ACTION_SUCCESSFUL when an action is successful', (done) => {
    const requestId = 5;
    const action = 'resolve';
    const history = '/';
    moxios.stubRequest(`${config.apiUrl}/requests/${requestId}/${action}`, {
      status: 200,
      response: response.data
    });

    const expectedActions = [
      {
        type: 'REQUEST_ACTION_BEGINS'
      },
      {
        type: 'REQUEST_ACTION_SUCCESSFUL'
      }
    ];
    const store = mockStore({});
    store.dispatch(AdminAction.requestActions(requestId, action, history))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    done();
  });
});
