'use client'

import { motion } from 'framer-motion'
import { FaCode, FaDatabase, FaCloud } from 'react-icons/fa'
import {
  SiDjango, SiFlask, SiFastapi, SiPostgresql, SiMongodb, SiDocker,
  SiAmazon, SiRedis, SiNginx, SiCelery, SiRabbitmq, SiPython,
  SiTypescript,
} from 'react-icons/si'

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
  'Data Structures', 'Algorithms', 'GitHub Actions',
]

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen py-32 bg-darker relative">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-secondary font-medium text-sm uppercase tracking-wider">What I Do</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-4">
            Technical <span className="text-secondary">Skills</span>
          </h1>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              className="group relative bg-card/50 backdrop-blur-sm rounded-3xl p-8 border border-white/5 hover:border-white/10 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: catIndex * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-14 h-14 bg-gradient-to-br ${category.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                  <category.icon className="text-white" size={24} />
                </div>
                <div>
                  <h2 className="text-xl font-semibold">{category.title}</h2>
                  <p className="text-gray-400 text-sm">{category.skills.length} skills</p>
                </div>
              </div>

              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
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
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-primary rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, ease: 'easeOut', delay: catIndex * 0.1 + skillIndex * 0.06 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient}/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 p-8 bg-card/30 backdrop-blur-sm rounded-3xl border border-white/5"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-xl font-semibold mb-6 text-center">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {additionalSkills.map((skill, index) => (
              <motion.span
                key={skill}
                className="px-5 py-2.5 bg-white/5 rounded-full text-gray-300 text-sm border border-white/10 hover:border-primary/50 hover:bg-primary/10 hover:text-primary transition-all duration-300 cursor-default"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.03 }}
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
