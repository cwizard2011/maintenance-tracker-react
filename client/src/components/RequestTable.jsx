import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AdminAction from '../actions/AdminActions';
import TableRow from './TableRow';
import ViewRequestDetail from './ViewRequestDetail';
import Modal from './Modal';
import Loading from './Loading';

/**
 * @class RequestTable
 * @param {*} request
 */
export class RequestTable extends Component {
  state = {
    view: {},
    showModal: false
  }

  componentDidMount = () => {
    const { fetchAllRequests } = this.props;
    fetchAllRequests();
  }

  handleViewRequest = request => (e) => {
    e.preventDefault();
    this.setState({
      view: request,
      showModal: true
    });
  }

  handleHideModal = () => {
    this.setState({
      showModal: false
    });
  }

  handleApproveRequest = request => (e) => {
    e.preventDefault();
    const { requestAction, history } = this.props;
    requestAction(request.request_id, 'approve', history);
  }

  handleResolveRequest = request => (e) => {
    e.preventDefault();
    const { requestAction, history } = this.props;
    requestAction(request.request_id, 'resolve', history);
  }

  handleRejectRequest = request => (e) => {
    e.preventDefault();
    const { requestAction, history } = this.props;
    requestAction(request.request_id, 'disapprove', history);
  }

  /**
   * @returns {*} jsx
   */
  render() {
    const { requests, loading, postLoading } = this.props;
    const { showModal, view } = this.state;
    if (loading) {
      return <Loading />;
    }
    return (
      <div className="min-container">
        <div>
          {requests.requests.length < 1 ? (
            <div className="center"><h2>No request in the database for now</h2></div>
          ) : (
            <div>
              <h1 className="center">Users Request</h1>
              <table role="table">
                <thead role="presentation">
                  <tr role="row">
                    <th role="columnheader">Title</th>
                    <th role="columnheader">Status</th>
                    <th role="columnheader">Date</th>
                    <th role="columnheader">Details</th>
                    <th role="columnheader">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {requests.requests.map(request => (
                    <TableRow
                      key={request.request_id}
                      request={request}
                      viewDetails={this.handleViewRequest}
                      approveRequest={this.handleApproveRequest}
                      resolveRequest={this.handleResolveRequest}
                      rejectRequest={this.handleRejectRequest}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          )}
          <div>
            <div>{postLoading ? <Loading /> : ''}</div>
            <Modal
              onClose={this.handleHideModal}
              show={showModal}
            >
              <ViewRequestDetail
                requestId={view.request_id}
                sender={`${view.firstname} ${view.lastname}`}
                title={view.title}
                email={view.email}
                details={view.details}
                status={view.currentstatus}
                date={view.created_at}
              />
            </Modal>
          </div>
        </div>
      </div>
    );
  }
}
RequestTable.propTypes = {
  fetchAllRequests: PropTypes.func,
  requests: PropTypes.instanceOf(Object),
  loading: PropTypes.bool,
  requestAction: PropTypes.func,
  postLoading: PropTypes.bool,
  history: PropTypes.instanceOf(Object)
};
const mapStateToProps = state => ({
  requests: state.requestReducer,
  loading: state.requestReducer.loading,
  postLoading: state.requestReducer.postLoading
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchAllRequests: AdminAction.fetchAllRequest,
  requestAction: AdminAction.requestActions,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RequestTable);
