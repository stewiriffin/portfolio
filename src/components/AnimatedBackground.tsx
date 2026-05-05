'use client'

import { motion } from 'framer-motion'

export const AnimatedBackground = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
    <motion.div
      className="absolute w-[500px] h-[500px] rounded-full opacity-20 blur-[100px] bg-gradient-to-r from-primary to-secondary"
      animate={{ x: [0, 100, 0], y: [0, 50, 0], scale: [1, 1.2, 1] }}
      transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      style={{ top: '10%', left: '10%' }}
    />
    <motion.div
      className="absolute w-[400px] h-[400px] rounded-full opacity-15 blur-[100px] bg-gradient-to-r from-secondary to-primary"
      animate={{ x: [0, -80, 0], y: [0, 100, 0], scale: [1, 1.3, 1] }}
      transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      style={{ top: '40%', right: '10%' }}
    />
    <motion.div
      className="absolute w-[350px] h-[350px] rounded-full opacity-10 blur-[80px] bg-gradient-to-r from-primary to-secondary"
      animate={{ x: [0, 60, 0], y: [0, -60, 0], scale: [1, 1.1, 1] }}
      transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      style={{ bottom: '10%', left: '30%' }}
    />
    <motion.div
      className="absolute w-[300px] h-[300px] rounded-full opacity-15 blur-[80px] bg-gradient-to-r from-secondary to-primary"
      animate={{ x: [0, -40, 0], y: [0, 40, 0], scale: [1, 1.2, 1] }}
      transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      style={{ bottom: '20%', right: '20%' }}
    />
  </div>
)
