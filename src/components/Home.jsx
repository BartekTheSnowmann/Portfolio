import React from 'react'
import { Avatar } from '../assets/Index'
import { motion } from 'framer-motion'
import { AiOutlineArrowRight } from 'react-icons/ai'

function Home() {

    const ContainerVariant = {
        hidden:{
            
        },
        show:{
            transition:{
                staggerChildren: 1.2
            }
        }
    }
    
    const ItemVariant = {
        hidden:{
            x:100,
            opacity:0
        },
        show:{
            x:0,
            opacity:1,
            transition:{
                type:'tween',
                delay: 0.4
            }
        }
    }
    
    const ItemVariant2 = {
        hidden:{
            y:100,
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
    <div className='min-h-screen items-center'>
        <div className='absolute top-40 left-40 w-40 h-40 md:w-60 md:h-60 bg-yellow rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob -z-10 animation-delay-2000 '></div>
        <div className='absolute top-1/2 right-40 w-40 h-40 md:w-60 md:h-60 bg-primary rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob -z-10'></div>
        <div className='max-w-[1240px]  mx-auto' id='Home'>
            <div className='grid sm:grid-cols-2 items-center py-12 md:py-24 justify-center px-4 gap-10'>
                <div className='flex-1'>
                    <motion.div
                    variants={ContainerVariant}
                    initial='hidden'
                    animate='show'>
                        <motion.h1 className='text-5xl md:text-7xl'
                        variants={ItemVariant}>
                            Hello, Im <span className='text-primary'>Bartek</span>
                        </motion.h1>
                        <motion.div className='text-xl' 
                        variants={ItemVariant2}>
                            <p className='py-5 font-bold uppercase'>- React FrontEnd Developer.</p>
                            <a href="#Projects" className='group'>
                                <button className='font-bold bg-primary text-white px-4 py-2 rounded-md flex items-center gap-x-2'>
                                    <div>See My Work</div>
                                    <div className='group-hover:rotate-90 duration-300'><AiOutlineArrowRight size={25}/></div>
                                </button>
                            </a>
                        </motion.div>
                    </motion.div>
                </div>

                <div className='flex-1'>
                    <img src={Avatar} alt="" className='bg-white rounded-full'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home