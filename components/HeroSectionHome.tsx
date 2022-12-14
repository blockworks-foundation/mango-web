import { useRef, useEffect } from 'react'
import Button from './Button'
import { gsap, Power3 } from 'gsap'
import GradientText from './GradientText'
import MangoPill from './MangoPill'

const HeroSectionHome = () => {
  const sideImage = useRef(null)

  const tl = gsap.timeline()

  useEffect(() => {
    //image animation
    tl.to(sideImage.current, 0.7, {
      opacity: 1,
      y: 0,
      ease: Power3.easeOut,
    })
  }, [])

  return (
    <div className="relative" style={{ height: 'calc(100vh - 160px)' }}>
      <div className="lg:px-20 xs:px-6 max-w-full m-auto lg:max-w-6xl h-full pb-20 flex flex-col justify-center items-center w-full ">
        <div>
          <MangoPill>WEN 🥭 LAUNCH?</MangoPill>
        </div>
        <div className="text-center z-20">
          <p className="mb-3 lg:text-6xl text-5xl text-white font-bold font-heading">
            Every market, all the power.{' '}
          </p>

          <p className="mb-3 lg:text-6xl text-5xl text-white font-bold font-heading">
            <GradientText>None of the fuss.</GradientText>
          </p>

          <div className="py-8">
            <div className="flex flex-row justify-center">
              <>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full px-5 py-2 placeholder-gray-400 text-black text-opacity-80 sm:max-w-xs border-gray-300 rounded-full focus:outline-none"
                  placeholder="Be the first to know wen launched..."
                  //value={email}
                  //onChange={handleChange}
                />
                <div className="mt-3 rounded-full shadow sm:mt-0 sm:-ml-8 sm:flex-shrink-0">
                  <Button>
                    <span className="">Let me know!</span>
                  </Button>
                </div>
              </>
            </div>
          </div>
        </div>
      </div>

      <img
        ref={sideImage}
        className="hidden md:block absolute -bottom-20 z-0 right-0 w-full md:w-2/3 lg:w-3/5 h-auto"
        src="../img/hero_iphone.png"
        alt=""
      />
      <img
        ref={sideImage}
        className="hidden md:block absolute -bottom-96 right-96 z-0 w-full h-auto"
        src="../img/hero_desktop.png"
        alt=""
      />
      <div className="w-450 h-450 relative left-96">
        <div className="absolute w-full h-full bottom-96 right-0 bg-mango-yellow mix-blend-screen rounded-full filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute w-full h-full bottom-96 right-0 bg-mango-orange mix-blend-screen rounded-full filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        <div className="absolute w-full h-full bottom-96 right-10 bg-mango-green mix-blend-screen rounded-full filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      </div>
    </div>
  )
}

export default HeroSectionHome
