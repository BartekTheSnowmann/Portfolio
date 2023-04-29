import React from 'react'
import { motion } from 'framer-motion'

function Navbar() {

  return (
    <div className='h-20'>
        <motion.div className='drop-shadow-md z-10 fixed h-20 bg-white text-secondary w-full flex justify-center items-center px-4'
        initial={{y:-100, opacity:0}}
        animate={{y:0, opacity:1}}
        transition={{delay:2,duration:0.6, type:'tween'}}>
            <ul className='flex gap-x-4 text-lg'>
                {['Home', 'About', 'Projects'].map((item)=>
                (
                    <li key={`link-${item}`}>
                        <a href={`#${item}`} >{item}</a>
                    </li>
                ))}
            </ul>
        </motion.div>
    </div>
  )
}

export default Navbar