import React from 'react'
import { height } from '../anim';
import { motion } from 'framer-motion';
import { menuSlide, slide, scale  } from '../anim';

const navItems = [
    {
        title: "À propos",
        href: "/apropos"
    },
    {
        title: "Blog",
        href: "/blog"
    },
    {
        title: "Contact",
        href: "/contact"
    }
]

const Nav = () => {

  return (
    <motion.div variants={menuSlide} initial="initial" animate="enter" exit="exit"  className='overflow-hidden bg-black fixed top-0 right-0 w-full'>
       <div className="wrapper flex gap-10 py-10 px-10 text-white">
        {navItems.map((item, index) => {
            return <a className='text-3xl' key={index} href={item.href}>{item.title}</a>
        })}
       </div>
    </motion.div>
  )
}

export default Nav