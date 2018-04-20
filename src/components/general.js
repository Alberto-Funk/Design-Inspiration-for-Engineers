import React from 'react';
import Layout from './layout';
import './components.css';

const General = props => (
  <Layout>
    <div className="root">
      <header>
        <h1>General Design Inspiration</h1>
      </header>
      <section className="content">
        <section className="content__links">
          <a href="https://dribbble.com/" className="content__link"><div className="content__linkDiv">Dribble</div></a>
          <a href="https://www.pages.xyz/" className="content__link"><div className="content__linkDiv">Pages</div></a>
        </section>
      </section>
    </div>
  </Layout>
);

export default General;