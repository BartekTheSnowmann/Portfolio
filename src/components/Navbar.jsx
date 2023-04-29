import React from 'react'
import { motion } from 'framer-motion'

function Navbar() {

  return (
    <div className='h-20'>
        <div className='drop-shadow-md z-10 fixed h-20 bg-white text-secondary w-full flex justify-center items-center px-4'>
            <ul className='flex gap-x-4 text-lg'>
                {['Home', 'About', 'Projects'].map((item)=>
                (
                    <li key={`link-${item}`}>
                        <a href={`#${item}`} >{item}</a>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default Navbar