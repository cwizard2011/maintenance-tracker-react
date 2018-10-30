import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import RequestAction from '../actions/RequestAction';
import UserNavigation from './UserNavigation';
import Footer from './common/Footer';
import RequestForm from './RequestForm';
import Loading from './Loading';
/**
 * @class UserDashboard
 */
export class EditRequest extends Component {
  componentDidMount = () => {
    const { match, fetchSingleRequest } = this.props;
    if (match && match.params.requestId) {
      fetchSingleRequest(match.params.requestId);
    }
  }

  /**
   * @param {*} update
   * @returns {*} object
   */
  submitRequest = (update) => {
    const { editRequest, history, match } = this.props;
    editRequest(update, match.params.requestId).then(() => {
      history.push('/dashboard');
    });
  }

  /**
   * @returns {*} jsx
   */
  render() {
    const { request, match, loading } = this.props;
    return (
      <div>
        <UserNavigation />
        <div className="container">
          <div className="form-field-margin">
            <RequestForm
              request={request}
              match={match}
              handleSubmit={this.submitRequest}
            />
          </div>
          <div>{loading ? <Loading /> : ''}</div>
        </div>
        <Footer />
      </div>
    );
  }
}
EditRequest.propTypes = {
  fetchSingleRequest: PropTypes.func,
  match: PropTypes.instanceOf(Object),
  request: PropTypes.instanceOf(Object),
  editRequest: PropTypes.func,
  history: PropTypes.instanceOf(Object),
  loading: PropTypes.bool

};
const mapStateToProps = state => (
  {
    request: state.requestReducer.request,
    loading: state.requestReducer.loading
  }
);
const matchDispatchToProps = dispatch => bindActionCreators({
  editRequest: RequestAction.editRequest,
  fetchSingleRequest: RequestAction.fetchSingleRequest
}, dispatch);
export default connect(mapStateToProps, matchDispatchToProps)(EditRequest);
