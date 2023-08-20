'use client';

import Image from 'next/image'
import { useEffect } from 'react';
import Hero from './components/Hero/page';
import MaskText from './components/Mask/page';


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
