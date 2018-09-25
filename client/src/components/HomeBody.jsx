import React from 'react';

const HomeBody = () => (
  <div>
    <div className="container">
      <div className="center-heading">
        <h1>Maintenance Desk</h1>
        <h3>You can get your technical issues resolved in four major steps</h3>
      </div>
      <div className="align-horizontal">
        <div className="circular-image">
          <figure>
            <img src="images/login.svg" alt="Login" className="icon-image" />
            <figcaption>Register or Login</figcaption>
          </figure>
        </div>
        <div className="circular-image">
          <figure>
            <img src="images/log.svg" alt="Log" className="icon-image" />
            <figcaption>Log a request</figcaption>
          </figure>
        </div>
        <div className="circular-image">
          <figure>
            <img src="images/approved.svg" alt="Approved" className="icon-image" />
            <figcaption>Get request approved</figcaption>
          </figure>
        </div>
        <div className="circular-image">
          <figure>
            <img src="images/resolved.svg" alt="Resolved" className="icon-image" />
            <figcaption>Get request resolved</figcaption>
          </figure>
        </div>
      </div>
    </div>
    <footer>
      <div>
      Maintenance Tracker by Adeoye Peter
      </div>
    </footer>
  </div>
);
export default HomeBody;
