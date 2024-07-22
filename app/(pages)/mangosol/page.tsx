import { Metadata } from 'next'
import MangoSolPage from '../../components/mangosol/MangoSolPage'

const metaTitle = 'mangoSOL | Mango Markets'
const metaDescription = 'mangoSOL is staked SOL fit for a king (of fruits).'

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  openGraph: {
    title: metaTitle,
    description: metaDescription,
    url: 'https://mango.markets/mangosol',
    siteName: 'Mango Markets',
    images: [
      {
        url: 'https://mango.markets/images/mangosol-share-image.png',
        width: 1200,
        height: 675,
        alt: metaTitle,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

async function MangoSol() {
  return (
    <div>
      <MangoSolPage />
    </div>
  )
}

export default MangoSol
