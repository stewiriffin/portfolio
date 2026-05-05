'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaUser, FaCode, FaDatabase } from 'react-icons/fa'
import { SiPython, SiReact } from 'react-icons/si'

const highlights = [
  { title: 'Computer Science', subtitle: 'Currently Pursuing Degree', icon: FaCode },
  { title: 'Python Development', subtitle: 'Django, Flask, FastAPI', icon: SiPython },
  { title: 'Web Development', subtitle: 'React, TypeScript', icon: SiReact },
  { title: 'Database Design', subtitle: 'PostgreSQL, MongoDB', icon: FaDatabase },
]

export default function About() {
  return (
    <section id="about" className="min-h-screen py-32 bg-dark relative">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">About Me</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-4">
            Passionate About <span className="text-primary">Building Solutions</span>
          </h1>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image / Avatar */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="relative">
              <motion.div
                className="w-full aspect-square max-w-md mx-auto bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl flex items-center justify-center relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-3xl" />
                <motion.div
                  className="w-48 h-48 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-2xl shadow-primary/30"
                  animate={{ rotate: [0, 5, 0, -5, 0] }}
                  transition={{ duration: 10, repeat: Infinity }}
                >
                  <FaUser size={80} className="text-dark" />
                </motion.div>
              </motion.div>

              {highlights.slice(0, 2).map((item, index) => (
                <motion.div
                  key={item.title}
                  className="absolute bg-card/90 backdrop-blur-xl p-4 rounded-xl border border-white/10 shadow-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  style={{
                    [index % 2 === 0 ? 'right' : 'left']: '-5%',
                    top: `${20 + index * 25}%`,
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                      <item.icon className="text-primary" size={18} />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{item.title}</p>
                      <p className="text-gray-400 text-xs">{item.subtitle}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              Python Developer & <span className="text-primary">CS Student</span>
            </h2>

            <div className="space-y-6 text-gray-400 leading-relaxed">
              <p>
                I&apos;m <span className="text-white font-medium">Ian Gicheha Mbae</span>, a passionate Python
                software developer who recently graduated with a diploma in Computer Science and is now
                pursuing a degree in the same field at age 20.
              </p>
              <p>
                I specialize in building scalable web applications using modern Python frameworks like
                <span className="text-primary"> Django</span>,{' '}
                <span className="text-primary">Flask</span>, and{' '}
                <span className="text-primary">FastAPI</span>. My approach combines clean code practices
                with modern architecture patterns to deliver efficient, maintainable solutions.
              </p>
              <p>
                When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to
                open-source projects on <span className="text-primary">GitHub (@stewiriffin)</span>, or
                working on personal development initiatives.
              </p>
            </div>

            {/* GitHub card */}
            <motion.div
              className="mt-8 p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-white/5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl flex items-center justify-center">
                  <FaGithub className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold">GitHub Profile</h3>
                  <p className="text-gray-400 text-sm">@stewiriffin</p>
                </div>
                <motion.a
                  href="https://github.com/stewiriffin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto px-4 py-2 bg-primary/20 text-primary rounded-lg text-sm font-medium hover:bg-primary/30 transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  View Profile
                </motion.a>
              </div>
              <p className="text-gray-400 text-sm">
                Check out my open source projects and contributions on GitHub.
              </p>
            </motion.div>

            {/* Highlights grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="p-4 bg-white/5 rounded-xl border border-white/10 hover:border-primary/50 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -3 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <item.icon className="text-primary" size={16} />
                    </div>
                    <div>
                      <p className="font-medium text-sm text-white">{item.title}</p>
                      <p className="text-gray-400 text-xs">{item.subtitle}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
