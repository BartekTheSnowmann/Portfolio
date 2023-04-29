import React, { useRef } from 'react'
import {FaReact, FaJs} from 'react-icons/fa'
import {SiTailwindcss, SiRedux} from 'react-icons/si'
import { motion,useInView } from 'framer-motion'

function About() {

    const ContainerRef = useRef()
    const isInView = useInView(ContainerRef, {once:true})

    const ContainerVariant = {
        hidden:{
            
        },
        show:{
            transition:{
                staggerChildren: 0.8
            }
        }
    }
    
    const ItemVariant = {
        hidden:{
            y:50,
            opacity:0
        },
        show:{
            y:0,
            opacity:1,
            transition:{
                type:'tween'
            }
        }
    }


  return (
    <div className='bg-secondary text-white'>
        <div className='max-w-[1240px] py-10 md:py-20 px-4 mx-auto' id='About'>
            <div className='flex flex-col items-center'>
                
                <div>
                    <h1 className='text-3xl'>About me</h1>
                </div>

                <motion.div className='max-w-[500px] text-gray-200'
                variants={ContainerVariant}
                initial='hidden'
                animate={isInView? 'show' : 'hidden'}>
                    <motion.p className='py-5 md:py-10'
                    variants={ItemVariant}>I am a Self-Taught Developer. The main goal of my work is to create Projects that are as simple as possible with a look that is pleasing to ones eye ✨ </motion.p>
                    
                    <motion.div className='flex justify-center gap-x-8'
                    ref={ContainerRef}
                    variants={ItemVariant}>
                        <FaReact className='text-[#61dbfb] hover:animate-spin' alt='React' size={50} />
                        <FaJs className='text-[#f0db4f]' alt='JavaScript' size={50} />
                        <SiTailwindcss className='text-[#3490dc]' alt='TailwindCss' size={50} />
                        <SiRedux className='text-[#512987]' alt='React-Redux' size={50} />
                    </motion.div>

                </motion.div>

            </div>
        </div>
    </div>
  )
}

export default About