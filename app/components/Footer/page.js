import React from 'react'
import Image from 'next/image'
import Message from '../../../public/images/message.svg';
import Phone from '../../../public/images/phone.svg'
import Avatar from '../../../public/images/gb-avatar.png'

const Footer = () => {
  return (
    <div className=' bg-black'>
      <div className="bloc flex flex-col gap-5  px-10 py-5 mx-auto h-full justify-between">

        <div className='flex flex-col gap-10 pt-5 md:pt-10'>
        <div className="title-footer flex gap-3 relative">
          <div className='image absolute md:top-0'>
          <Image className='object-cover w-[60px] md:w-[80px]' src={Avatar} width={80} height={80} />
          </div>
          <div className='indent-[70px] md:indent-[100px]  '>
          <h2 className='footer-text font-clash text-white lg:w-3/4 xl:w-3/5  lg:leading-[72px]'>Et si on prenait le temps de se connaître ou de partager un café ?</h2>

          </div>
        </div>
      
        <div className='button text-white flex flex-wrap gap-5 mb-20 md:mb-40'>
          <button className='flex gap-3 border border-white px-10 py-5 rounded-full'>
          <Image src={Message} />
          <span>guillaume.bielli@gmail.com</span></button>
          <button className='flex gap-3 border border-white px-10 py-5 rounded-full'>
          <Image src={Phone} />
          <span>0622895608</span></button>
        </div>
        </div>
        <div class="link w-full text-white flex-col justify-between">
        <div className='w-full h-[0.5px] bg-white mx-auto mb-4'>
        </div>

        <div className='flex justify-between'>
        <div>
          <a href="">©Guillaume Bielli - 2023</a>
          </div>
          <div className='flex gap-5'>
          <a href="">Linkedin</a>
        <a href="">Github</a>
          </div>
        </div>
        
   
      

        </div>
      </div>
    </div>
  )
}

export default Footer