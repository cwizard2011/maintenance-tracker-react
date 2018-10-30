import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import RequestAction from '../actions/RequestAction';
import UserNavigation from './UserNavigation';
import Footer from './common/Footer';
import RequestForm from './RequestForm';
/**
 * @class UserDashboard
 */
export class CreateRequest extends Component {
  state = {}

  /**
   * @param {*} request
   * @returns {*} object
   */
  submitRequest = (request) => {
    const { postRequest, history } = this.props;
    postRequest(request, history);
  }

  /**
   * @returns {*} jsx
   */
  render() {
    return (
      <div>
        <UserNavigation />
        <div className="container">
          <div className="form-field-margin">
            <RequestForm handleSubmit={this.submitRequest} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
CreateRequest.propTypes = {
  postRequest: PropTypes.func,
  history: PropTypes.func

};
const matchDispatchToProps = dispatch => bindActionCreators({
  postRequest: RequestAction.postRequest,
}, dispatch);
export default connect(null, matchDispatchToProps)(CreateRequest);
