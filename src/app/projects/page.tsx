'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaCode, FaExternalLinkAlt, FaStar, FaCodeBranch, FaArrowRight } from 'react-icons/fa'
import { SiPython, SiTypescript, SiJavascript, SiHtml5, SiCss3, SiDart } from 'react-icons/si'

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

const getLanguageIcon = (language: string | null) => {
  switch (language?.toLowerCase()) {
    case 'python':     return SiPython
    case 'typescript': return SiTypescript
    case 'javascript': return SiJavascript
    case 'html':       return SiHtml5
    case 'css':        return SiCss3
    case 'dart':       return SiDart
    default:           return FaCode
  }
}

const getLanguageGradient = (language: string | null) => {
  switch (language?.toLowerCase()) {
    case 'python':     return 'from-blue-500 to-blue-700'
    case 'typescript': return 'from-blue-600 to-blue-800'
    case 'javascript': return 'from-yellow-500 to-orange-500'
    case 'html':       return 'from-orange-500 to-red-500'
    case 'css':        return 'from-blue-400 to-purple-500'
    case 'dart':       return 'from-cyan-500 to-blue-600'
    default:           return 'from-gray-500 to-gray-700'
  }
}

// Fallback descriptions — GitHub description takes priority when set
const repoDescriptions: Record<string, string> = {
  'QR-app':                       'Cross-platform mobile app for generating and scanning QR codes, built with Flutter/Dart.',
  'QR-code-':                     'Web-based QR code generator with customizable output and instant download.',
  'Mama-Fua':                     'Laundry service management platform for booking, tracking orders, and payments.',
  'Kra':                          'Tax compliance and KRA PIN verification tool for Kenyan businesses and individuals.',
  'linkedln-tool':                 'Browser automation tool for LinkedIn outreach and connection management.',
  'Resume-builder':               'Interactive resume builder with live preview and one-click PDF export.',
  'MD-editor':                    'Real-time Markdown editor with live preview, syntax highlighting, and export.',
  'PDF':                          'PDF generation and manipulation tool for creating documents from structured templates.',
  'Whatsapp-business-automation': 'Python automation suite for WhatsApp Business API — messaging, notifications, and workflows.',
  'Jumian':                       'Full-stack TypeScript web application with a modern UI and RESTful backend.',
  'Chemical-Equation':            'Chemical equation balancer and molecular formula validator aimed at students.',
  'portfolio':                    'Previous iteration of my personal developer portfolio website.',
  'Gretsa-Portal-v2':             'Student and staff portal for Gretsa University — v2 rebuild with enhanced features and performance.',
  'Merry-Christmas':              'Interactive Christmas greeting card with CSS animations and festive effects.',
  'happy-birthday':               'Animated birthday greeting page with confetti effects and personalised messages.',
  'Find-out-':                    'Interactive information-discovery tool for querying and displaying data in real time.',
  'website-compare-':             'Side-by-side website comparison tool for visual UI and content analysis.',
  'clinic-response-2':            'Clinic management system for patient intake, appointment scheduling, and response tracking.',
  'Predictor':                    'Prediction tool with a clean web interface, powered by a JavaScript ML model.',
  'weather-app':                  'Real-time weather dashboard fetching current conditions and forecasts via OpenWeatherMap API.',
  'Tiktok-video-downloader-':     'Web tool for downloading TikTok videos without watermarks.',
  'Youtube':                      'YouTube utilities — search, metadata extraction, and video download helpers.',
  'personal-website':             'Earlier version of my personal developer website and portfolio.',
  'therapist':                    'Landing page for a therapist practice with service listings and a contact form.',
}

const formatRepoName = (name: string) =>
  name.replace(/[-_]/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())

const timeAgo = (dateStr: string) => {
  const diff = Date.now() - new Date(dateStr).getTime()
  const days = Math.floor(diff / 86400000)
  if (days < 1)  return 'today'
  if (days < 7)  return `${days}d ago`
  if (days < 30) return `${Math.floor(days / 7)}w ago`
  if (days < 365) return `${Math.floor(days / 30)}mo ago`
  return `${Math.floor(days / 365)}y ago`
}

