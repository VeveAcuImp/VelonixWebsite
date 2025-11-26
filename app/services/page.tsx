'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Server, Wrench, Settings, Package, ArrowRight } from 'lucide-react'

export default function ServicesPage() {
  const services = [
    {
      icon: Server,
      title: 'AI Compute Rental',
      description: 'Flexible AI compute rental with GPU-accelerated servers. Choose from leading brands (Dell, Supermicro, Asus, GCT, Quanta) with customizable GPU configurations.',
      href: '/services/rental',
      features: [
        'Flexible rental terms',
        'Multiple server brands (Dell, Supermicro, Asus, GCT, Quanta)',
        'Latest GPU modules (RTX Pro 6000, L40/L40s, H200, B200, B300)',
        'Customizable configurations',
      ],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Wrench,
      title: 'Server Repair',
      description: 'Expert repair services to restore your servers to optimal condition. Fast turnaround times and comprehensive diagnostics.',
      href: '/services/repair',
      features: [
        'Expert diagnostics',
        'Fast turnaround',
        'All supported server brands',
        'GPU module repair and replacement',
      ],
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Settings,
      title: 'Maintenance Services',
      description: 'Proactive maintenance to prevent issues and ensure optimal performance. Regular checkups and updates included.',
      href: '/services/maintenance',
      features: [
        'Proactive monitoring',
        'Regular maintenance',
        'Performance optimization',
        'Preventive care',
      ],
      color: 'from-indigo-500 to-blue-500',
    },
    {
      icon: Package,
      title: 'Parts Supply',
      description: 'Genuine server parts and components for all major brands. Fast delivery and competitive pricing.',
      href: '/services/parts',
      features: [
        'Genuine server parts and GPU modules',
        'All supported brands',
        'Latest GPU models available',
        'Fast delivery across region',
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
              <span className="gradient-text">Our Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible and reliable AI compute infrastructure tailored to your business needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link href={service.href}>
                    <div className="glass rounded-xl p-8 h-full hover:bg-white/10 transition-all group cursor-pointer">
                      <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h2 className="text-3xl font-semibold text-white mb-4 group-hover:text-tech-cyan transition-colors">
                        {service.title}
                      </h2>
                      <p className="text-gray-400 mb-6">
                        {service.description}
                      </p>
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center text-gray-300 text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-tech-cyan mr-3" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-center text-tech-cyan group-hover:translate-x-2 transition-transform">
                        <span className="font-semibold">Learn More</span>
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
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
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Contact us to discuss your specific requirements and get a tailored solution
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-tech-blue to-tech-cyan text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-tech-blue/50 transition-all"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

