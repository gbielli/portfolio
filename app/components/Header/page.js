'use client';

import React, { useState } from 'react';
import styles from './style.module.scss'

const Header = () => {

  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <div onClick={() => setIsActive(prev => !prev)} className={styles.button}>
      <div className='text-white'>Menu</div>
        <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>

      </div>
    </>
  )
}

export default Header