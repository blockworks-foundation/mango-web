import { FunctionComponent } from 'react'
import { useRef, useEffect } from 'react'
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
      <div className="lg:px-20 xs:px-6 sm:max-w-xl lg:max-w-3xl h-full flex flex-col justify-center w-full">
        <div>
          <h1 className="mb-4">
            Live to{' '}
            <span className="bg-gradient-to-br from-secondary-1-light via-primary-dark to-secondary-2-light bg-clip-text text-transparent">
              trade
            </span>
            .
          </h1>
          <p className="text-base  text-th-fgd-3 mb-6">
            Mango v4 is in public beta. Re-designed from the ground up with
            innovative new features and risk mitigation strategies, you can
            finally ditch your CEX.
          </p>
          <CheckBullet>Trade spot & perpetuals up to 10x leverage.</CheckBullet>
          <CheckBullet>Earn interest on all deposits.</CheckBullet>
          <CheckBullet>Borrow any listed token.</CheckBullet>
          <CheckBullet showNewBadge>Permissionless token listings.</CheckBullet>
          {/* <CheckBullet showNewBadge>{t('home:bullet-5')}</CheckBullet> */}
          <div className="flex items-center mt-10 space-x-8">
            <ButtonLink
              linkText="Trade Now"
              path="https://app.mango.markets"
              size="large"
            />
            <a
              href="https://docs.mango.markets"
              rel="noopener noreferrer"
              className="font-bold flex items-center text-th-fgd-2 md:hover:text-th-fgd-3 default-transition"
              target="_blank"
            >
              View Docs
              <ChevronRightIcon className="h-6 w-6 mt-0.5" />
            </a>
          </div>
          <p className="mt-8 text-xs">Website under contruction.</p>

          {/* <p className="mb-3 opacity-80 text-lg">
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
          </div> */}
        </div>
        {/* <div>
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
        </div> */}
      </div>
      <img
        ref={sideImage}
        className="hidden sm:block absolute -bottom-20 z-10 right-0 w-3/4 sm:w-2/3 lg:w-3/5 h-auto opacity-0 transform translate-y-40"
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

import { CheckCircleIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { ReactNode } from 'react'

const CheckBullet = ({
  children,
  showNewBadge,
}: {
  children: ReactNode
  showNewBadge?: boolean
}) => {
  return (
    <div className="mb-2 flex items-center space-x-2.5">
      <CheckCircleIcon className="h-6 w-6 text-th-fgd-3 flex-shrink-0" />
      <p className="text-base lg:text-lg text-th-fgd-2">
        {children}
        {showNewBadge ? (
          <span className="py-0.5 px-1 rounded bg-th-fgd-1 font-medium text-sm uppercase text-th-bkg-1 ml-2">
            New
          </span>
        ) : null}
      </p>
    </div>
  )
}

interface ButtonLinkProps {
  path: string
  className?: string
  secondary?: boolean
  linkText: string
  size?: 'large' | 'medium' | 'small'
}

const ButtonLink: FunctionComponent<ButtonLinkProps> = ({
  linkText,
  path,
  className,
  secondary,
  size = 'medium',
}) => {
  return (
    <a
      className={`flex sm:w-max items-center justify-center rounded-md ${
        secondary
          ? 'border border-th-red-dark'
          : 'bg-th-red-dark md:hover:brightness-90'
      } ${
        size === 'medium'
          ? 'h-10 px-4 text-sm'
          : size === 'large'
          ? 'h-12 px-6'
          : 'h-8 px-3'
      } default-transition font-display focus:outline-none text-th-fgd-1 ${className}`}
      href={path}
      rel="noopener noreferrer"
      target="_blank"
    >
      {linkText}
    </a>
  )
}
