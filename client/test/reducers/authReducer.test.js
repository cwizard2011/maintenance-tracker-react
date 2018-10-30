import authReducer from '../../src/reducers/AuthReducers';

const initialState = {
  error: {},
  user: {},
  isAuthenticated: false,
  loading: false,
};
const user = {
  username: 'peter',
  user_role: 'admin'
};
const error = {
  message: 'new error'
};

describe('Auth reducer', () => {
  it('should return the initial state', (done) => {
    const action = '';
    const expected = {
      error: {},
      user: {},
      isAuthenticated: false,
      loading: false,
    };
    const newState = authReducer(initialState, action);

    expect(newState).toEqual(expected);
    done();
  });
  it('should update the state when REGISTRATION_BEGINS is passed', () => {
    const action = {
      type: 'REGISTRATION_BEGINS'
    };
    const expected = {
      ...initialState, loading: true
    };
    const newState = authReducer(initialState, action);
    expect(newState).toEqual(expected);
  });
  it('should update the state when LOGIN_BEGINS is passed', () => {
    const action = {
      type: 'LOGIN_BEGINS'
    };
    const expected = {
      ...initialState, loading: true
    };
    const newState = authReducer(initialState, action);
    expect(newState).toEqual(expected);
  });
  it('should update the state when SET_CURRENT_USER is passed', () => {
    const action = {
      type: 'SET_CURRENT_USER',
      user
    };
    const expected = {
      ...initialState, loading: false, isAuthenticated: true, user
    };
    const newState = authReducer(initialState, action);
    expect(newState).toEqual(expected);
  });
  it('should update the state when SET_CURRENT_USER_FAIL is passed', () => {
    const action = {
      type: 'SET_CURRENT_USER_FAIL',
      error
    };
    const expected = {
      ...initialState, loading: false, error
    };
    const newState = authReducer(initialState, action);
    expect(newState).toEqual(expected);
  });
  it('should update the state when LOGOUT_USER is passed', () => {
    const action = {
      type: 'LOGOUT_USER'
    };
    const expected = {
      ...initialState
    };
    const newState = authReducer(initialState, action);
    expect(newState).toEqual(expected);
  });
});
