import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Authentication from '../actions/AuthActions';

// eslint-disable-next-line react/prefer-stateless-function
class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      username: '',
      password: '',
      passwordConfirm: '',
      error: '',
      serverError: {},
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  /**
  * description: returns the userRegistration to initial state
  * @return {void} void
  */
  componentWillUnmount() {
    this.props.userRegistration.reqStatus = {};
    this.props.userRegistration.reqError = null;
    this.props.userRegistration.reqProcessed = false;
    this.props.userRegistration.reqProcessing = false;
    this.setState({
      firstname: '',
      lastname: '',
      email: '',
      username: '',
      password: '',
      passwordConfirm: '',
      error: '',
      serverError: {},
    });
  }

  onChange(event) {
    this.props.userRegistration.reqStatus = {};
    this.setState({ error: '', serverError: {} });
    this.setState({ [event.target.name]: event.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    const { firstname } = this.state;
    const { lastname } = this.state;
    const { email } = this.state;
    const { username } = this.state;
    const { password } = this.state;
    const { passwordConfirm } = this.state;
    if (password !== passwordConfirm) {
      return this.setState({ error: 'The two passwords did not match' });
    }
    return this.props.register({
      firstname, lastname, username, email, password,
    }).then(() => {
      if (this.props.userRegistration.reqStatus.message.errors) {
        this.setState({ serverError: this.props.userRegistration.reqStatus.message.errors });
      }
    });
  }
  render() {
    return (
      <div>
        <h2 className="center-heading">Register</h2>
        <form id="signup-form" onSubmit={this.onSubmit}>
          <label htmlFor="First Name">First Name
            <input
              type="text"
              name="firstname"
              value={this.state.firstname}
              onChange={this.onChange}
              required
            />
          </label>
          <div className="red-text">{this.state.serverError.firstname ? this.state.serverError.firstname[0] : ''}</div>
          <label htmlFor="Last Name">Last Name
            <input
              type="text"
              name="lastname"
              value={this.state.lastname}
              required
              onChange={this.onChange}
            />
          </label>
          <div className="red-text">{this.state.serverError.lastname ? this.state.serverError.lastname[0] : ''}</div>
          <label htmlFor="Email">Email
            <input
              type="email"
              name="email"
              value={this.state.email}
              required
              onChange={this.onChange}
            />
          </label>
          <div className="red-text">{this.state.serverError.email ? this.state.serverError.email[0] : ''}</div>
          <label htmlFor="Username">Username
            <input
              type="text"
              name="username"
              value={this.state.username}
              required
              onChange={this.onChange}
            />
          </label>
          <div className="red-text">{this.state.serverError.username ? this.state.serverError.username[0] : ''}</div>
          <div className="red-text">{this.props.userRegistration.reqStatus.code === 409 ? this.props.userRegistration.reqStatus.message : ''}</div>
          <label htmlFor="Password">Password
            <input
              type="password"
              name="password"
              value={this.state.password}
              required
              onChange={this.onChange}
            />
          </label>
          <div className="red-text">{this.state.serverError.password ? this.state.serverError.password[0] : ''}</div>
          <label htmlFor="Confirm Password">Confirm Password
            <input
              type="password"
              name="passwordConfirm"
              value={this.state.passwordConfirm}
              required
              onChange={this.onChange}
            />
          </label>
          <div id="message" className="red-text">{this.state.error}</div>
          <input type="submit" className="right-btn btn" value="Submit" />
        </form>
      </div>
    );
  }
}
SignupForm.propTypes = {
  register: PropTypes.func.isRequired,
  userRegistration: PropTypes.shape({
    reqError: PropTypes.bool,
    reqProcessing: PropTypes.bool,
    reqProcessed: PropTypes.bool,
    reqStatus: PropTypes.object,
  }).isRequired,
};
const mapStateToProps = state => ({
  userRegistration: state.userRegistration,
});

const matchDispatchToProps = dispatch => bindActionCreators({
  register: Authentication.register,
}, dispatch);

export default connect(mapStateToProps, matchDispatchToProps)(SignupForm);
