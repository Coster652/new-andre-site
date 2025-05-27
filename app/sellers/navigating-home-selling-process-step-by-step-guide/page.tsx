import type { Metadata } from 'next'
import SellingProcessContent from './selling-process-content'

export const metadata: Metadata = {
  title: 'Navigating the Home Selling Process: A Step-by-Step Guide | Andre Winter Real Estate',
  description: 'Master the complete home selling journey from preparation to closing. Understand timelines, avoid common pitfalls, and learn about New York\'s specific legal requirements.',
  keywords: 'home selling process guide, selling house timeline New York, legal requirements selling home NY, home selling checklist, preparing house for sale',
}

export default function SellingProcessPage() {
  return <SellingProcessContent />
}