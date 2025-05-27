import type { Metadata } from 'next'
import HomeImprovementsContent from './home-improvements-content'

export const metadata: Metadata = {
  title: 'Top Home Improvements That Boost Your Property Value | Andre Winter Real Estate',
  description: 'Maximize your home\'s value with strategic improvements that deliver the highest ROI. From kitchen updates to energy-efficient upgrades, learn which projects attract buyers.',
  keywords: 'high ROI home improvements, budget-friendly home upgrades, boost property value, New York home renovation ROI, kitchen updates value, bathroom remodel return',
}

export default function HomeImprovementsPage() {
  return <HomeImprovementsContent />
}