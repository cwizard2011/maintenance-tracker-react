import React, { Component } from 'react';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import Modal from './Modal';
import GuestNavigation from './GuestNavigation';

/**
 * @class HomeBody
 */
class HomeBody extends Component {
    state = {
      signup: false,
      login: false,
    };

  showSignup = () => {
    this.setState({
      ...this.state, // eslint-disable-line
      signup: !this.state.signup, // eslint-disable-line
    });
  }

  showLoginModal = () => {
    this.setState({
      ...this.state, // eslint-disable-line
      login: !this.state.login, // eslint-disable-line
    });
  }

  burgerToggle = () => {
    const linksEl = document.querySelector('.narrowLinks');
    if (linksEl.style.display === 'block') {
      linksEl.style.display = 'none';
    } else {
      linksEl.style.display = 'block';
    }
  }

  /**
   * @returns {*} jsx
   */
  render() {
    const { signup, login } = this.state;
    return (
      <div>
        <GuestNavigation
          showLoginModal={this.showLoginModal}
          burgerToggle={this.burgerToggle}
        />
        <div className="container">
          <div className="center-heading">
            <h1>Maintenance Desk</h1>
            <h3>
            You can get your technical issues resolved in four major steps.
            </h3>
          </div>
          <div className="align-horizontal">
            <div className="circular-image">
              <button
                type="button"
                className="button-link"
                onClick={this.showSignup}
                value="Show Signup"
              >
                <figure>
                  <img
                    src="https://res.cloudinary.com/cwizard/image/upload/v1540768548/login.svg"
                    alt="Login"
                    className="icon-image"
                  />
                  <figcaption>Register</figcaption>
                </figure>
              </button>
            </div>
            <div className="circular-image">
              <button
                type="button"
                className="button-link"
                onClick={this.showSignup}
                value="Show Signup"
              >
                <figure>
                  <img
                    src="https://res.cloudinary.com/cwizard/image/upload/v1540768548/log.svg"
                    alt="Log"
                    className="icon-image"
                  />
                  <figcaption>Log a request</figcaption>
                </figure>
              </button>
            </div>
            <div className="circular-image">
              <button
                type="button"
                className="button-link"
                onClick={this.showSignup}
                value="Show Signup"
              >
                <figure>
                  <img
                    src="https://res.cloudinary.com/cwizard/image/upload/v1540768548/approved.svg"
                    alt="Approved"
                    className="icon-image"
                  />
                  <figcaption>Get request approved</figcaption>
                </figure>
              </button>
            </div>
            <div className="circular-image">
              <button
                type="button"
                className="button-link"
                onClick={this.showSignup}
                value="Show Signup"
              >
                <figure>
                  <img
                    src="https://res.cloudinary.com/cwizard/image/upload/v1540768548/resolved.svg"
                    alt="Resolved"
                    className="icon-image"
                  />
                  <figcaption>Get request resolved</figcaption>
                </figure>
              </button>
            </div>
          </div>
          <Modal
            onClose={this.showSignup}
            show={signup}
          >
            <SignupForm />
          </Modal>
          <div>
            <Modal
              onClose={this.showLoginModal}
              show={login}
            >
              <LoginForm />
            </Modal>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeBody;
