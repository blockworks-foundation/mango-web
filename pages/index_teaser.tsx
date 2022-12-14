import NavBarAlpha from '../components/NavBarAlpha'
import HeroSectionNew from '../components/HeroSectionNew'
import HeroSectionMarkets from '../components/HeroSectionMarkets'
//import HeroSectionFeatures from '../components/HeroSectionFeatures'

const IndexTeaser = () => {
  return (
    <div className={`bg-bkg-1 text-fgd-1 transition-all overflow-hidden`}>
      <div className="w-screen h-2 bg-gradient-to-r from-mango-red via-mango-yellow to-mango-green"></div>
      <NavBarAlpha />
      <HeroSectionNew />
      <HeroSectionMarkets />
      {/*<HeroSectionFeatures />*/}
    </div>
  )
}

export default IndexTeaser
