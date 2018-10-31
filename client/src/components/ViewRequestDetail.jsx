import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ViewInfo, LabelTag } from './common/ViewInfo';

/**
 * @class ViewRequest
 */
class ViewRequestDetail extends Component {
/**
 * @returns {*} jsx
 */
  render() {
    const {
      requestId, sender, title, email, details, status, date,
    } = this.props;

    if (status === 'pending') {
      return (
        <div className="copy">
          <ViewInfo
            requestId={requestId}
            sender={sender}
            title={title}
            email={email}
            details={details}
            date={date}
          />
          <LabelTag
            pClass="label pending"
            labelName="pause"
            status={status}
          />
        </div>
      );
    } else if (status === 'approved') {
      return (
        <div className="copy">
          <ViewInfo
            requestId={requestId}
            sender={sender}
            title={title}
            email={email}
            details={details}
            date={date}
          />
          <LabelTag
            pClass="label success"
            labelName="done-all"
            status={status}
          />
        </div>
      );
    } else if (status === 'resolved') {
      return (
        <div className="copy">
          <ViewInfo
            requestId={requestId}
            sender={sender}
            title={title}
            email={email}
            details={details}
            date={date}
          />
          <LabelTag
            pClass="label success"
            labelName="build"
            status={status}
          />
        </div>
      );
    }
    return (
      <div className="copy">
        <ViewInfo
          requestId={requestId}
          sender={sender}
          title={title}
          email={email}
          details={details}
          date={date}
        />
        <LabelTag
          pClass="label danger"
          labelName="close"
          status={status}
        />
      </div>
    );
  }
}

ViewRequestDetail.propTypes = {
  requestId: PropTypes.string,
  title: PropTypes.string,
  sender: PropTypes.string,
  email: PropTypes.string,
  details: PropTypes.string,
  date: PropTypes.string,
  status: PropTypes.string
};

export default ViewRequestDetail;
