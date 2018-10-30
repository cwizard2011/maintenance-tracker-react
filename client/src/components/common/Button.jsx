import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { value, requestId } = props;
  return (
    <div className="center">
      <Link to={`/request/${requestId}/edit`}>
        <a role="presentation" className="btn center">
          <ion-icon name="create" />
          {value}
        </a>
      </Link>
    </div>
  );
};
Button.propTypes = {
  value: PropTypes.string,
  requestId: PropTypes.string
};
export default Button;
