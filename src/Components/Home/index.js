import React from 'react';
import './Home.css';

import AboutMe from '../AboutMe';
import Landing from '../LandingPage';
import Recommendation from '../Recommendation';
import Header from '../Header/Header';
import Resume from '../Resume';
import Project from '../Projects';
import Contact from '../contact/contact';
import Footer from '../Footer/footer';

const Home = () => {
  return (
    <div className='home'>
      <Landing />
      <AboutMe />
      <Project />
      <Recommendation />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
