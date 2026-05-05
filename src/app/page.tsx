'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FaGithub, FaLinkedin, FaUser, FaCode, FaCloud, FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa'

export default function Home() {
  const [typingText, setTypingText] = useState('')
  const fullText = 'Python Software Developer'
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref })
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypingText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
      }
    }, 80)
    return () => clearInterval(timer)
  }, [])

  return (
    <section
      id="home"
      ref={ref}
      className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            style={{ y, opacity }}
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <motion.span
                className="w-2 h-2 bg-green-400 rounded-full"
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-primary text-sm font-medium">Available for opportunities</span>
            </motion.div>

            <motion.p
              className="text-primary text-lg mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Hello, I&apos;m
            </motion.p>

            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="bg-gradient-to-r from-white via-white to-primary/60 bg-clip-text text-transparent">
                Ian Gicheha Mbae
              </span>
            </motion.h1>

            <motion.div
              className="h-12 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-2xl md:text-3xl font-medium text-secondary flex items-center gap-3">
                <span className="typing-cursor">{typingText}</span>
              </h2>
            </motion.div>

            <motion.p
              className="text-gray-400 text-lg mb-8 max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              A dedicated <span className="text-primary font-medium">Python Developer</span> and{' '}
              <span className="text-primary font-medium">Computer Science student</span> passionate about
              building scalable, efficient, and elegant solutions that make a difference.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/projects"
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-primary/80 text-white rounded-full font-semibold shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300"
                >
                  View Projects
                  <span className="group-hover:translate-x-1 transition-transform">
                    <FaArrowRight />
                  </span>
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/20 text-white rounded-full font-semibold hover:bg-white/5 hover:border-white/30 transition-all duration-300"
                >
                  Contact Me
                </Link>
              </motion.div>

              <motion.a
                href="https://github.com/stewiriffin"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/20 text-white rounded-full font-semibold hover:bg-white/5 hover:border-white/30 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaGithub />
                GitHub Profile
              </motion.a>
            </motion.div>

            <motion.div
              className="flex items-center gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <span className="text-gray-500 text-sm">Connect with me:</span>
              <div className="flex gap-3">
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
                    className="w-11 h-11 bg-white/5 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary/20 border border-white/10 hover:border-primary/50 transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Code Editor Visual */}
          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div
              className="relative"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="flex items-center gap-2 px-4 py-3 bg-darker rounded-t-2xl border border-white/10">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="flex-1 text-center">
                  <span className="text-gray-400 text-sm font-mono">developer.py</span>
                </div>
              </div>
              <div className="bg-darker/80 backdrop-blur-xl rounded-b-2xl p-6 border border-white/10 border-t-0 shadow-2xl">
                <pre className="text-sm font-mono leading-relaxed overflow-x-auto">
                  <code>
                    <span className="text-pink-400">def</span> <span className="text-green-400">developer</span>():
                    {'\n'}  <span className="text-pink-400">return</span> <span className="text-yellow-300">{'{'}</span>
                    {'\n'}    <span className="text-cyan-400">&apos;name&apos;</span>: <span className="text-orange-400">&apos;Ian Gicheha Mbae&apos;</span>,
                    {'\n'}    <span className="text-cyan-400">&apos;role&apos;</span>: <span className="text-orange-400">&apos;Python Developer&apos;</span>,
                    {'\n'}    <span className="text-cyan-400">&apos;github&apos;</span>: <span className="text-orange-400">&apos;@stewiriffin&apos;</span>,
                    {'\n'}    <span className="text-cyan-400">&apos;skills&apos;</span>: {' ['}
                    {'\n'}      <span className="text-orange-400">&apos;Django&apos;</span>, <span className="text-orange-400">&apos;Flask&apos;</span>, <span className="text-orange-400">&apos;FastAPI&apos;</span>,
                    {'\n'}      <span className="text-orange-400">&apos;PostgreSQL&apos;</span>, <span className="text-orange-400">&apos;Docker&apos;</span>
                    {'\n'}    {'],'}
                    {'\n'}    <span className="text-cyan-400">&apos;status&apos;</span>: <span className="text-orange-400">&apos;Open to work&apos;</span>
                    {'\n'}  <span className="text-yellow-300">{'}'}</span>
                  </code>
                </pre>
              </div>
              <motion.div
                className="absolute -z-10 w-full h-full bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl -bottom-4 -right-4"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          {[
            { number: '1+', label: 'Years Experience', icon: FaCode },
            { number: '15+', label: 'Projects Completed', icon: FaUser },
            { number: '10+', label: 'Happy Clients', icon: FaMapMarkerAlt },
            { number: '20+', label: 'Technologies', icon: FaCloud },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              className="group p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-primary/50 transition-all duration-500"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300">
                  <stat.icon className="text-primary" size={22} />
                </div>
              </div>
              <span className="text-4xl font-bold bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
                {stat.number}
              </span>
              <p className="text-gray-400 mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-8 h-14 border-2 border-white/20 rounded-full flex justify-center pt-3">
          <motion.div
            className="w-1.5 h-3 bg-gradient-to-b from-primary to-secondary rounded-full"
            animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}
