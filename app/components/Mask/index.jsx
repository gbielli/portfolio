'use client'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { animation } from './animation'



export default function MaskText({phrase, className, divClass}) {

  phrase = "Le problème avec la dimension « bien être » au travail, c’est que c’est un mot valise. On pourrait presque croire qu’en étant simplement agréable au travail, cela permettrait aux collaborateurs de s’épanouir "

  
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

      <div className='w-[70%] mx-auto'>

     <h4 ref={ref} className="mx-auto w-full overflow-hidden inline-block gap-1 font-archivo justify-center text-left flex-wrap text-[42px]">
      {
      phrase.split(" ").map((word, index) => {
    return <span className='overflow-hidden relative inline-flex' key={index}><motion.span className="block relative mr-1 text-4xl" custom={index} variants={animation} initial="initial" animate={inView ? "enter" : ""}>{word}</motion.span></span>

        })
        }

    </h4>
    </div>

    <div className='mx-auto'> 
      <p className='text-center'>Hello world</p>
    </div>
      </>
    )
  }