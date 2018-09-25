import React, { Component } from 'react';
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
            <a href="#" title="Home page"><i className="fa icon-font">&#xf015;</i></a>
            <a href="#" title="Login Users" id="login">Login</a>
          </div>
        </div>
        <div className="navNarrow">
          <a href="#" title="Home page"><i className="fa icon-font">&#xf015;</i></a>
          <i className="fa fa-bars fa-2x icon-padding" onClick={this.burgerToggle} />
          <div className="narrowLinks">
          <a href="#" title="Login Users" id="login">Login</a>
          </div>
        </div>
      </nav>
    );
  }
}
export default NavBar;
