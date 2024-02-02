import { Metadata } from 'next'
import HomePage from '../components/home/HomePage'
import { fetchAppStatsData, fetchMangoMarketData } from '../utils/mango'
import { fetchTokenPages } from '../../contentful/tokenPage'
import { draftMode } from 'next/headers'
import { fetchHomePageAnnouncements } from '../../contentful/homePageAnnouncement'
import SectionWrapper from '../components/shared/SectionWrapper'
import Announcement from '../components/home/Announcement'

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
  const appStatsDataPromise = fetchAppStatsData()
  const marketsPromise = fetchMangoMarketData()
  const tokensPromise = fetchTokenPages({
    preview: draftMode().isEnabled,
  })
  const announcementsPromise = fetchHomePageAnnouncements({
    preview: draftMode().isEnabled,
  })
  const [appStatsData, markets, tokens, announcements] = await Promise.all([
    appStatsDataPromise,
    marketsPromise,
    tokensPromise,
    announcementsPromise,
  ])

  return (
    <div>
      {announcements?.length ? (
        <SectionWrapper className="flex justify-center pt-4 pb-10" noPaddingY>
          {announcements.map((announcement, i) => (
            <Announcement key={announcement.title + i} data={announcement} />
          ))}
        </SectionWrapper>
      ) : null}

      <HomePage appStatsData={appStatsData} markets={markets} tokens={tokens} />
    </div>
  )
}

export default Page
