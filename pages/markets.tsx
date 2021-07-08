import NavBarBeta from '../components/NavBarBeta'
import HeroSection from '../components/HeroSection'
import FeatureSection from '../components/FeatureSection'
import FooterSection from '../components/FooterSection'

const Index = () => {
  return (
    <div className={`bg-th-bkg-1 text-th-fgd-1 transition-all`}>
      <NavBarBeta />
      <HeroSection />
      <FeatureSection />
      <FooterSection />
    </div>
  )
}

export default Index
