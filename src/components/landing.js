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
          To contribute, please email designinspirationforengineers@gmail.com or make a PR on GitHub at https://github.com/tacolim/Design-Inspiration-for-Engineers.
        </p>
      </div>
      <div className="content__links">
          <Link to='/General' className="content__link"><div className="content__linkD">General</div></Link>
          <Link to='/Colors' className="content__link"><div className="content__linkD">Colors</div></Link>
          <Link to='/Fonts' className="content__link"><div className="content__linkD">Fonts</div></Link>
      </div>
    </div>
  </div>
);

export default Landing;