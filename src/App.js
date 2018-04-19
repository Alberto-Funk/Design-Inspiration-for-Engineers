import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Landing, General, Fonts, Colors } from './components';

const App = () => (
      <div>
        <Route exact path='/' name='Home' component={Landing} />
        <Route exact path='/General' name='General' component={General} />
        <Route exact path='/Colors' name='Colors' component={Colors} />
        <Route exact path='/Fonts' name='Fonts' component={Fonts} />
      </div>
);

export default App;
