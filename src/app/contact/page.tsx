'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

const contactInfo = [
  { icon: FaEnvelope, label: 'Email', value: 'mbaegicheha@gmail.com', gradient: 'from-blue-500 to-blue-700' },
  { icon: FaPhone, label: 'Phone', value: '+254 708617059', gradient: 'from-green-500 to-green-700' },
  { icon: FaMapMarkerAlt, label: 'Location', value: 'Nairobi, Kenya', gradient: 'from-purple-500 to-purple-700' },
  { icon: FaGithub, label: 'GitHub', value: '@stewiriffin', gradient: 'from-gray-700 to-gray-900' },
]

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const subject = encodeURIComponent(
      formData.subject || `Portfolio contact from ${formData.name}`
    )
    const body = encodeURIComponent(
      `Hi Ian,\n\nYou have a new message from your portfolio.\n\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n\n` +
      `Message:\n${formData.message}`
    )

    window.location.href = `mailto:mbaegicheha@gmail.com?subject=${subject}&body=${body}`

    setSubmitStatus('success')
    setFormData({ name: '', email: '', subject: '', message: '' })
    setIsSubmitting(false)
    setTimeout(() => setSubmitStatus('idle'), 5000)
  }

  return (
    <section id="contact" className="min-h-screen py-32 bg-darker relative">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Get In Touch</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-4">
            Let&apos;s Work <span className="text-primary">Together</span>
          </h1>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="text-2xl font-semibold mb-4">Let&apos;s connect!</h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              I&apos;m always interested in hearing about new projects and opportunities.
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>

            <div className="space-y-4 mb-10">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  className="flex items-center gap-4 p-4 bg-card/50 backdrop-blur-sm rounded-2xl border border-white/5 hover:border-white/10 transition-all duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
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

            <div>
              <p className="text-gray-400 text-sm mb-4">Follow me on:</p>
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
                    className="w-12 h-12 bg-card/50 backdrop-blur-sm rounded-xl flex items-center justify-center text-gray-400 hover:text-white border border-white/5 hover:border-primary/50 transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="bg-card/50 backdrop-blur-sm rounded-3xl p-8 border border-white/5"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
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
                  suppressHydrationWarning
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
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  />
                  Sending...
                </span>
              ) : (
                'Send Message'
              )}
            </motion.button>

            <AnimatePresence>
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-4 p-4 rounded-xl bg-green-400/10 border border-green-400/20 text-center"
                >
                  <p className="text-green-400 font-medium flex items-center justify-center gap-2">
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Your email client has opened with the message ready.
                  </p>
                  <p className="text-gray-500 text-xs mt-1">Just hit Send in your email app to deliver it.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
