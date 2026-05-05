'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FaGithub, FaLinkedin, FaCode, FaCloud, FaArrowRight, FaCodeBranch } from 'react-icons/fa'

const roles = ['Python Developer', 'Backend Engineer', 'API Architect', 'CS Student']

function useTypingCycle() {
  const [text, setText] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]

    if (!deleting && text === current) {
      const t = setTimeout(() => setDeleting(true), 2200)
      return () => clearTimeout(t)
    }
    if (deleting && text === '') {
      setDeleting(false)
      setRoleIndex((i) => (i + 1) % roles.length)
      return
    }

    const t = setTimeout(
      () => setText(deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1)),
      deleting ? 45 : 85
    )
    return () => clearTimeout(t)
  }, [text, deleting, roleIndex])

  return text
}

export default function Home() {
  const typingText = useTypingCycle()
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref })
  const y = useTransform(scrollYProgress, [0, 1], [0, -40])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section
      id="home"
      ref={ref}
      className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — text */}
          <motion.div
            style={{ y, opacity }}
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            {/* Availability badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-8"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
              </span>
              <span className="text-green-400 text-sm font-medium">Available for opportunities</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight mb-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Ian{' '}
              <span className="text-primary">Gicheha</span>{' '}
              Mbae
            </motion.h1>

            {/* Cycling role */}
            <motion.div
              className="h-10 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-xl md:text-2xl font-mono text-secondary">
                {typingText}
                <span className="typing-cursor" />
              </p>
            </motion.div>

            {/* Bio */}
            <motion.p
              className="text-gray-400 text-lg leading-relaxed mb-8 max-w-lg"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              4 years building scalable backend systems and APIs with{' '}
              <span className="text-white font-medium">Python</span>,{' '}
              <span className="text-white font-medium">Django</span>, and{' '}
              <span className="text-white font-medium">FastAPI</span>. Currently pursuing a
              Computer Science degree in Nairobi.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap gap-3 mb-10"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white rounded-full font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:bg-primary/90 transition-all duration-300"
              >
                View Projects
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" size={14} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/15 text-white rounded-full font-semibold hover:bg-white/5 hover:border-white/30 transition-all duration-300"
              >
                Get in Touch
              </Link>
              <a
                href="https://github.com/stewiriffin"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/15 text-white rounded-full font-semibold hover:bg-white/5 hover:border-white/30 transition-all duration-300"
              >
                <FaGithub size={16} />
                GitHub
              </a>
            </motion.div>

            {/* Social */}
            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <span className="text-gray-600 text-sm">Connect:</span>
              {[
                { icon: FaGithub, href: 'https://github.com/stewiriffin', label: 'GitHub' },
                { icon: FaLinkedin, href: 'https://www.linkedin.com/in/ianmbae', label: 'LinkedIn' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-gray-500 hover:text-white hover:bg-primary/20 border border-white/10 hover:border-primary/40 transition-all duration-300"
                >
                  <s.icon size={16} />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — photo */}
          <motion.div
            className="hidden lg:flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute -inset-3 rounded-3xl border border-primary/20 z-0" />
              <div className="absolute -inset-6 rounded-3xl border border-primary/8 z-0" />

              {/* Photo frame */}
              <div className="relative w-72 h-96 rounded-2xl overflow-hidden border border-white/10 shadow-2xl z-10">
                <Image
                  src="/photo.png"
                  alt="Ian Gicheha Mbae"
                  fill
                  className="object-cover object-top"
                  priority
                />
                {/* Subtle gradient at bottom for text contrast if needed */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark/40 via-transparent to-transparent" />
              </div>

              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-4 -left-6 z-20 flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-card border border-white/10 shadow-xl backdrop-blur-sm"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
                </span>
                <span className="text-white text-sm font-medium">Open to work</span>
              </motion.div>

              {/* Floating experience badge */}
              <motion.div
                className="absolute -top-4 -right-6 z-20 px-4 py-2.5 rounded-xl bg-card border border-white/10 shadow-xl backdrop-blur-sm text-center"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
              >
                <p className="text-2xl font-bold text-primary leading-none">4+</p>
                <p className="text-gray-400 text-xs mt-0.5">yrs exp</p>
              </motion.div>

              {/* Glow */}
              <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-3xl -z-10 scale-110" />
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-24"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          {[
            { number: '4+', label: 'Years Experience', icon: FaCode },
            { number: '24+', label: 'GitHub Repos', icon: FaCodeBranch },
            { number: '15+', label: 'Projects Shipped', icon: FaCloud },
            { number: '20+', label: 'Technologies', icon: FaCode },
          ].map((stat) => (
            <div
              key={stat.label}
              className="p-5 rounded-2xl border border-white/8 bg-white/[0.02] hover:border-primary/30 hover:bg-primary/[0.03] transition-all duration-400 group"
            >
              <stat.icon className="text-primary mb-3 opacity-70" size={18} />
              <p className="text-3xl font-bold text-white">{stat.number}</p>
              <p className="text-gray-500 text-sm mt-0.5">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-600"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-gray-600 to-transparent" />
      </motion.div>
    </section>
  )
}
