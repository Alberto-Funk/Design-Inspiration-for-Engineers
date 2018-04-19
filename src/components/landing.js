import React from 'react';
import Link from 'react-router-dom';
import './landing.css';

const Landing = () => (
  <div className="landing">
    <div className="content">
      <div className="content__header">
        <div className="content__header__top">Design Inspiration</div>
        <div className="content__header__bottom">
          <div className="content__header__bottom__small">for</div>
          <div className="content__header__bottom__large">Engineers</div>
        </div>
      </div>
      <div className="content__textbox">
        <p>Building a collaborative list of where software engineers can find good design inspiration, tips, and tricks.</p>
        <p>
          To contribute, please email designinspirationforengineers@gmail.com.
        </p>
      </div>
      <div>
          <Link to='/General'>General</Link>
          <Link to='/Colors'>Colors</Link>
          <Link to='/Fonts'>Fonts</Link>
      </div>
    </div>
  </div>
);

export default Landing;