"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Button } from '@/components/ui/button'
import { Calendar, Clock, ArrowRight, TrendingUp, Home, Lightbulb, FileText, BarChart3 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const SellersPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const blogPosts = [
    {
      slug: 'how-to-price-your-home-to-sell-fast-2025',
      title: 'How to Price Your Home to Sell Fast in 2025',
      excerpt: 'Discover the most effective pricing strategies for today\'s market. Learn how accurate pricing, technology tools, and expert insights can help you sell your home quickly while maximizing your return.',
      image: 'https://i.pinimg.com/originals/d4/a5/15/d4a515c8acfcaef9a2057758e52cd167.jpg',
      icon: TrendingUp,
      readTime: '8 min read',
      publishDate: 'January 15, 2025',
      category: 'Pricing Strategy'
    },
    {
      slug: 'top-home-improvements-boost-property-value',
      title: 'Top Home Improvements That Boost Your Property Value',
      excerpt: 'Maximize your home\'s value with strategic improvements that deliver the highest ROI. From kitchen updates to energy-efficient upgrades, learn which projects will attract buyers and increase your sale price.',
      image: 'https://i.pinimg.com/originals/db/ab/44/dbab448016ad1d125b51bf6b20cc7cb0.jpg',
      icon: Home,
      readTime: '10 min read',
      publishDate: 'January 10, 2025',
      category: 'Home Improvement'
    },
    {
      slug: 'home-staging-secrets-make-buyers-fall-love',
      title: 'Home Staging Secrets: Make Buyers Fall in Love',
      excerpt: 'Transform your home into a buyer\'s dream with professional staging techniques. Learn DIY tips, virtual staging options, and psychological strategies that help buyers envision themselves living in your space.',
      image: 'https://i.pinimg.com/originals/c3/cc/19/c3cc196c6e7afbefece21714ea6a7db0.jpg',
      icon: Lightbulb,
      readTime: '9 min read',
      publishDate: 'January 5, 2025',
      category: 'Home Staging'
    },
    {
      slug: 'navigating-home-selling-process-step-by-step-guide',
      title: 'Navigating the Home Selling Process: A Step-by-Step Guide',
      excerpt: 'Master the complete home selling journey from preparation to closing. Understand timelines, avoid common pitfalls, and learn about New York\'s specific legal requirements for a smooth transaction.',
      image: 'https://i.pinimg.com/originals/9f/53/d2/9f53d2bd4d7f667c14957ea6552ef5bd.jpg',
      icon: FileText,
      readTime: '12 min read',
      publishDate: 'December 30, 2024',
      category: 'Selling Process'
    },
    {
      slug: 'understanding-current-real-estate-market-trends',
      title: 'Understanding the Current Real Estate Market Trends',
      excerpt: 'Stay informed about New York\'s 2025 real estate market. Explore price trends, interest rate impacts, inventory levels, and evolving buyer preferences to make strategic selling decisions.',
      image: 'https://i.pinimg.com/originals/5a/ed/e3/5aede39ed07d8dc526628849997eb761.jpg',
      icon: BarChart3,
      readTime: '11 min read',
      publishDate: 'December 25, 2024',
      category: 'Market Analysis'
    }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-oxford-blue to-oxford-blue/80 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="font-montserrat text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Sellers
            </motion.h1>
            
            <motion.p
              className="font-open-sans text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Your comprehensive guide to selling your home successfully in New York. 
              Expert insights, proven strategies, and market intelligence to maximize your sale.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link href="/sellers/how-to-price-your-home-to-sell-fast-2025">
                <Button className="bg-oxford-blue hover:bg-oxford-blue/90 text-white px-8 py-3 rounded-lg font-open-sans text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Start Reading
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/#contact">
                <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-oxford-blue px-8 py-3 rounded-lg font-open-sans text-lg transition-all duration-200"
                >
                  Get Expert Help
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-montserrat text-3xl md:text-4xl font-bold oxford-blue mb-6">
              Essential Guides for Home Sellers
            </h2>
            <p className="font-open-sans text-lg text-secondary-gray max-w-3xl mx-auto leading-relaxed">
              Navigate the complexities of selling your home with confidence. Our comprehensive guides 
              cover everything from pricing strategies to market trends, helping you make informed decisions 
              that maximize your return.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => {
              const Icon = post.icon
              return (
                <motion.article
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Featured Image */}
                  <div className="aspect-video relative bg-gray-200 dark:bg-gray-700">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-oxford-blue text-white px-3 py-1 rounded-full text-sm font-open-sans">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="flex items-center space-x-4 mb-4 text-sm text-secondary-gray">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span className="font-open-sans">{post.publishDate}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span className="font-open-sans">{post.readTime}</span>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 mb-4">
                      <div className="w-12 h-12 bg-oxford-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 oxford-blue" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-montserrat text-xl font-bold text-dark-gray mb-3 leading-tight">
                          {post.title}
                        </h3>
                      </div>
                    </div>

                    <p className="font-open-sans text-secondary-gray mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <Link href={`/sellers/${post.slug}`}>
                      <Button className="bg-oxford-blue hover:bg-oxford-blue/90 text-white px-6 py-2 rounded-lg font-open-sans transition-all duration-200 group">
                        Read Full Article
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                      </Button>
                    </Link>
                  </div>
                </motion.article>
              )
            })}
          </div>

          {/* Call to Action */}
          <motion.div
            className="mt-16 text-center bg-light-gray dark:bg-gray-800 rounded-lg p-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="font-montserrat text-2xl font-bold text-dark-gray mb-4">
              Ready to Sell Your Home?
            </h3>
            <p className="font-open-sans text-secondary-gray mb-6 max-w-2xl mx-auto leading-relaxed">
              Put these insights into action with Andre Winter&apos;s expert guidance and flat fee services. 
              Get personalized advice tailored to your specific situation and local market conditions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact">
                <Button className="bg-oxford-blue hover:bg-oxford-blue/90 text-white px-8 py-3 rounded-lg font-open-sans text-lg transition-all duration-200">
                  Get Free Consultation
                </Button>
              </Link>
              <Link href="/#services">
                <Button 
                  variant="outline" 
                  className="border-oxford-blue text-oxford-blue hover:bg-oxford-blue hover:text-white px-8 py-3 rounded-lg font-open-sans text-lg transition-all duration-200"
                >
                  View Flat Fee Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default SellersPage