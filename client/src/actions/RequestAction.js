import axios from 'axios';
import url from '../utils/config';


/**
 * @class RequestAction
 */
export default class RequestAction {
  /**
  * Request to the API to fetch user request
  *
  * @static
  * @returns {Object} dispatch object
  */
  static fetchRequest() {
    return (dispatch) => {
      dispatch({ type: 'FETCH_REQUESTS_BEGINS' });
      return axios.get(`${url.apiUrl}/users/requests`)
        .then((response) => {
          dispatch({
            type: 'FETCH_REQUESTS',
            requests: response.data.data,
          });
        })
        .catch((error) => {
          dispatch({
            type: 'FETCH_REQUESTS-FAILS',
            error: error.response.data,
          });
        });
    };
  }
}
