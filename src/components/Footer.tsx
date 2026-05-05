'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark py-10 border-t border-white/5 relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-gray-400">
              © <span suppressHydrationWarning>{currentYear}</span>{' '}
              <span className="text-white font-semibold">Ian Gicheha Mbae</span>. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm mt-1">
              Python Software Developer & Computer Science Student
            </p>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-gray-500 text-sm hidden md:inline">Follow me:</span>
            <div className="flex gap-2">
              {[
                { icon: FaGithub, href: 'https://github.com/stewiriffin', label: 'GitHub' },
                { icon: FaLinkedin, href: 'https://www.linkedin.com/in/ianmbae', label: 'LinkedIn' },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary/20 border border-white/10 hover:border-primary/50 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
