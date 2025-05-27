"use client"

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Phone, MapPin, Award } from 'lucide-react'
import Image from 'next/image'

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 parallax-bg"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://cdn.abacus.ai/images/c5134bd0-21c7-4621-9a3b-f98de2dc8fc7.png')`
        }}
      />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="text-left lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="font-montserrat text-4xl md:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Andre Winter
            </motion.h1>
            
            <motion.p
              className="font-open-sans text-xl md:text-2xl text-white/90 mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Your Trusted Real Estate Expert
            </motion.p>
            
            <motion.p
              className="font-open-sans text-lg text-white/80 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Specializing in Ridgewood Queens and East New York with transparent flat fee services. 
              Your success is my priority.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <MapPin className="w-5 h-5 text-white" />
                <span className="text-white font-open-sans">Local Expert</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <Award className="w-5 h-5 text-white" />
                <span className="text-white font-open-sans">Flat Fee Services</span>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <Button
                onClick={scrollToContact}
                className="bg-oxford-blue hover:bg-oxford-blue/90 text-white px-8 py-3 rounded-lg font-open-sans text-lg transition-all duration-200 transform hover:scale-105"
              >
                <Phone className="w-5 h-5 mr-2" />
                Contact Andre
              </Button>
              <Button
                variant="outline"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-open-sans text-lg transition-all duration-200"
              >
                View Services
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 relative">
                {/* Glowing background effect */}
                <div className="absolute inset-0 bg-oxford-blue rounded-full opacity-20 blur-xl animate-pulse"></div>
                
                {/* Outer ring with gradient */}
                <div className="relative w-full h-full bg-gradient-to-br from-oxford-blue/30 to-white/20 backdrop-blur-sm rounded-full p-2 shadow-2xl">
                  
                  {/* Inner white ring */}
                  <div className="w-full h-full bg-white/10 backdrop-blur-sm rounded-full p-3 border border-white/20">
                    
                    {/* Image container with circular frame */}
                    <div className="w-full h-full relative rounded-full overflow-hidden shadow-xl border-4 border-white/30">
                      <Image
                        src="https://cdn.abacus.ai/images/43f82061-e63a-4fb9-aa5a-89c7114ffa83.png"
                        alt="Andre Winter - Professional Real Estate Agent Headshot"
                        fill
                        className="object-cover object-center"
                        priority
                        sizes="(max-width: 768px) 320px, 384px"
                      />
                      
                      {/* Subtle overlay for better integration */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                    </div>
                  </div>
                </div>

                {/* Decorative floating elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-8 h-8 bg-oxford-blue/40 rounded-full blur-sm"
                  animate={{ y: [0, -10, 0], opacity: [0.4, 0.8, 0.4] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <motion.div
                  className="absolute -bottom-6 -left-6 w-12 h-12 bg-white/20 rounded-full blur-sm"
                  animate={{ y: [0, 10, 0], opacity: [0.2, 0.6, 0.2] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-white rounded-full mt-2"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroSection