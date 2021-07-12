import NavBarBeta from '../components/NavBarBeta'
import HeroSectionHome from '../components/HeroSectionHome'
import HomeSection from '../components/HomeSection'
import FooterSection from '../components/FooterSection'

const Index = () => {
  return (
    <div className={`bg-th-bkg-1 text-th-fgd-1 transition-all`}>
      <div className="w-screen h-2 bg-gradient-to-r from-red-400 via-yellow-300 to-green-300"></div>
      <NavBarBeta />
      <HeroSectionHome />
      <HomeSection />
      <FooterSection />
      <div className="w-screen h-2 bg-gradient-to-r from-red-400 via-yellow-300 to-green-300"></div>
    </div>
  )
}

export default Index
