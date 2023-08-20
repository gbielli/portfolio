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
        <section className='bg-grey block'>
      {/* <div ref={ref} className="">
        {
          phrases.map( (phrase, index) => {
            return <div key={index} className="overflow-hidden">
              <motion.p custom={index} variants={animation} initial="initial" animate={inView ? "enter" : ""}>{phrase}</motion.p>
            </div>
          })
        }
      </div> */}

      <div className='w-2/3 px-6'>

     <h4 ref={ref} className="overflow-hidden">
      {
      phrase.split(" ").map((word, index) => {
    return <span className='overflow-hidden relative inline-flex gap-2' key={index}><motion.span className="block relative mr-1 text-3xl" custom={index} variants={animation} initial="initial" animate={inView ? "enter" : ""}>{word}</motion.span></span>

        })
        }

    </h4>
    </div>

    <div className='mx-auto'> 
      <p className='text-center font-clash'>Créer une expérience,</p>
    </div>
      </section>
    )
  }