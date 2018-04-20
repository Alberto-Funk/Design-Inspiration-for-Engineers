import React from 'react';
import Layout from './layout';
import './components.css';

const Fonts = props => (
  <Layout>
    <div className="root">
      <header>
        <h1>Font Inspiration</h1>
      </header>
      <section className="content">
        <section className="content__links">
          <a href="https://www.typewolf.com/" className="content__link"><div className="content__linkDiv">Typewolf</div></a>
          <a href="https://fontpair.co/" className="content__link"><div className="content__linkDiv">Font Pair</div></a>
          <a href="https://www.reliablepsd.com/ultimate-google-font-pairings/" className="content__link"><div className="content__linkDiv">Google Font Pairings</div></a>
          <a href="https://fontsinuse.com/" className="content__link"><div className="content__linkDiv">Fonts In Use</div></a>
        </section>
      </section>
    </div>
  </Layout>
);

export default Fonts;