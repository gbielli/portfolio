'use client'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { animation } from './animation'



export default function MaskText({phrase, className, divClass}) {

  
    const { ref, inView, entry } = useInView({
      threshold: 0.75,
      triggerOnce: true
    });
  
    return(
        <>
      {/* <div ref={ref} className="">
        {
          phrases.map( (phrase, index) => {
            return <div key={index} className="overflow-hidden">
              <motion.p custom={index} variants={animation} initial="initial" animate={inView ? "enter" : ""}>{phrase}</motion.p>
            </div>
          })
        }
      </div> */}

      <div ref={ref} className={divClass}>
      {
      phrase.split(" ").map((word, index) => {
    return <p key={index} className="overflow-hidden">
              <motion.span className={className} custom={index} variants={animation} initial="initial" animate={inView ? "enter" : ""} style={{ display: "inline-block" }}>{word}</motion.span>
            </p>
        })
        }
    </div>
      </>
    )
  }