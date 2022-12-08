import { useRef, useEffect } from 'react'
import Button from './Button'
import Link from './Link'
import { gsap, Power3 } from 'gsap'

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
      <div className="lg:px-20 xs:px-6 max-w-xl lg:max-w-3xl h-full pb-20 flex flex-col justify-center w-full">
        <div>
          <h1 className="mb-3 lg:text-6xl text-5xl text-white font-bold font-heading">
            A New Dawn.{' '}
          </h1>

          <p className="mb-3 opacity-80 text-lg">
            The next generation of Mango is on the horizon. With exciting new
            features and risk mitigation strategies, Mango v4 is your one-stop
            DeFi shop.
          </p>
          <p className="mb-8 opacity-80 text-lg">
            Join our community and stay up-to-date on Discord.
          </p>

          <div className="flex justify-start">
            <a
              href="https://discord.gg/2uwjsBc5yw"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="flex items-center">
                <img
                  className="h-4 w-auto mr-2"
                  src="socials/discord-white.svg"
                />
                <span>Join Discord</span>
              </Button>
            </a>
          </div>
        </div>
        <div>
          <p className="mt-16 py-4 text-xs text-white text-opacity-50 uppercase tracking-wide font-normal sm:mt-16">
            Powered by
          </p>
          <div className="flex">
            <div className="flex justify-center">
              <a
                className="hover:opacity-70 transition duration-200 ease-in-out"
                href="https://solana.com/"
              >
                <img className="h-6" src="../logo_solana.svg" alt="Solana" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <img
        ref={sideImage}
        className="hidden md:block absolute -bottom-20 z-10 right-0 w-full md:w-2/3 lg:w-3/5 h-auto opacity-0 transform translate-y-40"
        src="../img/trade.png"
        alt=""
      />
      <div className="w-450 h-450 relative">
        <div className="absolute w-full h-full bottom-4 right-0 bg-mango-yellow mix-blend-screen rounded-full filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute w-full h-full bottom-4 right-0 bg-mango-red mix-blend-screen rounded-full filter blur-2xl opacity-30 animate-blob animation-delay-4000"></div>
        <div className="absolute w-full h-full bottom-4 right-0 bg-mango-green mix-blend-screen rounded-full filter blur-2xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>
    </div>
  )
}

export default HeroSectionHome
