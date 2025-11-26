'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { HelpCircle, FileText, MessageCircle, Phone, Mail, Search } from 'lucide-react'

export default function SupportPage() {
  const faqs = [
    {
      question: 'What server brands and GPU modules do you support?',
      answer: 'We provide servers from Dell, Supermicro, Asus, GCT (Giga Computing Technology), and Quanta. Our servers are equipped with GPU modules including RTX Pro 6000, L40/L40s, H200, B200, and B300. All configurations can be customized based on your specific AI workload requirements.',
    },
    {
      question: 'How quickly can you repair a server?',
      answer: 'We offer two service levels: Operations Support and Repair Services. For Operations Support with 24/7, 4-hour SLA service, customers should maintain 5% spare equipment when purchasing devices, enabling rapid replacement to restore services. For Repair Services, standard parts have a turnaround time of 5-10 business days, while GPU cards or modules require 20-30 business days for repair.',
    },
    {
      question: 'Do you offer on-site support?',
      answer: 'Yes, we offer both on-site and off-site support services. On-site support is available for maintenance, repairs, and installations. Contact us to discuss your specific needs.',
    },
    {
      question: 'What is included in your maintenance service?',
      answer: 'Our maintenance service includes 24/7 monitoring, regular health checks, performance optimization, security updates, preventive maintenance, and detailed reports. Custom maintenance plans can be tailored to your specific requirements.',
    },
    {
      question: 'Can I rent servers for short-term projects?',
      answer: 'Absolutely! We offer flexible rental terms including monthly, quarterly, and annual options. Short-term rentals are perfect for projects, testing, or temporary capacity needs.',
    },
    {
      question: 'Do you provide warranty on repairs?',
      answer: 'Yes, all our repairs come with a comprehensive warranty. The warranty period depends on the type of repair and parts used. We\'ll provide full warranty details before starting any repair work.',
    },
  ]

  const supportOptions = [
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Call us for immediate assistance',
      contact: '+60 11-1057 3298',
      hours: '24/7 Available',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us an email and we\'ll respond promptly',
      contact: 'support@velonix.com',
      hours: 'Response within 24 hours',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with our support team in real-time',
      contact: 'Available on website',
      hours: 'Mon-Fri, 9 AM - 6 PM',
      color: 'from-indigo-500 to-blue-500',
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
              <span className="gradient-text">Support Center</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're here to help. Find answers, get support, or contact our team
            </p>
          </motion.div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {supportOptions.map((option, index) => {
              const Icon = option.icon
              return (
                <motion.div
                  key={option.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass rounded-xl p-8 text-center hover:bg-white/10 transition-all"
                >
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${option.color} flex items-center justify-center mx-auto mb-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-3">
                    {option.title}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {option.description}
                  </p>
                  <p className="text-tech-cyan font-semibold mb-2">
                    {option.contact}
                  </p>
                  <p className="text-sm text-gray-500">
                    {option.hours}
                  </p>
                </motion.div>
              )
            })}
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-16">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for help articles, FAQs, or documentation..."
                className="w-full pl-12 pr-4 py-4 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-tech-cyan transition-colors"
              />
            </div>
          </div>

          {/* FAQ Section */}
          <div>
            <h2 className="text-4xl font-bold text-center mb-12">
              <span className="gradient-text">Frequently Asked Questions</span>
            </h2>
            <div className="max-w-4xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass rounded-xl p-6"
                >
                  <h3 className="text-xl font-semibold text-white mb-3 flex items-start">
                    <HelpCircle className="w-6 h-6 text-tech-cyan mr-3 flex-shrink-0 mt-0.5" />
                    {faq.question}
                  </h3>
                  <p className="text-gray-400 ml-9">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Section */}
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
              <span className="gradient-text">Documentation & Resources</span>
            </h2>
            <p className="text-xl text-gray-400">
              Access guides, manuals, and technical documentation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { title: 'Installation Guides', icon: FileText },
              { title: 'User Manuals', icon: FileText },
              { title: 'Technical Specifications', icon: FileText },
            ].map((doc, index) => {
              const Icon = doc.icon
              return (
                <motion.div
                  key={doc.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass rounded-xl p-6 text-center hover:bg-white/10 transition-all cursor-pointer"
                >
                  <Icon className="w-12 h-12 text-tech-cyan mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white">
                    {doc.title}
                  </h3>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-gradient-to-r from-tech-blue via-tech-purple to-tech-cyan">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Still Need Help?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Our support team is ready to assist you with any questions or issues
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-tech-blue rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg"
            >
              <span>Contact Support</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

