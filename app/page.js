'use client';

import Image from 'next/image'
import { useEffect } from 'react';
import Hero from './components/Hero';
import MaskText from './components/Mask';
import { Mako } from 'next/font/google';

export default function Home() {

  useEffect( () => {
    const initializeLocomotiveScroll = async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const locomotiveScroll = new LocomotiveScroll();

    }
    initializeLocomotiveScroll(); 
  
  }, [])



  return (
    <>
    <Hero />
    <MaskText />
    </>
  )
}
