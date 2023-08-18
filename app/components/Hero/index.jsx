import React from 'react';
import MaskText from '../Mask';
import ReactCurvedText from 'react-curved-text';
import Image from 'next/image';
import arrow from '../../../public/images/arrow.svg'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {animation} from './animation';
// import { useInView } from 'react-intersection-observer';

const Hero = () => {

  const { ref, inView, entry } = useInView({
    threshold: 0.75,
    triggerOnce: true
  });

  const text = "Digital worker";




  return (
    <>

      <div className='h-screen flex items-center bg-grey'>

        <div className='px-6 w-full text-gray-200 flex flex-col items-center flex-1 gap-20 h-screen pt-20' >

          <div className='img self-start ml-5 relative'>
            <Image
            priority
            src={arrow}
            alt='arrow'
            className='w-[30px] h-[30px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'/>
            <div>
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
            textProps={{ style: { fontSize: 24 } }}
            textPathProps={null}
            tspanProps={null}
            ellipseProps={null}
            svgProps={null}
            className="absolute bottom-0"
        />
        </div>
          </div>
          <div className='inline-flex mx-auto gap-5'>

          <div ref={ref} className="">
      {
      text.split(" ").map((word, index) => {
    return <p key={index} className="overflow-hidden text-clamp font-clash leading-none">
              <motion.span className="" custom={index} variants={animation} initial="initial" animate={inView ? "enter" : ""} style={{ display: "inline-block" }}>{word}</motion.span>
            </p>
        })
        }
    </div>
            <div className='self-end max-w-xs mb-7 overflow-hidden inline'>
              <motion.p variants={animation} initial="initial" animate={inView ? "enter" : ""}>J'aide les entreprises à développer l'acquisition client (SEO, SEA, automation), la User Experience et la Web Analyse.</motion.p>
              </div>
          </div>

        </div>
      </div>
    </>

  )

}

export default Hero