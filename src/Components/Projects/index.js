import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

import './Projects.css';
import pepsigram from '../../assets/images/pepsigram.jpg';
import instagram from '../../assets/images/instagram.jpg';
import netflix from '../../assets/images/netflix.jpg';
import amazon from '../../assets/images/amazon.jpg';

const Project = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // let sections = gsap.utils.toArray('.projects');

    // gsap.to(sections, {
    //   xPercent: -100 * (sections.length - 1),
    //   ease: 'none',
    //   scrollTrigger: {
    //     trigger: '.projects__container',
    //     pin: true,
    //     scrub: 1,
    //     snap: 1 / (sections.length - 1),
    //     // base vertical scrolling on how wide the container is so it feels more natural.
    //     end: () =>
    //       '+=' + document.querySelector('.projects__container').offsetWidth,
    //   },
    // });

    let duration = 1,
      sections = gsap.utils.toArray('.projects'),
      sectionIncrement = duration / (sections.length - 1),
      tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.projects__container',
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          start: 'top top',
          end: '+=5000',
        },
      });

    tl.to(sections, {
      xPercent: -100 * (sections.length - 1),
      duration: duration,
      ease: 'none',
    });

    gsap.from(
      '.projects__title',
      {
        scrollTrigger: {
          trigger: '.projects__container',
          start: 'top-=100 top',

          toggleActions: 'play reverse restart reverse ',
        },

        y: 100,
        opacity: 0,
      },
      '<',
    );

    // everything below this is just for the fading/scaling up which is NOT scrubbed - it's all dynamic, triggered when each section enters/leaves so that the fading/scaling occurs at a consistent rate no matter how fast you scroll!
    sections.forEach((section, index) => {
      let tween = gsap.from(section, {
        opacity: 0,
        scale: 0.6,
        duration: 1,
        force3D: true,
        paused: true,
      });
      addSectionCallbacks(tl, {
        start: sectionIncrement * (index - 0.99),
        end: sectionIncrement * (index + 0.99),
        onEnter: () => tween.play(),
        onLeave: () => tween.reverse(),
        onEnterBack: () => tween.play(),
        onLeaveBack: () => tween.reverse(),
      });
      index || tween.progress(1); // the first tween should be at its end (already faded/scaled in)
    });

    // helper function that lets us define a section in a timeline that spans between two times (start/end) and lets us add onEnter/onLeave/onEnterBack/onLeaveBack callbacks
    function addSectionCallbacks(
      timeline,
      { start, end, param, onEnter, onLeave, onEnterBack, onLeaveBack },
    ) {
      let trackDirection = (animation) => {
          // just adds a "direction" property to the animation that tracks the moment-by-moment playback direction (1 = forward, -1 = backward)
          let onUpdate = animation.eventCallback('onUpdate'), // in case it already has an onUpdate
            prevTime = animation.time();
          animation.direction = animation.reversed() ? -1 : 1;
          animation.eventCallback('onUpdate', () => {
            let time = animation.time();
            if (prevTime !== time) {
              animation.direction = time < prevTime ? -1 : 1;
              prevTime = time;
            }
            onUpdate && onUpdate.call(animation);
          });
        },
        empty = (v) => v; // in case one of the callbacks isn't defined
      timeline.direction || trackDirection(timeline); // make sure direction tracking is enabled on the timeline
      start >= 0 &&
        timeline.add(
          () =>
            ((timeline.direction < 0 ? onLeaveBack : onEnter) || empty)(param),
          start,
        );
      end <= timeline.duration() &&
        timeline.add(
          () =>
            ((timeline.direction < 0 ? onEnterBack : onLeave) || empty)(param),
          end,
        );
    }
  }, []);

  return (
    <div className='projects__container'>
      <div className='projects'>
        <div className='projects__title'>
          <h1>My Projects</h1>
        </div>
      </div>
      <div className='projects'>
        <div className='projects__name'>
          <h1>Facebook Messenger Clone</h1>
          <p className='projects__content'>
            It is an online chatting app with an authentication system, where
            User can Signup and Signin. This project was inspired from the
            Facebook Messenger App
          </p>
        </div>
        <div className='projects__picture'>
          <a
            className='projects__cover'
            href='https://facebook-messenger-clone-aa5e3.web.app/'
          >
            <img src={pepsigram} />
          </a>
        </div>
      </div>
      <div className='projects'>
        <div className='projects__name'>
          <h1>Instagram Clone</h1>
          <p className='projects__content'>
            It is a social media app where User can share their moment by
            posting picture, and express their feelings toward other picture via
            the comment functionality. This project was inspired from the
            Instagram.
          </p>
        </div>
        <div className='projects__picture'>
          <a
            className='projects__cover'
            href='https://instagram-clone-react-68abe.web.app/'
          >
            <img src={instagram} />
          </a>
        </div>
      </div>
      <div className='projects'>
        <div className='projects__name'>
          <h1>Netflix Clone</h1>
          <p className='projects__content'>
            This is a pet project where I got inspired from Netflix. The
            application fetchs movies API from The Movie Database and Display
            the trailer of the movie.
          </p>
        </div>
        <div className='projects__picture'>
          <a
            className='projects__cover'
            href='https://netflix-clone-7000d.web.app/'
          >
            <img src={netflix} />
          </a>
        </div>
      </div>
      <div className='projects'>
        <div className='projects__name'>
          <h1>Amazon Clone</h1>
          <p className='projects__content'>
            This is a pet project where I got inspired from Amazon. The
            application use ContextApi to store the products from the User then
            calculates the total amount in the Checkout section. A funny thing
            about this projects is when I first show it to my friends, their
            expression was like "Wow, it works just like Amazon!".
          </p>
        </div>
        <div className='projects__picture'>
          <a className='projects__cover' href='https://clone-f4d5d.web.app/'>
            <img src={amazon} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
