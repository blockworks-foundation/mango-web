import NavBarBeta from '../components/NavBarBeta'
import HeroSection from '../components/HeroSection'
import FeatureSection from '../components/FeatureSection'
import FooterSection from '../components/FooterSection'

const Index = () => {
  return (
    <div className={`bg-th-bkg-1 text-th-fgd-1 transition-all`}>
      <div className="w-screen h-2 bg-gradient-to-r from-mango-red via-mango-yellow to-mango-green"></div>
      <NavBarBeta />
      <HeroSection />
      <FeatureSection />
      <FooterSection />
      <div className="w-screen h-2 bg-gradient-to-r from-mango-red via-mango-yellow to-mango-green"></div>
    </div>
  )
}

export default Index
