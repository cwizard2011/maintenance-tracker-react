import React, { Component } from 'react';
import NavBar from './NavBar';
import Login from './Login';
import SignupForm from './SignupForm';
import ForgetPassword from './ForgetPassword';

// eslint-disable-next-line react/prefer-stateless-function
class Home extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Login />
        <SignupForm />
        <ForgetPassword />
      </div>
    );
  }
}
export default Home;
