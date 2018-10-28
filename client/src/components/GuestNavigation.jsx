import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const GuestNavigation = (props) => {
  const { showLoginModal, burgerToggle } = props;
  return (
    <nav className="nav">
      <div className="navWide">
        <div className="wideDiv">
          <Link to="/" title="Home page"><i className="fa icon-font">&#xf015;</i></Link>
          <a
            role="presentation"
            title="Login Users"
            onClick={showLoginModal}
            value="Show Login"
          >
          Login
          </a>
        </div>
      </div>
      <div className="navNarrow">
        <Link to="/" title="Home page"><i className="fa icon-font">&#xf015;</i></Link>
        <i className="fa fa-bars fa-2x icon-padding" role="presentation" onClick={burgerToggle} />
        <div className="narrowLinks">
          <a href="#" title="Login Users" onClick={showLoginModal} value="Show Login">Login</a>
        </div>
      </div>
    </nav>
  );
};

GuestNavigation.propTypes = {
  showLoginModal: PropTypes.func,
  burgerToggle: PropTypes.func,
};

export default GuestNavigation;
