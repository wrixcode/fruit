import { div } from 'framer-motion/client'
import React from 'react'
import { motion,AnimatePresence } from "framer-motion";
const Mobilemenu = ({open}) => {
  return (
    <div>
        <AnimatePresence mode='wait'>
            {
                open && (
                    <motion.div
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    exit={{opacity:0}}
                    transition={{duration:0.5}}
                    className=''>
                        <ul className=' bg-primary text-center  font-medium text-lg rounded-md flex flex-col w-full px-5  gap-3 py-7'>
                            <li className=' hover:text-white'>Home</li>
                            <li className=' hover:text-white'>products</li>
                            <li className=' hover:text-white'>Home</li>
                            <li className=' hover:text-white'>products</li>
                        </ul>
                    </motion.div>
                )
            }
        </AnimatePresence>
      
    </div>
  )
}

export default Mobilemenu
