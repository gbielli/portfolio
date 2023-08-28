'use client';

import React, { useEffect, useRef, useLayoutEffect } from 'react';
import ReactCurvedText from 'react-curved-text';
import Image from 'next/image';
import arrow from '../../../public/images/arrow.svg'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ScrollTrigger } from 'gsap/all';
import {animation} from './animation';
import { gsap } from 'gsap';

const Hero = () => {


  const textAnimation = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = 5;

  useLayoutEffect( () => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(textAnimation.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: e => direction = e.direction * -7
      }})
    requestAnimationFrame(animate);
  })

  const animate = () => {
    gsap.set(textAnimation.current, {rotate: xPercent})
    requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  }



  const { ref, inView, entry } = useInView({
    threshold: 0.75,
    triggerOnce: true
  });

  const text = "Digital worker";




  return (
    <>

      <div className='h-screen flex items-center bg-grey'>

        <div className='px-6 w-full text-gray-200 flex flex-col items-center flex-1 gap-10 pt-20' >

          <div className='img self-start relative'>
            <Image
            priority
            src={arrow}
            alt='arrow'
            className='w-[30px] h-[30px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'/>
            <div ref={textAnimation}>
            <ReactCurvedText
            width={240}
            height={240}
            cx={120}
            cy={120}
            rx={60}
            ry={60}
            startOffset={20}
            reversed={false}
            text="- digital specialist - digital specialist"
            textProps={{ style: { fontSize: 23 } }}
            textPathProps={null}
            tspanProps={null}
            ellipseProps={null}
            svgProps={null}
            className="absolute bottom-0"
        />
        </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 mx-auto gap-5'>

          <h1 ref={ref} className="col-span-2 leading-none">
      {
      text.split(" ").map((word, index) => {
    return <span className='overflow-hidden relative inline-flex' key={index}><motion.span className="text-[17vw] font-clash text-black" custom={index} variants={animation} initial="initial" animate={inView ? "enter" : ""} style={{ display: "inline-block" }}>{word}</motion.span></span>
            
        })
        }
    </h1>
            <div className='col col-span-1 self-end max-w-xs mb-7 overflow-hidden'>
              <motion.p className='text-[1.1em]' variants={animation} initial="initial" animate={inView ? "enter" : ""}>J&apos;aide les entreprises à développer l&apos;acquisition client (SEO, SEA, automation), la User Experience et la Web Analyse.</motion.p>
              </div>
          </div>

        </div>
      </div>
    </>

  )

}

export default Hero