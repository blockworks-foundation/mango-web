import { fetchTokenPages } from '../../../contentful/tokenPage'
import Explore from '../../components/explore/Explore'
import SectionWrapper from '../../components/shared/SectionWrapper'
// import { fetchMarketData } from '../../utils/mango'
import { draftMode } from 'next/headers'

async function ExplorePage() {
  // const marketData = await fetchMarketData()
  const tokens = await fetchTokenPages({
    preview: draftMode().isEnabled,
  })

  return (
    <SectionWrapper>
      <h1 className="text-5xl mb-10">Explore</h1>
      <ul>
        {tokens && tokens?.length ? (
          <Explore tokens={tokens} />
        ) : (
          <div className="p-6 rounded-xl border border-th-bkg-3">
            <p className="text-center">Nothing to see here...</p>
          </div>
        )}
      </ul>
    </SectionWrapper>
  )
}

export default ExplorePage
