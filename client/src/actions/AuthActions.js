import axios from 'axios';
import { browserHistory } from 'react-router';

import AuthToken from '../utils/AuthToken';
import * as actionTypes from './types';

const url = 'https://peter-maintenance-app.herokuapp.com/api/v1';
const message = document.getElementById('message');
const errorFirstname = document.getElementById('error-firstname');
const errorLastname = document.getElementById('error-lastname');
const errorUsername = document.getElementById('error-username');
const errorEmail = document.getElementById('error-email');


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
          browserHistory.push('/dashboard');
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
}
