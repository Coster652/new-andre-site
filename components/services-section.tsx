"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Button } from '@/components/ui/button'
import { Check, Camera, Home, TrendingUp, Users, Clock, Star } from 'lucide-react'

const ServicesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const packages = [
    {
      name: "Andre's Essential",
      price: '$249',
      icon: Home,
      description: 'Perfect for motivated sellers who want professional MLS exposure',
      features: [
        'Basic MLS listing',
        '6-month listing period',
        '25 professional photos',
        'Online listing syndication',
        'Basic property description',
        'Email support'
      ],
      popular: false,
    },
    {
      name: "Andre's Advantage",
      price: '$499',
      icon: TrendingUp,
      description: 'Enhanced marketing package for maximum property exposure',
      features: [
        'Enhanced MLS listing',
        'Virtual tour included',
        'Comparative Market Analysis (CMA)',
        '9-month listing period',
        'Social media marketing',
        'Professional staging advice',
        'Priority phone support'
      ],
      popular: true,
    },
    {
      name: "Andre's Concierge",
      price: '$999 + 1%',
      icon: Star,
      description: 'Full-service experience with premium marketing and coordination',
      features: [
        'Premium MLS listing',
        'Professional marketing materials',
        'Showing coordination',
        'Negotiation assistance',
        'Transaction management',
        'Premium photography & video',
        'Dedicated support line',
        'Open house coordination'
      ],
      popular: false,
    },
  ]

  return (
    <section id="services" className="py-20 bg-light-gray dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="font-montserrat text-3xl md:text-4xl font-bold oxford-blue mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Flat Fee Services
          </motion.h2>
          
          <motion.p
            className="font-open-sans text-lg text-secondary-gray max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Experience transparent, affordable real estate services without compromising on quality. 
            Our flat fee model ensures you know exactly what you're paying upfront, with no hidden costs 
            or surprise percentage fees. Choose the package that best fits your needs and budget.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => {
            const Icon = pkg.icon
            return (
              <motion.div
                key={index}
                className={`relative bg-white dark:bg-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                  pkg.popular ? 'ring-2 ring-oxford-blue' : ''
                }`}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-oxford-blue text-white px-4 py-1 rounded-full text-sm font-open-sans">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="p-8">
                  {/* Header */}
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-oxford-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 oxford-blue" />
                    </div>
                    <h3 className="font-montserrat text-xl font-bold text-dark-gray mb-2">
                      {pkg.name}
                    </h3>
                    <div className="font-montserrat text-3xl font-bold oxford-blue mb-2">
                      {pkg.price}
                    </div>
                    <p className="font-open-sans text-secondary-gray text-sm">
                      {pkg.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        className="flex items-start space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.8 + index * 0.2 + featureIndex * 0.1 }}
                      >
                        <Check className="w-5 h-5 oxford-blue mt-0.5 flex-shrink-0" />
                        <span className="font-open-sans text-dark-gray text-sm">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button
                    onClick={scrollToContact}
                    className={`w-full py-3 rounded-lg font-open-sans transition-all duration-200 ${
                      pkg.popular
                        ? 'bg-oxford-blue hover:bg-oxford-blue/90 text-white'
                        : 'border border-oxford-blue text-oxford-blue hover:bg-oxford-blue hover:text-white'
                    }`}
                    variant={pkg.popular ? 'default' : 'outline'}
                  >
                    Learn More
                  </Button>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Additional Info */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <div className="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-lg max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Clock className="w-8 h-8 oxford-blue mx-auto mb-3" />
                <h4 className="font-montserrat font-semibold text-dark-gray mb-2">
                  Quick Turnaround
                </h4>
                <p className="font-open-sans text-secondary-gray text-sm">
                  Get your property listed within 24-48 hours
                </p>
              </div>
              <div className="text-center">
                <Users className="w-8 h-8 oxford-blue mx-auto mb-3" />
                <h4 className="font-montserrat font-semibold text-dark-gray mb-2">
                  Personal Service
                </h4>
                <p className="font-open-sans text-secondary-gray text-sm">
                  Direct access to Andre throughout the process
                </p>
              </div>
              <div className="text-center">
                <Camera className="w-8 h-8 oxford-blue mx-auto mb-3" />
                <h4 className="font-montserrat font-semibold text-dark-gray mb-2">
                  Professional Quality
                </h4>
                <p className="font-open-sans text-secondary-gray text-sm">
                  High-quality photos and marketing materials
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesSection