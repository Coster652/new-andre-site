"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Calendar, Clock, Share2, TrendingUp, Calculator, Target, AlertTriangle, CheckCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const PricingGuideContent = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <section className="py-12 bg-light-gray dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/sellers" className="inline-flex items-center text-oxford-blue hover:text-oxford-blue/80 transition-colors duration-200 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            <span className="font-open-sans">Back to Sellers Hub</span>
          </Link>
          
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center space-x-4 mb-4 text-sm text-secondary-gray">
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span className="font-open-sans">January 15, 2025</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span className="font-open-sans">8 min read</span>
              </div>
              <span className="bg-oxford-blue text-white px-3 py-1 rounded-full text-sm font-open-sans">
                Pricing Strategy
              </span>
            </div>

            <h1 className="font-montserrat text-3xl md:text-5xl font-bold text-dark-gray mb-6 leading-tight">
              How to Price Your Home to Sell Fast in 2025
            </h1>

            <p className="font-open-sans text-xl text-secondary-gray leading-relaxed mb-8">
              Discover the most effective pricing strategies for today&apos;s market. Learn how accurate pricing, 
              technology tools, and expert insights can help you sell your home quickly while maximizing your return.
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-oxford-blue rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">AW</span>
                </div>
                <div>
                  <p className="font-open-sans font-semibold text-dark-gray">Andre Winter</p>
                  <p className="font-open-sans text-sm text-secondary-gray">Licensed Real Estate Professional</p>
                </div>
              </div>
              <Button variant="outline" size="sm" className="flex items-center space-x-2">
                <Share2 className="w-4 h-4" />
                <span>Share</span>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="relative">
        <div className="aspect-video relative bg-gray-200 dark:bg-gray-700">
          <Image
            src="https://i.pinimg.com/originals/d4/a5/15/d4a515c8acfcaef9a2057758e52cd167.jpg"
            alt="Modern home with for sale sign showcasing proper pricing strategy"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="prose prose-lg max-w-none"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="font-open-sans text-dark-gray leading-relaxed space-y-6">
              <p>
                In 2025&apos;s evolving real estate market, accurate pricing remains the most critical factor for achieving a quick sale. 
                With interest rates stabilizing around 6-7% and inventory levels gradually increasing, sellers must be more strategic 
                than ever in their pricing approach.
              </p>

              <p>
                The days of overpricing and waiting for the right buyer are over. Today&apos;s buyers are well-informed, tech-savvy, 
                and have access to the same market data as real estate professionals. This means your pricing strategy must be 
                data-driven, competitive, and aligned with current market realities.
              </p>

              <div className="bg-oxford-blue/10 rounded-lg p-6 my-8">
                <div className="flex items-start space-x-3">
                  <TrendingUp className="w-6 h-6 oxford-blue mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-montserrat text-lg font-semibold text-dark-gray mb-2">Key Market Insight</h3>
                    <p className="text-secondary-gray">
                      Homes priced within 5% of market value sell, on average, 73% faster than overpriced homes. 
                      The first 21 days on market typically generate the most showings and interest.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="font-montserrat text-2xl font-bold oxford-blue mt-12 mb-6">
                <Calculator className="w-6 h-6 inline mr-3" />
                Market Analysis Techniques
              </h2>

              <h3 className="font-montserrat text-xl font-semibold text-dark-gray mb-4">
                1. Comparative Market Analysis (CMA)
              </h3>
              
              <p>
                A comprehensive CMA forms the foundation of accurate pricing. This involves analyzing 10-12 similar properties 
                sold within the last 3-6 months, making careful adjustments for differences in condition, upgrades, and location.
              </p>

              <p>
                Focus on properties within the same neighborhood for the most accurate comparisons. Consider not just sold properties, 
                but also active listings, pending sales, and expired listings to get a complete market picture.
              </p>

              <ul className="space-y-2 ml-6">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 oxford-blue mt-0.5 flex-shrink-0" />
                  <span>Analyze properties sold within 3-6 months</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 oxford-blue mt-0.5 flex-shrink-0" />
                  <span>Make adjustments for condition and upgrades</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 oxford-blue mt-0.5 flex-shrink-0" />
                  <span>Focus on same neighborhood properties</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 oxford-blue mt-0.5 flex-shrink-0" />
                  <span>Review active, pending, and expired listings</span>
                </li>
              </ul>

              <h3 className="font-montserrat text-xl font-semibold text-dark-gray mb-4 mt-8">
                2. Professional Appraisal
              </h3>

              <p>
                Pre-listing appraisals provide objective valuations and help identify potential issues before they affect buyer financing. 
                While they typically cost $300-$600, they can prevent costly pricing mistakes that could cost thousands in the long run.
              </p>

              <h3 className="font-montserrat text-xl font-semibold text-dark-gray mb-4 mt-8">
                3. Technology-Powered Valuation Tools
              </h3>

              <p>
                Modern technology has revolutionized home valuation. Tools like <a href="https://www.homelight.com/home-value-estimator" target="_blank" rel="noopener noreferrer" className="oxford-blue hover:underline">HomeLight&apos;s Home Value Estimator</a>, <a href="https://www.zillow.com/research/" target="_blank" rel="noopener noreferrer" className="oxford-blue hover:underline">Zillow&apos;s Zestimate</a>, 
                and <a href="https://www.redfin.com/news/data-center/" target="_blank" rel="noopener noreferrer" className="oxford-blue hover:underline">Redfin&apos;s estimates</a> provide initial benchmarks by aggregating public data, recent sales, and market trends.
              </p>

              <p>
                However, these should be used as starting points, not definitive valuations. Accuracy varies by location and property type, 
                and they cannot account for unique property features or recent improvements.
              </p>

              <h2 className="font-montserrat text-2xl font-bold oxford-blue mt-12 mb-6">
                <Target className="w-6 h-6 inline mr-3" />
                Strategic Pricing Techniques
              </h2>

              <h3 className="font-montserrat text-xl font-semibold text-dark-gray mb-4">
                1. Pricing Slightly Below Market Value
              </h3>

              <p>
                This strategy can generate multiple offers and create bidding wars, particularly effective in markets with limited inventory. 
                It creates a perception of value that attracts more potential buyers and can result in a final sale price at or above market value.
              </p>

              <h3 className="font-montserrat text-xl font-semibold text-dark-gray mb-4 mt-6">
                2. Psychological Pricing
              </h3>

              <p>
                Pricing just below round numbers (e.g., $499,900 instead of $500,000) attracts more online searches and creates perceived value. 
                This aligns with common price filters on real estate websites and can significantly increase your property&apos;s visibility.
              </p>

              <h3 className="font-montserrat text-xl font-semibold text-dark-gray mb-4 mt-6">
                3. Seasonal Adjustments
              </h3>

              <p>
                Spring traditionally sees higher demand, allowing for slightly higher pricing. Winter may require more competitive pricing 
                to attract limited buyers. However, local market data should guide your specific timing decisions.
              </p>

              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6 my-8">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-montserrat text-lg font-semibold text-red-800 dark:text-red-400 mb-2">
                      Common Pricing Mistakes to Avoid
                    </h3>
                    <ul className="space-y-2 text-red-700 dark:text-red-300">
                      <li>• Overpricing based on emotional attachment rather than market data</li>
                      <li>• Ignoring current market conditions and buyer behavior</li>
                      <li>• Refusing to adjust price when market feedback indicates it&apos;s necessary</li>
                      <li>• Missing the critical first 2-3 weeks of maximum buyer interest</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="font-montserrat text-2xl font-bold oxford-blue mt-12 mb-6">
                How Andre Winter&apos;s Expertise Helps Sellers
              </h2>

              <p>
                With over 10 years of experience in the New York market, Andre provides detailed, data-driven CMAs tailored to local conditions. 
                His access to professional-grade valuation tools and experience-based insights on neighborhood-specific pricing strategies 
                give sellers a significant advantage.
              </p>

              <p>
                Andre&apos;s <Link href="/#services" className="oxford-blue hover:underline">flat fee services</Link> allow sellers to invest more 
                in property preparation while receiving expert pricing guidance. This combination of cost savings and professional expertise 
                helps maximize both the speed of sale and final sale price.
              </p>

              <div className="bg-light-gray dark:bg-gray-800 rounded-lg p-6 my-8">
                <h3 className="font-montserrat text-lg font-semibold text-dark-gray mb-4">Key Statistics</h3>
                <ul className="space-y-2 text-secondary-gray">
                  <li>• Homes priced correctly at the outset sell for an average of 3.5% more than homes requiring price reductions</li>
                  <li>• Properties that undergo price reductions typically sell for 8-10% less than their original asking price</li>
                  <li>• 90% of buyers search online first, making correct initial pricing crucial for visibility</li>
                  <li>• In 2025, the average home sale takes 30-60 days from listing to closing in the New York market</li>
                </ul>
              </div>

              <h2 className="font-montserrat text-2xl font-bold oxford-blue mt-12 mb-6">
                Conclusion
              </h2>

              <p>
                Pricing your home correctly from the start is not just about attracting buyers—it&apos;s about maximizing your return while 
                minimizing time on market. In 2025&apos;s competitive landscape, sellers who leverage data-driven pricing strategies, 
                professional expertise, and market insights will achieve the best outcomes.
              </p>

              <p>
                Remember, the goal isn&apos;t just to sell your home—it&apos;s to sell it quickly, for the best possible price, with minimal stress. 
                Working with an experienced professional like Andre Winter ensures you have the knowledge, tools, and support needed to 
                achieve these goals.
              </p>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="mt-16 bg-oxford-blue rounded-lg p-8 text-white text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="font-montserrat text-2xl font-bold mb-4">
              Ready to Price Your Home Strategically?
            </h3>
            <p className="font-open-sans text-white/90 mb-6 max-w-2xl mx-auto leading-relaxed">
              Get a comprehensive market analysis and pricing strategy tailored to your specific property and goals. 
              Andre&apos;s expertise can help you achieve a faster sale at the best possible price.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact">
                <Button className="bg-white text-oxford-blue hover:bg-gray-100 px-8 py-3 rounded-lg font-open-sans text-lg transition-all duration-200">
                  Get Free Market Analysis
                </Button>
              </Link>
              <Link href="/sellers">
                <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-oxford-blue px-8 py-3 rounded-lg font-open-sans text-lg transition-all duration-200"
                >
                  Read More Guides
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Related Articles */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="font-montserrat text-2xl font-bold text-dark-gray mb-8">Related Articles</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/sellers" className="group">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1">
                  <h4 className="font-montserrat text-lg font-semibold text-dark-gray mb-2 group-hover:text-oxford-blue transition-colors duration-200">
                    Top Home Improvements That Boost Your Property Value
                  </h4>
                  <p className="font-open-sans text-secondary-gray text-sm">
                    Maximize your home&apos;s value with strategic improvements that deliver the highest ROI.
                  </p>
                </div>
              </Link>
              <Link href="/sellers" className="group">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1">
                  <h4 className="font-montserrat text-lg font-semibold text-dark-gray mb-2 group-hover:text-oxford-blue transition-colors duration-200">
                    Understanding the Current Real Estate Market Trends
                  </h4>
                  <p className="font-open-sans text-secondary-gray text-sm">
                    Stay informed about New York&apos;s 2025 real estate market conditions and buyer preferences.
                  </p>
                </div>
              </Link>
            </div>
          </motion.div>
        </div>
      </article>
    </div>
  )
}

export default PricingGuideContent