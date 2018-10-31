import React, { Component } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import RequestButton from './common/RequestButton';

/**
 * @class TableRow
 */
class TableRow extends Component {
  /**
   * @returns {*} jsx
   */
  render() {
    const {
      request, viewDetails, approveRequest, resolveRequest, rejectRequest
    } = this.props;
    if (request.currentstatus === 'pending') {
      return (
        <tr id={request.request_id}>
          <td>{request.title}</td>
          <td>
            <span className="label pending right-text">
              <ion-icon name="pause" />
              {request.currentstatus}
            </span>
          </td>
          <td>{moment(request.created_at).format('MMM D, YYYY')}</td>
          <td>
            <span className="right-text">
              <a
                className="detail-btn pending"
                role="presentation"
                onClick={viewDetails(request)}
              >
              Details
              </a>
            </span>
          </td>
          <td>
            <RequestButton
              buttonClass="detail-btn pending action-approve"
              handleClick={approveRequest(request)}
              iconName="done-all"
              actionName="Approve"
            />
            <RequestButton
              buttonClass="detail-btn danger action-reject"
              handleClick={rejectRequest(request)}
              iconName="close"
              actionName="Reject"
            />
          </td>
        </tr>
      );
    } else if (request.currentstatus === 'approved') {
      return (
        <tr id={request.request_id}>
          <td>{request.title}</td>
          <td>
            <span className="label success right-text">
              <ion-icon name="done-all" />
              {request.currentstatus}
            </span>
          </td>
          <td>{moment(request.created_at).format('MMM D, YYYY')}</td>
          <td>
            <span className="right-text">
              <a
                className="detail-btn pending"
                role="presentation"
                onClick={viewDetails(request)}
              >
              Details
              </a>
            </span>
          </td>
          <td>
            <RequestButton
              buttonClass="detail-btn pending action-approve"
              handleClick={resolveRequest(request)}
              iconName="done-all"
              actionName="Approve"
            />
          </td>
        </tr>
      );
    } else if (request.currentstatus === 'resolved') {
      return (
        <tr id={request.request_id}>
          <td>{request.title}</td>
          <td>
            <span className="label success right-text">
              <ion-icon name="build" />
              {request.currentstatus}
            </span>
          </td>
          <td>{moment(request.created_at).format('MMM D, YYYY')}</td>
          <td>
            <span className="right-text">
              <a
                className="detail-btn pending"
                role="presentation"
                onClick={viewDetails(request)}
              >
              Details
              </a>
            </span>
          </td>
        </tr>
      );
    }
    return (
      <tr id={request.request_id}>
        <td>{request.title}</td>
        <td>
          <span className="label danger right-text">
            <ion-icon name="close" />
            {request.currentstatus}
          </span>
        </td>
        <td>{moment(request.created_at).format('MMM D, YYYY')}</td>
        <td>
          <span className="right-text">
            <a
              className="detail-btn pending"
              role="presentation"
              onClick={viewDetails(request)}
            >
              Details
            </a>
          </span>
        </td>
      </tr>
    );
  }
}
TableRow.propTypes = {
  request: PropTypes.instanceOf(Object),
  viewDetails: PropTypes.func,
  approveRequest: PropTypes.func,
  resolveRequest: PropTypes.func,
  rejectRequest: PropTypes.func
};

export default TableRow;
