import type { Metadata } from 'next'
import StagingSecretsContent from './staging-secrets-content'

export const metadata: Metadata = {
  title: 'Home Staging Secrets: Make Buyers Fall in Love | Andre Winter Real Estate',
  description: 'Transform your home into a buyer\'s dream with professional staging techniques. Learn DIY tips, virtual staging options, and psychological strategies.',
  keywords: 'home staging techniques, DIY home staging tips, virtual staging services, home staging ROI, decluttering for home sale, psychological home staging',
}

export default function StagingSecretsPage() {
  return <StagingSecretsContent />
}