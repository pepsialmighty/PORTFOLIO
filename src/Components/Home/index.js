import React from 'react';
import './Home.css';

import AboutMe from '../AboutMe';
import Landing from '../LandingPage';
import SectionWipes from '../Recommendation';
import Header from '../Header/Header';
import Resume from '../Resume';

const Home = () => {
  return (
    <div className='home'>
      <Landing />
      <AboutMe />
      <Resume />
    </div>
  );
};

export default Home;