export default function Projects() {
  const [repos, setRepos] = useState<Repository[]>([])
  const [filtered, setFiltered] = useState<Repository[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [activeLanguage, setActiveLanguage] = useState<string>('All')
  const [languages, setLanguages] = useState<string[]>([])

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          'https://api.github.com/users/stewiriffin/repos?sort=updated&per_page=100'
        )
        if (!response.ok) throw new Error('Failed to fetch repositories')
        const data: Repository[] = await response.json()

        const withCode = data.filter((r) => !r.fork && r.language !== null)
        setRepos(withCode)
        setFiltered(withCode)

        const langs = ['All', ...Array.from(new Set(withCode.map((r) => r.language!)))]
        setLanguages(langs)
      } catch (err) {
        setError('Failed to load projects from GitHub')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    fetchRepos()
  }, [])

  const handleFilter = (lang: string) => {
    setActiveLanguage(lang)
    setFiltered(lang === 'All' ? repos : repos.filter((r) => r.language === lang))
  }

  return (
    <section id="projects" className="min-h-screen py-32 bg-dark relative">
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">My Work</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-4">
            Featured <span className="text-primary">Projects</span>
          </h1>
          <p className="text-gray-400 mt-4">
            {repos.length > 0 && (
              <span className="text-primary font-medium">{repos.length} repositories </span>
            )}
            from{' '}
            <a
              href="https://github.com/stewiriffin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              @stewiriffin
            </a>{' '}
            on GitHub
          </p>
        </motion.div>

        {/* Language filter */}
        {!loading && !error && languages.length > 1 && (
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {languages.map((lang) => (
              <motion.button
                key={lang}
                onClick={() => handleFilter(lang)}
                className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${
                  activeLanguage === lang
                    ? 'bg-primary text-white border-primary shadow-lg shadow-primary/30'
                    : 'bg-white/5 text-gray-400 border-white/10 hover:border-primary/50 hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                {lang}
                {lang !== 'All' && (
                  <span className="ml-2 text-xs opacity-60">
                    {repos.filter((r) => r.language === lang).length}
                  </span>
                )}
              </motion.button>
            ))}
          </motion.div>
        )}

        {/* Content */}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <motion.div
              className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            />
          </div>
        ) : error ? (
          <div className="text-center text-red-400 py-12">
            <p>{error}</p>
          </div>
        ) : (
          <AnimatePresence mode="popLayout">
            <motion.div
              key={activeLanguage}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {filtered.map((repo, index) => {
                const LanguageIcon = getLanguageIcon(repo.language)
                const gradient = getLanguageGradient(repo.language)

                return (
                  <motion.div
                    key={repo.id}
                    layout
                    className="group relative bg-card/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/5 hover:border-white/10 transition-all duration-500"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ delay: Math.min(index * 0.05, 0.3) }}
                    whileHover={{ y: -6 }}
                  >
                    <div className={`h-1.5 bg-gradient-to-r ${gradient}`} />

                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-12 h-12 bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center shadow-lg flex-shrink-0`}>
                          <LanguageIcon className="text-white" size={20} />
                        </div>
                        <div className="flex gap-2 ml-2">
                          <motion.a
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300"
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            aria-label="View on GitHub"
                          >
                            <FaGithub size={14} />
                          </motion.a>
                          <motion.a
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300"
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            aria-label="Open project"
                          >
                            <FaExternalLinkAlt size={12} />
                          </motion.a>
                        </div>
                      </div>

                      <h2 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300 leading-snug">
                        {formatRepoName(repo.name)}
                      </h2>
                      <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
                        {repo.description || repoDescriptions[repo.name] || 'No description available.'}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-1 text-gray-500 text-xs">
                            <FaStar size={11} />
                            <span>{repo.stargazers_count}</span>
                          </div>
                          <div className="flex items-center gap-1 text-gray-500 text-xs">
                            <FaCodeBranch size={11} />
                            <span>{repo.forks_count}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`px-2.5 py-1 rounded-full text-xs bg-gradient-to-r ${gradient} text-white`}>
                            {repo.language}
                          </span>
                          <span className="text-gray-600 text-xs">{timeAgo(repo.updated_at)}</span>
                        </div>
                      </div>
                    </div>

                    <div className={`absolute inset-0 bg-gradient-to-br ${gradient}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                    <motion.div
                      className="absolute bottom-6 right-6 w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                    >
                      <FaArrowRight className="text-dark" size={12} />
                    </motion.div>
                  </motion.div>
                )
              })}
            </motion.div>
          </AnimatePresence>
        )}

        {/* View All */}
        {!loading && !error && (
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <motion.a
              href="https://github.com/stewiriffin?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary/30 text-primary rounded-full font-semibold hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View All on GitHub
              <FaExternalLinkAlt size={14} />
            </motion.a>
          </motion.div>
        )}
      </div>
    </section>
  )
}
