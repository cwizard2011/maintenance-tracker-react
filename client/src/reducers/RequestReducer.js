const initialState = {
  error: {},
  user: {},
  requests: [],
  request: {},
  loading: false,
};

const requestReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_REQUESTS_BEGINS':
      return { ...state, loading: true };
    case 'FETCH_REQUESTS':
      return {
        ...state,
        loading: false,
        requests: action.requests
      };
    case 'FETCH_REQUESTS_FAILS':
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
};
export default requestReducer;
