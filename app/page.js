'use client';

import Image from 'next/image'
import { useEffect } from 'react';
import Hero from './components/Hero/page';
import MaskText from './components/Mask/page';
import Slider from './components/Slider/page'
import Skill from './components/Skill/page'
import Floating from './components/Floating/page';


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
    <Slider />
    <Skill />
    <Floating />
    </>
  )
}
