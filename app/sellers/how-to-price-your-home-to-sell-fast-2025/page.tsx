import type { Metadata } from 'next'
import PricingGuideContent from './pricing-guide-content'

export const metadata: Metadata = {
  title: 'How to Price Your Home to Sell Fast in 2025 | Andre Winter Real Estate',
  description: 'Discover effective pricing strategies for 2025. Learn how accurate pricing, technology tools, and expert insights help you sell your home quickly while maximizing your return.',
  keywords: 'home pricing strategy 2025, how to price house to sell quickly, real estate valuation tools, comparative market analysis, New York home pricing',
}

export default function PricingGuidePage() {
  return <PricingGuideContent />
}