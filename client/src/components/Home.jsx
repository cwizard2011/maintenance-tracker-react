import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeBody from './HomeBody';

/**
 * @class Home
 */
export class Home extends Component {
  state = {}

  /**
   *
   * @param {*} nextProps
   * @returns {*} object
   */
  static getDerivedStateFromProps(nextProps) {
    const { auth, history, user } = nextProps;
    if (auth && user.user_role === 'user') {
      history.push('/dashboard');
      return null;
    } else if (auth && user.user_role === 'admin') {
      history.push('/admin');
    }
    return null;
  }

  /**
   * @returns {*} jsx
   */
  render() {
    return (
      <div>
        <HomeBody />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.authReducer.isAuthenticated,
  user: state.authReducer.user,
});
export default connect(mapStateToProps)(Home);
