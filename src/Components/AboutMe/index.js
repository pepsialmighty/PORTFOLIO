import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

import one from '../../images/1.jpg';
import two from '../../images/2.jpg';
import three from '../../images/3.jpg';
import four from '../../images/4.jpg';

import './AboutMe.css';
import Header from '../Header/Header';

const AboutMe = () => {
  let pic1 = useRef(null);
  let pic2 = useRef(null);
  let pic3 = useRef(null);
  let pic4 = useRef(null);
  let para = useRef(null);
  let paraLong = useRef(null);

  // useEffect(() => {
  //   gsap.from(para, {
  //     y: 60,
  //     duration: 1,
  //     delay: 0.2,
  //     opacity: 0,
  //     ease: 'power3.inOut',
  //   });
  // }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.about__content',
        start: '20px center',
        // end: '+=500',
        // toggleActions: 'restart pause reverse pause',
        // markers: true,
        scrub: 1,
      },
    });

    tl.to('.about__two', {
      yPercent: 10,
      duration: 3,
    });
    tl.to(
      '.about__four',
      {
        yPercent: -70,
        duration: 3,
      },
      '<',
    );
    tl.from(
      para,
      {
        y: 60,
        duration: 1,
        delay: 0.1,
        opacity: 0,
        ease: 'power3.inOut',
      },
      '<',
    );

    let tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: '.about__two',
        start: 'bottom center',
        // markers: true,
        scrub: 1,
      },
    });

    tl1.from(paraLong, {
      y: 60,
      duration: 0.5,
      delay: 0.1,
      opacity: 0,
      ease: 'power3.inOut',
    });
  }, []);

  return (
    <div className='about__container'>
      <div className='about__wrapper'>
        <div className='about__content'>
          <div className='about__pictures'>
            <div ref={(el) => (pic2 = el)} className='about__two images'>
              <img className='image' src={two} />
            </div>
            <div ref={(el) => (pic4 = el)} className='about__four images'>
              <img className='image' src={four} />
            </div>
          </div>
          <div ref={(el) => (para = el)} className='about__para'>
            <p>
              I'm a passionate developer based in Vaasa, Finland, who always
              craving for knowledge, aspiring to gain more experience and
              improving myself. I am not afraid to try new things, and
              creativity is my weapon.
            </p>
          </div>
        </div>
        <div className='about__me'>
          <div
            ref={(el) => (paraLong = el)}
            className='about__para about__paraLong'
          >
            <p>
              Currently I am working as a Freelancer Web-Developer while
              pursuing my Bachelor's Degree at Vaasa University of Applied
              Science. During the journey, I have a chance to work as a
              Full-Stack Developer at a Startup in Belgium. Working in a
              professional and international environment has sharpened my skill
              as well as the ability of addapting to multicultural setting.
              Beating the opponent as Myself from Yesterday is my biggest goal.
            </p>
          </div>
          <div className='about__ava'>
            <div className='about__one images'>
              {/* <img className='image' ref={(el) => (pic1 = el)} src={one} /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
