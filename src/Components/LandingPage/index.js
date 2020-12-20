import React, { useRef, useEffect, useState, forwardRef } from 'react';
import { Controller, Scene } from 'react-scrollmagic';
// import { TimelineMax, TweenMax, Power3 } from 'gsap';
import { Tween, Timeline } from 'react-gsap';
import * as ScrollMagic from 'scrollmagic';

import './landingPage.css';
import coffe from '../../assets/video/coffe.mp4';

import VideoPlay from '../VideoPlay/VideoPlay';

const Landing = () => {
  let videoGreeting = useRef(null);
  useEffect(() => {
    console.log(videoGreeting);
  }, []);

  return (
    <div className='landing__container'>
      <div className='intro'>
        <Controller globalSceneOptions={{ triggerHook: 'onLeave' }}>
          <Scene
            duration={5000}
            triggerElement='.intro'
            // triggerHook={0}
            // indicators={true}
          >
            {(progress) => (
              <Timeline totalProgress={progress} paused>
                <Tween from={{ opacity: 1 }} to={{ opacity: 0 }} duration={1}>
                  <h1 id='hi'>Hi there!</h1>
                </Tween>
                <Timeline target={<h1 id='hi'>I'm Nguyen</h1>}>
                  <Tween
                    from={{ opacity: 0 }}
                    to={{ opacity: 1 }}
                    duration={1}
                  />
                  <Tween to={{ opacity: 0 }} />
                </Timeline>
                <Timeline
                  target={<h1 id='hii'>And i'm a fullstack developer</h1>}
                >
                  <Tween
                    from={{ opacity: 0 }}
                    to={{ opacity: 1 }}
                    duration={1}
                  />
                  <Tween to={{ opacity: 0 }} />
                </Timeline>
              </Timeline>
            )}
          </Scene>

          <Scene
            id='vid'
            duration={5000}
            triggerElement='.intro'
            triggerHook={0}
            pin='.intro'
            // indicators={true}
          >
            <video
              // onCanPlay={() => alert('start')}
              autoPlay={true}
              loop
              ref={(el) => {
                videoGreeting = el;
              }}
              src={coffe}
              type='video/mp4'
            />
          </Scene>
        </Controller>
      </div>
      <div className='blur'></div>
      {/* <section></section> */}
    </div>
  );
};

export default Landing;
