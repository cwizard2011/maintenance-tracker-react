import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Authentication from '../actions/AuthActions';
import Loading from './Loading';

/**
 * @class SignupForm
 */
class SignupForm extends Component {
   state = {
     firstname: '',
     lastname: '',
     email: '',
     username: '',
     password: '',
     passwordConfirm: '',
     error: '',
     serverError: {},
   };

   /**
    * @param {*} event
    * @returns {*} object
    */
   onChange = (event) => {
     const { userRegistration } = this.props;
     userRegistration.error = {};
     this.setState({ error: '', serverError: {} });
     this.setState({ [event.target.name]: event.target.value });
   }

   /**
    * @param {*} e
    * @returns {*} object
    */
   onSubmit = (e) => {
     e.preventDefault();
     const {
       firstname, lastname, email, username, password, passwordConfirm
     } = this.state;
     const { register } = this.props;
     if (password !== passwordConfirm) {
       return this.setState({ error: 'The two passwords did not match' });
     }
     return register({
       firstname, lastname, username, email, password,
     }).then(() => {
       const { userRegistration } = this.props;
       if (userRegistration.error.message.errors) {
         this.setState({ serverError: userRegistration.error.message.errors });
       }
     });
   }

   /**
    * @returns {*} jsx
    */
   render() {
     const { userRegistration } = this.props;
     const {
       firstname, lastname, email, username, password, passwordConfirm, serverError, error
     } = this.state;
     return (
       <div>
         <div>{userRegistration.loading === true ? <Loading /> : ''}</div>
         <h2 className="center-heading">Register</h2>
         <form id="signup-form" onSubmit={this.onSubmit}>
           <label htmlFor="First Name">
            First Name
             <input
               type="text"
               name="firstname"
               value={firstname}
               onChange={this.onChange}
               required
             />
           </label>
           <div className="red-text">{serverError.firstname ? serverError.firstname[0] : ''}</div>
           <label htmlFor="Last Name">
            Last Name
             <input
               type="text"
               name="lastname"
               value={lastname}
               required
               onChange={this.onChange}
             />
           </label>
           <div className="red-text">{serverError.lastname ? serverError.lastname[0] : ''}</div>
           <label htmlFor="Email">
            Email
             <input
               type="email"
               name="email"
               value={email}
               required
               onChange={this.onChange}
             />
           </label>
           <div className="red-text">{serverError.email ? serverError.email[0] : ''}</div>
           <label htmlFor="Username">
            Username
             <input
               type="text"
               name="username"
               value={username}
               required
               onChange={this.onChange}
             />
           </label>
           <div className="red-text">{serverError.username ? serverError.username[0] : ''}</div>
           <div className="red-text">
             {userRegistration.error && userRegistration.error.code === 409
               ? userRegistration.error.message : ''}
           </div>
           <label htmlFor="Password">
            Password
             <input
               type="password"
               name="password"
               value={password}
               required
               onChange={this.onChange}
             />
           </label>
           <div className="red-text">{serverError.password ? serverError.password[0] : ''}</div>
           <label htmlFor="Confirm Password">
            Confirm Password
             <input
               type="password"
               name="passwordConfirm"
               value={passwordConfirm}
               required
               onChange={this.onChange}
             />
           </label>
           <div id="message" className="red-text">{error}</div>
           <input
             disabled={
              firstname === ''
            || lastname === ''
            || email === ''
            || username === ''
            || password === ''
            || passwordConfirm === ''
             }
             type="submit"
             className="right-btn btn"
             value="Submit"
           />
         </form>
       </div>
     );
   }
}
SignupForm.propTypes = {
  register: PropTypes.func,
  userRegistration: PropTypes.shape({
    loading: PropTypes.bool,
    error: PropTypes.shape({
      code: PropTypes.number,
      message: PropTypes.shape({
        errors: PropTypes.instanceOf(Object)
      }),
    })
  }),
};
const mapStateToProps = state => ({
  userRegistration: state.authReducer,
});

const matchDispatchToProps = dispatch => bindActionCreators({
  register: Authentication.register,
}, dispatch);

export default connect(mapStateToProps, matchDispatchToProps)(SignupForm);
