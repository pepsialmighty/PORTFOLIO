import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';

import './Header.scss';

import dallas from '../../assets/images/dallas.webp';
import austin from '../../assets/images/austin.webp';
import newyork from '../../assets/images/newyork.webp';
import sanfrancisco from '../../assets/images/sanfrancisco.webp';
import beijing from '../../assets/images/beijing.webp';

import {
  staggerText,
  staggerReveal,
  staggerRevealClose,
  fadeInUp,
  handleHover,
  handleHoverExit,
  handleCityReturn,
  handleCity,
} from '../utils/Animations';

const cities = [
  { name: 'Dallas', image: dallas },
  { name: 'Austin', image: austin },
  { name: 'New York', image: newyork },
  { name: 'San Francisco', image: sanfrancisco },
  { name: 'Beijing', image: beijing },
];

const Hamburger = ({ state }) => {
  let menuLayer = useRef(null);
  let reveal1 = useRef(null);
  let reveal2 = useRef(null);
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);
  let line4 = useRef(null);

  useEffect(() => {
    // The menu is opening and we want to close it
    if (state.opened === false) {
      // close the menu
      staggerRevealClose(reveal2, reveal1);
      gsap.to(menuLayer, { duration: 1, css: { display: 'none' } });
    }
    //the menu is closing and we want to open it
    else if (
      state.opened === true ||
      (state.opened === true && state.initial === null)
    ) {
      // open the menu
      gsap.to(menuLayer, { duration: 0, css: { display: 'block' } });
      gsap.to([reveal1, reveal2], {
        duration: 0,
        opacity: 1,
        height: '100%',
      });
      staggerReveal(reveal1, reveal2);
      staggerText(line1, line2, line3, line4);
    }
  }, [state]);

  return (
    <div ref={(el) => (menuLayer = el)} className='hamburger-menu'>
      <div
        ref={(el) => (reveal1 = el)}
        className='menu-secondary-background-color'
      ></div>
      <div ref={(el) => (reveal2 = el)} className='menu-layer'>
        <div className='menu-city-background'></div>
        <div className='container'>
          <div className='wrapper'>
            <div className='menu-links'>
              <nav>
                <ul>
                  <li>
                    <Link
                      onMouseEnter={(e) => handleHover(e)}
                      onMouseOut={(e) => handleHoverExit(e)}
                      ref={(el) => (line1 = el)}
                      to='/about'
                    >
                      About me
                    </Link>
                  </li>
                  <li>
                    <Link
                      onMouseEnter={(e) => handleHover(e)}
                      onMouseOut={(e) => handleHoverExit(e)}
                      ref={(el) => (line2 = el)}
                      to='/projects'
                    >
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link
                      onMouseEnter={(e) => handleHover(e)}
                      onMouseOut={(e) => handleHoverExit(e)}
                      ref={(el) => (line3 = el)}
                      to='/contact'
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      onMouseEnter={(e) => handleHover(e)}
                      onMouseOut={(e) => handleHoverExit(e)}
                      ref={(el) => (line4 = el)}
                      to='/testimonial'
                    >
                      Testimonial
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
