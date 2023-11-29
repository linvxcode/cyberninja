'use client'
import React from 'react'
import { motion } from 'framer-motion'

interface props{
    index: number;
    children: any
}

const LayoutsAnim = ({index, children}: props) => {
  return (
    <motion.div
    initial={{scale: 0.90}}
    whileInView={{ scale:1, transition:{type: "spring", delay: 0.10 * index}}}
    viewport={{once: true}}
    >
      {children}
    </motion.div>
  )
}

export default LayoutsAnim
