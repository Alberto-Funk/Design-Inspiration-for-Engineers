import React from 'react';
import Layout from '../layout';


const General = props => (
  <Layout>
    <div className="root">
      <header>
        <h1>General Design Inspiration</h1>
      </header>
      <section className="content">
        <section className="links">
          <p>links here</p>
        </section>
      </section>
    </div>
    <style jsx scoped>
      {`
    .root {
      max-width: 1440px;
      margin: 0 auto;
      padding: 20px;
    }
    `}
    </style>
  </Layout>
);

export default General;