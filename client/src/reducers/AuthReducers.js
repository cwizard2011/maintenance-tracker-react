const initialState = {
  reqStatus: {},
  reqError: false,
  loading: false,
};

/**
 * @class UserReducers
 */
export default class AuthReducers {
  /**
  * Reducer for registering users
  *
  * @static
  *
  * @param {Object} state The initial state
  * @param {Object} action The dispatched action
  * @returns {Object} current state
  *
  * @memberof UserReducers
  */
  static signup(state = initialState, action) {
    switch (action.type) {
      case 'REGISTRATION_BEGINS':
        return { ...state, loading: true };
      case 'REGISTRATION_SUCCESSFUL':
      case 'REGISTRATION_FAIL':
        return { ...state, reqStatus: action.payload };
      case 'REGISTRATION_REJECTED':
        return { ...state, reqError: true, reqStatus: action.payload };
      default:
        return state;
    }
  }
}
