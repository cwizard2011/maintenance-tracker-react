import React, { Component } from 'react';
import NavBar from './NavBar';
import HomeBody from './HomeBody';

// eslint-disable-next-line react/prefer-stateless-function
class Home extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <HomeBody />
      </div>
    );
  }
}
export default Home;
