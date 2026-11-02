import React from 'react'
import { motion } from 'motion/react'

const Div_motion = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <motion.div
        className="bg-blue-500 rounded-lg w-[300px] h-[600px]"
        initial={{ y: 0 }}
        animate={{ y: -200 }}
        transition={{
          duration: 2,
          ease: 'easeInOut',
          repeat: Infinity,
        }}
      >
        <div className="h-[200px] bg-white rounded-md m-4"></div>
        <div className="h-[200px] bg-white rounded-md m-4"></div>
        <div className="h-[200px] bg-white rounded-md m-4"></div>
      </motion.div>
    </div>
  )
}

export default Div_motion
