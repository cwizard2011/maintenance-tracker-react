import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Authentication from '../actions/AuthActions';
import Loading from './Loading';

/**
  * @class LoginForm
  */
export class LoginForm extends Component {
    state = {
      usernameInput: '',
      password: '',
    };

  /**
   * @param {*} event
   * @returns {*} jsx
   */
  onChange = (event) => {
    const { userLogin } = this.props;
    userLogin.error = {};
    this.setState({ [event.target.name]: event.target.value });
  }

  /**
   * @param {*} e
   * @returns {*} jsx
   */
  onSubmit = (e) => {
    e.preventDefault();
    const { usernameInput, password } = this.state;
    const { login } = this.props;
    const email = usernameInput;
    const username = usernameInput;
    return login({
      username, email, password,
    });
  }

  /**
   * @returns {*} jsx
   */
  render() {
    const { userLogin } = this.props;
    const { usernameInput, password } = this.state;
    return (
      <div>
        <div>{userLogin.loading === true ? <Loading /> : ''}</div>
        <h2 className="center-heading">Login</h2>
        <form onSubmit={this.onSubmit}>
          <label htmlFor="Username/Email">
            Username/Email
            <input
              type="text"
              name="usernameInput"
              placeholder="Username/Email"
              value={usernameInput}
              required
              onChange={this.onChange}
            />
          </label>
          <label htmlFor="Password">
          Password
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              required
              onChange={this.onChange}
            />
          </label>
          <div className="red-text">
            {userLogin.error && userLogin.error.code === 401 ? userLogin.error.message : ''}
          </div>
          <input
            disabled={
              usernameInput === ''
              || password === ''
            }
            type="submit"
            className="right-btn btn"
            value="Login"
          />
        </form>
      </div>
    );
  }
}
LoginForm.propTypes = {
  login: PropTypes.func,
  userLogin: PropTypes.shape({
    error: PropTypes.shape({
      code: PropTypes.number,
      message: PropTypes.string
    }),
    loading: PropTypes.bool,
  }),
};
const mapStateToProps = state => ({
  userLogin: state.authReducer,
});

const matchDispatchToProps = dispatch => bindActionCreators({
  login: Authentication.login,
}, dispatch);

export default connect(mapStateToProps, matchDispatchToProps)(LoginForm);
