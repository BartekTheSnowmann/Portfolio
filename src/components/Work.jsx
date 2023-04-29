import { motion} from 'framer-motion'
import React  from 'react'
import { AnimeWebsite, eCommerceSitePreview, LandingWebsitePreview, TodoAppPreview } from '../assets/Index'
import {AiOutlineEye, AiOutlineGithub} from 'react-icons/ai'

function Work() {

   const ItemVariant = {
    initial:{
        opacity:0,
        y:120,
    },
    animate:{
        opacity:1,
        y:0,
        transition:{
            duration:0.6,
            type:'tween'
        }
    }
   }

  return (
    <div className='bg-yellow' id='Projects'>
        <div className='max-w-[1240px] mx-auto flex flex-col py-10 md:py-20 px-4'>
            
            <div className='BorderImg pb-4'>
                <h1 className='text-3xl font-bold text-primary'>Projects</h1>
            </div>

            <div className='pt-6 md:pt-16 grid justify-items-center gap-5 md:gap-10'>
                
                <motion.div className='bg-white group relative flex flex-col md:flex-row gap-4 shadow-lg p-2 md:p-4'
                variants={ItemVariant}
                initial='initial'
                whileInView='animate'
                viewport={{once:true}}>
                    <div className='flex-1'>
                        <img src={AnimeWebsite} className='h-full object-cover' alt="" />
                    </div>
                    <div className='flex-1 flex flex-col justify-center p-2'>
                        <h1 className='text-xl tracking-normal pb-5'>ANIMEWEB</h1>
                        <p className='text-lg md:text-xl'>Goal of the Project was to make a solid website using <span>API</span>. The Website will help u to find various anime. You can see the current list of the most popular ones with option to add them to ur list</p>
                        <div className='pt-5 uppercase font-bold flex gap-x-2'>
                            <a href='https://animeweb-bysnowmann.netlify.app' className='Button'>Live <AiOutlineEye size={25}/></a>
                            <a href='https://github.com/BartekTheSnowmann/anime-website.git' className='Button'>Code <AiOutlineGithub size={25} /></a>
                        </div>
                    </div> 
                </motion.div>
                
                <motion.div className='bg-white group relative flex flex-col md:flex-row gap-4 shadow-lg p-2 md:p-4'
                 variants={ItemVariant}
                initial='initial'
                whileInView='animate'
                viewport={{once:true}}>
                    <div className='flex-1'>
                        <img src={eCommerceSitePreview} className='h-full object-cover' alt="" />
                    </div>
                    <div className='flex-1 flex flex-col justify-center p-2'>
                        <h1 className='text-xl tracking-normal pb-5'>Kanon Clothing</h1>
                        <p className='text-lg md:text-xl'>Goal of the Project was to learn <span>React-Redux</span>. Kannon Clothing allows u to search through different categories of products, adding them to cart...etc</p>
                        <div className='pt-5 uppercase font-bold gap-x-2 flex'>
                            <a href='https://ecommercesite-bysnowmann.netlify.app' className='Button'>Live <AiOutlineEye size={25}/></a>
                            <a href='https://github.com/BartekTheSnowmann/e-commerce-website.git' className='Button'>Code <AiOutlineGithub size={25} /></a>
                        </div>
                    </div>
                </motion.div>
                
                <motion.div className='bg-white group relative flex flex-col md:flex-row gap-4 shadow-lg p-2 md:p-4'
                variants={ItemVariant}
                initial='initial'
                whileInView='animate'
                viewport={{once:true}}>
                    <div className='flex-1'>
                        <img src={LandingWebsitePreview} className='object-cover h-full' alt="" />
                    </div>
                    <div className='flex-1 flex flex-col justify-center p-2'>
                        <h1 className='text-xl tracking-normal pb-5'>Landing Page</h1>
                        <p className='text-lg md:text-xl'>Goal of the Project was to learn basic animations with <span>Framer-Motion</span> and how to make a good <span>Ux Design</span>. The website has both of those. Check it out. </p>
                        <div className='pt-5 uppercase font-bold flex gap-x-2'>
                            <a href='https://landingpage-bysnowmann.netlify.app' className='Button'>Live <AiOutlineEye size={25}/></a>
                            <a href='https://github.com/BartekTheSnowmann/landing-page.git' className='Button'>Code <AiOutlineGithub size={25} /></a>
                        </div>
                    </div>
                </motion.div>

                <motion.div className='bg-white group relative flex flex-col md:flex-row gap-4 shadow-lg p-2 md:p-4'
                variants={ItemVariant}
                initial='initial'
                whileInView='animate'
                viewport={{once:true}}>
                    <div className='flex-1'>
                        <img src={TodoAppPreview} className='object-cover h-full' alt="" />
                    </div>
                    <div className='flex-1 flex flex-col justify-center p-2'>
                        <h1 className='text-xl tracking-normal pb-5'>Todo App</h1>
                        <p className='text-lg md:text-xl'>One of my first projects. The goal of it was to make me familiar with <span>TypeScript</span> & <span>React-Redux</span> Its a simple todo app with features like editing or filtering.</p>
                        <div className='pt-5 uppercase font-bold flex gap-x-2'>
                            <a href='https://todoapp-bysnowmann.netlify.app' className='Button'>Live <AiOutlineEye size={25}/></a>
                            <a href='https://github.com/BartekTheSnowmann/todo-app.git' className='Button'>Code <AiOutlineGithub size={25} /></a>
                        </div>
                    </div>
                </motion.div>

            </div>
            
        </div>
    </div>
  )
}

export default Work