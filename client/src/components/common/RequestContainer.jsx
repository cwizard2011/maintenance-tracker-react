import React from 'react';
import PropTypes from 'prop-types';

const RequestContainer = (props) => {
  const {
    title, label, name, status
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
          <a href="#" className="view-btn">
            <ion-icon name={name} />
            Details
          </a>

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
};

export default RequestContainer;
