import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from './breadcrumbs';
import './layout.css';

const Layout = props => (
  <div className="page">
    <header>
      <div className="content">
        <div className="logo">
        <Link to="/" className="navLink"><img src="/images/logo.png" alt="Design Inspiration for Engineers" className="header__img" /></Link>
        </div>
      </div>
    </header>
    <div className="navigation">
      <Breadcrumbs />
      <nav>
        <Link to="/" className="navLink"><div className="navDiv">Home</div></Link>
        <Link to="/General" className="navLink"><div className="navDiv">General</div></Link>
        <Link to="/Colors" className="navLink"><div className="navDiv">Colors</div></Link>
        <Link to="/Fonts" className="navLink"><div className="navDiv">Fonts</div></Link>
      </nav>
    </div>
    <section className="pageContent">
      {props.children}
    </section>
  </div>
);

export default Layout;