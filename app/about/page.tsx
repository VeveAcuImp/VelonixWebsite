'use client'

import { motion } from 'framer-motion'
import { Target, Users, Award, TrendingUp } from 'lucide-react'

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To provide flexible and reliable AI compute power that empowers businesses across Southeast Asia and Middle East to achieve their AI goals with excellence.',
    },
    {
      icon: Users,
      title: 'Our Vision',
      description: 'To become Malaysia\'s leading provider of comprehensive server services, recognized for innovation, quality, and customer satisfaction.',
    },
    {
      icon: Award,
      title: 'Our Values',
      description: 'We are committed to integrity, excellence, and customer-centricity in everything we do. Quality and reliability are at the heart of our operations.',
    },
    {
      icon: TrendingUp,
      title: 'Our Commitment',
      description: 'We continuously invest in our team, technology, and processes to deliver cutting-edge solutions that meet the evolving needs of our clients.',
    },
  ]

  const stats = [
    { number: '5+', label: 'Server Brands' },
    { number: '5', label: 'GPU Models' },
    { number: '99.9%', label: 'Uptime SLA' },
    { number: '24/7', label: 'Support' },
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
              <span className="gradient-text">About Velonix</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leading the way in server solutions across Southeast Asia and Middle East
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6">
                <span className="gradient-text">Our Story</span>
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Velonix was founded with a clear vision: to provide flexible and reliable AI compute power 
                  for businesses across Southeast Asia and the Middle East. We recognized the growing demand 
                  for AI infrastructure in these rapidly expanding economies, where businesses need scalable 
                  compute resources without massive upfront investments.
                </p>
                <p>
                  Starting as a small team of AI infrastructure specialists based in Malaysia, we've grown into 
                  a trusted partner for enterprises, SMEs, and startups across the region. Our core mission is 
                  to deliver flexible and reliable AI compute power, enabling businesses to scale their AI 
                  workloads seamlessly throughout Southeast Asia and the Middle East.
                </p>
                <p>
                  Today, we serve hundreds of clients across various industries, from finance and healthcare 
                  to e-commerce and technology, spanning multiple countries in these dynamic regions. Our 
                  commitment to providing flexible, reliable AI compute infrastructure has made us a preferred 
                  choice for businesses seeking to accelerate their AI initiatives in these fast-growing markets.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="glass rounded-2xl p-8">
                <div className="aspect-video bg-gradient-to-br from-tech-blue to-tech-purple rounded-lg flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-6xl font-bold mb-2">Velonix</div>
                    <div className="text-xl opacity-80">AI Compute Power</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-lg">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Our Core Values</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass rounded-xl p-8 hover:bg-white/10 transition-all"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-gradient-to-br from-tech-blue to-tech-purple flex items-center justify-center">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-white mb-3">
                        {value.title}
                      </h3>
                      <p className="text-gray-400">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Our Team</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Experienced professionals dedicated to your success
            </p>
          </motion.div>

          <div className="glass rounded-2xl p-12 text-center">
            <p className="text-lg text-gray-300 mb-6">
              Our team consists of certified server engineers, network specialists, and technical 
              support professionals with years of experience in enterprise server infrastructure. 
              We combine deep technical expertise with a customer-first approach to deliver 
              exceptional service.
            </p>
            <p className="text-lg text-gray-300">
              From initial consultation to ongoing maintenance, our team is committed to ensuring 
              your server infrastructure operates at peak performance. We stay current with the 
              latest technologies and best practices to provide you with cutting-edge solutions.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

