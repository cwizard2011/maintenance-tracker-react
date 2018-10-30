import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import RequestAction from '../actions/RequestAction';
import UserNavigation from './UserNavigation';
import RequestContainer from './common/RequestContainer';
import Loading from './Loading';
import Authentication from '../actions/AuthActions';
import Footer from './common/Footer';
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

  showRequestModal = () => {
    this.setState({
      ...this.state, // eslint-disable-line
      requestModal: !this.state.requestModal, // eslint-disable-line
    });
  }

  /**
   * @param {*} request
   * @returns {*} object
   */
  submitRequest = (request) => {
    const { postRequest, history } = this.props;
    postRequest(request).then((res) => {
      if (res.data.code === 201) {
        return history.push('/');
      }
    });
  }

  /**
   * @returns {*} jsx
   */
  render() {
    const { requests } = this.props;
    if (requests.loading) {
      return (
        <div>
          <UserNavigation />
          <Loading />
        </div>
      );
    } else if (!requests.loading && requests.requests.length === undefined) {
      return (
        <div>
          <UserNavigation />
          <div className="container">
            <Link to="/new-request">
              <a href="#">
                <button
                  type="button"
                  className="right-btn btn"
                >
            New Request
                </button>
              </a>
            </Link>
            <div className="center-heading">
            You have not create any request, click on new request to send a new request
            </div>
          </div>
          <Footer />
        </div>
      );
    }

    return (
      <div>
        <UserNavigation />
        <div className="container">
          <Link to="/new-request">
            <a href="#">
              <button
                type="button"
                className="right-btn btn"
              >
            New Request
              </button>
            </a>
          </Link>
          <div className="content-container">
            {requests.requests.map((request) => {
              if (request.currentstatus === 'pending') {
                return (
                  <div key={request.request_id}>
                    <RequestContainer
                      requestId={request.request_id}
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
                      requestId={request.request_id}
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
                      requestId={request.request_id}
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
                      requestId={request.request_id}
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
        <Footer />
      </div>
    );
  }
}
UserDashboard.propTypes = {
  fetchRequests: PropTypes.func,
  requests: PropTypes.instanceOf(Object),
  postRequest: PropTypes.func,
  history: PropTypes.func

};
const mapStateToProps = state => ({
  requests: state.requestReducer,
  auth: state.authReducer.isAuthenticated
});

const matchDispatchToProps = dispatch => bindActionCreators({
  fetchRequests: RequestAction.fetchRequest,
  postRequest: RequestAction.postRequest,
  logout: Authentication.logout
}, dispatch);
export default connect(mapStateToProps, matchDispatchToProps)(UserDashboard);
