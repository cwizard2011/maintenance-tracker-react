import React, { Component } from 'react';
import Modal from './Modal';
import SignupForm from './SignupForm';

class HomeBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
    this.showSignup = this.showSignup.bind(this);
  }
  showSignup() {
    this.setState({
      ...this.state,
      show: !this.state.show,
    });
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="center-heading">
            <h1>Maintenance Desk</h1>
            <h3>You can get your technical issues resolved in four major steps</h3>
          </div>
          <div className="align-horizontal">
            <div className="circular-image">
              <button onClick={this.showSignup} value="Show Signup">
                <figure>
                  <img src="images/login.svg" alt="Login" className="icon-image" />
                  <figcaption>Register or Login</figcaption>
                </figure>
              </button>
            </div>
            <div className="circular-image">
              <button onClick={this.showSignup} value="Show Signup">
                <figure>
                  <img src="images/log.svg" alt="Log" className="icon-image" />
                  <figcaption>Log a request</figcaption>
                </figure>
              </button>
            </div>
            <div className="circular-image">
              <button onClick={this.showSignup} value="Show Signup">
                <figure>
                  <img src="images/approved.svg" alt="Approved" className="icon-image" />
                  <figcaption>Get request approved</figcaption>
                </figure>
              </button>
            </div>
            <div className="circular-image">
              <button onClick={this.showSignup} value="Show Signup">
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
