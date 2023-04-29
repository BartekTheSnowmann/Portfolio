import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

function Footer() {
  return (
    <div className='bg-secondary text-white'>
        <div className='max-w-[400px] mx-auto py-12 flex flex-col items-center gap-6'>
          <div>
            <h1 className='text-3xl'>Contact Me</h1>
          </div>
          <div className='flex gap-x-2'>
            <div>
              <a href='https://github.com/bartekthesnowmann'>
                <AiFillGithub size={40} className='cursor-pointer'/>
              </a>
            </div>
            <div>
              <a href='https://www.linkedin.com/in/bartosz-mr%C3%B3z-536710274/'>
                <AiFillLinkedin size={40} className='cursor-pointer text-[#0072b1] '/>
              </a>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Footer