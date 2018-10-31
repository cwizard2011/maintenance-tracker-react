import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

export const ViewInfo = ({
  requestId, title, sender, email, details, date
}) => (
  <div>
    <div>
      <label htmlFor="id">Request Id</label>
      <p>{requestId}</p>
    </div>
    <div>
      <label htmlFor="sender">Sender</label>
      <p>{sender}</p>
    </div>
    <div>
      <label htmlFor="title">Title</label>
      <p>{title}</p>
    </div>
    <div>
      <label htmlFor="email">Email</label>
      <p>{email}</p>
    </div>
    <div>
      <label htmlFor="details">Details</label>
      <p>{details}</p>
    </div>
    <div>
      <label htmlFor="date">Date</label>
      <p>{moment(date).format('MMM D, YYYY')}</p>
    </div>
  </div>
);

export const LabelTag = ({ status, pClass, labelName }) => (
  <div>
    <label htmlFor="status">Status</label>
    <p>
      <span className={pClass}>
        <ion-icon name={labelName} />
        {status}
      </span>
    </p>
  </div>
);

ViewInfo.propTypes = {
  requestId: PropTypes.string,
  title: PropTypes.string,
  sender: PropTypes.string,
  email: PropTypes.string,
  details: PropTypes.string,
  date: PropTypes.string
};

LabelTag.propTypes = {
  status: PropTypes.string,
  pClass: PropTypes.string,
  labelName: PropTypes.string,
};
