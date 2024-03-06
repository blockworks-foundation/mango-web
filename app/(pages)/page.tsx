import { Metadata } from 'next'
import HomePage from '../components/home/HomePage'

const metaTitle = 'Mango Markets | Safer. Smarter. Faster.'
const metaDescription =
  'A magical DeFi experience powered by flashloans. Cross-margin trading with multi-collateral and groudbreaking safety features.'

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  openGraph: {
    title: metaTitle,
    description: metaDescription,
    url: 'https://mango.markets',
    siteName: 'Mango Markets',
    images: [
      {
        url: 'https://mango.markets/twitter-card.png',
        width: 1200,
        height: 600,
        alt: metaTitle,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

async function Page() {
  return (
    <div>
      <HomePage />
    </div>
  )
}

export default Page
