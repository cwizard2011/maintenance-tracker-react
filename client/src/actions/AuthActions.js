import axios from 'axios';
import history from './../utils/history';
import AuthToken from '../utils/AuthToken';
import url from '../utils/config';
import * as actionTypes from './types';

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
      return axios.post(`${url}/auth/signup`, {
        firstname,
        lastname,
        username,
        email,
        password,
      })
        .then((response) => {
          dispatch({
            type: actionTypes.REGISTRATION_SUCCESSFUL,
            payload: response.data,
          });
          AuthToken.setToken(response.data.token);
          localStorage.setItem('user', JSON.stringify(response.data));
          history.push('/dashboard');
        })
        .catch((err) => {
          if (err.response === 500) {
            dispatch({
              type: actionTypes.REGISTRATION_REJECTED,
              payload: { message: 'Sorry, an unexpected error occurred.' },
            });
          } else {
            dispatch({
              type: actionTypes.REGISTRATION_FAIL,
              payload: err.response.data,
            });
          }
          return (err.response.data.message);
        });
    };
  }
  static login({ username, password, email }) {
    return (dispatch) => {
      dispatch({ type: 'LOGIN_BEGINS' });
      return axios.post(`${url}/auth/login`, {
        username,
        email,
        password,
      })
        .then((response) => {
          dispatch({ type: 'LOGIN_SUCCESSFUL', payload: response.data });
          AuthToken.setToken(response.data.token);
          localStorage.setItem(
            'user',
            JSON.stringify(response.data),
          );
          history.push('/dashboard');
        })
        .catch((err) => {
          if (err.response.status === 500) {
            dispatch({
              type: 'LOGIN_REJECTED',
              payload: { message: 'Sorry, an unexpected error occurred.' },
            });
          } else {
            dispatch({
              type: 'LOGIN_FAIL',
              payload: err.response.data,
            });
          }
        });
    };
  }
}
