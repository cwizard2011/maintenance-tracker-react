import axios from 'axios';
import history from './../utils/history';

/**
 * secure front-end token
 *
 * @class Auth
 */
export default class AuthToken {
/**
 * @description: sets token in axios headers
 *
 * @param {String} token token to set
 *
 * @return {Void} Void
 */
  static setToken(token) {
    if (token) {
      axios.defaults.headers.common.token = token;
    }
  }

  /**
 * remove token from localStorage
 *
 * @return {Void} Void
 */
  static deleteToken() {
    localStorage.removeItem('user');
    history.push('/');
    window.location.reload();
  }
}
