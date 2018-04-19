import React from 'react';
import Layout from './layout';


const Colors = props => (
  <Layout>
    <div className="root">
      <header>
        <h1>Color Inspiration</h1>
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
        background: #ffffff;
        max-width: 1440px;
        margin: 0 auto;
        box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.1);
        padding: 20px;
        border-radius: 4px;
      }
      header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;        
      }
    `}
    </style>
  </Layout>
);

export default Colors;