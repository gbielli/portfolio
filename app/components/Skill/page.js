import React from 'react'
import arrow  from '@/public/images/arrow-down.svg'
import Image from 'next/image'

const Skill = () => {
  return (
    <section className='py-40 px-2 md:px-20 z-1 relative'>
        <div className=''>
            <div>
            <h2 className='font-archivo text-xl text-[#808080]'>Je peux vous aider sur ...</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-1 mt-10 cursor-pointer">

            <div className="border-b border-t border-[#d4d4d4]">
                <div className='item font-archivo flex items-center justify-between py-[3.5rem] hover:text-[#c3c4c9] hover:translate-x-2.5 transition-all duration-300'>
                    <div className='flex items-center md:gap-10 h-full flex-col md:flex-row md:text-left'>
                    <div className="title flex w-full">
                    <h3 className='font-skills text-[55px] font-clash pb-4 relative'>Acquisition client</h3>
                    <div className='font-archivo text-[#c3c4c9] text-sm font-normal ml-1 translate-y-3'>01</div>
                    </div>
                    <p className='md:w-2/3'>Je développe votre stratégie SEO et SEA avec une logique data-driven et des outils d'automisation.</p>
                    </div>
                </div>
            </div>

                <div className="border-b border-t border-[#d4d4d4]">
                <div className='item font-archivo flex items-center justify-between py-[3.5rem] hover:text-[#c3c4c9] hover:translate-x-2.5 transition-all duration-300'>
                    <div className='flex items-center md:gap-10 h-full flex-col md:flex-row md:text-left w-full'>
                    <div className="title flex w-full">
                    <h3 className='font-skills text-[55px] font-clash pb-4 relative'>User experience</h3>
                    <div className='font-archivo text-[#c3c4c9] text-sm font-normal ml-1 translate-y-3'>02</div>
                    </div>
                    <p className='md:w-2/3'>Je vous accompagne sur le plan créatif et technique pour développer une expérience utilisateur mémorable.</p>
                    </div>
                </div>
                </div>

                <div className="border-b border-t border-[#d4d4d4]">
                <div className='item font-archivo flex items-center justify-between py-[3.5rem] hover:text-[#c3c4c9] hover:translate-x-2.5 transition-all duration-300'>
                    <div className='flex items-center md:gap-10 h-full flex-col md:flex-row md:text-left w-full'>
                        <div className="title flex w-full">
                    <h3 className='font-skills text-[55px] font-clash pb-4 relative'>Web Analytics</h3>
                    <div className='font-archivo text-[#c3c4c9] text-sm font-normal ml-1 translate-y-3'>03</div>
                    </div>
                    <p className='md:w-2/3 '>Je mets en place votre suivi avec des outils RGPD compliant comme peut l'être Matomo ou Piwik Pro.</p>
                    </div>
                </div>
            </div>

            
            </div>
            <div className='mt-20 text-center w-full block'>
            <button className='border border-black px-10 py-5 rounded-full text-center'>
          <span>En savoir plus</span></button>
          </div>
        </div>
        
    </section>
  )
}

export default Skill