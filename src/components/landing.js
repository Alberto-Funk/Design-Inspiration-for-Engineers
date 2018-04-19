import React from 'react';
import { Link } from 'react-router-dom';
import './landing.css';

const Landing = () => (
  <div className="landing">
    <div className="header">
      <img src="/images/logo.png" alt="Design Inspiration for Engineers" className="header__img" />
    </div>
    <div className="content">
      <div className="content__textbox">
        <p>Building a collaborative list of where software engineers can find good design inspiration, tips, and tricks.</p>
        <p>
          To contribute, please email designinspirationforengineers@gmail.com.
        </p>
      </div>
      <div content__links>
          <Link to='/General'>General</Link>
          <Link to='/Colors'>Colors</Link>
          <Link to='/Fonts'>Fonts</Link>
      </div>
    </div>
  </div>
);

export default Landing;