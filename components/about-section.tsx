"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Award, MapPin, Users, TrendingUp } from 'lucide-react'
import Image from 'next/image'

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const stats = [
    { icon: Users, value: '100+', label: 'Happy Clients' },
    { icon: TrendingUp, value: '95%', label: 'Success Rate' },
    { icon: MapPin, value: '2', label: 'Specialized Areas' },
    { icon: Award, value: '10+', label: 'Years Experience' },
  ]

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="grid lg:grid-cols-5 gap-12 items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="aspect-[3/4] relative rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://cdn.abacus.ai/images/43f82061-e63a-4fb9-aa5a-89c7114ffa83.png"
                  alt="Andre Winter - Professional Real Estate Agent"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-oxford-blue/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-oxford-blue/10 rounded-full blur-xl"></div>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.h2
              className="font-montserrat text-3xl md:text-4xl font-bold oxford-blue mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              About Andre
            </motion.h2>

            <motion.div
              className="space-y-6 font-open-sans text-dark-gray leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <p className="text-lg">
                Andre Winter is a seasoned real estate professional with over 10 years of experience, 
                proudly representing <span className="oxford-blue font-semibold">Oxford Property Group</span>. 
                Based in the vibrant neighborhoods of <span className="oxford-blue font-semibold">Ridgewood Queens and East New York</span>, 
                Andre has successfully guided more than 100 clients through their real estate journeys 
                with a remarkable 95% success rate.
              </p>

              <p>
                What sets Andre apart is his innovative <span className="oxford-blue font-semibold">Flat Fee service model</span>, 
                which empowers sellers to maximize their equity while still receiving comprehensive support 
                throughout the entire selling process. With deep knowledge of the local markets and a 
                commitment to personalized service, Andre ensures that every client—whether buying or 
                selling—experiences a smooth, rewarding real estate journey.
              </p>

              <div className="bg-light-gray dark:bg-gray-800 rounded-lg p-6 mt-8">
                <h3 className="font-montserrat text-xl font-semibold oxford-blue mb-4">
                  Professional Credentials
                </h3>
                <ul className="space-y-2 text-secondary-gray">
                  <li>• New York Real Estate License #10401265313</li>
                  <li>• Member, National Association of Realtors (NAR)</li>
                  <li>• Oxford Property Group Representative</li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                className="text-center bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1.2 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-12 h-12 bg-oxford-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 oxford-blue" />
                </div>
                <motion.div
                  className="font-montserrat text-2xl md:text-3xl font-bold oxford-blue mb-2"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 1, delay: 1.4 + index * 0.1 }}
                >
                  {stat.value}
                </motion.div>
                <div className="font-open-sans text-secondary-gray">
                  {stat.label}
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection