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
    console.log(request);
  }

  handleResolveRequest = request => (e) => {
    e.preventDefault();
    console.log(request);
  }

  handleRejectRequest = request => (e) => {
    e.preventDefault();
    console.log(request);
  }

  /**
   * @returns {*} jsx
   */
  render() {
    const { requests, loading } = this.props;
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
          )}
          <div>
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
  loading: PropTypes.bool
};
const mapStateToProps = state => ({
  requests: state.requestReducer,
  loading: state.requestReducer.loading
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchAllRequests: AdminAction.fetchAllRequest
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RequestTable);
