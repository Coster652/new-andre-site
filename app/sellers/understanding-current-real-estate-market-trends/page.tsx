import type { Metadata } from 'next'
import MarketTrendsContent from './market-trends-content'

export const metadata: Metadata = {
  title: 'Understanding the Current Real Estate Market Trends | Andre Winter Real Estate',
  description: 'Stay informed about New York\'s 2025 real estate market. Explore price trends, interest rate impacts, inventory levels, and evolving buyer preferences.',
  keywords: 'New York real estate market trends 2025, NYC housing market forecast, interest rates impact real estate, New York home inventory levels, post-pandemic real estate trends',
}

export default function MarketTrendsPage() {
  return <MarketTrendsContent />
}