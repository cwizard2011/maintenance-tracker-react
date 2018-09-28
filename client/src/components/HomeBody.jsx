import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import Modal from './Modal';

class HomeBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      login: false,
    };
    this.showSignup = this.showSignup.bind(this);
    this.showLoginModal = this.showLoginModal.bind(this);
    this.burgerToggle = this.burgerToggle.bind(this);
  }
  showSignup() {
    this.setState({
      ...this.state,
      show: !this.state.show,
    });
  }
  showLoginModal() {
    this.setState({
      ...this.state,
      login: !this.state.login,
    });
  }
  burgerToggle() {
    this.linksEl = document.querySelector('.narrowLinks');
    if (this.linksEl.style.display === 'block') {
      this.linksEl.style.display = 'none';
    } else {
      this.linksEl.style.display = 'block';
    }
  }
  render() {
    return (
      <div>
        <nav className="nav">
          <div className="navWide">
            <div className="wideDiv">
              <Link to="/" title="Home page"><i className="fa icon-font">&#xf015;</i></Link>
              <a role="presentation" title="Login Users" onClick={this.showLoginModal} value="Show Login">Login</a>
            </div>
          </div>
          <div className="navNarrow">
            <Link to="/" title="Home page"><i className="fa icon-font">&#xf015;</i></Link>
            <i className="fa fa-bars fa-2x icon-padding" role="presentation" onClick={this.burgerToggle} />
            <div className="narrowLinks">
              <a href="#" title="Login Users" onClick={this.showLoginModal} value="Show Login">Login</a>
            </div>
          </div>
        </nav>
        <div className="container">
          <div className="center-heading">
            <h1>Maintenance Desk</h1>
            <h3>
            You can get your technical issues resolved in four major steps.
            </h3>
          </div>
          <div className="align-horizontal">
            <div className="circular-image">
              <button className="button-link" onClick={this.showSignup} value="Show Signup">
                <figure>
                  <img src="images/login.svg" alt="Login" className="icon-image" />
                  <figcaption>Register</figcaption>
                </figure>
              </button>
            </div>
            <div className="circular-image">
              <button className="button-link" onClick={this.showSignup} value="Show Signup">
                <figure>
                  <img src="images/log.svg" alt="Log" className="icon-image" />
                  <figcaption>Log a request</figcaption>
                </figure>
              </button>
            </div>
            <div className="circular-image">
              <button className="button-link" onClick={this.showSignup} value="Show Signup">
                <figure>
                  <img src="images/approved.svg" alt="Approved" className="icon-image" />
                  <figcaption>Get request approved</figcaption>
                </figure>
              </button>
            </div>
            <div className="circular-image">
              <button className="button-link" onClick={this.showSignup} value="Show Signup">
                <figure>
                  <img src="images/resolved.svg" alt="Resolved" className="icon-image" />
                  <figcaption>Get request resolved</figcaption>
                </figure>
              </button>
            </div>
          </div>
          <Modal
            onClose={this.showSignup}
            show={this.state.show}
          >
            <SignupForm />
          </Modal>
          <div>
            <Modal
              onClose={this.showLoginModal}
              login={this.state.login}
            >
              <LoginForm />
            </Modal>
          </div>
        </div>
        <footer>
          <div>
        Maintenance Tracker by Adeoye Peter
          </div>
        </footer>
      </div>
    );
  }
}

export default HomeBody;
