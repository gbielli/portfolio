'use client';
import Image from 'next/image';
import React, { useRef } from 'react';
import {motion, useTransform, useScroll } from 'framer-motion';



const Floating = () => {


    const container = useRef(null);
   


    const { scrollYProgress } = useScroll({
      target: container,
      offset: ["start end", "end start"]
  })




  return (
    <section className=' w-full z-1 relative z-10 h-[400px]' ref={container}>

        <div className=''>
        <h1 className='text-4xl font-clash'>Mes outils préférés</h1>
        <p>l&apos;outil ne fait pas le moine</p>
      </div>
  
    </section>
  )
}

export default Floating