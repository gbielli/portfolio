'use client'

import React from 'react'
import { height } from '../anim';
import { motion } from 'framer-motion';
import { menuSlide, translate, blur  } from '../anim';

const navItems = [
    {
        title: "À  propos",
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

const Nav = ({selectedLink, setSelectedLink}) => {


    const getChars = (word) => {
        let chars = [];
        word.split("").forEach((char, i) => {
            chars.push(
            <motion.span 
            className='inline-block uppercase select-none'
            variants={translate}
            custom={[i * 0.02, (word.length - i) * 0.01]}
            initial="initial"
            animate="enter"
            exit="exit"
            key={char + i}
            >
                {char}
            </motion.span>
            
            )
        })
        return chars
    }

  return (
    <motion.div variants={menuSlide} initial="initial" animate="enter" exit="exit"  className=' bg-black fixed top-0 right-0 w-full h-screen md:h-auto'>
       <div className="wrapper flex flex-col pt-20 md:pt-0 items-center h-full md:flex-row gap-10 my-10 mx-10 text-white overflow-hidden">
        {navItems.map((item, index) => {
            return <motion.p
                onMouseOver={() => {setSelectedLink({isHover: true, index})}}
                onMouseLeave={() => {setSelectedLink({isHover: false, index})}}
                variants={blur}
                key={index}
                animate={selectedLink.isHover && selectedLink.index != index ? "open" : "closed" }
                className='text-3xl no-underline' href={item.href}>{getChars(item.title)}</motion.p>

        })}
       </div>
    </motion.div>
  )
}

export default Nav