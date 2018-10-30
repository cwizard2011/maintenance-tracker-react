const initialState = {
  error: {},
  user: {},
  requests: [],
  request: {},
  update: {},
  loading: false,
  postLoading: false
};

const requestReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_REQUESTS_BEGINS':
      return { ...state, loading: true };
    case 'FETCH_REQUEST_BEGINS':
      return { ...state, loading: true };
    case 'FETCH_REQUESTS':
      return {
        ...state,
        loading: false,
        requests: action.requests
      };
    case 'FETCH_REQUEST':
      return {
        ...state,
        loading: false,
        request: action.request
      };
    case 'FETCH_REQUESTS_FAILS':
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case 'FETCH_REQUEST_FAILS':
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case 'POST_REQUESTS_BEGINS':
      return { ...state, postLoading: true };
    case 'POST_REQUESTS':
      return {
        ...state,
        request: action.request,
        loading: false,
        postLoading: false,
      };
    case 'POST_REQUESTS_FAILS':
      return {
        ...state,
        loading: false,
        postLoading: false,
        error: action.error
      };
    case 'EDIT_REQUEST_BEGINS':
      return {
        ...state,
        postLoading: true,
      };
    case 'EDIT_REQUEST':
      return {
        ...state,
        update: action.update,
        postLoading: false
      };
    case 'EDIT_REQUEST_FAILS':
      return {
        ...state,
        loading: false,
        postLoading: false,
        error: action.error
      };
    default:
      return state;
  }
};
export default requestReducer;
