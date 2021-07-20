import NavBarBeta from '../components/NavBarBeta'
import HeroSectionMarkets from '../components/HeroSectionMarkets'
import FeatureSection from '../components/FeatureSection'
import FooterSection from '../components/FooterSection'

const Index = () => {
  return (
    <div className={`bg-th-bkg-1 text-th-fgd-1 transition-all overflow-hidden`}>
      <div className="w-screen h-2 bg-gradient-to-r from-mango-red via-mango-yellow to-mango-green"></div>
      <NavBarBeta />
      <HeroSectionMarkets />
      <FeatureSection />
      <FooterSection />
      <div className="w-screen h-2 bg-gradient-to-r from-mango-red via-mango-yellow to-mango-green"></div>
    </div>
  )
}

export default Index
