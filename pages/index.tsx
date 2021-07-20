import { useRef, useEffect } from 'react'
import NavBarBeta from '../components/NavBarBeta'
import HeroSectionHome from '../components/HeroSectionHome'
import TradeSection from '../components/TradeSection'
import FooterSection from '../components/FooterSection'
import LendSection from '../components/LendSection'
import CommunitySection from '../components/CommunitySection'
import { TweenMax } from 'gsap'

const Index = () => {
  let app = useRef(null)

  useEffect(() =>{
      TweenMax.to(app.current, 0, {css: {visibility:'visible'}})

  }, [])

  return (
    <div 
      ref={app}   
      className="App">
      <div className={`bg-th-bkg-1 text-th-fgd-1 transition-all overflow-hidden`}>
        <div className="w-screen h-2 bg-gradient-to-r from-mango-red via-mango-yellow to-mango-green"></div>
        <NavBarBeta />
        <HeroSectionHome />
        <TradeSection />
        <LendSection />
        <CommunitySection />
        <FooterSection />
        <div className="w-screen h-2 bg-gradient-to-r from-mango-red via-mango-yellow to-mango-green"></div>
      </div>
    </div>
  )
}

export default Index
