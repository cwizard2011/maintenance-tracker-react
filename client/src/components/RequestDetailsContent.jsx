import React from 'react';
import PropTypes from 'prop-types';

const RequestDetailsContent = (props) => {
  const {
    title, requestId, labelClass, labelName, status, details, created, updated
  } = props;
  return (
    <div className="request-details">
      <h3>Request Details</h3>
      <p>
      Title:
        {' '}
        <span>
          {title}
        </span>
      </p>
      <p>
      Request Id:
        {' '}
        <span>
          {requestId}
        </span>
      </p>
      <p>
      Status:
        {' '}
        <span className={labelClass}>
          <ion-icon name={labelName} />
          {status}
        </span>
      </p>
      <p>
      Details:
        {' '}
        <span>
          {details}
        </span>
      </p>
      <p>
      Created on:
        {' '}
        <span>
          {' '}
          {created}
          {' '}
        </span>
      </p>
      <p>
      Updated on:
        {' '}
        <span>
          {' '}
          {updated}
          {' '}
        </span>
      </p>
    </div>
  );
};
RequestDetailsContent.propTypes = {
  title: PropTypes.string,
  requestId: PropTypes.string,
  labelClass: PropTypes.string,
  labelName: PropTypes.string,
  status: PropTypes.string,
  details: PropTypes.string,
  created: PropTypes.string,
  updated: PropTypes.string
};
export default RequestDetailsContent;
