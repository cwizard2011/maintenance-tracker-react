import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Authentication from '../actions/AuthActions';
import Loading from './Loading';

// eslint-disable-next-line react/prefer-stateless-function
class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usernameInput: '',
      password: '',
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  /**
  * description: returns the userRegistration to initial state
  * @return {void} void
  */
  componentWillUnmount() {
    this.props.userLogin.reqStatus = {};
    this.props.userLogin.reqError = null;
    this.props.userLogin.reqProcessed = false;
    this.props.userLogin.reqProcessing = false;
    this.setState({
      usernameInput: '',
      password: '',
    });
  }

  onChange(event) {
    this.props.userLogin.reqStatus = {};
    this.setState({ [event.target.name]: event.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    const email = this.state.usernameInput;
    const username = this.state.usernameInput;
    const { password } = this.state;
    return this.props.login({
      username, email, password,
    }).then(() => {});
  }
  render() {
    return (
      <div>
        <div>{this.props.userLogin.loading === true ? <Loading /> : ''}</div>
        <h2 className="center-heading">Login</h2>
        <form onSubmit={this.onSubmit}>
          <label htmlFor="Username/Email">Username/Email
            <input
              type="text"
              name="usernameInput"
              placeholder="Username/Email"
              value={this.state.usernameInput}
              required
              onChange={this.onChange}
            />
          </label>
          <label htmlFor="Password">Password
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.password}
              required
              onChange={this.onChange}
            />
          </label>
          <div className="red-text">{this.props.userLogin.reqStatus.code === 401 ? this.props.userLogin.reqStatus.message : ''}</div>
          <input type="submit" className="right-btn btn" value="Login" />
        </form>
      </div>
    );
  }
}
LoginForm.propTypes = {
  login: PropTypes.func.isRequired,
  userLogin: PropTypes.shape({
    reqError: PropTypes.bool,
    loading: PropTypes.bool,
    reqProcessing: PropTypes.bool,
    reqProcessed: PropTypes.bool,
    reqStatus: PropTypes.object,
  }).isRequired,
};
const mapStateToProps = state => ({
  userLogin: state.userLogin,
});

const matchDispatchToProps = dispatch => bindActionCreators({
  login: Authentication.login,
}, dispatch);

export default connect(mapStateToProps, matchDispatchToProps)(LoginForm);
