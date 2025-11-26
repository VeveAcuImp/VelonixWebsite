'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Server, Check, ArrowLeft, Clock, Shield, Zap } from 'lucide-react'

export default function RentalPage() {
  const features = [
    'Flexible rental terms (monthly, quarterly, annual)',
    'Enterprise-grade server hardware',
    'Customizable configurations',
    '24/7 monitoring and support',
    'Quick deployment and setup',
    'Scalable solutions as your business grows',
    'Regular maintenance included',
    'Data center hosting options',
  ]

  const benefits = [
    {
      icon: Clock,
      title: 'Quick Deployment',
      description: 'Get your servers up and running in days, not weeks. Fast setup and configuration.',
    },
    {
      icon: Shield,
      title: 'Reliable Infrastructure',
      description: 'Enterprise-grade hardware with 99.9% uptime guarantee and redundant systems.',
    },
    {
      icon: Zap,
      title: 'Scalable Solutions',
      description: 'Easily scale up or down based on your business needs without long-term commitments.',
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
              <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <Server className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold">
                <span className="gradient-text">Server Rental</span>
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl">
              Flexible AI compute rental solutions with GPU-accelerated infrastructure. Access enterprise-grade 
              servers and GPUs without the upfront capital investment. Custom configurations tailored to your AI workloads.
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
                <span className="gradient-text">Why Choose Our Rental Service?</span>
              </h2>
              <p className="text-gray-300 mb-8 text-lg">
                Our AI compute rental service provides you with access to top-tier GPU-accelerated servers 
                without the significant upfront investment. We offer servers from leading brands with the latest 
                GPU modules, all customizable to meet your specific AI workload requirements.
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
              className="glass rounded-2xl p-8"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">Service Benefits</h3>
              <div className="space-y-6">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon
                  return (
                    <div key={benefit.title} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-tech-blue to-tech-cyan flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-white mb-2">
                          {benefit.title}
                        </h4>
                        <p className="text-gray-400">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              <span className="gradient-text">Technical Specifications</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We offer servers from leading brands with the latest GPU modules, all customizable to your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Server Brands */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass rounded-2xl p-8"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">Server Brands</h3>
              <p className="text-gray-400 mb-6">
                We provide servers from multiple leading manufacturers, ensuring compatibility and reliability for your AI workloads.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {['Dell', 'Supermicro', 'Asus', 'GCT (Giga Computing Technology)', 'Quanta'].map((brand) => (
                  <div
                    key={brand}
                    className="px-4 py-3 bg-slate-800/50 rounded-lg text-center text-gray-300 font-medium hover:bg-slate-800 transition-colors"
                  >
                    {brand}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* GPU Modules */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass rounded-2xl p-8"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">GPU Modules</h3>
              <p className="text-gray-400 mb-6">
                Our servers are equipped with the latest GPU modules, optimized for AI and machine learning workloads.
              </p>
              <div className="space-y-3">
                {['RTX Pro 6000', 'L40 / L40s', 'H200', 'B200', 'B300'].map((gpu) => (
                  <div
                    key={gpu}
                    className="px-4 py-3 bg-slate-800/50 rounded-lg text-gray-300 font-medium hover:bg-slate-800 transition-colors"
                  >
                    {gpu}
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-6">
                * GPU configurations can be customized based on your specific requirements
              </p>
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Contact us to discuss your AI compute requirements and get a customized rental plan with the perfect server and GPU configuration
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-tech-blue to-tech-cyan text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-tech-blue/50 transition-all"
            >
              <span>Get Started</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

