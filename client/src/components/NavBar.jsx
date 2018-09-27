import React, { Component } from 'react';
import { Link } from 'react-router-dom';
/* eslint class-methods-use-this: [0, { "exceptMethods": ["buggerToggle"] }] */
// eslint-disable-next-line react/prefer-stateless-function
class NavBar extends Component {
  burgerToggle() {
    const linksEl = document.querySelector('.narrowLinks');
    if (linksEl.style.display === 'block') {
      linksEl.style.display = 'none';
    } else {
      linksEl.style.display = 'block';
    }
  }
  render() {
    return (
      <nav className="nav">
        <div className="navWide">
          <div className="wideDiv">
            <Link to="/" title="Home page"><i className="fa icon-font">&#xf015;</i></Link>
            <Link to="/login" title="Login Users" id="login">Login</Link>
          </div>
        </div>
        <div className="navNarrow">
          <Link to="/" title="Home page"><i className="fa icon-font">&#xf015;</i></Link>
          <i className="fa fa-bars fa-2x icon-padding" role="presentation" onClick={this.burgerToggle} />
          <div className="narrowLinks">
            <Link to="/login" title="Login Users" id="login">Login</Link>
          </div>
        </div>
      </nav>
    );
  }
}
export default NavBar;
