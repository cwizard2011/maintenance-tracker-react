import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* eslint class-methods-use-this: [0, { "exceptMethods": ["buggerToggle"] }] */
/* eslint no-unused-expressions: [0, { "allowTernary": true }] */
// eslint-disable-next-line react/prefer-stateless-function
class Modal extends Component {
  onClose(e) {
    this.props.onClose && this.props.onClose(e);
  }
  render() {
    if (!this.props.show && !this.props.login) {
      return null;
    }
    return (
      <div>
        <div className="modals">
          <div className="modals-content form-field modals-body">
            <span role="presentation" className="close" onClick={(e) => { this.onClose(e); }}>&times;</span>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
Modal.propTypes = {
  children: PropTypes.node.isRequired,
  show: PropTypes.bool.isRequired,
  login: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
export default Modal;
