"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Building, Smartphone } from 'lucide-react'
import { toast } from 'react-hot-toast'

const ContactSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    consentAutomated: false,
    consentMarketing: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      [name]: checked
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate required checkboxes
    if (!formData.consentAutomated || !formData.consentMarketing) {
      toast.error('Please provide consent for both automated and marketing messages to proceed.')
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({ 
          name: '', 
          email: '', 
          phone: '', 
          message: '', 
          consentAutomated: false, 
          consentMarketing: false 
        })
        toast.success('Message sent successfully! Andre will get back to you soon.')
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      toast.error('Failed to send message. Please try again or call directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Building,
      title: 'Office Address',
      value: '5 West 37th Street, 12th Floor',
      subValue: 'New York, NY 10018',
      action: 'https://maps.google.com/?q=5+West+37th+Street,+12th+Floor,+New+York,+NY+10018',
    },
    {
      icon: Phone,
      title: 'Office Phone',
      value: '+1 (212) 300-6412',
      subValue: null,
      action: 'tel:+12123006412',
    },
    {
      icon: Smartphone,
      title: 'Cell Phone',
      value: '(845) 220-7267',
      subValue: 'Direct Line',
      action: 'tel:+18452207267',
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'hello@opgny.com',
      subValue: null,
      action: 'mailto:hello@opgny.com',
    },
    {
      icon: MapPin,
      title: 'Service Areas',
      value: 'Ridgewood Queens & East New York',
      subValue: 'Specialized Local Expertise',
      action: null,
    },
    {
      icon: Clock,
      title: 'Business Hours',
      value: 'Mon-Sat: 9AM-7PM',
      subValue: 'Sun: 10AM-5PM',
      action: null,
    },
  ]

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
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
            Contact Andre
          </motion.h2>
          
          <motion.p
            className="font-open-sans text-lg text-secondary-gray max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Ready to get started with your real estate journey? Contact Andre today for a free consultation 
            and discover how flat fee services can save you thousands while delivering exceptional results.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div>
              <h3 className="font-montserrat text-2xl font-bold text-dark-gray mb-6">
                Get in Touch
              </h3>
              <p className="font-open-sans text-secondary-gray mb-8 leading-relaxed">
                Whether you&apos;re looking to sell your home, need a market analysis, or want to learn more 
                about our flat fee services, Andre is here to help. Visit our Manhattan office or reach out 
                today and experience the difference of working with a dedicated local expert with over 10 years of experience.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4 p-4 bg-light-gray dark:bg-gray-800 rounded-lg hover:shadow-md transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="w-12 h-12 bg-oxford-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 oxford-blue" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-montserrat font-semibold text-dark-gray mb-1">
                        {info.title}
                      </h4>
                      {info.action ? (
                        <div>
                          <a
                            href={info.action}
                            className="font-open-sans text-secondary-gray hover:text-oxford-blue transition-colors duration-200 block"
                            target={info.action.startsWith('http') ? '_blank' : undefined}
                            rel={info.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                          >
                            {info.value}
                          </a>
                          {info.subValue && (
                            <p className="font-open-sans text-secondary-gray text-sm mt-1">
                              {info.subValue}
                            </p>
                          )}
                        </div>
                      ) : (
                        <div>
                          <p className="font-open-sans text-secondary-gray">
                            {info.value}
                          </p>
                          {info.subValue && (
                            <p className="font-open-sans text-secondary-gray text-sm mt-1">
                              {info.subValue}
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-light-gray dark:bg-gray-800 rounded-lg p-8 shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {isSubmitted ? (
              <motion.div
                className="text-center py-8"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <CheckCircle className="w-16 h-16 oxford-blue mx-auto mb-4" />
                <h3 className="font-montserrat text-2xl font-bold text-dark-gray mb-2">
                  Message Sent!
                </h3>
                <p className="font-open-sans text-secondary-gray">
                  Thank you for reaching out. Andre will get back to you within 24 hours.
                </p>
                <Button
                  onClick={() => setIsSubmitted(false)}
                  variant="outline"
                  className="mt-4"
                >
                  Send Another Message
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="font-montserrat text-2xl font-bold text-dark-gray mb-6">
                    Send a Message
                  </h3>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-open-sans text-sm font-medium text-dark-gray mb-2">
                      Name *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block font-open-sans text-sm font-medium text-dark-gray mb-2">
                      Phone
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="(845) 220-7267"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-open-sans text-sm font-medium text-dark-gray mb-2">
                    Email *
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block font-open-sans text-sm font-medium text-dark-gray mb-2">
                    Message *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full"
                    placeholder="Tell Andre about your real estate needs..."
                  />
                </div>

                {/* Consent Checkboxes */}
                <div className="space-y-4 border-t border-gray-300 dark:border-gray-600 pt-6">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="consentAutomated"
                        checked={formData.consentAutomated}
                        onCheckedChange={(checked) => handleCheckboxChange('consentAutomated', checked as boolean)}
                        className="mt-1"
                        required
                      />
                      <label 
                        htmlFor="consentAutomated" 
                        className="font-open-sans text-sm text-dark-gray leading-relaxed cursor-pointer"
                      >
                        I consent to receive automated reminders and service-based messages from Andre Winter 
                        at the cell phone number <span className="oxford-blue font-medium">(845) 220-7267</span>. 
                        These messages may include appointment confirmations, property updates, and transaction-related 
                        communications. Message and data rates may apply. *
                      </label>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="consentMarketing"
                        checked={formData.consentMarketing}
                        onCheckedChange={(checked) => handleCheckboxChange('consentMarketing', checked as boolean)}
                        className="mt-1"
                        required
                      />
                      <label 
                        htmlFor="consentMarketing" 
                        className="font-open-sans text-sm text-dark-gray leading-relaxed cursor-pointer"
                      >
                        I consent to receive marketing and promotional messages from Andre Winter 
                        at the cell phone number <span className="oxford-blue font-medium">(845) 220-7267</span>. 
                        These messages may include market updates, new listings, special offers, and real estate tips. 
                        I understand I can opt out at any time by replying STOP. *
                      </label>
                    </div>
                  </div>

                  <p className="font-open-sans text-xs text-secondary-gray">
                    * Both consents are required to submit this form. Your privacy is important to us and your 
                    information will never be shared with third parties.
                  </p>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting || !formData.consentAutomated || !formData.consentMarketing}
                  className="w-full bg-oxford-blue hover:bg-oxford-blue/90 text-white py-3 rounded-lg font-open-sans transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center space-x-2">
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </div>
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection