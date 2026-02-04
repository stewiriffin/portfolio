'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaStackOverflow, FaEnvelope, FaPhone, FaMapMarkerAlt, FaUser, FaCode, FaDatabase, FaCloud, FaExternalLinkAlt, FaDownload, FaArrowRight, FaStar, FaCodeBranch } from 'react-icons/fa'
import { SiDjango, SiFlask, SiFastapi, SiPostgresql, SiMongodb, SiDocker, SiAmazon, SiRedis, SiTensorflow, SiNginx, SiCelery, SiRabbitmq, SiPython, SiReact, SiTypescript, SiHtml5, SiCss3, SiJavascript } from 'react-icons/si'

// GitHub Repository Type
interface Repository {
  id: number
  name: string
  description: string | null
  html_url: string
  language: string | null
  stargazers_count: number
  forks_count: number
  updated_at: string
  topics: string[]
  fork: boolean
}

// Custom Hook for Scroll Progress
const useScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0)
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrollTop / docHeight) * 100
      setScrollProgress(progress)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  return scrollProgress
}

// Get language icon
const getLanguageIcon = (language: string | null) => {
  switch (language?.toLowerCase()) {
    case 'python': return SiPython
    case 'typescript': return SiTypescript
    case 'javascript': return SiJavascript
    case 'html': return SiHtml5
    case 'css': return SiCss3
    case 'react': return SiReact
    default: return FaCode
  }
}

// Get gradient based on language
const getLanguageGradient = (language: string | null) => {
  switch (language?.toLowerCase()) {
    case 'python': return 'from-blue-500 to-blue-700'
    case 'typescript': return 'from-blue-600 to-blue-800'
    case 'javascript': return 'from-yellow-500 to-orange-500'
    case 'react': return 'from-cyan-400 to-blue-500'
    case 'html': return 'from-orange-500 to-red-500'
    case 'css': return 'from-blue-400 to-purple-500'
    default: return 'from-gray-500 to-gray-700'
  }
}

// Animated Background with Gradient Orbs
const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full opacity-20 blur-[100px] bg-gradient-to-r from-primary to-secondary"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        style={{ top: '10%', left: '10%' }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full opacity-15 blur-[100px] bg-gradient-to-r from-secondary to-primary"
        animate={{
          x: [0, -80, 0],
          y: [0, 100, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        style={{ top: '40%', right: '10%' }}
      />
      <motion.div
        className="absolute w-[350px] h-[350px] rounded-full opacity-10 blur-[80px] bg-gradient-to-r from-primary to-secondary"
        animate={{
          x: [0, 60, 0],
          y: [0, -60, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        style={{ bottom: '10%', left: '30%' }}
      />
      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full opacity-15 blur-[80px] bg-gradient-to-r from-secondary to-primary"
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        style={{ bottom: '20%', right: '20%' }}
      />
    </div>
  )
}

// Grid Pattern Overlay
const GridPattern = () => (
  <div 
    className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]"
    style={{
      backgroundImage: `
        linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
      `,
      backgroundSize: '50px 50px',
    }}
  />
)

// Navigation Component
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const scrollProgress = useScrollProgress()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <>
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary z-50"
        style={{ scaleX: scrollProgress / 100, transformOrigin: 'left' }}
      />
      
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-dark/90 backdrop-blur-xl shadow-2xl shadow-primary/10 py-4' 
            : 'bg-transparent py-6'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <motion.a
            href="#home"
            className="text-2xl font-bold text-white relative group"
            whileHover={{ scale: 1.02 }}
          >
            <span className="relative z-10">IG</span>
            <span className="absolute inset-0 bg-gradient-to-r from-primary to-secondary blur opacity-50 group-hover:opacity-75 transition-opacity duration-300 rounded-lg" />
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="relative px-5 py-2 text-gray-300 hover:text-white transition-colors duration-300 rounded-full hover:bg-white/5"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                <span className="relative z-10">{item.name}</span>
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              className="ml-4 px-6 py-2.5 bg-gradient-to-r from-primary to-primary/80 text-white rounded-full font-medium shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Hire Me
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden relative w-10 h-10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'}`}
            />
            <motion.span
              className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}
            />
            <motion.span
              className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'}`}
            />
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-dark/95 backdrop-blur-xl border-t border-white/10"
            >
              <div className="flex flex-col items-center gap-2 py-6 px-4">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="w-full text-center py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.name}
                  </motion.a>
                ))}
                <motion.a
                  href="#contact"
                  className="w-full text-center mt-4 py-3 bg-gradient-to-r from-primary to-primary/80 text-white rounded-full font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                  whileTap={{ scale: 0.98 }}
                >
                  Hire Me
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  )
}

