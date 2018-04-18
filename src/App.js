import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Landing, General, Fonts, Colors } from './components';

const App = () => (
      <div>
        <Route exact path='/' component={Landing} />
        <Route exact path='/General' component={General} />
        <Route exact path='/Colors' component={Colors} />
        <Route exact path='/Fonts' component={Fonts} />
      </div>
);

export default App;
