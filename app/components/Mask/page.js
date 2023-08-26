'use client'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { animation } from './animation'



export default function MaskText() {

  const phrase2 = "Le marketing créé des tickets, Les développeurs débordés les réaliseront dans 6 mois. Et si on changeait la donne ?"

 const phrase = "Un développeur manque souvent de sensibilité marketing, un marketeur manque souvent de connaissance en développement web. J'ai décidé de croiser ses deux univers."


    const { ref, inView, entry } = useInView({
      threshold: 0.75,
      triggerOnce: true
    });
  
    return(
        <section className='bg-grey block mt-20'>
      {/* <div ref={ref} className="">
        {
          phrases.map( (phrase, index) => {
            return <div key={index} className="overflow-hidden">
              <motion.p custom={index} variants={animation} initial="initial" animate={inView ? "enter" : ""}>{phrase}</motion.p>
            </div>
          })
        }
      </div> */}

      <div className='xl:w-1/2  md:w-3/4 w-full px-6 leading-10'>

     <h4 ref={ref} className="overflow-hidden pb-20">
      {
      phrase.split(" ").map((word, index) => {
    return <span className='overflow-hidden relative inline-flex gap-2' key={index}><motion.span className="block relative mr-1 text-4xl" custom={index} variants={animation} initial="initial" animate={inView ? "enter" : ""}>{word}</motion.span></span>

        })
        }

    </h4>
    </div>
      </section>
    )
  }