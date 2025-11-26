'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Settings, Check, ArrowLeft, Monitor, RefreshCw, Shield } from 'lucide-react'

export default function MaintenancePage() {
  const features = [
    '24/7 proactive monitoring',
    'Regular health checks and diagnostics',
    'Performance optimization',
    'Security updates and patches',
    'Preventive maintenance scheduling',
    'Detailed maintenance reports',
    'Remote and on-site support',
    'Customized maintenance plans',
  ]

  const services = [
    {
      icon: Monitor,
      title: 'Proactive Monitoring',
      description: 'Continuous monitoring of server health, performance metrics, and potential issues.',
    },
    {
      icon: RefreshCw,
      title: 'Regular Updates',
      description: 'Timely application of security patches, firmware updates, and system optimizations.',
    },
    {
      icon: Shield,
      title: 'Security Maintenance',
      description: 'Regular security audits, vulnerability assessments, and threat mitigation.',
    },
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden animated-gradient">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-900" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/services"
            className="inline-flex items-center text-tech-cyan hover:text-tech-blue mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Services
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center">
                <Settings className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold">
                <span className="gradient-text">Maintenance Services</span>
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl">
              Proactive maintenance to ensure optimal server performance and prevent issues before 
              they impact your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6">
                <span className="gradient-text">Comprehensive Maintenance</span>
              </h2>
              <p className="text-gray-300 mb-8 text-lg">
                Our maintenance services are designed to keep your servers running smoothly and 
                prevent costly downtime. We take a proactive approach to identify and resolve 
                issues before they become problems.
              </p>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <Check className="w-6 h-6 text-tech-cyan mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="glass rounded-2xl p-8">
                <h3 className="text-2xl font-semibold text-white mb-6">Maintenance Services</h3>
                <div className="space-y-6">
                  {services.map((service, index) => {
                    const Icon = service.icon
                    return (
                      <div key={service.title} className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-tech-indigo to-tech-blue flex items-center justify-center">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold text-white mb-2">
                            {service.title}
                          </h4>
                          <p className="text-gray-400">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Keep Your Servers Running Smoothly
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Contact us to set up a maintenance plan tailored to your needs
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-tech-indigo to-tech-blue text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-tech-indigo/50 transition-all"
            >
              <span>Get Started</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

