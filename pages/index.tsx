import HeroSectionLP from '../components/HeroSectionLP'
import LandingContent from '../components/LandingContent'
import FooterSection from '../components/FooterSection'
import NavBarBeta from '../components/NavBarBeta'

const Index = () => {
  return (
    <div className={`bg-th-bkg-1 text-th-fgd-1 transition-all`}>
      <div className="w-screen h-2 bg-gradient-to-r from-mango-red via-mango-yellow to-mango-green"></div>
      <NavBarBeta />
      <HeroSectionLP />
      <LandingContent />
      <FooterSection />
      <div className="w-screen h-2 bg-gradient-to-r from-mango-red via-mango-yellow to-mango-green"></div>
    </div>
  )
}

export default Index
