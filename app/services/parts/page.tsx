'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Package, Check, ArrowLeft, Box, Truck, Award } from 'lucide-react'

export default function PartsPage() {
  const features = [
    'Genuine OEM parts and components',
    'All major server brands supported',
    'Fast delivery across Southeast Asia and Middle East',
    'Competitive pricing',
    'Quality guarantee on all parts',
    'Large inventory of common parts',
    'Special order service for rare parts',
    'Expert consultation on part selection',
  ]

  const brands = [
    'Dell', 'Supermicro', 'Asus', 'GCT (Giga Computing Technology)', 'Quanta'
  ]

  const gpuModules = [
    'RTX Pro 6000', 'L40 / L40s', 'H200', 'B200', 'B300'
  ]

  const partCategories = [
    'CPU',
    'Memory (RAM)',
    'Hard Drives / SSDs',
    'GPU Cards',
    'IB Cards (InfiniBand)',
    'Ethernet Cards',
    'RAID Controller Cards',
    'Optical Modules',
    'Motherboards',
    'Adapter Boards',
    'Riser Cards',
  ]

  const benefits = [
    {
      icon: Box,
      title: 'Wide Selection',
      description: 'Extensive inventory covering all major server components and accessories.',
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Quick shipping across Southeast Asia and Middle East with tracking and insurance included.',
    },
    {
      icon: Award,
      title: 'Quality Guaranteed',
      description: 'All parts are genuine and come with manufacturer warranties.',
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
              <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center">
                <Package className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold">
                <span className="gradient-text">Parts Supply</span>
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl">
              Genuine server parts and components for all major brands. Fast delivery and 
              competitive pricing to keep your infrastructure running.
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
                <span className="gradient-text">Quality Parts Supply</span>
              </h2>
              <p className="text-gray-300 mb-8 text-lg">
                We maintain a comprehensive inventory of genuine server parts and components covering 
                all essential categories including CPUs, memory, storage, GPUs, network cards, and more. 
                Whether you need a quick replacement, upgrade, or rare component, we've got you covered 
                with customizable solutions.
              </p>
              <ul className="space-y-4 mb-8">
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
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-4">Supported Server Brands</h3>
                <div className="flex flex-wrap gap-2">
                  {brands.map((brand) => (
                    <span
                      key={brand}
                      className="px-4 py-2 glass rounded-lg text-sm text-gray-300"
                    >
                      {brand}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-4">GPU Modules Available</h3>
                <div className="flex flex-wrap gap-2">
                  {gpuModules.map((gpu) => (
                    <span
                      key={gpu}
                      className="px-4 py-2 bg-tech-blue/20 border border-tech-blue/30 rounded-lg text-sm text-tech-cyan"
                    >
                      {gpu}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Parts Categories</h3>
                <p className="text-gray-400 text-sm mb-4">
                  We supply a comprehensive range of server components and accessories:
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {partCategories.map((category) => (
                    <div
                      key={category}
                      className="px-3 py-2 bg-slate-800/50 rounded-lg text-sm text-gray-300 flex items-center"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-tech-cyan mr-2 flex-shrink-0" />
                      {category}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="glass rounded-2xl p-8">
                <h3 className="text-2xl font-semibold text-white mb-6">Why Choose Us</h3>
                <div className="space-y-6">
                  {benefits.map((benefit, index) => {
                    const Icon = benefit.icon
                    return (
                      <div key={benefit.title} className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-tech-cyan to-tech-teal flex items-center justify-center">
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
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Parts Categories Section */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">
              <span className="gradient-text">Comprehensive Parts Inventory</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We supply a complete range of server components and accessories for all your infrastructure needs
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {partCategories.map((category, index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="glass rounded-xl p-4 hover:bg-white/10 transition-all text-center"
              >
                <div className="w-2 h-2 rounded-full bg-tech-cyan mx-auto mb-2" />
                <p className="text-gray-300 font-medium">{category}</p>
              </motion.div>
            ))}
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
              Need Server Parts?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Contact us to inquire about parts availability and pricing
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-tech-cyan to-tech-teal text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-tech-cyan/50 transition-all"
            >
              <span>Request Quote</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

