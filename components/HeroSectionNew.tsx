import { useRef, useEffect } from 'react'
import Button from './Button'
import Link from './Link'
import GradientText from './GradientText'
import { gsap, Power3 } from 'gsap'

const HeroSectionHome = () => {
  const sideImage = useRef(null)
  //let heroText = useRef(null)

  const tl = gsap.timeline()
  //let App = useRef(null)

  useEffect(() => {
    //gsap.to(App.current, 0, {css: {visibility:'visible'}})

    /*
      const tagOne = heroText.children[0];
      const tagTwo = heroText.children[1];
      const tagThree = heroText.children[2];
      const tagFour = heroText.children[3];
      
      //content animation
      tl.from(tagOne, .7, {opacity: 0, y: 50, ease: Power3.easeOut}, 'Start')
        .from(tagTwo, .7, {opacity: 0, y: 50, ease: Power3.easeOut, delay: .2}, 'Start')
        .from(tagThree, .7, {opacity: 0, y: 50, ease: Power3.easeOut, delay: .4}, 'Start')
        .from(tagFour, .7, {opacity: 0, y: 50, ease: Power3.easeOut, delay: .6}, 'Start')
        */
    //image animation
    tl.to(sideImage.current, 0.7, {
      opacity: 1,
      y: 0,
      ease: Power3.easeOut,
    })
  }, [])

  return (
    <div className="App">
      <div className="relative bg-bkg-1 overflow-hidden h-screen">
        <div className="relative pt-6 pb-16 sm:pb-24">
          <main className="mt-16 sm:mt-16">
            <div className="mx-auto max-w-7xl z-0">
              <div className="px-2 ml-6 sm:pr-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:my-24 lg:px-20 xs:px-6 max-w-full m-auto lg:max-w-6xl h-full pb-20 flex flex-col justify-center items-center w-full ">
                <div /*ref={el => {heroText = el}}*/>
                  <p className="mb-3 lg:text-5xl md:text-4xl sm:text-4xl xs:text-3xl text-white font-bold font-heading text-center">
                    Every market, all the power.
                  </p>
                  <p className="mb-4 lg:text-5xl md:text-4xl sm:text-4xl xs:text-3xl text-white font-bold font-heading text-center">
                    <GradientText>None of the fuss.</GradientText>
                  </p>

                  <div className="mt-8 flex lg:flex-row md:flex-row lg:justify-center md:justify-center sm:justify-center">
                    <a
                      rel="noreferrer"
                      target="_blank"
                      href="https://trade.mango.markets"
                    >
                      <Button>Check out 🥭</Button>
                    </a>
                    <a
                      rel="noreferrer"
                      target="_blank"
                      href="https://docs.mango.markets/"
                    >
                      <Link>Explore the docs</Link>
                    </a>
                  </div>
                </div>
              </div>
              <img
                // ref={sideImage}
                className="z-0 hidden md:block absolute left-0 top-96 w-full h-auto"
                src="../img/hero_desktop.png"
                alt=""
              />
            </div>
          </main>
        </div>
      </div>
      <div className="w-450 h-450 relative left-96">
        <div className="absolute w-full h-full bottom-96 right-0 bg-mango-yellow mix-blend-screen rounded-full filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute w-full h-full bottom-96 right-0 bg-mango-orange mix-blend-screen rounded-full filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        <div className="absolute w-full h-full bottom-96 right-10 bg-mango-green mix-blend-screen rounded-full filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      </div>
    </div>
  )
}

export default HeroSectionHome
