import React from 'react'

const BlogTitle = () => {
  return (
 <>
<section className='pt-20 px-6'>
    <div className=' text-[12vw] leading-[10vw] font-clash'>Mes articles<span className='block'>& tutoriels</span></div>
    <p className='text-2xl max-w-xl pt-10'>Passionné par le web depuis longtemps, J&apos;explore et je vous partage mes expériences sur l&apos;Acquisition, le Web Analytics et l&apos;Automation.</p>
    <div className='h-[1px] bg-[#d4d4d4] w-full mt-20'></div>
    <div className='button text-black flex flex-wrap gap-5 mb-10 md:mb-10 mt-10'>
    <button className='flex gap-3 border border-black px-10 py-4 rounded-full items-center'>
          <span>Tous</span></button>
          <button className='flex gap-3 border border-black px-10 py-4 rounded-full items-center'>
          <span>Matomo</span></button>
          <button className='flex gap-3 border border-black px-10 py-4 rounded-full'>
          <span>Automation</span></button>
          <button className='flex gap-3 border border-black px-10 py-4 rounded-full'>
          <span>Google Tag Manager</span></button>
          <button className='flex gap-3 border border-black px-10 py-4 rounded-full'>
          <span>Piwik Pro</span></button>
        </div>
</section>
</>
  )
}

export default BlogTitle