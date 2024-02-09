import React from 'react'
import { motion } from 'framer-motion'
//
import Button from '@components/Button'
import { fadeUpSpring } from '@config/motion'
import AnimatedTextWord from '@components/motion/AnimatedTextWord'
import AnimatedTextCharacter from '@components/motion/AnimatedTextCherecter'
import Image from 'next/image'

const Left = () => {
  return (
    <div  className='relative col-span-2 z-10 md:text-center lg:text-left !mt-[-20px] ' >

        <Image alt="" src="/images/glassify/blur-cyan-0.png" width="530" height="530" decoding="async" data-nimg="1" className="absolute bottom-full right-full -mr-72 -mb-56 opacity-50" />

        <div className='relative' >
            <AnimatedTextWord 
               text="Hi, my name is"
               className='text-lg justify-center lg:justify-start'
            />
            
            <div>
               <AnimatedTextCharacter 
                  className='!font-medium !bg-clip-text !text-[2rem] !leading-normal md:!text-7xl md:!leading-[87px] !text-slate-300 justify-center lg:justify-start' 
                  text="M. Rasyid Ridho" 
               />
               <AnimatedTextCharacter 
                  className='font-medium text-sm sm:text-[1.6rem] tracking-normal md:text-[2rem] text-slate-400 mt-1 justify-center lg:justify-start' 
                  text="Graphic Designer and Front End Developer" 
               />
            </div>

            <div className='my-5 md:my-8 leading-7 text-slate-400 md:text-lg max-w-3xl' >
               <AnimatedTextWord 
                  text="Highly motivated and passionate Graphic Design and Front End Development with one years expereince in Adobe Illustrator, Adobe Photoshop, Figma, React js, Next js, Tailwind CSS, Node js, MySQL"
                  className='text-sm sm:text-lg justify-center lg:justify-start'
               />
            </div>
        </div>

        <motion.div variants={fadeUpSpring}  initial="hidden" animate="visible" className='w-fit mx-auto lg:ml-0' >
           <a href='https://drive.google.com/uc?id=1Mg77Da4h-ms8OoyFw5cMz_OWxRz43C8U&export=download' ><Button outlined > Check out my CV </Button></a>
        </motion.div>
    
    </div>
  )
}

export default Left
