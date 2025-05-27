"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Calendar, Clock, Share2, Home, DollarSign, Wrench, Lightbulb, CheckCircle, TrendingUp } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const HomeImprovementsContent = () => {
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
                <span className="font-open-sans">January 10, 2025</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span className="font-open-sans">10 min read</span>
              </div>
              <span className="bg-oxford-blue text-white px-3 py-1 rounded-full text-sm font-open-sans">
                Home Improvement
              </span>
            </div>

            <h1 className="font-montserrat text-3xl md:text-5xl font-bold text-dark-gray mb-6 leading-tight">
              Top Home Improvements That Boost Your Property Value
            </h1>

            <p className="font-open-sans text-xl text-secondary-gray leading-relaxed mb-8">
              Maximize your home&apos;s value with strategic improvements that deliver the highest ROI. From kitchen updates 
              to energy-efficient upgrades, learn which projects will attract buyers and increase your sale price.
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
            src="https://i.pinimg.com/originals/db/ab/44/dbab448016ad1d125b51bf6b20cc7cb0.jpg"
            alt="Modern kitchen renovation showcasing high-ROI home improvements"
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
                When preparing to sell your home, strategic improvements can significantly increase both your property&apos;s value 
                and its appeal to potential buyers. However, not all home improvements are created equal. The key is focusing 
                on high-ROI projects that align with current buyer preferences while staying within your budget.
              </p>

              <p>
                In New York&apos;s competitive real estate market, buyers expect move-in ready homes with modern amenities. 
                The right improvements can help your property stand out from the competition and command a premium price, 
                while poor choices can result in over-improvement with minimal return on investment.
              </p>

              <div className="bg-oxford-blue/10 rounded-lg p-6 my-8">
                <div className="flex items-start space-x-3">
                  <TrendingUp className="w-6 h-6 oxford-blue mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-montserrat text-lg font-semibold text-dark-gray mb-2">ROI Reality Check</h3>
                    <p className="text-secondary-gray">
                      Kitchen remodels in New York metro area return approximately 96% of investment, while bathroom 
                      renovations yield 73-75% ROI on average. Strategic improvements can increase sale price by 7-10%.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="font-montserrat text-2xl font-bold oxford-blue mt-12 mb-6">
                <DollarSign className="w-6 h-6 inline mr-3" />
                High-ROI Home Improvements
              </h2>

              <h3 className="font-montserrat text-xl font-semibold text-dark-gray mb-4">
                1. Kitchen Updates
              </h3>
              
              <p>
                Minor kitchen remodels consistently deliver the highest returns, yielding approximately 96% ROI. Focus on 
                cabinet refacing rather than complete replacement, updating countertops to quartz or granite, and installing 
                modern fixtures and appliances.
              </p>

              <p>
                Bright, modern appliances and light-colored countertops are highly desirable. Functional islands add significant 
                value without extensive renovation costs, providing both workspace and social gathering areas that today&apos;s buyers expect.
              </p>

              <ul className="space-y-2 ml-6">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 oxford-blue mt-0.5 flex-shrink-0" />
                  <span>Cabinet refacing or painting ($200-$800)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 oxford-blue mt-0.5 flex-shrink-0" />
                  <span>Quartz or granite countertops ($2,000-$4,000)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 oxford-blue mt-0.5 flex-shrink-0" />
                  <span>Modern backsplash installation ($300-$1,000)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 oxford-blue mt-0.5 flex-shrink-0" />
                  <span>Updated sink and faucet ($250-$500)</span>
                </li>
              </ul>

              <h3 className="font-montserrat text-xl font-semibold text-dark-gray mb-4 mt-8">
                2. Bathroom Renovations
              </h3>

              <p>
                Mid-range bathroom remodels recoup 73-75% of costs and significantly impact buyer perception. Focus on updating 
                vanities, fixtures, and shower systems. Spa-like features and rainfall showers align with current wellness trends 
                and appeal to luxury-minded buyers.
              </p>

              <p>
                Water-efficient fixtures not only appeal to environmentally conscious buyers but can also reduce utility costs, 
                adding to the property&apos;s long-term value proposition.
              </p>

              <h3 className="font-montserrat text-xl font-semibold text-dark-gray mb-4 mt-8">
                3. Exterior Improvements
              </h3>

              <p>
                Garage door replacement offers an exceptional 194% ROI, making it one of the most cost-effective improvements. 
                Stone or vinyl siding replacements recover over 80% of costs while dramatically improving curb appeal.
              </p>

              <p>
                Steel entry doors provide both energy efficiency and aesthetic appeal with 188% ROI. These improvements 
                significantly boost first impressions, which are crucial in today&apos;s competitive market.
              </p>

              <h2 className="font-montserrat text-2xl font-bold oxford-blue mt-12 mb-6">
                <Lightbulb className="w-6 h-6 inline mr-3" />
                Budget-Friendly Home Upgrades
              </h2>

              <h3 className="font-montserrat text-xl font-semibold text-dark-gray mb-4">
                1. Cosmetic Refreshes
              </h3>

              <p>
                Fresh neutral paint offers the highest ROI for minimal investment. Choose colors like beige, gray, or greige 
                that appeal to broad audiences. Updated cabinet hardware in kitchens and bathrooms can transform spaces for 
                under $100 per room.
              </p>

              <p>
                New light fixtures modernize spaces affordably ($50-200 per fixture), while deep cleaning carpets and 
                refinishing hardwood floors can dramatically improve a home&apos;s presentation.
              </p>

              <h3 className="font-montserrat text-xl font-semibold text-dark-gray mb-4 mt-6">
                2. Curb Appeal Enhancements
              </h3>

              <p>
                Power washing siding, walkways, and driveways costs only $50-100 for equipment rental but delivers immediate 
                visual impact. Fresh mulch and seasonal flowers for landscaping beds ($100-300) create an inviting entrance.
              </p>

              <p>
                Repainting or replacing the front door ($150-500) and updating house numbers, mailbox, and exterior lighting 
                ($50-200) are small investments that significantly improve first impressions.
              </p>

              <h3 className="font-montserrat text-xl font-semibold text-dark-gray mb-4 mt-6">
                3. Smart Home Features
              </h3>

              <p>
                Smart thermostats ($100-300), video doorbells ($100-300), and smart lighting systems ($200-500) are relatively 
                inexpensive additions that add convenience and modern appeal. These features particularly attract younger buyers 
                who expect integrated technology.
              </p>

              <div className="bg-light-gray dark:bg-gray-800 rounded-lg p-6 my-8">
                <h3 className="font-montserrat text-lg font-semibold text-dark-gray mb-4">New York Buyer Preferences</h3>
                <ul className="space-y-2 text-secondary-gray">
                  <li>• <strong>Home Office Space:</strong> Dedicated workspace with good lighting and built-in storage</li>
                  <li>• <strong>Outdoor Living Areas:</strong> Private terraces, balconies, or shared outdoor amenities</li>
                  <li>• <strong>Functional Layouts:</strong> Open concept with defined spaces and storage solutions</li>
                  <li>• <strong>Modern Kitchens:</strong> Granite/quartz countertops, smart appliances, stylish backsplashes</li>
                  <li>• <strong>Eco-Friendly Features:</strong> Energy-efficient appliances, solar panels, sustainable materials</li>
                </ul>
              </div>

              <h2 className="font-montserrat text-2xl font-bold oxford-blue mt-12 mb-6">
                <Wrench className="w-6 h-6 inline mr-3" />
                Regional Considerations for New York
              </h2>

              <h3 className="font-montserrat text-xl font-semibold text-dark-gray mb-4">
                Space Optimization
              </h3>

              <p>
                In New York&apos;s tight real estate market, improvements that maximize space deliver the highest returns. 
                Built-in storage solutions are particularly valuable, as are multi-functional rooms that can serve as 
                offices, gyms, or guest rooms.
              </p>

              <h3 className="font-montserrat text-xl font-semibold text-dark-gray mb-4 mt-6">
                Weather Considerations
              </h3>

              <p>
                Insulation and energy efficiency are crucial for harsh New York winters. Storm windows, weather-resistant 
                materials, and heated bathroom floors are luxury features that provide good returns in this climate.
              </p>

              <h3 className="font-montserrat text-xl font-semibold text-dark-gray mb-4 mt-6">
                Neighborhood-Specific Preferences
              </h3>

              <ul className="space-y-2 ml-6">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 oxford-blue mt-0.5 flex-shrink-0" />
                  <span><strong>Manhattan:</strong> Luxury finishes and building amenities</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 oxford-blue mt-0.5 flex-shrink-0" />
                  <span><strong>Brooklyn:</strong> Historic preservation with modern updates</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 oxford-blue mt-0.5 flex-shrink-0" />
                  <span><strong>Queens:</strong> Family-friendly features and outdoor space</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 oxford-blue mt-0.5 flex-shrink-0" />
                  <span><strong>Bronx:</strong> Value-adding essentials and security features</span>
                </li>
              </ul>

              <h2 className="font-montserrat text-2xl font-bold oxford-blue mt-12 mb-6">
                How Andre Winter&apos;s Flat Fee Services Maximize ROI
              </h2>

              <p>
                Andre&apos;s flat fee structure allows sellers to invest more in high-ROI improvements rather than paying 
                traditional commission percentages. This approach can free up thousands of dollars for strategic upgrades 
                that increase both sale price and buyer appeal.
              </p>

              <p>
                With expert advice on which improvements will yield the best returns in specific neighborhoods, connections 
                to reliable contractors, and staging consultation to showcase improvements effectively, Andre helps sellers 
                make informed decisions that maximize their investment.
              </p>

              <p>
                His strategic marketing highlights valuable upgrades to potential buyers, ensuring that your improvements 
                translate into actual sale price increases and faster market times.
              </p>

              <div className="bg-oxford-blue/10 rounded-lg p-6 my-8">
                <h3 className="font-montserrat text-lg font-semibold text-dark-gray mb-4">Key Statistics</h3>
                <ul className="space-y-2 text-secondary-gray">
                  <li>• Energy-efficient upgrades can reduce utility bills by 15-30%</li>
                  <li>• Homes with outdoor living spaces sell up to 20% faster in New York</li>
                  <li>• Properties with updated kitchens and bathrooms sell for 7-10% more than comparable non-updated homes</li>
                  <li>• Smart home features are expected by 73% of millennial buyers</li>
                </ul>
              </div>

              <h2 className="font-montserrat text-2xl font-bold oxford-blue mt-12 mb-6">
                Conclusion
              </h2>

              <p>
                Strategic home improvements can significantly impact both your sale price and time on market. Focus on 
                high-ROI projects that align with current buyer preferences, and don&apos;t overlook budget-friendly upgrades 
                that can deliver substantial visual impact.
              </p>

              <p>
                Remember that the goal is to appeal to the broadest possible buyer pool while maximizing your return on 
                investment. Working with an experienced professional like Andre Winter ensures your improvement dollars 
                are spent wisely and strategically.
              </p>

              <p>
                For more insights on preparing your home for sale, explore our guides on <Link href="/sellers/how-to-price-your-home-to-sell-fast-2025" className="oxford-blue hover:underline">pricing strategies</Link> and <Link href="/sellers" className="oxford-blue hover:underline">home staging techniques</Link>.
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
              Ready to Maximize Your Home&apos;s Value?
            </h3>
            <p className="font-open-sans text-white/90 mb-6 max-w-2xl mx-auto leading-relaxed">
              Get personalized advice on which improvements will deliver the best ROI for your specific property and market. 
              Andre&apos;s flat fee services help you invest more in your home and less in commissions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact">
                <Button className="bg-white text-oxford-blue hover:bg-gray-100 px-8 py-3 rounded-lg font-open-sans text-lg transition-all duration-200">
                  Get Improvement Consultation
                </Button>
              </Link>
              <Link href="/#services">
                <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-oxford-blue px-8 py-3 rounded-lg font-open-sans text-lg transition-all duration-200"
                >
                  View Flat Fee Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </article>
    </div>
  )
}

export default HomeImprovementsContent