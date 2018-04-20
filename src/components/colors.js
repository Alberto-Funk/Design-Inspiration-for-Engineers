import React from 'react';
import Layout from './layout';
import './components.css';

const Colors = props => (
  <Layout>
    <div className="root">
      <header>
        <h1>Color Inspiration</h1>
      </header>
      <section className="content">
        <section className="content__links">
          <a href="https://www.w3schools.com/colors/colors_picker.asp" className="content__link"><div className="content__linkDiv">w3school's Color Picker</div></a>
          <a href="https://color.adobe.com/create/color-wheel/" className="content__link"><div className="content__linkDiv">Adobe Color CC</div></a>
          <a href="http://paletton.com/#uid=1000u0kllllaFw0g0qFqFg0w0aF" className="content__link"><div className="content__linkDiv">Paletton</div></a>
        </section>
      </section>
    </div>
  </Layout>
);

export default Colors;