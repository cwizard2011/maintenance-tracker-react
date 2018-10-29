import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * @class Modal
 */
class Modal extends Component {
  /**
   *
   * @param {*} e
   * @returns {*} function
   */
  onClose(e) {
    const { onClose } = this.props;
    return onClose && onClose(e);
  }

  /**
 * @returns {*} jsx
 */
  render() {
    const { show, children } = this.props;
    if (!show) {
      return null;
    }
    return (
      <div>
        <div className="modals">
          <div className="modals-content form-field modals-body">
            <span
              role="presentation"
              className="close"
              onClick={(e) => { this.onClose(e); }}
            >
              &times;
            </span>
            {children}
          </div>
        </div>
      </div>
    );
  }
}
Modal.propTypes = {
  children: PropTypes.node,
  show: PropTypes.bool,
  onClose: PropTypes.func,
};
export default Modal;
