import { useRef, useEffect } from 'react'
import Button from './Button'
import Link from './Link'
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
      <div className="relative bg-th-bkg-1 overflow-hidden">
        <div className="relative pt-6 pb-16 sm:pb-24">
          <main className="mt-16 sm:mt-16">
            <div className="mx-auto max-w-7xl">
              <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                <div className="px-2 ml-6 sm:pr-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:my-24 z-10">
                  <div /*ref={el => {heroText = el}}*/>
                    <h1 className="mb-3 lg:text-5xl md:text-4xl sm:text-4xl xs:text-3xl text-white font-bold font-heading">
                      Long &amp; short everything.
                    </h1>

                    <p className="mb-8 text-white text-opacity-50 lg:text-2xl md:text-2xl sm:text-2xl xs:text-lg">
                      Lightning fast{' '}
                      <span className="text-yellow-300 font-bold">·</span>{' '}
                      Near-zero fees{' '}
                      <span className="text-yellow-300 font-bold">·</span>{' '}
                      Permissionless
                    </p>

                    <div className="flex lg:flex-row md:flex-row lg:justify-start md:justify-center sm:justify-center">
                      <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://trade.mango.markets"
                      >
                        <Button>Start trading</Button>
                      </a>
                      <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://docs.mango.markets/"
                      >
                        <Link>Explore the docs</Link>
                      </a>
                    </div>

                    <div className="mt-5 w-full sm:mx-auto sm:max-w-lg lg:ml-0 md:w-1/2 sm:w-1/2">
                      <p className="mt-16 py-4 text-sm text-white text-opacity-50 uppercase tracking-wide font-semibold sm:mt-16">
                        Powered by
                      </p>
                      <div className="flex">
                        <div className="flex justify-center">
                          <a
                            className="hover:opacity-70 transition duration-200 ease-in-out"
                            href="https://solana.com/"
                          >
                            <img
                              className="h-8 sm:h-8"
                              src="../logo_solana.svg"
                              alt="Solana"
                            />
                          </a>
                        </div>
                        <div className="flex justify-center -my-1 mx-10">
                          <a
                            className="hover:opacity-70 transition duration-200 ease-in-out"
                            href="https://projectserum.com/#/"
                          >
                            <img
                              className="h-9 sm:h-10"
                              src="../logo_serum.svg"
                              alt="Serum"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-16 sm:mt-24 mt- lg:-mt-20 lg:col-span-6">
                  <div className="z-10 relative pl-4 -mr-40 sm:mx-auto sm:max-w-3xl sm:px-0 lg:max-w-none lg:h-full">
                    <img
                      ref={sideImage}
                      className="lg:h-750 lg:w-auto lg:max-w-none opacity-0 transform translate-y-40"
                      src="../img/herp_image_main_flat.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="z-0 absolute -bottom-4 left-20 lg:-bottom-4 lg:left-96">
                <div className="absolute bottom-4 left-8 w-450 h-450 bg-mango-yellow mix-blend-screen rounded-full filter blur-3xl opacity-10 animate-blob"></div>
                <div className="absolute bottom-4 w-450 h-450 bg-mango-red mix-blend-screen rounded-full filter blur-2xl opacity-30 animate-blob animation-delay-4000"></div>
                <div className="absolute bottom-8 left-20 w-450 h-450 bg-mango-green mix-blend-screen rounded-full filter blur-2xl opacity-20 animate-blob animation-delay-2000"></div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default HeroSectionHome
