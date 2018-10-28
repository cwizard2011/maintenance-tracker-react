import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './common/Footer';

const NotFoundPage = () => (
  <div>
    <nav className="nav">
      <div className="navWide">
        <div className="wideDiv">
          <Link to="/" title="Home page"><i className="fa icon-font">&#xf015;</i></Link>
        </div>
      </div>
    </nav>
    <div className="center-heading">
      <h1>Sorry, this request page has not been created</h1>
      <p>Please click the button to start creating requests</p>
      {' '}
      <Link to="/"><button type="button" className="btn">Go home</button></Link>
    </div>
    <Footer />
  </div>
);

export default NotFoundPage;
