import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between px-6 py-4 mx-auto absolute top-0 w-full text-black '>
          <div className=' bg-slate-200'>Guillaume Bielli</div>
          <div className='flex gap-10'>
            <a href="">À propos</a>
            <a href="">Blog</a>
            <a href="">Contact</a>
          </div>

    </div>)
}

export default Header