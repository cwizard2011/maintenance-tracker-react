import axios from 'axios';
import toastr from 'toastr';
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

  /**
  * Request to the API to fetch user request
  *
  * @static
  * @param {*} request
  * @returns {Object} dispatch object
  */
  static postRequest(request) {
    return (dispatch) => {
      dispatch({ type: 'POST_REQUESTS_BEGINS' });
      return axios.post(`${url.apiUrl}/users/requests`, request)
        .then((response) => {
          const { message } = response.data.data;
          toastr.success(message);
          dispatch({
            type: 'POST_REQUESTS',
            request: response.data.data.request
          });
          return response;
        })
        .catch((error) => {
          dispatch({
            type: 'POST_REQUESTS_FAILS',
            error: error.response.data,
          });
        });
    };
  }
}
