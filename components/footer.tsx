"use client"

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Building, Smartphone } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-oxford-blue rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">AW</span>
              </div>
              <span className="font-montserrat font-bold text-xl">Andre Winter</span>
            </div>
            <p className="font-open-sans text-gray-300 mb-4 leading-relaxed">
              Seasoned real estate professional with over 10 years of experience specializing in 
              Ridgewood Queens and East New York. Transparent flat fee services with exceptional results.
            </p>
            <div className="text-sm text-gray-400">
              <p>Licensed Real Estate Agent</p>
              <p>Oxford Property Group</p>
              <p>NY License #10401265313</p>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-montserrat text-lg font-semibold mb-4">Contact Information</h3>
            <div className="space-y-3">
              <a
                href="https://maps.google.com/?q=5+West+37th+Street,+12th+Floor,+New+York,+NY+10018"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-3 text-gray-300 hover:text-white transition-colors duration-200"
              >
                <Building className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-open-sans block">5 West 37th Street, 12th Floor</span>
                  <span className="font-open-sans text-sm">New York, NY 10018</span>
                </div>
              </a>
              <a
                href="tel:+12123006412"
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200"
              >
                <Phone className="w-5 h-5" />
                <div>
                  <span className="font-open-sans">+1 (212) 300-6412</span>
                  <span className="font-open-sans text-sm block">Office</span>
                </div>
              </a>
              <a
                href="tel:+18452207267"
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200"
              >
                <Smartphone className="w-5 h-5" />
                <div>
                  <span className="font-open-sans">(845) 220-7267</span>
                  <span className="font-open-sans text-sm block">Cell</span>
                </div>
              </a>
              <a
                href="mailto:hello@opgny.com"
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200"
              >
                <Mail className="w-5 h-5" />
                <span className="font-open-sans">hello@opgny.com</span>
              </a>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-5 h-5" />
                <span className="font-open-sans">Ridgewood Queens & East New York</span>
              </div>
            </div>
          </motion.div>

          {/* Social Links & Hours */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="font-montserrat text-lg font-semibold mb-4">Connect & Hours</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-open-sans text-sm font-medium text-gray-300 mb-2">Business Hours</h4>
                <div className="text-sm text-gray-400 space-y-1">
                  <p>Monday - Saturday: 9:00 AM - 7:00 PM</p>
                  <p>Sunday: 10:00 AM - 5:00 PM</p>
                </div>
              </div>
              <div>
                <h4 className="font-open-sans text-sm font-medium text-gray-300 mb-2">Follow Andre</h4>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-oxford-blue transition-colors duration-200"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-oxford-blue transition-colors duration-200"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-oxford-blue transition-colors duration-200"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-gray-800 mt-8 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="font-open-sans text-sm text-gray-400">
              © {currentYear} Andre Winter Real Estate. All rights reserved. NY License #10401265313
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors duration-200">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors duration-200">Equal Housing</a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer