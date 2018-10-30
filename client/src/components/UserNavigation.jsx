import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Authentication from '../actions/AuthActions';

/**
 * @class UserNavigation
 */
export class UserNavigation extends Component {
  /**
   * @param {*} event
   * @returns {*} jsx
   */
  handleLogout = (event) => {
    const { logout } = this.props;
    event.preventDefault();
    logout();
  }

  burgerToggle = () => {
    this.linksEl = document.querySelector('.narrowLinks');
    if (this.linksEl.style.display === 'block') {
      this.linksEl.style.display = 'none';
    } else {
      this.linksEl.style.display = 'block';
    }
  }

  /**
   * @returns {*} jsx
   */
  render() {
    const { user } = this.props;
    return (
      <nav className="nav">
        <div className="navWide">
          <div className="wideDiv">
            <Link to="/" title="Home page"><i className="fa icon-font">&#xf015;</i></Link>
            <a
              role="presentation"
              title="Login Users"
              onClick={this.handleLogout}
              value="Show Login"
            >
            Logout
            </a>
            <a
              role="presentation"
              title="Welcome Users"
              value="Display User"
            >
              {`Welcome ${user.username}`}
            </a>
          </div>
        </div>
        <div className="navNarrow">
          <Link to="/" title="Home page"><i className="fa icon-font">&#xf015;</i></Link>
          <i
            className="fa fa-bars fa-2x icon-padding"
            role="presentation"
            onClick={this.burgerToggle}
          />
          <div className="narrowLinks">
            <a
              role="presentation"
              title="Login Users"
              onClick={this.handleLogout}
              value="Show Login"
            >
            Logout
            </a>
            <a
              role="presentation"
              title="Welcome Users"
              value="Display User"
            >
              {`Welcome ${user.username}`}
            </a>
          </div>
        </div>
      </nav>
    );
  }
}
UserNavigation.propTypes = {
  user: PropTypes.instanceOf(Object),
  logout: PropTypes.func
};

const mapStateToProps = state => ({
  user: state.authReducer.user,
  auth: state.authReducer.isAuthenticated
});

const matchDispatchToProps = dispatch => bindActionCreators({
  logout: Authentication.logout
}, dispatch);

export default connect(mapStateToProps, matchDispatchToProps)(UserNavigation);
