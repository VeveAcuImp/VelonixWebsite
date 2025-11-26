'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

export default function NewsPage() {
  // Latest 2025 news about GPU, AI, and server hardware
  const allPosts = [
    {
      id: 1,
      title: 'Flexible AI Compute Rental: Essential for Growing Businesses',
      excerpt: 'As AI infrastructure costs soar, flexible compute rental models become crucial for businesses in Southeast Asia and Middle East. This approach enables companies to access cutting-edge GPU hardware without massive capital investment.',
      date: '2025-12-15',
      readTime: '5 min read',
      category: 'Business',
    },
    {
      id: 2,
      title: 'NVIDIA Vera Rubin Platform: $500B GPU Sales Target by 2026',
      excerpt: 'NVIDIA announces early launch of Vera Rubin platform for Q3 2026, featuring dual-chip GPUs and Rubin CPX accelerators. Despite market challenges, NVIDIA projects $500 billion in AI GPU sales by late 2026.',
      date: '2025-11-20',
      readTime: '6 min read',
      category: 'Technology',
    },
    {
      id: 3,
      title: 'AI Server Hardware Demand to Surge in 2026',
      excerpt: 'Morgan Stanley predicts 2026 will be the breakout year for AI server hardware, with rack demand expected to jump from 28,000 units in 2025 to at least 60,000 units in 2026, driven by GPU and ASIC upgrades.',
      date: '2025-11-03',
      readTime: '5 min read',
      category: 'Business',
    },
    {
      id: 4,
      title: 'AI Video Technology Drives Exponential Compute Demand Growth',
      excerpt: 'AI video applications like OpenAI\'s Sora 2.0 are driving massive compute requirements. Training Sora requires 4,200-10,500 H100 GPUs. NVIDIA projects global AI infrastructure spending to reach $3-4 trillion by 2030.',
      date: '2025-10-11',
      readTime: '6 min read',
      category: 'Technology',
    },
    {
      id: 5,
      title: 'Enterprise AI Adoption Accelerates in Southeast Asia',
      excerpt: 'Businesses across Southeast Asia are rapidly adopting AI technologies, driving unprecedented demand for GPU-accelerated infrastructure. Companies are seeking flexible compute solutions to scale their AI initiatives without massive upfront investments.',
      date: '2025-09-25',
      readTime: '6 min read',
      category: 'Business',
    },
    {
      id: 6,
      title: 'H200 and B200 GPUs: Transforming AI Data Centers',
      excerpt: 'NVIDIA\'s latest H200 and B200 GPU modules are revolutionizing AI data centers worldwide. These powerful chips deliver exceptional performance for large language model training and inference workloads, setting new benchmarks in AI compute.',
      date: '2025-08-18',
      readTime: '7 min read',
      category: 'Technology',
    },
    {
      id: 7,
      title: 'GPU Server Maintenance Best Practices for 2025',
      excerpt: 'As GPU servers become more critical to AI operations, proper maintenance is essential. Learn about best practices for keeping your GPU infrastructure running at peak performance, including thermal management and firmware updates.',
      date: '2025-07-12',
      readTime: '6 min read',
      category: 'Maintenance',
    },
    {
      id: 8,
      title: 'NVIDIA Announces Blackwell Ultra GPU for Late 2025',
      excerpt: 'NVIDIA reveals plans for Blackwell Ultra GPU launching in late 2025, along with Vera Rubin computing system expected in 2026. The company also introduced new DGX personal AI computers and Quantum-X Photonics at GTC 2025.',
      date: '2025-03-18',
      readTime: '7 min read',
      category: 'Technology',
    },
    {
      id: 9,
      title: 'AI Infrastructure Security: Protecting GPU Clusters',
      excerpt: 'With the increasing value of AI infrastructure, security becomes paramount. Discover essential security measures for protecting GPU clusters and AI workloads from cyber threats and unauthorized access.',
      date: '2025-02-28',
      readTime: '5 min read',
      category: 'Security',
    },
    {
      id: 10,
      title: 'Cost Optimization Strategies for AI Compute Infrastructure',
      excerpt: 'As AI compute costs continue to rise, businesses are exploring innovative strategies to optimize infrastructure spending. Flexible rental models and efficient resource allocation are key to managing costs while maintaining performance.',
      date: '2025-02-15',
      readTime: '6 min read',
      category: 'Business',
    },
    {
      id: 11,
      title: 'NVIDIA GeForce RTX 50 Series: Blackwell Architecture for AI',
      excerpt: 'NVIDIA launches GeForce RTX 50 series at CES 2025, featuring Blackwell microarchitecture with 5th-gen Tensor Cores. The RTX 5070 delivers performance comparable to RTX 4090, showcasing significant AI acceleration capabilities.',
      date: '2025-01-06',
      readTime: '6 min read',
      category: 'Technology',
    },
    {
      id: 12,
      title: 'The Future of AI Compute: Trends Shaping 2025 and Beyond',
      excerpt: 'Exploring the key trends shaping the future of AI compute infrastructure, from next-generation GPU architectures to distributed computing models. Understanding these trends helps businesses prepare for the evolving AI landscape.',
      date: '2025-01-02',
      readTime: '8 min read',
      category: 'Technology',
    },
  ]

  // Sort posts by date (newest first)
  const posts = allPosts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })

  const categories = ['All', 'Technology', 'Business', 'Maintenance', 'Security']

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
              <span className="gradient-text">News & Blog</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay updated with the latest news, trends, and insights in AI compute, GPU hardware, and server infrastructure
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 glass rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass rounded-xl p-6 hover:bg-white/10 transition-all group cursor-pointer"
              >
                <div className="mb-4">
                  <span className="px-3 py-1 bg-tech-blue/20 text-tech-cyan text-xs font-semibold rounded-full">
                    {post.category}
                  </span>
                </div>
                <h2 className="text-2xl font-semibold text-white mb-3 group-hover:text-tech-cyan transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-400 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <Link
                  href={`/news/${post.id}`}
                  className="inline-flex items-center text-tech-cyan hover:text-tech-blue transition-colors group-hover:translate-x-1"
                >
                  <span className="font-semibold">Read More</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Subscribe to our newsletter for the latest news, tips, and insights
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-tech-cyan transition-colors"
              />
              <button className="px-8 py-4 bg-gradient-to-r from-tech-blue to-tech-cyan text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-tech-blue/50 transition-all">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

