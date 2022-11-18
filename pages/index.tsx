import NavBarBeta from '../components/NavBarBeta'
import HeroSectionHome from '../components/HeroSectionHome'

const Index = () => {
  return (
    <div
      className={`radial-gradient-bg text-th-fgd-1 transition-all h-screen overflow-hidden`}
    >
      <div className="w-screen h-2 bg-gradient-to-r from-mango-red via-mango-yellow to-mango-green"></div>
      <NavBarBeta />
      <HeroSectionHome />
    </div>
  )
}

export default Index
