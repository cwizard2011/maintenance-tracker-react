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
  * @param {*} request
  * @param {*} history
  * @returns {Object} dispatch object
  */
  static postRequest(request, history) {
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
          history.push('/dashboard');
        })
        .catch((error) => {
          dispatch({
            type: 'POST_REQUESTS_FAILS',
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
  * @returns {Object} dispatch object
  */
  static fetchSingleRequest(requestId) {
    return (dispatch) => {
      dispatch({ type: 'FETCH_REQUEST_BEGINS' });
      return axios.get(`${url.apiUrl}/users/requests/${requestId}`)
        .then((response) => {
          dispatch({
            type: 'FETCH_REQUEST',
            request: response.data.data,
          });
          return response;
        })
        .catch((error) => {
          dispatch({
            type: 'FETCH_REQUEST_FAILS',
            error: error.response.data,
          });
        });
    };
  }

  /**
  * Request to the API to fetch user request
  *
  * @static
  * @param {*} update
  * @param {*} requestId
  * @returns {Object} dispatch object
  */
  static editRequest(update, requestId) {
    return (dispatch) => {
      dispatch({ type: 'EDIT_REQUEST_BEGINS' });
      return axios.put(`${url.apiUrl}/users/requests/${requestId}`, update)
        .then((response) => {
          const { message } = response.data.data;
          toastr.success(message);
          dispatch({
            type: 'EDIT_REQUEST',
            update: response.data.data.request
          });
          return response;
        })
        .catch((error) => {
          dispatch({
            type: 'EDIT_REQUEST_FAILS',
            error: error.response.data,
          });
        });
    };
  }
}
