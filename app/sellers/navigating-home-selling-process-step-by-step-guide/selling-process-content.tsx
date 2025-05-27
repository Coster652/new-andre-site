"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Calendar, Clock, Share2, FileText, CheckCircle, AlertTriangle, Scale, Clock3, MapPin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const SellingProcessContent = () => {
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
                <span className="font-open-sans">December 30, 2024</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span className="font-open-sans">12 min read</span>
              </div>
              <span className="bg-oxford-blue text-white px-3 py-1 rounded-full text-sm font-open-sans">
                Selling Process
              </span>
            </div>

            <h1 className="font-montserrat text-3xl md:text-5xl font-bold text-dark-gray mb-6 leading-tight">
              Navigating the Home Selling Process: A Step-by-Step Guide
            </h1>

            <p className="font-open-sans text-xl text-secondary-gray leading-relaxed mb-8">
              Master the complete home selling journey from preparation to closing. Understand timelines, avoid common pitfalls, 
              and learn about New York&apos;s specific legal requirements for a smooth transaction.
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
            src="https://i.pinimg.com/originals/9f/53/d2/9f53d2bd4d7f667c14957ea6552ef5bd.jpg"
            alt="Professional real estate documents and keys representing the home selling process"
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
                Selling your home is one of the most significant financial transactions you&apos;ll ever make. Understanding the complete 
                process from start to finish helps you make informed decisions, avoid costly mistakes, and achieve the best possible outcome.
              </p>

              <p>
                The home selling journey involves multiple stages, each with its own timeline, requirements, and potential challenges. 
                In New York, specific legal considerations and market conditions add additional layers of complexity that sellers must navigate carefully.
              </p>

              <div className="bg-oxford-blue/10 rounded-lg p-6 my-8">
                <div className="flex items-start space-x-3">
                  <Clock3 className="w-6 h-6 oxford-blue mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-montserrat text-lg font-semibold text-dark-gray mb-2">Timeline Overview</h3>
                    <p className="text-secondary-gray">
                      The average home sale takes 30-60 days from listing to closing in the current New York market. 
                      Total process including preparation: 2-3 months on average.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="font-montserrat text-2xl font-bold oxford-blue mt-12 mb-6">
                <FileText className="w-6 h-6 inline mr-3" />
                The Complete Home Selling Journey
              </h2>

              <h3 className="font-montserrat text-xl font-semibold text-dark-gray mb-4">
                1. Preparation Phase (2-4 weeks)
              </h3>
              
              <p>
                Begin with a thorough financial assessment. Determine your motivation for selling, estimate your home&apos;s current 
                market value, calculate your equity, and estimate net proceeds after all costs. This foundation helps you make 
                informed decisions throughout the process.
              </p>

              <p>
                Start initial preparations including decluttering, considering a pre-listing inspection, and identifying necessary 
                repairs. This phase sets the stage for everything that follows and can significantly impact your final outcome.
              </p>

              <ul className="space-y-2 ml-6">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 oxford-blue mt-0.5 flex-shrink-0" />
                  <span>Complete financial assessment and equity calculation</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 oxford-blue mt-0.5 flex-shrink-0" />
                  <span>Begin decluttering and organizing</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 oxford-blue mt-0.5 flex-shrink-0" />
                  <span>Consider pre-listing inspection</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 oxford-blue mt-0.5 flex-shrink-0" />
                  <span>Identify and prioritize necessary repairs</span>
                </li>
              </ul>

              <h3 className="font-montserrat text-xl font-semibold text-dark-gray mb-4 mt-8">
                2. Selecting a Real Estate Professional (1-2 weeks)
              </h3>

              <p>
                Research and interview multiple agents, assessing their local market knowledge, track record, and marketing approach. 
                Understand the listing agreement, commission structure, and marketing plan before making your decision.
              </p>

              <p>
                Consider alternative options like Andre Winter&apos;s <Link href="/#services" className="oxford-blue hover:underline">flat fee services</Link> to maximize your proceeds while maintaining full professional service and support.
              </p>

              <h3 className="font-montserrat text-xl font-semibold text-dark-gray mb-4 mt-8">
                3. Pricing Strategy (3-7 days)
              </h3>

              <p>
                Conduct a comprehensive Comparative Market Analysis (CMA) reviewing recent sales of similar homes in your neighborhood. 
                Consider a pre-listing inspection to identify potential issues early, and set a competitive asking price based on 
                market data and property condition.
              </p>

              <h3 className="font-montserrat text-xl font-semibold text-dark-gray mb-4 mt-8">
                4. Property Preparation (2-4 weeks)
              </h3>

              <p>
                Focus on high-ROI improvements and necessary repairs. Enhance appeal through professional staging and high-quality 
                photography. Prepare disclosure documents and gather all relevant property information for potential buyers.
              </p>

              <h3 className="font-montserrat text-xl font-semibold text-dark-gray mb-4 mt-8">
                5. Marketing and Showings (1-4 weeks)
              </h3>

              <p>
                Launch your listing with professional photography, compelling descriptions, and strategic timing. Promote through 
                MLS, real estate websites, social media, and broker networks. Establish showing protocols and collect feedback 
                to gauge market response.
              </p>

              <h2 className="font-montserrat text-2xl font-bold oxford-blue mt-12 mb-6">
                <AlertTriangle className="w-6 h-6 inline mr-3" />
                Common Pitfalls and How to Avoid Them
              </h2>

              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6 my-8">
                <h3 className="font-montserrat text-lg font-semibold text-red-800 dark:text-red-400 mb-4">
                  Critical Mistakes to Avoid
                </h3>
                <ul className="space-y-3 text-red-700 dark:text-red-300">
                  <li className="flex items-start space-x-2">
                    <AlertTriangle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Pricing Mistakes:</strong> Overpricing leads to extended market time and eventual discounting. 
                      Rely on data-driven pricing strategies and be willing to adjust based on market feedback.
                    </div>
                  </li>
                  <li className="flex items-start space-x-2">
                    <AlertTriangle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Inadequate Preparation:</strong> Rushing to market without proper repairs, decluttering, or staging. 
                      Invest time in property preparation to maximize first impressions.
                    </div>
                  </li>
                  <li className="flex items-start space-x-2">
                    <AlertTriangle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Emotional Decision-Making:</strong> Rejecting reasonable offers due to emotional attachment. 
                      View the transaction objectively as a business decision.
                    </div>
                  </li>
                  <li className="flex items-start space-x-2">
                    <AlertTriangle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Disclosure Issues:</strong> Failing to disclose known defects can lead to legal liability. 
                      Complete disclosure forms thoroughly and honestly.
                    </div>
                  </li>
                </ul>
              </div>

              <h2 className="font-montserrat text-2xl font-bold oxford-blue mt-12 mb-6">
                <Scale className="w-6 h-6 inline mr-3" />
                Legal Considerations in New York
              </h2>

              <h3 className="font-montserrat text-xl font-semibold text-dark-gray mb-4">
                Attorney Involvement
              </h3>

              <p>
                New York law mandates that licensed attorneys oversee real estate transactions. Attorneys prepare contracts and 
                conduct closings, with both buyers and sellers typically having separate legal representation. Costs typically 
                range from $1,000-$2,500 for standard transactions.
              </p>

              <h3 className="font-montserrat text-xl font-semibold text-dark-gray mb-4 mt-6">
                Disclosure Requirements
              </h3>

              <p>
                New York requires a Property Condition Disclosure Statement (PCDS) at least 10 days before signing the final 
                purchase agreement. Lead-Based Paint Disclosure is mandatory for homes built before 1978, along with additional 
                federal disclosures including flood risks and hazardous substances.
              </p>

              <h3 className="font-montserrat text-xl font-semibold text-dark-gray mb-4 mt-6">
                Tax Considerations
              </h3>

              <p>
                Real estate transfer taxes in New York average approximately 0.4% for sales up to $3 million, with additional 
                local taxes in NYC. Capital gains tax may apply if the property is not your primary residence or if gains exceed 
                exemption limits.
              </p>

              <div className="bg-light-gray dark:bg-gray-800 rounded-lg p-6 my-8">
                <h3 className="font-montserrat text-lg font-semibold text-dark-gray mb-4">Timeline Expectations by Stage</h3>
                <ul className="space-y-2 text-secondary-gray">
                  <li>• <strong>Pre-listing preparations:</strong> 2-4 weeks</li>
                  <li>• <strong>Active marketing period:</strong> 1-4 weeks</li>
                  <li>• <strong>Contract to closing:</strong> 30-45 days for financed deals; 7-14 days for cash</li>
                  <li>• <strong>Due diligence period:</strong> 10-14 days after contract acceptance</li>
                  <li>• <strong>Closing preparation:</strong> 1-2 weeks before scheduled closing</li>
                </ul>
              </div>

              <h2 className="font-montserrat text-2xl font-bold oxford-blue mt-12 mb-6">
                Offer Review and Negotiation Process
              </h2>

              <h3 className="font-montserrat text-xl font-semibold text-dark-gray mb-4">
                Evaluating Offers
              </h3>

              <p>
                Consider not just price, but also contingencies, financing terms, and closing timeline. A higher offer with 
                extensive contingencies may be less attractive than a slightly lower offer with fewer conditions and stronger financing.
              </p>

              <h3 className="font-montserrat text-xl font-semibold text-dark-gray mb-4 mt-6">
                Negotiation Strategy
              </h3>

              <p>
                Respond to offers with acceptance, rejection, or counteroffers based on your priorities and market conditions. 
                In multiple offer scenarios, manage competitive bidding situations effectively while maintaining fairness and transparency.
              </p>

              <h3 className="font-montserrat text-xl font-semibold text-dark-gray mb-4 mt-6">
                Due Diligence Period
              </h3>

              <p>
                Expect home, pest, radon, and other specialized inspections during the 10-14 day period after contract acceptance. 
                The lender-ordered appraisal confirms property value, and any inspection findings must be negotiated and resolved.
              </p>

              <h2 className="font-montserrat text-2xl font-bold oxford-blue mt-12 mb-6">
                How Andre Winter&apos;s Services Streamline the Process
              </h2>

              <p>
                Andre provides comprehensive pre-listing consultation to identify and address potential issues before they become 
                problems. His flat fee services reduce seller costs while maintaining full service, allowing you to invest more 
                in property preparation and improvements.
              </p>

              <p>
                With connections to vetted professionals for repairs, staging, and legal services, Andre implements proven marketing 
                strategies to maximize exposure and attract qualified buyers. His data-driven insights and market knowledge guide 
                sellers through negotiations and coordinate with all parties to ensure a smooth closing process.
              </p>

              <p>
                Andre&apos;s transaction management keeps all details organized and on schedule, reducing stress and ensuring nothing 
                falls through the cracks during this complex process.
              </p>

              <div className="bg-oxford-blue/10 rounded-lg p-6 my-8">
                <h3 className="font-montserrat text-lg font-semibold text-dark-gray mb-4">Key Process Statistics</h3>
                <ul className="space-y-2 text-secondary-gray">
                  <li>• Properly prepared homes sell for an average of 5-7% more than unprepared properties</li>
                  <li>• 25% of home sales experience some form of delay before closing</li>
                  <li>• Attorney fees in New York typically range from $1,000-$2,500 for standard transactions</li>
                  <li>• Real estate transfer taxes in New York average 0.4% for sales up to $3 million</li>
                </ul>
              </div>

              <h2 className="font-montserrat text-2xl font-bold oxford-blue mt-12 mb-6">
                Closing and Post-Sale
              </h2>

              <p>
                The closing meeting involves signing documents, transferring funds, and delivering keys. Post-closing tasks include 
                canceling utilities, updating your address, and completing your move-out. Consider potential capital gains tax 
                implications and keep all transaction records for tax purposes.
              </p>

              <h2 className="font-montserrat text-2xl font-bold oxford-blue mt-12 mb-6">
                Conclusion
              </h2>

              <p>
                Successfully navigating the home selling process requires preparation, knowledge, and professional guidance. 
                Understanding each stage, potential pitfalls, and legal requirements helps you make informed decisions that 
                maximize your outcome while minimizing stress.
              </p>

              <p>
                Working with an experienced professional like Andre Winter ensures you have the expertise, resources, and support 
                needed to navigate this complex process successfully. His comprehensive approach and flat fee structure help you 
                achieve the best possible result while keeping more money in your pocket.
              </p>

              <p>
                For additional insights, explore our guides on <Link href="/sellers/how-to-price-your-home-to-sell-fast-2025" className="oxford-blue hover:underline">pricing strategies</Link> and <Link href="/sellers/understanding-current-real-estate-market-trends" className="oxford-blue hover:underline">market trends</Link>.
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
              Ready to Start Your Selling Journey?
            </h3>
            <p className="font-open-sans text-white/90 mb-6 max-w-2xl mx-auto leading-relaxed">
              Get expert guidance through every step of the selling process. Andre&apos;s comprehensive approach and flat fee 
              services help you navigate complexities while maximizing your proceeds.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact">
                <Button className="bg-white text-oxford-blue hover:bg-gray-100 px-8 py-3 rounded-lg font-open-sans text-lg transition-all duration-200">
                  Get Process Consultation
                </Button>
              </Link>
              <Link href="/#about">
                <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-oxford-blue px-8 py-3 rounded-lg font-open-sans text-lg transition-all duration-200"
                >
                  Learn About Andre
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </article>
    </div>
  )
}

export default SellingProcessContent