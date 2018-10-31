import axios from 'axios';
import toastr from 'toastr';
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

  /**
  * Request to the API to fetch user request
  *
  * @static
  * @param {*} requestId
  * @param {*} action - approve, resolve, or reject
  * @param {*} history
  * @returns {Object} dispatch object
  */
  static requestActions(requestId, action, history) {
    return (dispatch) => {
      dispatch({ type: 'REQUEST_ACTION_BEGINS' });
      return axios.put(`${url.apiUrl}/requests/${requestId}/${action}`)
        .then((response) => {
          const { message } = response.data;
          toastr.success(message);
          dispatch({
            type: 'REQUEST_ACTION_SUCCESSFUL',
          });
          history.push('/');
        })
        .catch((error) => {
          dispatch({
            type: 'REQUEST_ACTION_FAILS',
            error: error.response.data,
          });
        });
    };
  }
}
