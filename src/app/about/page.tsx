'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaGithub, FaDatabase, FaMapMarkerAlt, FaGraduationCap } from 'react-icons/fa'
import { SiPython, SiReact } from 'react-icons/si'

const highlights = [
  { title: 'Computer Science', subtitle: 'Degree — In Progress', icon: FaGraduationCap },
  { title: 'Python Development', subtitle: 'Django · Flask · FastAPI', icon: SiPython },
  { title: 'Web Development', subtitle: 'React · TypeScript', icon: SiReact },
  { title: 'Database Design', subtitle: 'PostgreSQL · MongoDB', icon: FaDatabase },
]


export default function About() {
  return (
    <section id="about" className="min-h-screen py-32 bg-dark relative">
      <div className="container mx-auto px-6 relative z-10">

        {/* Section header */}
        <motion.div
          className="max-w-3xl mx-auto mb-20 text-center"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-mono text-sm uppercase tracking-widest mb-3">About Me</p>
          <h1 className="text-4xl md:text-5xl font-bold">
            Building things that <span className="text-primary">matter</span>
          </h1>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left — photo + info cards */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            {/* Photo */}
            <div className="relative w-full max-w-sm mx-auto">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src="/photo.png"
                  alt="Ian Gicheha Mbae"
                  fill
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/50 via-transparent to-transparent" />
                {/* Name overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-white font-semibold">Ian Gicheha Mbae</p>
                  <p className="text-primary text-sm">Python Developer · Nairobi</p>
                </div>
              </div>
              {/* Decorative border offset */}
              <div className="absolute -inset-2 rounded-2xl border border-primary/15 -z-10" />
              <div className="absolute inset-0 bg-primary/8 rounded-2xl blur-2xl -z-20 scale-110" />
            </div>

            {/* GitHub card */}
            <div className="flex items-center gap-4 p-4 rounded-xl border border-white/8 bg-card hover:border-primary/30 transition-all duration-300">
              <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0">
                <FaGithub className="text-white" size={18} />
              </div>
              <div className="min-w-0">
                <p className="text-white font-medium text-sm">@stewiriffin</p>
                <p className="text-gray-500 text-xs">github.com/stewiriffin</p>
              </div>
              <a
                href="https://github.com/stewiriffin"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto flex-shrink-0 px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-xs font-medium hover:bg-primary/20 transition-colors"
              >
                View Profile
              </a>
            </div>

            {/* Location */}
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl border border-white/8 bg-card">
              <FaMapMarkerAlt className="text-primary flex-shrink-0" size={14} />
              <span className="text-gray-400 text-sm">Based in <span className="text-white">Nairobi, Kenya</span></span>
            </div>
          </motion.div>

          {/* Right — bio + highlights */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 leading-snug">
              Python Developer &amp;{' '}
              <span className="text-primary">CS Student</span>{' '}
              with 4 years of experience
            </h2>

            <div className="space-y-5 text-gray-400 leading-relaxed mb-10">
              <p>
                I&apos;m <span className="text-white font-medium">Ian Gicheha Mbae</span> — a backend
                developer focused on building clean, scalable APIs and web applications. I started coding
                at 16, earned my Computer Science diploma, and am now pursuing my degree full-time at 20.
              </p>
              <p>
                My work centres on the Python ecosystem:{' '}
                <span className="text-primary">Django</span>,{' '}
                <span className="text-primary">FastAPI</span>, and{' '}
                <span className="text-primary">Flask</span> for APIs, paired with{' '}
                <span className="text-primary">PostgreSQL</span> and{' '}
                <span className="text-primary">Redis</span> on the data layer, and{' '}
                <span className="text-primary">Docker</span> for deployment. I care about code that is
                readable, testable, and built to last.
              </p>
              <p>
                Outside of work I contribute to open source, explore machine learning, and document
                everything I build on GitHub.
              </p>
            </div>

            {/* Highlights grid */}
            <div className="grid grid-cols-2 gap-3">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.title}
                  className="p-4 rounded-xl border border-white/8 bg-white/[0.02] hover:border-primary/30 hover:bg-primary/[0.03] transition-all duration-300"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.08 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="text-primary" size={15} />
                    </div>
                    <div className="min-w-0">
                      <p className="font-medium text-sm text-white leading-tight">{item.title}</p>
                      <p className="text-gray-500 text-xs mt-0.5">{item.subtitle}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Divider stat row */}
            <div className="flex gap-8 mt-10 pt-8 border-t border-white/8">
              {[
                { n: '4+', l: 'Years coding' },
                { n: '24+', l: 'Repositories' },
                { n: '15+', l: 'Projects shipped' },
              ].map((s) => (
                <div key={s.l}>
                  <p className="text-2xl font-bold text-primary">{s.n}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{s.l}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
