'use client';
import Image from 'next/image';
import React, { useRef } from 'react';
import gsap from 'gsap';
import {
    ads, 
    figma, 
    semrush, 
    tailwind, 
    piwikpro, 
    javascript, 
    floating7, 
    floating8
} from './image'


const Floating = () => {

    const plane1 = useRef(null);
    const plane2 = useRef(null);
    const plane3 = useRef(null);
    let requestAnimationFrameId = null;
    let xForce = 0;
    let yForce = 0;
    const easing = 0.08;
    const speed = 0.01;

    const manageMouseMove = (e) => {
        const { movementX, movementY } = e
        xForce += movementX * speed;
        yForce += movementY * speed;
    
        if(requestAnimationFrameId == null){
          requestAnimationFrameId = requestAnimationFrame(animate);
        }
      }

      const lerp = (start, target, amount) => start * (1 - amount) +target * amount;

  const animate = () => {
    xForce = lerp(xForce, 0, easing);
    yForce = lerp(yForce, 0, easing);
    gsap.set(plane1.current, {x: `+=${xForce}`, y: `+=${yForce}`})
    gsap.set(plane2.current, {x: `+=${xForce * 0.5}`, y: `+=${yForce * 0.5}`})
    gsap.set(plane3.current, {x: `+=${xForce * 0.25}`, y: `+=${yForce * 0.25}`})

    if(Math.abs(xForce) < 0.01) xForce = 0;
    if(Math.abs(yForce) < 0.01) yForce = 0;
    
    if(xForce != 0 || yForce != 0){
      requestAnimationFrame(animate);
    }
    else{
      cancelAnimationFrame(requestAnimationFrameId)
      requestAnimationFrameId = null;
    }
  }

  return (
    <section onMouseMove={(e) => {manageMouseMove(e)}} className='relative w-full h-[80vh] overflow-hidden bg-white'>
        <div ref={plane1} className='w-full h-full absolute'>
        <Image 
            className='absolute left-[60%] top-[70%]'
            src={ads}
            alt='image'
            width={170}
          />
           <Image 
           className='absolute left-[10%] top-[65%]'
            src={semrush}
            alt='image'
            width={140}
          />
        </div>

        <div ref={plane2} className='w-full h-full absolute'>
        <Image 
        className='absolute left-[5%] top-[10%]'
            src={piwikpro}
            alt='image'
            width={140}
          />
           <Image 
           className='absolute left-[80%] top-[5%]'
            src={javascript}
            alt='image'
            width={140}
          />
        </div>

        <div ref={plane3} className='w-full h-full absolute'>
        <Image 
            className='absolute left-[55%] top-[2.5%]'
            src={tailwind}
            alt='image'
            width={140}
          />
           <Image 
            className='absolute left-[40%] top-[55%]'
            src={figma}
            alt='image'
            width={140}
          />
        </div>
        <div className='absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 text-center'>
        <h1 className='text-4xl font-clash'>Mes outils préférés</h1>
        <p>l'outil ne fait pas le moine</p>
      </div>
    </section>
  )
}

export default Floating