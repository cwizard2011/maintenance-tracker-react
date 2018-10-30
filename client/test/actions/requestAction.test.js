import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import RequestAction from '../../src/actions/RequestAction';
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
const postResponse = {
  data: {
    data: {
      request: {
        title: 'new request',
        details: 'new request details',
      }
    }
  }
};

const requestData = {
  title: 'new request',
  details: 'Lets start making request',
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
    moxios.stubRequest(`${config.apiUrl}/users/requests`, {
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
    store.dispatch(RequestAction.fetchRequest())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    done();
  });
  it('creates FETCH_REQUESTS_FAILS when request fails', (done) => {
    moxios.stubRequest(`${config.apiUrl}/users/requests`, {
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
    store.dispatch(RequestAction.fetchRequest())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    done();
  });
  it('creates POST_REQUESTS when request is successfully fetched', (done) => {
    moxios.stubRequest(`${config.apiUrl}/users/requests`, {
      status: 200,
      response: postResponse.data
    });

    const expectedActions = [
      {
        type: 'POST_REQUESTS_BEGINS'
      },
      {
        type: 'POST_REQUESTS',
        requests: postResponse.data.data.request
      }
    ];
    const store = mockStore({});
    store.dispatch(RequestAction.postRequest(requestData))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    done();
  });
  it('creates FETCH_REQUEST when request is successfully fetched', (done) => {
    const requestId = 123;
    moxios.stubRequest(`${config.apiUrl}/users/requests/${requestId}`, {
      status: 200,
      response: response.data
    });

    const expectedActions = [
      {
        type: 'FETCH_REQUEST_BEGINS'
      },
      {
        type: 'FETCH_REQUEST',
        request: response.data.data
      }
    ];
    const store = mockStore({});
    store.dispatch(RequestAction.fetchSingleRequest(requestId))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    done();
  });
  it('creates FETCH_REQUEST_FAILS when request fails', (done) => {
    const requestId = 123;
    moxios.stubRequest(`${config.apiUrl}/users/requests/${requestId}`, {
      status: 400,
      response: error
    });

    const expectedActions = [
      {
        type: 'FETCH_REQUEST_BEGINS'
      },
      {
        type: 'FETCH_REQUEST_FAILS',
        error
      }
    ];
    const store = mockStore({});
    store.dispatch(RequestAction.fetchSingleRequest(requestId))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    done();
  });
  it('creates EDIT_REQUEST when request is successfully edited', (done) => {
    const requestId = 1;
    moxios.stubRequest(`${config.apiUrl}/users/requests/${requestId}`, {
      status: 200,
      response: postResponse.data
    });

    const expectedActions = [
      {
        type: 'EDIT_REQUEST_BEGINS'
      },
      {
        type: 'EDIT_REQUEST',
        update: postResponse.data.data.request
      }
    ];
    const store = mockStore({});
    store.dispatch(RequestAction.editRequest(requestData, requestId))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    done();
  });
  it('creates EDIT_REQUEST_FAILS when edit fails', (done) => {
    const requestId = 1;
    moxios.stubRequest(`${config.apiUrl}/users/requests/${requestId}`, {
      status: 400,
      response: error
    });

    const expectedActions = [
      {
        type: 'EDIT_REQUEST_BEGINS'
      },
      {
        type: 'EDIT_REQUEST_FAILS',
        error
      }
    ];
    const store = mockStore({});
    store.dispatch(RequestAction.editRequest(requestData, requestId))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    done();
  });
});
