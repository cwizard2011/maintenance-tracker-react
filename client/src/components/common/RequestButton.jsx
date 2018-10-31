import React from 'react';
import PropTypes from 'prop-types';

const RequestButton = (props) => {
  const {
    handleClick, iconName, actionName, buttonClass
  } = props;
  return (
    <span className="right-text">
      <button
        type="button"
        className={buttonClass}
        onClick={handleClick}
      >
        <ion-icon name={iconName} />
        {actionName}
      </button>
    </span>
  );
};
RequestButton.propTypes = {
  handleClick: PropTypes.func,
  iconName: PropTypes.string,
  actionName: PropTypes.string,
  buttonClass: PropTypes.string
};
export default RequestButton;
