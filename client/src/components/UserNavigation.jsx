import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const UserNavigation = (props) => {
  const { user, handleLogout, burgerToggle } = props;
  return (
    <nav className="nav">
      <div className="navWide">
        <div className="wideDiv">
          <Link to="/" title="Home page"><i className="fa icon-font">&#xf015;</i></Link>
          <a
            role="presentation"
            title="Login Users"
            onClick={handleLogout}
            value="Show Login"
          >
          Logout
          </a>
          <a
            role="presentation"
            title="Welcome Users"
            value="Display User"
          >
            {`Welcome ${user}`}
          </a>
        </div>
      </div>
      <div className="navNarrow">
        <Link to="/" title="Home page"><i className="fa icon-font">&#xf015;</i></Link>
        <i className="fa fa-bars fa-2x icon-padding" role="presentation" onClick={burgerToggle} />
        <div className="narrowLinks">
          <a
            role="presentation"
            title="Login Users"
            onClick={handleLogout}
            value="Show Login"
          >
          Logout
          </a>
          <a
            role="presentation"
            title="Welcome Users"
            value="Display User"
          >
            {`Welcome ${user}`}
          </a>
        </div>
      </div>
    </nav>
  );
};
UserNavigation.propTypes = {
  handleLogout: PropTypes.func,
  burgerToggle: PropTypes.func,
  user: PropTypes.string
};

export default UserNavigation;
