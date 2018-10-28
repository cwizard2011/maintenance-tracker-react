import axios from 'axios';
import Cookie from 'cookies-js';
import toastr from 'toastr';
import jwt from 'jsonwebtoken';
import url from '../utils/config';
import * as actionTypes from './types';

export const setCurrentUser = user => ({
  type: 'SET_CURRENT_USER',
  user
});

export const setCurrentUserError = error => ({
  type: 'SET_CURRENT_USER_FAIL',
  error
});
export const logoutCurrentUser = () => ({
  type: 'LOGOUT_USER'
});


/**
 * @class UserActions
 */
export default class Authentication {
  /**
  * Request to the API to register a user
  *
  * @static
  *
  * @param {String} username The username of the user
  * @param {String} email The email of the user
  * @param {String} password The password of the user
  * @param {String} phoneNumber The phone number of the user
  *
  * @returns {Object} dispatch object
  *
  * @memberof UserActions
  */
  static register({
    username, email, password, firstname, lastname,
  }) {
    return (dispatch) => {
      dispatch({ type: actionTypes.REGISTRATION_BEGINS });
      return axios.post(`${url.apiUrl}/auth/signup`, {
        firstname,
        lastname,
        username,
        email,
        password,
      })
        .then((response) => {
          const { message } = response.data;
          const { token } = response.data.data;
          Cookie.set('jwtToken', token);
          toastr.success(message);
          dispatch(setCurrentUser(jwt.decode(token)));
        })
        .catch((error) => {
          dispatch(setCurrentUserError(error.response.data));
        });
    };
  }

  /**
   * @param {*} UserObject
   * @returns {*} Object
   */
  static login({ username, password, email }) {
    return (dispatch) => {
      dispatch({ type: 'LOGIN_BEGINS' });
      return axios.post(`${url.apiUrl}/auth/login`, {
        username,
        email,
        password,
      })
        .then((response) => {
          const { message } = response.data;
          const { token } = response.data.data;
          Cookie.set('jwtToken', token);
          toastr.success(message);
          dispatch(setCurrentUser(jwt.decode(token)));
        })
        .catch((error) => {
          dispatch(setCurrentUserError(error.response.data));
        });
    };
  }

  /**
   * @returns {*} empty object
   */
  static logout() {
    return (dispatch) => {
      Cookie.expire('jwtToken');
      dispatch(logoutCurrentUser({}));
    };
  }
}
