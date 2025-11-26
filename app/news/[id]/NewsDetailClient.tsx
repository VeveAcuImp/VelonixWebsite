'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock } from 'lucide-react'

interface Post {
  id: number
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
  content: string
}

interface NewsDetailClientProps {
  post: Post
}

// Helper function to convert className to inline styles
function convertClassNameToStyle(html: string): string {
  return html
    .replace(/className="mb-4"/g, 'style="margin-bottom: 1rem;"')
    .replace(/className="text-2xl font-semibold text-white mt-8 mb-4"/g, 'style="font-size: 1.5rem; font-weight: 600; color: white; margin-top: 2rem; margin-bottom: 1rem;"')
    .replace(/className="list-disc list-inside space-y-2 mb-4 text-gray-300"/g, 'style="list-style-type: disc; list-style-position: inside; margin-bottom: 1rem; color: #cbd5e1;"')
    .replace(/<li>/g, '<li style="margin-bottom: 0.5rem;">')
}

export default function NewsDetailClient({ post }: NewsDetailClientProps) {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden animated-gradient">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-900" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/news"
            className="inline-flex items-center text-tech-cyan hover:text-tech-blue mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to News
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4">
              <span className="px-3 py-1 bg-tech-blue/20 text-tech-cyan text-sm font-semibold rounded-full">
                {post.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">{post.title}</span>
            </h1>
            <div className="flex items-center space-x-6 text-gray-400">
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="prose prose-invert max-w-none"
          >
            <div 
              className="text-gray-300 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: convertClassNameToStyle(post.content) }}
            />
          </motion.div>
        </div>
      </section>

      {/* Back to News CTA */}
      <section className="py-12 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            href="/news"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-tech-blue to-tech-cyan text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-tech-blue/50 transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to All News</span>
          </Link>
        </div>
      </section>
    </div>
  )
}

