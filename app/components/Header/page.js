'use client';

import React, { useState, useRef, useLayoutEffect } from 'react';
import styles from './style.module.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AnimatePresence } from 'framer-motion';
import Link from './Link/page';


const Header = () => {
  

  const [isActive, setIsActive] = useState(false);
  const button = useRef(null);

  useLayoutEffect( () => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.to(button.current, {
        scrollTrigger: {
            trigger: document.documentElement,
            start: 0,
            end: window.innerHeight,
            onLeave: () => {gsap.to(button.current, {scale: 1, duration: 0.25, ease: "power1.out"})},
            onEnterBack: () => {gsap.to(button.current, {scale: 0, duration: 0.25, ease: "power1.out"},setIsActive(false))}
        }
    })
}, [])


  return (
    <>
<div className='menu flex justify-between w-full px-6 py-6 absolute z-4'>
      <div className='logo'>
        Guillaume Bielli
      </div>
      <div className='links flex gap-10 cursor-pointer'>
        <a className="relative w-fit block after:block after:content-[''] after:absolute after:h-[1px] after:rounded-full after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">About</a>
        <a className="relative w-fit block after:block after:content-[''] after:absolute after:h-[1px] after:rounded-full after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">Blog</a>
        <a className="relative w-fit block after:block after:content-[''] after:absolute after:h-[1px] after:rounded-full after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">Contact</a>

      </div>

      </div>

      
      <div className='flex justify-between'>
      

    <AnimatePresence mode='wait'>
      {isActive && <Link />}
    </AnimatePresence>


<div  ref={button} onClick={() => setIsActive(prev => !prev)} className={`${styles.button} ${isActive ? styles.buttonActive : ""}`}>
  <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
</div>

      </div>
      </>
  )
}

export default Header