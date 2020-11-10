import React, { useState, useEffect } from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './Components/Header/Header';
import Landing from './Components/LandingPage';
import Recommendation from './Components/Recommendation';
import AboutMe from './Components/AboutMe';
import Home from './Components/Home';
import Resume from './Components/Resume';

import ScrollToTop from './Components/utils/ScrollToTop';

function Routes() {
  return (
    <Router forceRefresh={true}>
      <div className='app'>
        <ScrollToTop>
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={AboutMe} />
            <Route exact path='/solutions' component={Recommendation} />
            <Route exact path='/contact-us' component={Resume} />
          </Switch>
        </ScrollToTop>
      </div>
    </Router>
  );
}

export default Routes;