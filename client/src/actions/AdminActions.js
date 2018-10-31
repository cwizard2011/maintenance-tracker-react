import axios from 'axios';
import url from '../utils/config';


/**
 * @class AdminAction
 */
export default class AdminAction {
  /**
  * Request to the API to fetch user request
  *
  * @static
  * @returns {Object} dispatch object
  */
  static fetchAllRequest() {
    return (dispatch) => {
      dispatch({ type: 'FETCH_REQUESTS_BEGINS' });
      return axios.get(`${url.apiUrl}/requests`)
        .then((response) => {
          dispatch({
            type: 'FETCH_REQUESTS',
            requests: response.data.data,
          });
        })
        .catch((error) => {
          dispatch({
            type: 'FETCH_REQUESTS_FAILS',
            error: error.response.data,
          });
        });
    };
  }
}
