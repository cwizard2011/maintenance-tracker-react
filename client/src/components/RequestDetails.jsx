import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import moment from 'moment';
import PropTypes from 'prop-types';
import RequestAction from '../actions/RequestAction';
import UserNavigation from './UserNavigation';
import Footer from './common/Footer';
import RequestDetailsContent from './RequestDetailsContent';
import Loading from './Loading';


/**
 * @class RequestDetails
 */
export class RequestDetails extends Component {
  componentDidMount = () => {
    const { fetchSingleRequest, match } = this.props;
    fetchSingleRequest(match.params.requestId);
  }

  /**
   * @returns {*} jsx
   */
  render() {
    const { request, loading } = this.props;
    if (request.currentstatus === 'pending') {
      return (
        <div>
          <UserNavigation />
          <div className="container">
            <div className="request">
              <RequestDetailsContent
                title={request.title}
                requestId={request.request_id}
                labelClass="label pending"
                labelName="pause"
                status={request.currentstatus}
                details={request.details}
                created={moment(request.created_at).format('MMM D, YYYY')}
                updated={moment(request.updated_at).format('MMM D, YYYY')}
              />
            </div>
          </div>
          <Footer />
        </div>
      );
    } else if (request.currentstatus === 'approved') {
      return (
        <div>
          <UserNavigation />
          <div className="container">
            <div className="request">
              <RequestDetailsContent
                title={request.title}
                requestId={request.request_id}
                labelClass="label success"
                labelName="done-all"
                status={request.currentstatus}
                details={request.details}
                created={moment(request.created_at).format('MMM D, YYYY')}
                updated={moment(request.updated_at).format('MMM D, YYYY')}
              />
            </div>
          </div>
          <Footer />
        </div>
      );
    } else if (request.currentstatus === 'rejected') {
      return (
        <div>
          <UserNavigation />
          <div className="container">
            <div className="request">
              <RequestDetailsContent
                title={request.title}
                requestId={request.request_id}
                labelClass="label danger"
                labelName="close"
                status={request.currentstatus}
                details={request.details}
                created={moment(request.created_at).format('MMM D, YYYY')}
                updated={moment(request.updated_at).format('MMM D, YYYY')}
              />
            </div>
          </div>
          <Footer />
        </div>
      );
    } else if (request.currentstatus === 'resolved') {
      return (
        <div>
          <UserNavigation />
          <div className="container">
            <div className="request">
              <RequestDetailsContent
                title={request.title}
                requestId={request.request_id}
                labelClass="label success"
                labelName="build"
                status={request.currentstatus}
                details={request.details}
                created={moment(request.created_at).format('MMM D, YYYY')}
                updated={moment(request.updated_at).format('MMM D, YYYY')}
              />
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
          <div className="request">
            {loading ? <Loading /> : ''}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
RequestDetails.propTypes = {
  fetchSingleRequest: PropTypes.func,
  match: PropTypes.instanceOf(Object),
  request: PropTypes.instanceOf(Object),
  loading: PropTypes.bool
};
const mapStateToProps = state => ({
  request: state.requestReducer.request,
  loading: state.requestReducer.loading,
});

const matchDispatchToProps = dispatch => bindActionCreators({
  fetchSingleRequest: RequestAction.fetchSingleRequest,
}, dispatch);

export default connect(mapStateToProps, matchDispatchToProps)(RequestDetails);