// Hero Section
const Hero = () => {
  const [typingText, setTypingText] = useState('')
  const fullText = "Python Software Developer"
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
    <section id="home" ref={ref} className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden">
      <AnimatedBackground />
      <GridPattern />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            style={{ y, opacity }}
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
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
              Hello, I'm
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
              <motion.a
                href="#projects"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-primary/80 text-white rounded-full font-semibold shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View Projects
                <motion.span
                  className="group-hover:translate-x-1 transition-transform"
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <FaArrowRight />
                </motion.span>
              </motion.a>
              
              <motion.a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/20 text-white rounded-full font-semibold hover:bg-white/5 hover:border-white/30 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Contact Me
              </motion.a>
              
              <motion.a
                href="https://github.com/stewiriffin"
                target="_blank"
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
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
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

          {/* Right Side - Code Editor */}
          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div
              className="relative"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Window Controls */}
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
              
              {/* Code Content */}
              <div className="bg-darker/80 backdrop-blur-xl rounded-b-2xl p-6 border border-white/10 border-t-0 shadow-2xl">
                <pre className="text-sm font-mono leading-relaxed overflow-x-auto">
                  <code>
                    <span className="text-pink-400">def</span> <span className="text-green-400">developer</span>():
                    {'\n'}  <span className="text-pink-400">return</span> {''}
                    <span className="text-yellow-300">{'{'}</span>
                    {'\n'}    <span className="text-cyan-400">'name'</span>:{' '}
                    <span className="text-orange-400">'Ian Gicheha Mbae'</span>,
                    {'\n'}    <span className="text-cyan-400">'role'</span>:{' '}
                    <span className="text-orange-400">'Python Developer'</span>,
                    {'\n'}    <span className="text-cyan-400">'github'</span>:{' '}
                    <span className="text-orange-400">'@stewiriffin'</span>,
                    {'\n'}    <span className="text-cyan-400">'skills'</span>:{' ['}
                    {'\n'}      <span className="text-orange-400">'Django'</span>,{' '}
                    <span className="text-orange-400">'Flask'</span>,{' '}
                    <span className="text-orange-400">'FastAPI'</span>,{' '}
                    {'\n'}      <span className="text-orange-400">'PostgreSQL'</span>,{' '}
                    <span className="text-orange-400">'Docker'</span>
                    {'\n'}    {'],'}
                    {'\n'}    <span className="text-cyan-400">'status'</span>:{' '}
                    <span className="text-orange-400">'Open to work'</span>
                    {'\n'}  <span className="text-yellow-300">{'}'}</span>
                  </code>
                </pre>
              </div>
              
              {/* Decorative Elements */}
              <motion.div
                className="absolute -z-10 w-full h-full bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl -bottom-4 -right-4"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Row */}
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
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="group p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-primary/50 transition-all duration-500"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300">
                  <stat.icon className="text-primary" size={22} />
                </div>
              </div>
              <span className="text-4xl font-bold bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">{stat.number}</span>
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

