'use client'

import { motion } from 'framer-motion'

export const AnimatedBackground = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
    <motion.div
      className="absolute w-[700px] h-[700px] rounded-full blur-[140px] bg-primary/[0.05]"
      animate={{ x: [0, 80, 0], y: [0, 40, 0] }}
      transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
      style={{ top: '-10%', left: '-5%' }}
    />
    <motion.div
      className="absolute w-[500px] h-[500px] rounded-full blur-[120px] bg-secondary/[0.04]"
      animate={{ x: [0, -60, 0], y: [0, 80, 0] }}
      transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
      style={{ bottom: '10%', right: '-5%' }}
    />
    <motion.div
      className="absolute w-[400px] h-[400px] rounded-full blur-[100px] bg-primary/[0.03]"
      animate={{ x: [0, 40, 0], y: [0, -40, 0] }}
      transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      style={{ bottom: '30%', left: '40%' }}
    />
  </div>
)
