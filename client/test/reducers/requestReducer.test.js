import requestReducer from '../../src/reducers/RequestReducer';

const initialState = {
  error: {},
  user: {},
  requests: [],
  request: {},
  update: {},
  loading: false,
  postLoading: false
};
const requests = [
  {
    title: 'new title',
    details: 'new details'
  },
  {
    title: 'new title1',
    details: 'new details2'
  }
];
const request = {
  title: 'new title',
  details: 'new details'
};
const error = {
  message: 'new error'
};

describe('Auth reducer', () => {
  it('should return the initial state', (done) => {
    const action = '';
    const expected = {
      ...initialState
    };
    const newState = requestReducer(initialState, action);

    expect(newState).toEqual(expected);
    done();
  });
  it('should update the state when FETCH_REQUESTS_BEGINS is passed', () => {
    const action = {
      type: 'FETCH_REQUESTS_BEGINS'
    };
    const expected = {
      ...initialState, loading: true
    };
    const newState = requestReducer(initialState, action);
    expect(newState).toEqual(expected);
  });
  it('should update the state when FETCH_REQUEST_BEGINS is passed', () => {
    const action = {
      type: 'FETCH_REQUEST_BEGINS'
    };
    const expected = {
      ...initialState, loading: true
    };
    const newState = requestReducer(initialState, action);
    expect(newState).toEqual(expected);
  });
  it('should update the state when FETCH_REQUEST is passed', () => {
    const action = {
      type: 'FETCH_REQUEST',
      request
    };
    const expected = {
      ...initialState, loading: false, request
    };
    const newState = requestReducer(initialState, action);
    expect(newState).toEqual(expected);
  });
  it('should update the state when FETCH_REQUESTS is passed', () => {
    const action = {
      type: 'FETCH_REQUESTS',
      requests
    };
    const expected = {
      ...initialState, loading: false, requests
    };
    const newState = requestReducer(initialState, action);
    expect(newState).toEqual(expected);
  });
  it('should update the state when FETCH_REQUESTS_FAILS is passed', () => {
    const action = {
      type: 'FETCH_REQUESTS_FAILS',
      error
    };
    const expected = {
      ...initialState, loading: false, error
    };
    const newState = requestReducer(initialState, action);
    expect(newState).toEqual(expected);
  });
  it('should update the state when FETCH_REQUEST_FAILS is passed', () => {
    const action = {
      type: 'FETCH_REQUEST_FAILS',
      error
    };
    const expected = {
      ...initialState, loading: false, error
    };
    const newState = requestReducer(initialState, action);
    expect(newState).toEqual(expected);
  });
  it('should update the state when POST_REQUESTS_BEGINS is passed', () => {
    const action = {
      type: 'POST_REQUESTS_BEGINS',
    };
    const expected = {
      ...initialState, postLoading: true
    };
    const newState = requestReducer(initialState, action);
    expect(newState).toEqual(expected);
  });
  it('should update the state when POST_REQUESTS is passed', () => {
    const action = {
      type: 'POST_REQUESTS',
      request
    };
    const expected = {
      ...initialState, postLoading: false, request
    };
    const newState = requestReducer(initialState, action);
    expect(newState).toEqual(expected);
  });
  it('should update the state when POST_REQUESTS_FAILS is passed', () => {
    const action = {
      type: 'POST_REQUESTS_FAILS',
      error
    };
    const expected = {
      ...initialState, postLoading: false, error
    };
    const newState = requestReducer(initialState, action);
    expect(newState).toEqual(expected);
  });
  it('should update the state when EDIT_REQUEST_BEGINS is passed', () => {
    const action = {
      type: 'EDIT_REQUEST_BEGINS',
    };
    const expected = {
      ...initialState, postLoading: true
    };
    const newState = requestReducer(initialState, action);
    expect(newState).toEqual(expected);
  });
  it('should update the state when EDIT_REQUEST is passed', () => {
    const action = {
      type: 'EDIT_REQUEST',
      update: request
    };
    const expected = {
      ...initialState, postLoading: false, update: request
    };
    const newState = requestReducer(initialState, action);
    expect(newState).toEqual(expected);
  });
  it('should update the state when EDIT_REQUEST_FAILS is passed', () => {
    const editError = {};
    const action = {
      type: 'EDIT_REQUEST_FAILS',
      error: editError
    };
    const expected = {
      ...initialState, postLoading: false, error: editError
    };
    const newState = requestReducer(initialState, action);
    expect(newState).toEqual(expected);
  });
});
