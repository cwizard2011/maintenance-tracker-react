import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const RequestContainer = (props) => {
  const {
    title, label, name, status, requestId
  } = props;
  return (
    <div className="curved-border">
      <h3>{title}</h3>
      <p>
      Status:
        {' '}
        <span className={label}>
          <ion-icon name="icon" />
          {status}
        </span>
        <span className="create">
          <Link to={`/request/${requestId}`} className="view-btn">
            <ion-icon name={name} />
            Details
          </Link>

        </span>

      </p>
    </div>
  );
};

RequestContainer.propTypes = {
  title: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  status: PropTypes.string,
  requestId: PropTypes.string
};

export default RequestContainer;
