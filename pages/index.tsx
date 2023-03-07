import NavBarBeta from '../components/NavBarBeta'
import HeroSectionHome from '../components/HeroSectionHome'

const Index = () => {
  return (
    <div
      className={`bg-th-bkg-1 text-th-fgd-1 transition-all min-h-screen pb-10`}
    >
      <NavBarBeta />
      <div className="max-w-[1600px] mx-auto min-h-[calc(100vh-160px)] flex flex-col justify-center">
        <HeroSectionHome />
      </div>
    </div>
  )
}

export default Index
