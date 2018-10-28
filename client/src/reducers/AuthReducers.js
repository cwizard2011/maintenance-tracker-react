import isEmpty from 'is-empty';

const initialState = {
  error: {},
  user: {},
  isAuthenticated: false,
  loading: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REGISTRATION_BEGINS':
      return { ...state, loading: true };
    case 'SET_CURRENT_USER':
      return {
        ...state,
        loading: false,
        isAuthenticated: !isEmpty(action.user),
        user: action.user
      };
    case 'SET_CURRENT_USER_FAIL':
      return { ...state, loading: false, error: action.error };
    case 'LOGIN_BEGINS':
      return { ...state, loading: true };
    case 'LOGOUT_USER':
      return {
        ...state,
        ...initialState
      };
    default:
      return state;
  }
};

export default authReducer;
