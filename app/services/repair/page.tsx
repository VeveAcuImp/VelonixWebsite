'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Wrench, Check, ArrowLeft, Clock, Shield } from 'lucide-react'

export default function RepairPage() {
  const features = [
    'Expert diagnostics and troubleshooting',
    'Fast turnaround times',
    'All major server brands supported',
    'Comprehensive repair warranty',
    'On-site and off-site repair options',
    'Emergency repair services available',
    'Transparent pricing with no hidden fees',
    'Detailed repair reports provided',
  ]

  const process = [
    {
      step: '1',
      title: 'Diagnosis',
      description: 'Thorough assessment of the issue using advanced diagnostic tools.',
    },
    {
      step: '2',
      title: 'Quote',
      description: 'Transparent pricing with detailed breakdown of repair costs.',
    },
    {
      step: '3',
      title: 'Repair',
      description: 'Expert repair using genuine parts and industry best practices.',
    },
    {
      step: '4',
      title: 'Testing',
      description: 'Comprehensive testing to ensure everything works perfectly.',
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
              <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <Wrench className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold">
                <span className="gradient-text">Server Repair</span>
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl">
              Expert repair services to restore your servers to optimal condition. Fast, reliable, 
              and backed by our comprehensive warranty.
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
                <span className="gradient-text">Comprehensive Repair Services</span>
              </h2>
              <p className="text-gray-300 mb-8 text-lg">
                Our certified technicians have years of experience repairing servers from all major 
                manufacturers. We use genuine parts and follow industry best practices to ensure 
                your servers are restored to peak performance.
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
              <div className="glass rounded-2xl p-8 mb-8">
                <h3 className="text-2xl font-semibold text-white mb-6">Our Repair Process</h3>
                <div className="space-y-6">
                  {process.map((item, index) => (
                    <div key={item.step} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-tech-purple to-tech-blue flex items-center justify-center font-bold text-white text-lg">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-white mb-2">
                          {item.title}
                        </h4>
                        <p className="text-gray-400">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
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
              Need Server Repair?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Contact us for fast, reliable repair services. Emergency repairs available.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-tech-purple to-tech-pink text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-tech-purple/50 transition-all"
            >
              <span>Request Repair</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

