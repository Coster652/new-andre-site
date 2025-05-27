"use client"

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { Menu, X, Home, User, Briefcase, Phone, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Update active section based on scroll position only on home page
      if (pathname === '/') {
        const sections = ['home', 'about', 'services', 'contact']
        const scrollPosition = window.scrollY + 100

        for (const section of sections) {
          const element = document.getElementById(section)
          if (element) {
            const offsetTop = element.offsetTop
            const offsetHeight = element.offsetHeight
            
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(section)
              break
            }
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [pathname])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  const navItems = [
    { id: 'home', label: 'Home', icon: Home, href: '/' },
    { id: 'about', label: 'About Andre', icon: User, href: '/#about' },
    { id: 'services', label: 'Flat Fee Services', icon: Briefcase, href: '/#services' },
    { id: 'sellers', label: 'Sellers', icon: FileText, href: '/sellers' },
    { id: 'contact', label: 'Contact', icon: Phone, href: '/#contact' },
  ]

  const handleNavigation = (item: any) => {
    if (item.href.startsWith('/#')) {
      // If we're not on the home page, navigate to home first
      if (pathname !== '/') {
        window.location.href = item.href
      } else {
        // If we're on the home page, scroll to section
        const sectionId = item.href.replace('/#', '')
        scrollToSection(sectionId)
      }
    }
    setIsMobileMenuOpen(false)
  }

  const getIsActive = (item: any) => {
    if (!mounted) return false
    
    if (item.href === '/') {
      return pathname === '/' && activeSection === 'home'
    } else if (item.href.startsWith('/#')) {
      return pathname === '/' && activeSection === item.id
    } else if (item.href === '/sellers') {
      return pathname.startsWith('/sellers')
    }
    return pathname === item.href
  }

  if (!mounted) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-oxford-blue rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">AW</span>
              </div>
              <span className="font-montserrat font-bold text-lg text-white">
                Andre Winter
              </span>
            </div>
          </div>
        </div>
      </header>
    )
  }

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/">
            <motion.div
              className="flex items-center space-x-2 cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-8 h-8 bg-oxford-blue rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">AW</span>
              </div>
              <span className={`font-montserrat font-bold text-lg ${
                isScrolled ? 'text-dark-gray' : 'text-white'
              }`}>
                Andre Winter
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = getIsActive(item)
              
              if (item.href.startsWith('/#')) {
                return (
                  <Button
                    key={item.id}
                    variant={isActive ? "default" : "ghost"}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                      isActive
                        ? 'bg-oxford-blue text-white hover:bg-oxford-blue/90'
                        : isScrolled
                        ? 'text-dark-gray hover:bg-gray-100 dark:hover:bg-gray-800'
                        : 'text-white hover:bg-white/10'
                    }`}
                    onClick={() => handleNavigation(item)}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="font-open-sans">{item.label}</span>
                  </Button>
                )
              } else {
                return (
                  <Link key={item.id} href={item.href}>
                    <Button
                      variant={isActive ? "default" : "ghost"}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                        isActive
                          ? 'bg-oxford-blue text-white hover:bg-oxford-blue/90'
                          : isScrolled
                          ? 'text-dark-gray hover:bg-gray-100 dark:hover:bg-gray-800'
                          : 'text-white hover:bg-white/10'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="font-open-sans">{item.label}</span>
                    </Button>
                  </Link>
                )
              }
            })}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className={`md:hidden ${
              isScrolled ? 'text-dark-gray' : 'text-white'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.nav
            className="md:hidden py-4 bg-white dark:bg-gray-900 rounded-lg mt-2 shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = getIsActive(item)
              
              if (item.href.startsWith('/#')) {
                return (
                  <Button
                    key={item.id}
                    variant={isActive ? "default" : "ghost"}
                    className={`w-full justify-start space-x-2 mb-1 ${
                      isActive
                        ? 'bg-oxford-blue text-white'
                        : 'text-dark-gray'
                    }`}
                    onClick={() => handleNavigation(item)}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="font-open-sans">{item.label}</span>
                  </Button>
                )
              } else {
                return (
                  <Link key={item.id} href={item.href}>
                    <Button
                      variant={isActive ? "default" : "ghost"}
                      className={`w-full justify-start space-x-2 mb-1 ${
                        isActive
                          ? 'bg-oxford-blue text-white'
                          : 'text-dark-gray'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="font-open-sans">{item.label}</span>
                    </Button>
                  </Link>
                )
              }
            })}
          </motion.nav>
        )}
      </div>
    </motion.header>
  )
}

export default Header