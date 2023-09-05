'use client';

import React, { useState } from 'react';
import styles from './style.module.scss'
import { motion, AnimatePresence } from 'framer-motion';
import Link from './Link/page'


const Header = () => {
  

  const [isActive, setIsActive] = useState(false);


  return (
    <>
<div className='menu flex justify-between w-full px-6 py-6'>
      <div className='logo'>
        Guillaume Bielli
      </div>
      <div className='links flex gap-10'>
        <a>About</a>
        <a>Blog</a>
        <a>Contact</a>

      </div>

      </div>

      
      <div className='relative flex justify-between'>
      

    <AnimatePresence mode='wait'>
      {isActive && <Link />}
    </AnimatePresence>

<div onClick={() => setIsActive(prev => !prev)} className={`${styles.button} ${isActive ? styles.buttonActive : ""}`}>
  <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
</div>

      </div>
      </>
  )
}

export default Header