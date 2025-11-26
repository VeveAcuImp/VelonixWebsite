'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Building2, ShoppingCart, Heart, GraduationCap, ArrowRight } from 'lucide-react'

export default function SolutionsPage() {
  const solutions = [
    {
      icon: Building2,
      title: 'Enterprise Solutions',
      description: 'Comprehensive AI compute infrastructure for large enterprises with high availability and scalability requirements for AI workloads.',
      features: [
        'High-availability configurations',
        'Disaster recovery solutions',
        'Multi-site deployments',
        'Enterprise-grade security',
      ],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: ShoppingCart,
      title: 'E-Commerce Solutions',
      description: 'Scalable AI compute solutions designed for e-commerce platforms with AI-powered features and high-performance requirements.',
      features: [
        'High-performance servers',
        'Load balancing solutions',
        'Database optimization',
        'CDN integration support',
      ],
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Heart,
      title: 'Healthcare Solutions',
      description: 'HIPAA-compliant AI compute infrastructure for healthcare organizations with AI workloads and strict data security requirements.',
      features: [
        'HIPAA compliance',
        'Data encryption',
        'Secure backup solutions',
        '24/7 monitoring',
      ],
      color: 'from-indigo-500 to-blue-500',
    },
    {
      icon: GraduationCap,
      title: 'Education Solutions',
      description: 'Cost-effective AI compute solutions for educational institutions with flexible scaling options for research and AI education.',
      features: [
        'Budget-friendly options',
        'Scalable infrastructure',
        'Student portal support',
        'Learning management systems',
      ],
      color: 'from-cyan-500 to-teal-500',
    },
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden animated-gradient">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-900" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Industry Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tailored AI compute solutions designed for specific industry needs and AI workloads
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => {
              const Icon = solution.icon
              return (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass rounded-xl p-8 hover:bg-white/10 transition-all"
                >
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${solution.color} flex items-center justify-center mb-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-semibold text-white mb-4">
                    {solution.title}
                  </h2>
                  <p className="text-gray-400 mb-6">
                    {solution.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {solution.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-300 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-tech-cyan mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-tech-cyan hover:text-tech-blue transition-colors"
                  >
                    <span className="font-semibold">Learn More</span>
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Every business is unique. We work with you to design a flexible and reliable AI compute solution that 
              perfectly fits your specific AI workload requirements, budget, and growth plans.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-tech-blue to-tech-cyan text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-tech-blue/50 transition-all"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