// About Section
const About = () => {
  const highlights = [
    { title: 'Computer Science', subtitle: 'Currently Pursuing Degree', icon: FaCode },
    { title: 'Python Development', subtitle: 'Django, Flask, FastAPI', icon: SiPython },
    { title: 'Web Development', subtitle: 'React, TypeScript', icon: SiReact },
    { title: 'Database Design', subtitle: 'PostgreSQL, MongoDB', icon: FaDatabase },
  ]

  return (
    <section id="about" className="py-24 bg-dark relative">
      <AnimatedBackground />
      <GridPattern />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.span
            className="text-primary font-medium text-sm uppercase tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.span>
          <motion.h2
            className="text-4xl md:text-5xl font-bold mt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Passionate About <span className="text-primary">Building Solutions</span>
          </motion.h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
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
              
              {/* Floating Elements */}
              {highlights.slice(0, 2).map((item, index) => (
                <motion.div
                  key={index}
                  className="absolute bg-card/90 backdrop-blur-xl p-4 rounded-xl border border-white/10 shadow-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
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

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-semibold mb-6">
              Python Developer & <span className="text-primary">CS Student</span>
            </h3>
            
            <div className="space-y-6 text-gray-400 leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                I'm <span className="text-white font-medium">Ian Gicheha Mbae</span>, a passionate Python software developer 
                who recently graduated with a diploma in Computer Science and is now pursuing a degree in the same field at age 20.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                I specialize in building scalable web applications using modern Python frameworks like 
                <span className="text-primary"> Django</span>, <span className="text-primary">Flask</span>, 
                and <span className="text-primary">FastAPI</span>. My approach combines clean code practices 
                with modern architecture patterns to deliver efficient, maintainable solutions.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects on <span className="text-primary">GitHub (@stewiriffin)</span>, or working on 
                personal development initiatives. I'm always eager to learn and take on new challenges.
              </motion.p>
            </div>

            {/* GitHub Stats */}
            <motion.div
              className="mt-8 p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-white/5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl flex items-center justify-center">
                  <FaGithub className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold">GitHub Profile</h4>
                  <p className="text-gray-400 text-sm">@stewiriffin</p>
                </div>
                <motion.a
                  href="https://github.com/stewiriffin"
                  target="_blank"
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

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  className="p-4 bg-white/5 rounded-xl border border-white/10 hover:border-primary/50 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
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

// Skills Section
const Skills = () => {
  const skillCategories = [
    {
      title: 'Backend Development',
      icon: FaCode,
      gradient: 'from-blue-500 to-blue-700',
      skills: [
        { name: 'Python', level: 95, icon: SiPython },
        { name: 'Django', level: 90, icon: SiDjango },
        { name: 'Flask', level: 88, icon: SiFlask },
        { name: 'FastAPI', level: 85, icon: SiFastapi },
        { name: 'TypeScript', level: 75, icon: SiTypescript },
      ],
    },
    {
      title: 'Database & DevOps',
      icon: FaDatabase,
      gradient: 'from-green-500 to-green-700',
      skills: [
        { name: 'PostgreSQL', level: 85, icon: SiPostgresql },
        { name: 'MongoDB', level: 80, icon: SiMongodb },
        { name: 'Redis', level: 75, icon: SiRedis },
        { name: 'Docker', level: 80, icon: SiDocker },
        { name: 'AWS', level: 70, icon: SiAmazon },
      ],
    },
    {
      title: 'Tools & Infrastructure',
      icon: FaCloud,
      gradient: 'from-purple-500 to-purple-700',
      skills: [
        { name: 'Git', level: 90, icon: FaCode },
        { name: 'Nginx', level: 70, icon: SiNginx },
        { name: 'CI/CD', level: 75, icon: FaCloud },
        { name: 'Celery', level: 72, icon: SiCelery },
        { name: 'RabbitMQ', level: 68, icon: SiRabbitmq },
      ],
    },
  ]

  const additionalSkills = [
    'RESTful APIs', 'GraphQL', 'Unit Testing', 'Agile/Scrum', 
    'System Design', 'Microservices', 'Machine Learning', 
    'Data Structures', 'Algorithms', 'GitHub Actions'
  ]

  return (
    <section id="skills" className="py-24 bg-darker relative">
      <AnimatedBackground />
      <GridPattern />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.span
            className="text-secondary font-medium text-sm uppercase tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            What I Do
          </motion.span>
          <motion.h2
            className="text-4xl md:text-5xl font-bold mt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Technical <span className="text-secondary">Skills</span>
          </motion.h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              className="group relative bg-card/50 backdrop-blur-sm rounded-3xl p-8 border border-white/5 hover:border-white/10 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
              whileHover={{ y: -8 }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-14 h-14 bg-gradient-to-br ${category.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                  <category.icon className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                  <p className="text-gray-400 text-sm">{category.skills.length} skills</p>
                </div>
              </div>

              {/* Skills List */}
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: catIndex * 0.1 + skillIndex * 0.05 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center">
                          <skill.icon className="text-primary" size={14} />
                        </div>
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                      </div>
                      <span className="text-primary font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full relative overflow-hidden"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: catIndex * 0.1 + skillIndex * 0.05 }}
                      >
                        <motion.div
                          className="absolute inset-0 bg-white/30"
                          animate={{ x: ['-100%', '100%'] }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                          style={{ width: '50%' }}
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Hover Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient}/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <motion.div
          className="mt-16 p-8 bg-card/30 backdrop-blur-sm rounded-3xl border border-white/5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold mb-6 text-center">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {additionalSkills.map((skill, index) => (
              <motion.span
                key={index}
                className="px-5 py-2.5 bg-white/5 rounded-full text-gray-300 text-sm border border-white/10 hover:border-primary/50 hover:bg-primary/10 hover:text-primary transition-all duration-300 cursor-default"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                whileHover={{ scale: 1.05 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Projects Section - Fetches from GitHub
const Projects = () => {
  const [repos, setRepos] = useState<Repository[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/stewiriffin/repos?sort=updated&per_page=100')
        if (!response.ok) throw new Error('Failed to fetch repositories')
        const data = await response.json()
        // Filter out forks and sort by updated time
        const filteredRepos = data
          .filter((repo: Repository) => !repo.fork && repo.language !== null)
          .slice(0, 6)
        setRepos(filteredRepos)
      } catch (err) {
        setError('Failed to load projects from GitHub')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchRepos()
  }, [])

  if (loading) {
    return (
      <section id="projects" className="py-24 bg-dark relative">
        <AnimatedBackground />
        <GridPattern />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.span
              className="text-primary font-medium text-sm uppercase tracking-wider"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              My Work
            </motion.span>
            <motion.h2
              className="text-4xl md:text-5xl font-bold mt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Featured <span className="text-primary">Projects</span>
            </motion.h2>
          </motion.div>
          
          <div className="flex justify-center items-center h-64">
            <motion.div
              className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="projects" className="py-24 bg-dark relative">
      <AnimatedBackground />
      <GridPattern />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.span
            className="text-primary font-medium text-sm uppercase tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            My Work
          </motion.span>
          <motion.h2
            className="text-4xl md:text-5xl font-bold mt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Featured <span className="text-primary">Projects</span>
          </motion.h2>
          <motion.p
            className="text-gray-400 mt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Projects fetched from <a href="https://github.com/stewiriffin" target="_blank" className="text-primary hover:underline">@stewiriffin</a> on GitHub
          </motion.p>
        </motion.div>

        {error ? (
          <div className="text-center text-red-400 py-12">
            <p>{error}</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {repos.map((repo, index) => {
              const LanguageIcon = getLanguageIcon(repo.language)
              const gradient = getLanguageGradient(repo.language)
              
              return (
                <motion.div
                  key={repo.id}
                  className="group relative bg-card/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/5 hover:border-white/10 transition-all duration-500"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  {/* Gradient Accent */}
                  <div className={`h-1.5 bg-gradient-to-r ${gradient}`} />
                  
                  <div className="p-8">
                    {/* Icon Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-14 h-14 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                        <LanguageIcon className="text-white" size={24} />
                      </div>
                      <div className="flex gap-2">
                        <motion.a
                          href={repo.html_url}
                          target="_blank"
                          className="w-9 h-9 bg-white/5 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300"
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FaGithub size={16} />
                        </motion.a>
                        <motion.a
                          href={repo.html_url}
                          target="_blank"
                          className="w-9 h-9 bg-white/5 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300"
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FaExternalLinkAlt size={14} />
                        </motion.a>
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                      {repo.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                      {repo.description || 'No description available for this project.'}
                    </p>

                    {/* Stats */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-1 text-gray-400 text-sm">
                        <FaStar size={14} />
                        <span>{repo.stargazers_count}</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-400 text-sm">
                        <FaCodeBranch size={14} />
                        <span>{repo.forks_count}</span>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs ${gradient} text-white`}>
                        {repo.language || 'Code'}
                      </span>
                    </div>
                  </div>

                  {/* Hover Gradient Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradient}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
                  
                  {/* Arrow Indicator */}
                  <motion.div
                    className="absolute bottom-8 right-8 w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <FaArrowRight className="text-dark" size={16} />
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        )}

        {/* View All Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="https://github.com/stewiriffin?tab=repositories"
            target="_blank"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary/30 text-primary rounded-full font-semibold hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            View All GitHub Projects
            <FaExternalLinkAlt />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

// Contact Section
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 2000))
    setSubmitStatus('success')
    setFormData({ name: '', email: '', subject: '', message: '' })
    setIsSubmitting(false)
    setTimeout(() => setSubmitStatus('idle'), 4000)
  }

  const contactInfo = [
    { icon: FaEnvelope, label: 'Email', value: 'mbaegicheha@gmail.com', gradient: 'from-blue-500 to-blue-700' },
    { icon: FaPhone, label: 'Phone', value: '+254 708617059', gradient: 'from-green-500 to-green-700' },
    { icon: FaMapMarkerAlt, label: 'Location', value: 'Nairobi, Kenya', gradient: 'from-purple-500 to-purple-700' },
    { icon: FaGithub, label: 'GitHub', value: '@stewiriffin', gradient: 'from-gray-700 to-gray-900' },
  ]

  return (
    <section id="contact" className="py-24 bg-darker relative">
      <AnimatedBackground />
      <GridPattern />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.span
            className="text-primary font-medium text-sm uppercase tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Get In Touch
          </motion.span>
          <motion.h2
            className="text-4xl md:text-5xl font-bold mt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Let's Work <span className="text-primary">Together</span>
          </motion.h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4">Let's connect!</h3>
            <p className="text-gray-400 leading-relaxed mb-8">
              I'm always interested in hearing about new projects and opportunities. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>

            <div className="space-y-4 mb-10">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-card/50 backdrop-blur-sm rounded-2xl border border-white/5 hover:border-white/10 transition-all duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${info.gradient} rounded-xl flex items-center justify-center shadow-lg`}>
                    <info.icon className="text-white" size={20} />
                  </div>
                  <div>
                    <span className="text-gray-400 text-sm">{info.label}</span>
                    <p className="text-white font-medium">{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <p className="text-gray-400 text-sm mb-4">Follow me on:</p>
              <div className="flex gap-3">
                {[
                  { icon: FaGithub, href: 'https://github.com/stewiriffin', label: 'GitHub' },
                  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/ianmbae', label: 'LinkedIn' },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
                    className="w-12 h-12 bg-card/50 backdrop-blur-sm rounded-xl flex items-center justify-center text-gray-400 hover:text-white border border-white/5 hover:border-primary/50 transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -3, backgroundColor: 'rgba(48, 105, 152, 0.2)' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="bg-card/50 backdrop-blur-sm rounded-3xl p-8 border border-white/5"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-400 text-sm mb-2">Your Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-5 py-4 bg-white/5 rounded-xl text-white border border-white/10 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-400 text-sm mb-2">Your Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-5 py-4 bg-white/5 rounded-xl text-white border border-white/10 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label className="block text-gray-400 text-sm mb-2">Subject</label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-5 py-4 bg-white/5 rounded-xl text-white border border-white/10 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                placeholder="Project Inquiry"
              />
            </div>
            
            <div className="mb-8">
              <label className="block text-gray-400 text-sm mb-2">Your Message</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full px-5 py-4 bg-white/5 rounded-xl text-white border border-white/10 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none"
                placeholder="Tell me about your project..."
                required
              />
            </div>
            
            <motion.button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-primary to-primary/80 text-white rounded-xl font-semibold shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-3">
                  <motion.span
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                  Sending...
                </span>
              ) : (
                'Send Message'
              )}
            </motion.button>

            <AnimatePresence>
              {submitStatus === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-green-400 text-center mt-4 flex items-center justify-center gap-2"
                >
                  <span className="w-6 h-6 bg-green-400/20 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  Message sent successfully! I'll get back to you soon.
                </motion.p>
              )}
            </AnimatePresence>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

// Footer
const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark py-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-gray-400">
              © {currentYear} <span className="text-white font-semibold">Ian Gicheha Mbae</span>. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm mt-1">
              Python Software Developer & Computer Science Student
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-gray-500 text-sm hidden md:inline">Follow me:</span>
            <div className="flex gap-2">
              {[
                { icon: FaGithub, href: 'https://github.com/stewiriffin' },
                { icon: FaLinkedin, href: 'https://www.linkedin.com/in/ianmbae' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
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

// Main Page Component
export default function Home() {
  return (
    <main className="min-h-screen bg-dark text-white overflow-x-hidden">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
