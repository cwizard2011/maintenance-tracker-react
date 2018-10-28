import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import RequestAction from '../actions/RequestAction';
import UserNavigation from './UserNavigation';
import RequestContainer from './common/RequestContainer';
import Loading from './Loading';
import Authentication from '../actions/AuthActions';

/**
 * @class UserDashboard
 */
export class UserDashboard extends Component {
  state = {}

  componentDidMount = () => {
    const { fetchRequests } = this.props;
    fetchRequests();
  }

  /**
   *
   * @param {*} nextProps
   * @returns {*} object
   */
  static getDerivedStateFromProps(nextProps) {
    const { auth, history } = nextProps;
    if (!auth) {
      history.push('/');
      return null;
    }
    return null;
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
   * @param {*} event
   * @returns {*} jsx
   */
  handleLogout = (event) => {
    const { logout } = this.props;
    event.preventDefault();
    logout();
  }

  /**
   * @returns {*} jsx
   */
  render() {
    const { user, requests } = this.props;
    if (requests.loading) {
      return (
        <div>
          <UserNavigation
            user={user.username}
            handleLogout={this.handleLogout}
            burgerToggle={this.burgerToggle}
          />
          <Loading />
        </div>
      );
    } else if (!requests.loading && requests.requests.length === undefined) {
      return (
        <div>
          <UserNavigation
            user={user.username}
            handleLogout={this.handleLogout}
            burgerToggle={this.burgerToggle}
          />
          <div className="container">
            <div className="center-heading">
            You have not create any request, click on new request to send a new request
            </div>
          </div>
        </div>
      );
    }

    return (
      <div>
        <UserNavigation
          user={user.username}
          handleLogout={this.handleLogout}
          burgerToggle={this.burgerToggle}
        />
        <div className="container">
          <div className="content-container">
            {requests.requests.map((request) => {
              if (request.currentstatus === 'pending') {
                return (
                  <div key={request.request_id}>
                    <RequestContainer
                      title={request.title}
                      label="label pending"
                      icon="pause"
                      status={request.currentstatus}
                    />
                  </div>
                );
              } else if (request.currentstatus === 'approved') {
                return (
                  <div key={request.request_id}>
                    <RequestContainer
                      title={request.title}
                      label="label success"
                      icon="done-all"
                      status={request.currentstatus}
                    />
                  </div>
                );
              } else if (request.currentstatus === 'rejected') {
                return (
                  <div key={request.request_id}>
                    <RequestContainer
                      title={request.title}
                      label="label danger"
                      icon="close"
                      status={request.currentstatus}
                    />
                  </div>
                );
              } else if (request.currentstatus === 'resolved') {
                return (
                  <div key={request.request_id}>
                    <RequestContainer
                      title={request.title}
                      label="label success"
                      icon="build"
                      status={request.currentstatus}
                    />
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
      </div>
    );
  }
}
UserDashboard.propTypes = {
  fetchRequests: PropTypes.func,
  user: PropTypes.instanceOf(Object),
  logout: PropTypes.func,
  requests: PropTypes.instanceOf(Object)
};
const mapStateToProps = state => ({
  requests: state.requestReducer,
  user: state.authReducer.user,
  auth: state.authReducer.isAuthenticated
});

const matchDispatchToProps = dispatch => bindActionCreators({
  fetchRequests: RequestAction.fetchRequest,
  logout: Authentication.logout
}, dispatch);
export default connect(mapStateToProps, matchDispatchToProps)(UserDashboard);
