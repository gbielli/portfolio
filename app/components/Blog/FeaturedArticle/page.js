import React from 'react'
import arrow from '@/public/images/arrow-top-right.svg'
import Image from 'next/image'


const FeaturedArticle = () => {


  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10  mb-[300px] mx-6'>

      <div className=''>
        <div className=''>
          <img className="object-cover w-full h-full rounded-lg height-[200px]" src="https://media.graphassets.com/YalJEww9QVauy38odGbU" alt="" />
        </div>
        <div className="pt-3">
          <div className="flex">
            <h3 className='font-clash text-2xl'>Matomo vs Google Analytics : quelles différences et comment choisir ?</h3>
            <Image className='self-start pt-1' src={arrow} />
          </div>
          <p className='mt-1'>Depuis la mise en demeure de Google analytics par la CNIL, des alternatives fleurissent dans le monde du web analytics, comme par exemple Matomo, l&apos;outil RGPD compliant par excellence.</p>
          <div className="tag mt-3 inline-flex gap-2">
            <p className='border border-black px-3 py-1 rounded-full'>Matomo</p>
            <p className='border border-black px-3 py-1 rounded-full'>Web analytics</p>
          </div>
        </div>
        
      </div>



      
      <div className=''>
        <div className=''>
          <img className="object-cover w-full h-full rounded-lg height-[200px]" src="https://media.graphassets.com/YalJEww9QVauy38odGbU" alt="" />
        </div>
        <div className="pt-3">
          <div className="flex">
            <h3 className='font-clash text-2xl'>Matomo vs Google Analytics : quelles différences et comment choisir ?</h3>
            <Image className='self-start pt-1' src={arrow} />
          </div>
          <p className='mt-1'>Depuis la mise en demeure de Google analytics par la CNIL, des alternatives fleurissent dans le monde du web analytics, comme par exemple Matomo, l&apos;outil RGPD compliant par excellence.</p>
          <div class="tag mt-3 inline-flex gap-2">
            <p className='border border-black px-3 py-1 rounded-full'>Matomo</p>
            <p className='border border-black px-3 py-1 rounded-full'>Web analytics</p>
          </div>
        </div>
        
      </div>


      <div className=''>
        <div className=''>
          <img className="object-cover w-full h-full rounded-lg height-[200px]" src="https://media.graphassets.com/YalJEww9QVauy38odGbU" alt="" />
        </div>
        <div className="pt-3">
          <div className="flex">
            <h3 className='font-clash text-2xl'>Matomo vs Google Analytics : quelles différences et comment choisir ?</h3>
            <Image className='self-start pt-1' src={arrow} />
          </div>
          <p className='mt-1'>Depuis la mise en demeure de Google analytics par la CNIL, des alternatives fleurissent dans le monde du web analytics, comme par exemple Matomo, l&apos;outil RGPD compliant par excellence.</p>
          <div class="tag mt-3 inline-flex gap-2">
            <p className='border border-black px-3 py-1 rounded-full'>Matomo</p>
            <p className='border border-black px-3 py-1 rounded-full'>Web analytics</p>
          </div>
        </div>
        
      </div>


    </div>
  )
}

export default FeaturedArticle