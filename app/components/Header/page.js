'use client';

import React, { useState } from 'react';
import styles from './style.module.scss'
import { motion, AnimatePresence } from 'framer-motion';
import Link from './Link/page'


const Header = () => {
  

  const [isActive, setIsActive] = useState(false);


  return (
    <div className="relative z-10 box-border">
      <div className='relative flex justify-between'>

    <AnimatePresence mode='wait'>
      {isActive && <Link />}
    </AnimatePresence>

<div onClick={() => setIsActive(prev => !prev)} className={`${styles.button} ${isActive ? styles.buttonActive : ""}`}>
  <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
</div>

      </div>
    
    
    </div>
  )
}

export default Header