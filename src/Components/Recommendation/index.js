import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

import './Recommendation.css';
import one from '../../assets/images/testi1.jpg';
import two from '../../assets/images/testi2.jpg';
import three from '../../assets/images/testi3.jpg';

const Recommendation = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.recommendation__container',
        start: 'top-=80 top',
        scrub: 1,
        // markers: true,
      },
    });

    window.innerWidth >= 600
      ? tl.to('.recommendation__background', {
          y: -400,
        })
      : tl.to('.recommendation__background', {
          y: -20,
        });

    tl.to(
      '.recommendation__content',
      {
        y: 100,
      },
      '<',
    );
  }, []);

  useEffect(() => {
    console.log(window.innerWidth);
  });

  return (
    <div className='recommendation__container'>
      <div className='recommendation__background'>
        <img src={three} />
      </div>
      <div className='recommendation__content'>
        <h1>Testimonial</h1>
        <p>
          Nguyen Nguyen has worked for me as an intern Frontend / Fullstack
          developer since January 2020 and continued to work until 31st of
          August 2020. He helped with the implementation of a new section in our
          application and was responsible for several new features within the
          application.
        </p>
        <p>
          When Nguyen joined Plannr.eu, he did not have any previous experience
          with some of the technologies he had to workin, but as a fast learner
          that isn’t afraid of doing some extra self-study, he quickly gained
          experience.
        </p>
        <p>I highly recommend Nguyen as an entry-level fullstack developer.</p>
        <p>Sincerely,</p>
        <p>Pieter Moeremans</p>
      </div>
      <div className='blur'></div>
    </div>
  );
};

export default Recommendation;
