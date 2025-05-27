"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Calendar, Clock, Share2, BarChart3, TrendingUp, DollarSign, Home, Users, MapPin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const MarketTrendsContent = () => {
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
                <span className="font-open-sans">December 25, 2024</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span className="font-open-sans">11 min read</span>
              </div>
              <span className="bg-oxford-blue text-white px-3 py-1 rounded-full text-sm font-open-sans">
                Market Analysis
              </span>
            </div>

            <h1 className="font-montserrat text-3xl md:text-5xl font-bold text-dark-gray mb-6 leading-tight">
              Understanding the Current Real Estate Market Trends
            </h1>

            <p className="font-open-sans text-xl text-secondary-gray leading-relaxed mb-8">
              Stay informed about New York&apos;s 2025 real estate market. Explore price trends, interest rate impacts, 
              inventory levels, and evolving buyer preferences to make strategic selling decisions.
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
            src="https://i.pinimg.com/originals/5a/ed/e3/5aede39ed07d8dc526628849997eb761.jpg"
            alt="New York City skyline representing current real estate market trends and analysis"
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
                New York&apos;s real estate market in 2025 demonstrates remarkable resilience amid economic challenges and changing 
                buyer behaviors. Understanding current market conditions, price trends, and buyer preferences is essential for 
                sellers looking to make strategic decisions and achieve optimal outcomes.
              </p>

              <p>
                Interest rates, inventory levels, and evolving demographics continue to shape market dynamics. Sellers who stay 
                informed about these trends can better position their properties, time their sales effectively, and adjust their 
                strategies to align with current market realities.
              </p>

              <div className="bg-oxford-blue/10 rounded-lg p-6 my-8">
                <div className="flex items-start space-x-3">
                  <BarChart3 className="w-6 h-6 oxford-blue mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-montserrat text-lg font-semibold text-dark-gray mb-2">Market Snapshot</h3>
                    <p className="text-secondary-gray">
                      Median home sale price: $770,000 (2.1% year-over-year increase). Active listing count: 31,562 units. 
                      Average mortgage rates: 6-7% (down from 7.79% peak).
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="font-montserrat text-2xl font-bold oxford-blue mt-12 mb-6">
                <DollarSign className="w-6 h-6 inline mr-3" />
                Current New York Real Estate Market Conditions
              </h2>

              <h3 className="font-montserrat text-xl font-semibold text-dark-gray mb-4">
                Price Trends
              </h3>
              
              <p>
                The median home sale price has increased modestly by approximately 2.1% year-over-year, reaching around $770,000. 
                However, borough-specific variations tell a more nuanced story: Manhattan is experiencing a 6.3% decline, while 
                Brooklyn and Queens are seeing increases of 4.8% and 12% respectively.
              </p>

              <p>
                The luxury market is rebounding with slight price adjustments but increasing demand. This pricing stabilization 
                indicates a more balanced market compared to the volatility of previous years, offering both opportunities and 
                challenges for sellers.
              </p>

              <h3 className="font-montserrat text-xl font-semibold text-dark-gray mb-4 mt-8">
                Sales Activity
              </h3>

              <p>
                Early 2025 shows a surge in contracts with a 10.7% year-over-year increase, indicating renewed buyer confidence. 
                Existing home sales have rebounded slightly but remain below pre-pandemic levels. Days on market are averaging 
                30-45 days for appropriately priced properties.
              </p>

              <p>
                All-cash transactions continue to dominate in the luxury segment, while financed purchases are becoming more 
                common in the mid-market as buyers adjust to current interest rate levels.
              </p>

              <h3 className="font-montserrat text-xl font-semibold text-dark-gray mb-4 mt-8">
                Neighborhood Dynamics
              </h3>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-light-gray dark:bg-gray-800 rounded-lg p-6">
                  <h4 className="font-montserrat text-lg font-semibold text-dark-gray mb-3">Borough Median Prices</h4>
                  <ul className="space-y-2 text-secondary-gray">
                    <li>• <strong>Manhattan:</strong> $1.23 million</li>
                    <li>• <strong>Brooklyn:</strong> $875,000</li>
                    <li>• <strong>Queens:</strong> $700,000</li>
                    <li>• <strong>Bronx:</strong> $485,000</li>
                  </ul>
                </div>
                <div className="bg-light-gray dark:bg-gray-800 rounded-lg p-6">
                  <h4 className="font-montserrat text-lg font-semibold text-dark-gray mb-3">Market Characteristics</h4>
                  <ul className="space-y-2 text-secondary-gray">
                    <li>• Manhattan: High-end luxury focus</li>
                    <li>• Brooklyn: Growing popularity, new developments</li>
                    <li>• Queens: Affordability and family appeal</li>
                    <li>• Outer areas: Commuter-friendly options</li>
                  </ul>
                </div>
              </div>

              <h2 className="font-montserrat text-2xl font-bold oxford-blue mt-12 mb-6">
                <TrendingUp className="w-6 h-6 inline mr-3" />
                Interest Rate Impacts on Housing Market
              </h2>

              <h3 className="font-montserrat text-xl font-semibold text-dark-gray mb-4">
                Current Rate Environment
              </h3>

              <p>
                Mortgage rates are hovering around 6-7% in 2025, down from the peak of 7.79% in late 2023. Federal Reserve 
                policy decisions are closely watched for potential rate adjustments, as even small changes can significantly 
                impact affordability and buyer behavior.
              </p>

              <h3 className="font-montserrat text-xl font-semibold text-dark-gray mb-4 mt-6">
                Affordability Challenges
              </h3>

              <p>
                Higher rates have significantly increased monthly mortgage payments. For example, a $400,000 loan at 2.65% 
                (2021 rates) resulted in a $1,359 monthly payment, while the same loan at 7% (2025 rates) costs approximately 
                $2,661 monthly—nearly double the payment.
              </p>

              <p>
                This combined effect of higher rates and prices has strained affordability, requiring sellers to be more 
                competitive in pricing and more flexible in negotiations to attract qualified buyers.
              </p>

              <h3 className="font-montserrat text-xl font-semibold text-dark-gray mb-4 mt-6">
                Market Activity Effects
              </h3>

              <p>
                Elevated rates have slowed housing market activity and reduced home sales volume. Higher borrowing costs 
                discourage potential buyers and limit new construction. The &quot;rate lock&quot; effect keeps some potential sellers 
                from listing their homes, as they&apos;re reluctant to give up low-rate mortgages.
              </p>

              <h2 className="font-montserrat text-2xl font-bold oxford-blue mt-12 mb-6">
                <Home className="w-6 h-6 inline mr-3" />
                Inventory Levels in New York
              </h2>

              <h3 className="font-montserrat text-xl font-semibold text-dark-gray mb-4">
                Current Inventory Data
              </h3>

              <p>
                Active listing count in New York State reached 31,562 units in April 2025, showing steady increases from 
                early 2025: January (28,510), February (28,877), March (29,644). While still below pre-pandemic levels 
                by approximately 15.6%, this gradual easing of inventory constraints is underway.
              </p>

              <h3 className="font-montserrat text-xl font-semibold text-dark-gray mb-4 mt-6">
                Supply and Demand Dynamics
              </h3>

              <p>
                Increasing active listings suggest improving supply conditions. However, low months of inventory (around 3 months) 
                still favor sellers in most markets. Manhattan and Brooklyn continue to experience tighter inventory than outer areas, 
                while new construction is gradually adding to supply but not meeting full demand.
              </p>

              <h3 className="font-montserrat text-xl font-semibold text-dark-gray mb-4 mt-6">
                Price Implications
              </h3>

              <p>
                Despite rising inventory, prices remain relatively stable. The median sales price decreased slightly (1.8%) 
                to $405,000 in Q2 2023, but price growth has slowed rather than reversed in most areas. Increasing inventory 
                is expected to moderate price growth through 2025.
              </p>

              <h2 className="font-montserrat text-2xl font-bold oxford-blue mt-12 mb-6">
                <Users className="w-6 h-6 inline mr-3" />
                Buyer Demographics and Preferences
              </h2>

              <h3 className="font-montserrat text-xl font-semibold text-dark-gray mb-4">
                Evolving Buyer Profiles
              </h3>

              <p>
                Young professionals and remote workers prioritize space, outdoor access, and modern amenities. Families and 
                multi-generational households seek larger homes with flexible layouts. Investors are attracted to turnkey 
                properties with eco-friendly features, while luxury buyers focus on prime locations and exclusive outdoor spaces.
              </p>

              <h3 className="font-montserrat text-xl font-semibold text-dark-gray mb-4 mt-6">
                Post-Pandemic Priorities
              </h3>

              <div className="bg-light-gray dark:bg-gray-800 rounded-lg p-6 my-8">
                <h4 className="font-montserrat text-lg font-semibold text-dark-gray mb-4">Current Buyer Must-Haves</h4>
                <ul className="space-y-2 text-secondary-gray">
                  <li>• <strong>Home Office Space:</strong> Dedicated workspace with good lighting and built-in storage</li>
                  <li>• <strong>Outdoor Areas:</strong> Private terraces, balconies, or shared outdoor amenities</li>
                  <li>• <strong>Move-in Ready Condition:</strong> Well-maintained, turnkey properties preferred</li>
                  <li>• <strong>Energy Efficiency:</strong> Energy-efficient appliances, solar panels, sustainable materials</li>
                  <li>• <strong>Flexible Spaces:</strong> Multi-purpose rooms for offices, gyms, or guest rooms</li>
                  <li>• <strong>Technology Integration:</strong> Smart home features and high-speed internet capability</li>
                </ul>
              </div>

              <h3 className="font-montserrat text-xl font-semibold text-dark-gray mb-4 mt-6">
                Neighborhood Preferences
              </h3>

              <p>
                Proximity to transit remains essential, but buyers are also prioritizing walkability and access to amenities. 
                School quality continues to drive family buyers, while cultural and dining options attract young professionals. 
                Parks and green spaces have become increasingly important post-pandemic.
              </p>

              <h2 className="font-montserrat text-2xl font-bold oxford-blue mt-12 mb-6">
                <MapPin className="w-6 h-6 inline mr-3" />
                Rental Market Dynamics
              </h2>

              <p>
                Rents continue to rise with average one-bedroom units around $3,950/month. Low vacancy rates (approximately 1.9%) 
                are driving a competitive rental market. Brooklyn, Queens, and parts of Manhattan are experiencing the strongest 
                rental demand, while rental yields remain attractive for investors in certain submarkets.
              </p>

              <h2 className="font-montserrat text-2xl font-bold oxford-blue mt-12 mb-6">
                How Andre Winter Helps Sellers Leverage Market Conditions
              </h2>

              <p>
                Andre provides data-driven pricing strategies based on current market conditions and offers timing advice to 
                take advantage of seasonal and interest rate trends. His targeted marketing reaches the most likely buyer 
                demographics while highlighting property features that align with current buyer preferences.
              </p>

              <p>
                Andre negotiates effectively based on inventory levels and competitive properties, advises on strategic improvements 
                that appeal to today&apos;s buyers, and his <Link href="/#services" className="oxford-blue hover:underline">flat fee structure</Link> allows sellers to be more competitive in pricing while maximizing proceeds.
              </p>

              <p>
                His deep understanding of neighborhood-specific trends in Ridgewood Queens and East New York helps sellers 
                position their properties effectively for the current market conditions.
              </p>

              <div className="bg-oxford-blue/10 rounded-lg p-6 my-8">
                <h3 className="font-montserrat text-lg font-semibold text-dark-gray mb-4">Key Market Statistics</h3>
                <ul className="space-y-2 text-secondary-gray">
                  <li>• Active listing count in New York State: 31,562 (April 2025)</li>
                  <li>• Average mortgage rates: 6-7% (down from 7.79% peak in late 2023)</li>
                  <li>• Rental market: average one-bedroom units around $3,950/month with 1.9% vacancy rate</li>
                  <li>• Contract activity: 10.7% year-over-year increase in early 2025</li>
                  <li>• Days on market: 30-45 days for appropriately priced properties</li>
                </ul>
              </div>

              <h2 className="font-montserrat text-2xl font-bold oxford-blue mt-12 mb-6">
                Future Outlook
              </h2>

              <p>
                Potential rate stabilization or decreases could improve affordability and increase buyer activity. However, 
                lower rates may not necessarily decrease home prices due to pent-up demand. Rate trends will continue to 
                influence market velocity and buyer behavior throughout 2025.
              </p>

              <p>
                Sellers should monitor these trends closely and be prepared to adjust their strategies based on changing 
                market conditions. Working with a knowledgeable professional who understands these dynamics is essential 
                for achieving optimal outcomes.
              </p>

              <h2 className="font-montserrat text-2xl font-bold oxford-blue mt-12 mb-6">
                Conclusion
              </h2>

              <p>
                Understanding current real estate market trends is crucial for making informed selling decisions. New York&apos;s 
                2025 market presents both challenges and opportunities, with interest rates, inventory levels, and buyer 
                preferences all playing important roles in determining outcomes.
              </p>

              <p>
                Sellers who stay informed about these trends and work with experienced professionals like Andre Winter can 
                better navigate market complexities and achieve their goals. The key is remaining flexible and responsive 
                to changing conditions while maintaining realistic expectations.
              </p>

              <p>
                For more insights on preparing for today&apos;s market, explore our guides on <Link href="/sellers/how-to-price-your-home-to-sell-fast-2025" className="oxford-blue hover:underline">pricing strategies</Link> and <Link href="/sellers/home-staging-secrets-make-buyers-fall-love" className="oxford-blue hover:underline">staging techniques</Link>.
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
              Ready to Navigate Today&apos;s Market?
            </h3>
            <p className="font-open-sans text-white/90 mb-6 max-w-2xl mx-auto leading-relaxed">
              Get expert insights on current market conditions and learn how to position your property for success. 
              Andre&apos;s local expertise and market knowledge help you make strategic decisions in any market environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact">
                <Button className="bg-white text-oxford-blue hover:bg-gray-100 px-8 py-3 rounded-lg font-open-sans text-lg transition-all duration-200">
                  Get Market Analysis
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
        </div>
      </article>
    </div>
  )
}

export default MarketTrendsContent