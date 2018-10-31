import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import UserNavigation from './UserNavigation';
import RequestTable from './RequestTable';
import Footer from './common/Footer';

/**
 * @class AdminDashboard
 */
export class AdminDashboard extends Component {
  /**
   * @returns {*} jsx
   */
  render() {
    const { userRole, history } = this.props;
    if (userRole && userRole !== 'admin') {
      return history.push('/');
    }
    return (
      <div>
        <UserNavigation />
        <div className="container">
          <RequestTable history={history} />
        </div>
        <Footer />
      </div>
    );
  }
}
AdminDashboard.propTypes = {
  userRole: PropTypes.string,
  history: PropTypes.instanceOf(Object),
};
const mapStateToProps = state => ({
  userRole: state.authReducer.user.user_role,
});
export default connect(mapStateToProps)(AdminDashboard);
