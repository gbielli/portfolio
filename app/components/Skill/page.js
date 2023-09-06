import React from 'react'
import arrow  from '@/public/images/arrow-down.svg'
import Image from 'next/image'

const Skill = () => {
  return (
    <section className='py-40 px-20 z-1 relative'>
        <div className=''>
            <div>
            <h2 className='font-archivo text-xl text-[#808080]'>Je peux vous aider sur ...</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-1 mt-10 cursor-pointer">

            <div className="border-b border-t border-[#d4d4d4]">
                <div className='item font-archivo flex items-center justify-between py-[3.5rem] hover:text-[#808080] hover:translate-x-2.5 transition-all duration-300'>
                    <div className='flex items-center gap-10 h-full'>
                    <h2 className='text-[55px] font-clash pb-4 w-full'>Acquisition client</h2>
                    <p className='md:w-2/3 w-4/5 justify-end'>With a solid track record in designing websites and apps, I deliver strong and user-friendly digital designs.</p>
                    </div>
                </div>
            </div>

                <div className="border-b border-t border-[#d4d4d4]">
                <div className='item font-archivo flex items-center justify-between py-[3.5rem] hover:text-[#808080] hover:translate-x-2.5 transition-all duration-300'>
                    <div className='flex items-center gap-10 h-full'>
                    <h2 className='text-[55px] font-clash pb-4 w-full'>User Experience</h2>
                    <p className='md:w-2/3 w-4/5 justify-end'>With a solid track record in designing websites and apps, I deliver strong and user-friendly digital designs.</p>
                    </div>
                </div>
                </div>

                <div className="border-b border-t border-[#d4d4d4]">
                <div className='item font-archivo flex items-center justify-between py-[3.5rem] hover:text-[#808080] hover:translate-x-2.5 transition-all duration-300'>
                    <div className='flex items-center gap-10 h-full'>
                    <h2 className='text-[55px] font-clash pb-4 w-full'>Web Analytics</h2>
                    <p className='md:w-2/3 w-4/5 justify-end'>With a solid track record in designing websites and apps, I deliver strong and user-friendly digital designs.</p>
                    </div>
                </div>
            </div>

            </div>
        </div>
        
    </section>
  )
}

export default Skill