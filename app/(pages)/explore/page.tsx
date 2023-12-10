import { fetchTokenPages } from '../../../contentful/tokenPage'
import Explore from '../../components/explore/Explore'
import { draftMode } from 'next/headers'
import { fetchMangoTokensData } from '../../utils/mango'

async function ExplorePage() {
  const tokens = await fetchTokenPages({
    preview: draftMode().isEnabled,
  })
  const mangoTokensData = await fetchMangoTokensData()
  return tokens && tokens?.length ? (
    <Explore tokens={tokens} mangoTokensData={mangoTokensData} />
  ) : (
    <div className="p-6 rounded-xl border border-th-bkg-3">
      <p className="text-center">
        Something went wrong. Try refreshing the page.
      </p>
    </div>
  )
}

export default ExplorePage
