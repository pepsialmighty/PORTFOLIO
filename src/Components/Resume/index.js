import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

import './Resume.css';

const Resume = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // gsap.defaults({ ease: 'none', duration: 2 });

    // let tl = gsap.timeline();

    // tl.from('.orange', { xPercent: -100 })
    //   .from('.blue', { xPercent: 100 })
    //   .from('.red', { yPercent: -100 });

    gsap.utils.toArray('.square').forEach((square, i) => {
      ScrollTrigger.create({
        // animation: tl,
        trigger: square,
        start: ' top top',
        //   end: '+=4000',
        //   scrub: true,
        pin: true,
        pinSpacing: false,
        // anticipatePin: 1,
        // markers: true,
      });
    });
  }, []);

  return (
    <div className='go'>
      <div className='green square'>SECTION</div>
      <section className='orange square'>SECTION</section>
      <section className='blue square'>SECTION</section>
      <section className='red square'>SECTION</section>
    </div>
  );
};

export default Resume;
