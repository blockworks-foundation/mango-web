import { useEffect, useState } from 'react'
import { 
  BuildingLibraryIcon,
  DevicePhoneMobileIcon,
  BanknotesIcon,
  UsersIcon,
  PuzzlePieceIcon,
  AcademicCapIcon,
  PresentationChartLineIcon,
  BookOpenIcon,
  UserGroupIcon,
  ChatBubbleLeftRightIcon,
  GiftIcon,

  } from '@heroicons/react/20/solid'

import ButtonTwo from '@/components/ButtonTwo'
import GradientText from '@/components/GradientText'
import Logo from '@/components/Logo'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import NavvyLink from '@/components/navigation/NavvyLink'
import StyleGuideDrop from './StyleGuideDrop'


// Explore Links...
const navLinkOne: any = [
  {
    url:'https://alpha.mango.markets',
    name: 'Markets',
    description:
      "Trade spot margin or permisionless perpectual futures on up to 20x leverage.",
  },
];
const navLinkTwo: any = [
  {
    url:'https://alpha.mango.markets',
    name: 'Redacted',
    description:
      "Move money globally without borders. Pay, send, swap, receive, and earn all from your device.",
  },
]; 
const navLinkThree: any = [
  {
    url:'https://alpha.mango.markets',
    name: 'Earn',
    description:
      "Automatically earn yeild from auto lending in your earn account.",
  },
]; 
const navLinkFour: any = [
  {
    url:'https://github.com/blockworks-foundation/mango-explorer/blob/main/docs/LiquidatorQuickstart.md',
    name: 'Liquidator Program',
    description:
      "Help safeguard the mango protocol, become a decentralized liquidator and earn on fees.",
  },
]; 
const navLinkFive: any = [
  {
    url:'https://github.com/blockworks-foundation/mango-explorer/blob/main/docs/MarketmakingIntroduction.md',
    name: 'Market Maker Program',
    description:
      "Provide liquidity and participate in decentralized markets, become a market maker today.",
  },
]; 
const navLinkSix: any = [
  {
    url:'https://initialcapoffering.com/',
    name: 'Mango Market Caps',
    description:
      "The premier fashion choice for Mango lovers, traders, and lenders.",
  },
]; 

// Community Links...
const navLinkSeven: any = [
  {
    url:'https://alpha.mango.markets',
    name: 'Exlpore the docs',
    description:
      "Learn about the protocol on a deaper level and start composing and integrating today.",
  },
];
const navLinkEight: any = [
  {
    url:'https://alpha.mango.markets',
    name: 'Protocol Stats',
    description:
      "Total Value Deposited, Current rates for borrowing/lending, and other valuable stats.",
  },
]; 
const navLinkNine: any = [
  {
    url:'/dao',
    name: 'Mango DAO',
    description:
    "Mango DAO is building a distributed way to organize like minded builders, have a stake in the protocol.",
  },
]; 
const navLinkTen: any = [
  {
    url:'https://forum.mango.markets/',
    name: 'Mango Forum',
    description:
      "Discuss proposals, partnerships, and improvements to Mango, all in one place.",
  },
]; 
const navLinkEleven: any = [
  {
    url:'https://token.mango.markets',
    name: 'Redeem your MNGO',
    description:
      "Participated in the launch of the DAO? Redeem your governance tokens here.",
  },
]; 

// Support Links...
const navLinkTwelve: any = [
  {
    url:'https://discord.gg/2uwjsBc5yw',
    name: 'Discords',
    description:
      "Get all of your questions answered in our discrod or contact us for developer support.",
  },
];
const navLinkThirteen: any = [
  {
    url:'https://twitter.com/mangomarkets',
    name: 'Twitter',
    description:
      "Quickly see what we&apos;re up to and meme with us.",
  },
]; 

const Nav = () => {

  const [mobileMenuVisible, setMobileMenuVisible] = useState(false)
  const [productMenuVisible, setProductMenuVisible] = useState(false)
  const [supportMenuVisible, setSupportMenuVisible] = useState(false)
  const [communityMenuVisible, setCommunityMenuVisible] = useState(false)

  const toggleMobileMenu = (e: any) => {
    setMobileMenuVisible(!mobileMenuVisible)
    e.stopPropagation()
  }

  const toggleProducts = (e: any) => {
    setProductMenuVisible(!productMenuVisible)
    setSupportMenuVisible(false)
    setCommunityMenuVisible(false)

    e.stopPropagation()
  }
  const toggleCommunity = (e: any) => {
    setCommunityMenuVisible(!communityMenuVisible)
    setSupportMenuVisible(false)
    setProductMenuVisible(false)

    e.stopPropagation()
  }

  const toggleSupport = (e: any) => {
    setSupportMenuVisible(!supportMenuVisible)
    setProductMenuVisible(false)
    setCommunityMenuVisible(false)

    e.stopPropagation()
  }

  const closeMenu = () => {
    setMobileMenuVisible(false)
    setProductMenuVisible(false)
    setSupportMenuVisible(false)
    setCommunityMenuVisible(false)
  }

  useEffect(() => {
    window.addEventListener('click', closeMenu)
    return () => window.removeEventListener('click', closeMenu)
  })
  return (
    <>
      <div className="z-20 h-2 w-screen fixed bg-gradient-to-r from-mango-red via-mango-yellow to-mango-green"></div>
      <div className="z-20 w-screen fixed bg-gradient-to-b from-th-bkg-1 backdrop-blur-xl bg-opacity-50 mt-2">
        {/* Main Menu */}
        <div className="xs:px-6 xs:py-1 bg-transparent lg:px-10 lg:py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <StyleGuideDrop />
              </div>
              <div className="-my-2 -mr-2 md:hidden">
                <button
                  type="button"
                  className=" inline-flex items-center justify-center rounded-xl p-2 text-gray-400 transition duration-150 ease-in-out hover:bg-gray-150 hover:text-th-fgd-5 opacity-50 focus:outline-none"
                  onClick={toggleMobileMenu}
                >
                  <span className="sr-only">Open menu</span>
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>

              {/* NavContainer */}
              <nav className="hidden space-x-10 md:flex">


                {/* ProductsNav */}
                <div className="relative">
                  <button
                    type="button"
                    className="group inline-flex items-center rounded-xl p-1 px-2 text-base font-medium text-th-fgd-5 opacity-40 transition duration-150 ease-in-out hover:opacity-100 focus:opacity-100 focus:outline-none"
                    onClick={toggleProducts}
                  >
                    <svg
                      className="mr-2 h-5 w-5 text-th-fgd-3 text-opacity-40 transition duration-150 ease-in group-hover:text-mango-yellow group-active:text-mango-orange group-focus:text-mango-green"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M11.6096 0.733894L8.58716 8.64865L0.737179 11.8111C0.480655 11.9145 0.488718 12.2804 0.749546 12.3723L8.58716 15.1351L11.6088 23.2454C11.7058 23.5058 12.074 23.5058 12.171 23.2454L15.1927 15.1351L23.2291 12.373C23.493 12.2824 23.501 11.9121 23.2413 11.8101L15.1927 8.64865L12.1702 0.733893C12.0719 0.476594 11.7079 0.476595 11.6096 0.733894Z" />
                    </svg>

                    <span>Explore</span>

                    <svg
                      className="ml-2 h-5 w-5 text-th-bkg-1 transition duration-150 ease-in group-hover:text-th-fgd-5 group-hover:opacity-50 group-focus:text-mango-yellow group-focus:rotate-180"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>

                  <div
                    className={`${
                      !productMenuVisible && 'hidden'
                    } absolute z-50 mt-8 transform -translate-x-[200px]`}
                  >
                    <div className="w-700 grid grid-cols-2 overflow-hidden rounded-xl border border-white border-opacity-10 shadow-lg">
                      <div className=" space-y-3 bg-black p-4 px-5 backdrop-blur-3xl bg-opacity-[.05]">
                        
                          <h3 className="text-sm font-bold uppercase tracking-wide text-th-fgd-3">
                            Products
                          </h3>
                          <NavvyLink 
                            url={navLinkOne[0].url}
                            icon={<BuildingLibraryIcon />}
                            name={navLinkOne[0].name}
                            description={navLinkOne[0].description}
                          />
                          <NavvyLink 
                            url={navLinkTwo[0].url}
                            icon={<DevicePhoneMobileIcon />}
                            name={navLinkTwo[0].name}
                            description={navLinkTwo[0].description}
                          />
                          <NavvyLink 
                            url={navLinkThree[0].url}
                            icon={<BanknotesIcon />}
                            name={navLinkThree[0].name}
                            description={navLinkThree[0].description}
                          />
                        </div>

                      <div className=" space-y-3 bg-th-bkg-3 p-4 px-5">
                        <h3 className="text-sm font-bold uppercase tracking-wide text-th-fgd-5 opacity-40">
                          Infrastructure
                        </h3>
                        <NavvyLink 
                            url={navLinkFour[0].url}
                            icon={<UsersIcon />}
                            name={navLinkFour[0].name}
                            description={navLinkFour[0].description}
                          />
                          <NavvyLink 
                            url={navLinkFive[0].url}
                            icon={<PuzzlePieceIcon />}
                            name={navLinkFive[0].name}
                            description={navLinkFive[0].description}
                          />


                        <h3 className="text-sm font-bold uppercase tracking-wide text-th-fgd-5 opacity-40">
                          MERCH
                        </h3>
                        <NavvyLink 
                            url={navLinkSix[0].url}
                            icon={<AcademicCapIcon />}
                            name={navLinkSix[0].name}
                            description={navLinkSix[0].description}
                          />

                      </div>
                    </div>
                  </div>
                </div>


                {/* CommunityNav */}
                <div className="relative">
                  <button
                    type="button"
                    className="group inline-flex items-center rounded-xl p-1 px-2 text-base font-medium text-th-fgd-5 opacity-40 transition duration-150 ease-in-out hover:opacity-100 focus:opacity-100 focus:outline-none"
                    onClick={toggleCommunity}
                  >
                    <svg
                      className="mr-2 h-5 w-5  text-th-fgd-3 text-opacity-40 transition duration-150 ease-in group-hover:text-mango-yellow group-active:text-mango-orange group-focus:text-mango-green"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z"
                        clipRule="evenodd"
                      />
                      <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
                    </svg>

                    <span>Community</span>

                    <svg
                      className="ml-2 h-5 w-5 text-th-bkg-1 transition duration-150 ease-in group-hover:text-th-fgd-5 group-hover:opacity-50 group-focus:text-mango-yellow group-focus:rotate-180"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  <div
                    className={`${
                      !communityMenuVisible && 'hidden'
                    } absolute z-50 mt-8 transform -translate-x-[200px]`}
                    >
                      <div className="w-700 grid grid-cols-2 overflow-hidden rounded-xl border border-white border-opacity-10 shadow-lg">
                        <div className=" space-y-3 bg-black p-4 px-5 backdrop-blur-3xl bg-opacity-[.05]">
                          
                         <h3 className="text-sm font-bold uppercase tracking-wide text-th-fgd-3">
                          Developers
                        </h3>
                        <NavvyLink 
                            url={navLinkSeven[0].url}
                            icon={<BookOpenIcon />}
                            name={navLinkSeven[0].name}
                            description={navLinkSeven[0].description}
                          />
                        <h3 className="text-sm font-bold uppercase tracking-wide text-th-fgd-5 opacity-40">
                          Stats
                        </h3>
                        <NavvyLink 
                            url={navLinkEight[0].url}
                            icon={<PresentationChartLineIcon />}
                            name={navLinkEight[0].name}
                            description={navLinkEight[0].description}
                          />
                      </div>

                      <div className=" space-y-3 bg-th-bkg-3 p-4 px-5">
                        <h3 className="text-sm font-bold uppercase tracking-wide text-th-fgd-5 opacity-40">
                          Governance
                        </h3>
                          <NavvyLink 
                              url={navLinkNine[0].url}
                              icon={<UserGroupIcon />}
                              name={navLinkNine[0].name}
                              description={navLinkNine[0].description}
                            />
                          <NavvyLink 
                              url={navLinkTen[0].url}
                              icon={<ChatBubbleLeftRightIcon />}
                              name={navLinkTen[0].name}
                              description={navLinkTen[0].description}
                            />
                          <NavvyLink 
                              url={navLinkEleven[0].url}
                              icon={<GiftIcon />}
                              name={navLinkEleven[0].name}
                              description={navLinkEleven[0].description}
                            />
                      </div>

                    </div>
                  </div>
                </div>


                {/* SupportNav */}
                <div className="relative">
                  <button
                    type="button"
                    className="group inline-flex items-center rounded-xl p-1 px-2 text-base font-medium text-th-fgd-5 opacity-40 transition duration-150 ease-in-out hover:opacity-100 focus:opacity-100 focus:outline-none"
                    onClick={toggleSupport}
                  >
                    <svg
                      className="mr-2 h-5 w-5  text-th-fgd-3 text-opacity-40 transition duration-150 ease-in group-hover:text-mango-yellow group-active:text-mango-orange group-focus:text-mango-green"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M19.449 8.448L16.388 11a4.52 4.52 0 010 2.002l3.061 2.55a8.275 8.275 0 000-7.103zM15.552 19.45L13 16.388a4.52 4.52 0 01-2.002 0l-2.55 3.061a8.275 8.275 0 007.103 0zM4.55 15.552L7.612 13a4.52 4.52 0 010-2.002L4.551 8.45a8.275 8.275 0 000 7.103zM8.448 4.55L11 7.612a4.52 4.52 0 012.002 0l2.55-3.061a8.275 8.275 0 00-7.103 0zm8.657-.86a9.776 9.776 0 011.79 1.415 9.776 9.776 0 011.414 1.788 9.764 9.764 0 010 10.211 9.777 9.777 0 01-1.415 1.79 9.777 9.777 0 01-1.788 1.414 9.764 9.764 0 01-10.212 0 9.776 9.776 0 01-1.788-1.415 9.776 9.776 0 01-1.415-1.788 9.764 9.764 0 010-10.212 9.774 9.774 0 011.415-1.788A9.774 9.774 0 016.894 3.69a9.764 9.764 0 0110.211 0zM14.121 9.88a2.985 2.985 0 00-1.11-.704 3.015 3.015 0 00-2.022 0 2.985 2.985 0 00-1.11.704c-.326.325-.56.705-.704 1.11a3.015 3.015 0 000 2.022c.144.405.378.785.704 1.11.325.326.705.56 1.11.704.652.233 1.37.233 2.022 0a2.985 2.985 0 001.11-.704c.326-.325.56-.705.704-1.11a3.016 3.016 0 000-2.022 2.985 2.985 0 00-.704-1.11z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Support</span>

                    <svg
                      className="ml-2 h-5 w-5 text-th-bkg-1 transition duration-150 ease-in group-hover:text-th-fgd-5 group-hover:opacity-50 group-focus:text-mango-yellow group-focus:rotate-180"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>

                  <div
                    className={`${
                      !supportMenuVisible && 'hidden'
                    } absolute z-50 mt-8 w-96 transform -translate-x-[200px]`}
                    >
                      <div className="grid grid-cols-1 overflow-hidden rounded-xl border border-white border-opacity-10 shadow-lg">
                        <div className=" space-y-3 bg-black p-4 px-5 backdrop-blur-3xl bg-opacity-[.05]">
                          
                         <h3 className="text-sm font-bold uppercase tracking-wide text-th-fgd-3">
                          Social
                        </h3>
                        <NavvyLink 
                              url={navLinkTwelve[0].url}
                              icon={<GiftIcon />}
                              name={navLinkTwelve[0].name}
                              description={navLinkTwelve[0].description}
                            />
                          <NavvyLink 
                              url={navLinkThirteen[0].url}
                              icon={<GiftIcon />}
                              name={navLinkThirteen[0].name}
                              description={navLinkThirteen[0].description}
                            />
                      </div>
                      <div className=" space-y-3 bg-th-bkg-3 p-6">
                        <div>
                          <h3 className="text-sm font-bold uppercase tracking-wide">
                            <GradientText>Mango Guides</GradientText>
                          </h3>
                          <ul className="mt-4 space-y-4">
                            <li className="truncate text-base">
                              <a
                                href="https://docs.mango.markets/tutorials/creating-a-wallet"
                                className="font-medium text-th-fgd-5 opacity-50 transition duration-150 ease-in-out hover:opacity-100"
                              >
                                Setting up a wallet
                              </a>
                            </li>

                            <li className="truncate text-base">
                              <a
                                href="https://docs.mango.markets/tutorials/getting-started"
                                className="font-medium text-th-fgd-5 opacity-50 transition duration-150 ease-in-out hover:opacity-100"
                              >
                                Getting started with Mango 🥭
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="mt-5 text-sm group">
                          <a
                            href="https://docs.mango.markets/margin-trading/overview"
                            className="text-mango-yellow font-bold transition duration-150 ease-in-out hover:text-yellow-300"
                          >
                            {' '}
                            Learn more about Mango protocol{' '}
                            <span
                              className="text-mango-bkg-4 transition duration-150 ease-in group-hover:text-yellow-300"
                              aria-hidden="true"
                            >
                              &rarr;
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
              
              <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
                  <ButtonTwo>
                    <a
                      rel="noreferrer"
                      target="_blank"
                      href="https://alpha.mango.markets"
                    >
                      Discover 🥭
                    </a>
                  </ButtonTwo>
              </div>
              <div className="bg-th-fgd-2 mt-1 rounded-full ml-6 shadow-lg">
                  <ThemeSwitcher />
                </div>
            </div>
          </div>

          {/* Mobile menu */}
          <div
            className={`${
              !mobileMenuVisible && 'hidden'
            } absolute inset-x-0 top-1 z-50 origin-top-right px-4 py-2 transition`}
          >
            <div className="rounded-xl bg-mango-bkg-3 shadow-lg">
              <div className="px-5 pt-5 pb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <Logo />
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      className="inline-flex items-center justify-center rounded-md bg-th-bkg-3 p-2 text-gray-400 transition duration-150 ease-in-out hover:bg-mango-bkg-4 hover:text-white opacity-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-300"
                      onClick={closeMenu}
                    >
                      <span className="sr-only">Close menu</span>
                      <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="mt-6">
                  <nav className="grid gap-y-8">
                    <a
                      href="https://trade.mango.markets"
                      className="-m-3 flex items-center rounded-md p-3 transition duration-150 ease-in-out hover:bg-mango-bkg-4"
                    >
                      <svg
                        className="h-6 w-6 shrink-0"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 22 22"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          d="M6 12V15M10 12V15M14 12V15M1 19H19M1 8H19M1 5L10 1L19 5M2 8H18V19H2V8Z"
                          stroke="#4F4C67"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="ml-3 text-base font-medium text-th-fgd-5">
                        Spot Markets
                      </span>
                    </a>

                    <a
                      href="https://alpha.mango.markets/perp/BTC"
                      className="-m-3 flex items-center rounded-md p-3 transition duration-150 ease-in-out hover:bg-mango-bkg-4"
                    >
                      <svg
                        className="h-6 w-6 shrink-0"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 22 22"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          d="M19 10C19 14.9706 14.9706 19 10 19M19 10C19 5.02944 14.9706 1 10 1M19 10H1M10 19C5.02944 19 1 14.9706 1 10M10 19C11.6569 19 13 14.9706 13 10C13 5.02944 11.6569 1 10 1M10 19C8.34315 19 7 14.9706 7 10C7 5.02944 8.34315 1 10 1M1 10C1 5.02944 5.02944 1 10 1"
                          stroke="#4F4C67"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="ml-3 text-base font-medium text-th-fgd-5">
                        Perpetual Futures
                      </span>
                    </a>

                    <a
                      href="https://alpha.mango.markets/borrow"
                      className="-m-3 flex items-center rounded-md p-3 transition duration-150 ease-in-out hover:bg-mango-bkg-4"
                    >
                      <svg
                        className="h-6 w-6 shrink-0"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 22 22"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          d="M15 5V3C15 1.89543 14.1046 1 13 1H3C1.89543 1 1 1.89543 1 3V9C1 10.1046 1.89543 11 3 11H5M7 15H17C18.1046 15 19 14.1046 19 13V7C19 5.89543 18.1046 5 17 5H7C5.89543 5 5 5.89543 5 7V13C5 14.1046 5.89543 15 7 15ZM14 10C14 11.1046 13.1046 12 12 12C10.8954 12 10 11.1046 10 10C10 8.89543 10.8954 8 12 8C13.1046 8 14 8.89543 14 10Z"
                          stroke="#4F4C67"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="ml-3 text-base font-medium text-th-fgd-5">
                        Decentralized Lending
                      </span>
                    </a>

                    <a
                      href="https://github.com/blockworks-foundation/mango-explorer/blob/main/docs/LiquidatorQuickstart.md"
                      className="-m-3 flex items-center rounded-md p-3 transition duration-150 ease-in-out hover:bg-mango-bkg-4"
                    >
                      <svg
                        className="h-6 w-6 shrink-0"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 22 22"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          d="M16 17H21V15C21 13.3431 19.6569 12 18 12C17.0444 12 16.1931 12.4468 15.6438 13.1429M16 17H6M16 17V15C16 14.3438 15.8736 13.717 15.6438 13.1429M6 17H1V15C1 13.3431 2.34315 12 4 12C4.95561 12 5.80686 12.4468 6.35625 13.1429M6 17V15C6 14.3438 6.12642 13.717 6.35625 13.1429M6.35625 13.1429C7.0935 11.301 8.89482 10 11 10C13.1052 10 14.9065 11.301 15.6438 13.1429M14 4C14 5.65685 12.6569 7 11 7C9.34315 7 8 5.65685 8 4C8 2.34315 9.34315 1 11 1C12.6569 1 14 2.34315 14 4ZM20 7C20 8.10457 19.1046 9 18 9C16.8954 9 16 8.10457 16 7C16 5.89543 16.8954 5 18 5C19.1046 5 20 5.89543 20 7ZM6 7C6 8.10457 5.10457 9 4 9C2.89543 9 2 8.10457 2 7C2 5.89543 2.89543 5 4 5C5.10457 5 6 5.89543 6 7Z"
                          stroke="#4F4C67"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="ml-3 text-base font-medium text-th-fgd-5">
                        Liquidator Program
                      </span>
                    </a>
                    <a
                      href="https://github.com/blockworks-foundation/mango-explorer/blob/main/docs/MarketmakingIntroduction.md"
                      className="-m-3 flex items-start rounded-xl p-3 transition duration-150 ease-in-out hover:bg-mango-bkg-4"
                    >
                      <svg
                        className="h-6 w-6 shrink-0"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 22 22"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          d="M1 4L4 5M4 5L1 14C2.77253 15.3334 5.22866 15.3334 7.00119 14M4 5L7.00006 14M4 5L10 3M16 5L19 4M16 5L13 14C14.7725 15.3334 17.2287 15.3334 19.0012 14M16 5L19.0001 14M16 5L10 3M10 1V3M10 19V3M10 19H7M10 19H13"
                          stroke="#4E4D65"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>

                      <div className="mx-3">
                        <p className="text-base font-medium text-th-fgd-5">
                          Market Making Program
                        </p>
                      </div>
                    </a>
                    <a
                      href="https://docs.mango.markets/"
                      className="text-base font-medium text-th-fgd-5 transition duration-150 ease-in-out hover:bg-mango-bkg-4"
                    >
                      <div className="flex flex-row">
                        <svg
                          className="h-6 w-6 shrink-0"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 22 22"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            d="M10 2.25278V15.2528M10 2.25278C8.83211 1.47686 7.24649 1 5.5 1C3.75351 1 2.16789 1.47686 1 2.25278V15.2528C2.16789 14.4769 3.75351 14 5.5 14C7.24649 14 8.83211 14.4769 10 15.2528M10 2.25278C11.1679 1.47686 12.7535 1 14.5 1C16.2465 1 17.8321 1.47686 19 2.25278V15.2528C17.8321 14.4769 16.2465 14 14.5 14C12.7535 14 11.1679 14.4769 10 15.2528"
                            stroke="#4E4D65"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="mx-3">
                          <p className="text-base font-medium text-th-fgd-5">
                            Explore the docs
                          </p>
                        </div>
                      </div>
                    </a>
                    <a
                      href="https://dao-beta.mango.markets"
                      className="-m-3 flex items-start rounded-xl p-3 transition duration-150 ease-in-out hover:bg-mango-bkg-4"
                    >
                      <svg
                        className="h-6 w-6 shrink-0"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 22 22"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          d="M1.05493 9H3C4.10457 9 5 9.89543 5 11V12C5 13.1046 5.89543 14 7 14C8.10457 14 9 14.8954 9 16V18.9451M6 1.93552V3.5C6 4.88071 7.11929 6 8.5 6H9C10.1046 6 11 6.89543 11 8C11 9.10457 11.8954 10 13 10C14.1046 10 15 9.10457 15 8C15 6.89543 15.8954 6 17 6L18.0645 6M13 18.4879V16C13 14.8954 13.8954 14 15 14H18.0645M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z"
                          stroke="#4E4D65"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="mx-3">
                        <p className="text-base font-medium text-th-fgd-5">
                          Mango DAO
                        </p>
                      </div>
                    </a>
                  </nav>
                </div>
                <h3 className="py-5 text-sm font-medium uppercase tracking-wide text-mango-yellow">
                  Contact Us
                </h3>
                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                  <a
                    href="https://discord.gg/2uwjsBc5yw"
                    className="text-base font-medium text-th-fgd-5 transition duration-150 ease-in-out hover:bg-mango-bkg-4"
                  >
                    <div className="flex flex-row">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M23.7187 1.67497C21.9061 0.89249 19.9681 0.323786 17.9421 0C17.6932 0.41511 17.4025 0.973432 17.2021 1.4176C15.0482 1.11872 12.9142 1.11872 10.8 1.4176C10.5996 0.973432 10.3023 0.41511 10.0513 0C8.02293 0.323786 6.08271 0.894565 4.27023 1.67912C0.614418 6.77668 -0.376613 11.7477 0.118903 16.648C2.54363 18.3188 4.89347 19.3337 7.20367 19.9979C7.77407 19.2736 8.2828 18.5036 8.72106 17.692C7.88639 17.3993 7.08696 17.0382 6.33156 16.6189C6.53197 16.482 6.72798 16.3387 6.91738 16.1914C11.5246 18.1797 16.5304 18.1797 21.0826 16.1914C21.2741 16.3387 21.4701 16.482 21.6683 16.6189C20.9107 17.0402 20.1091 17.4014 19.2744 17.6941C19.7127 18.5036 20.2192 19.2757 20.7918 20C23.1042 19.3358 25.4563 18.3209 27.881 16.648C28.4624 10.9672 26.8878 6.04193 23.7187 1.67497ZM9.34871 13.6343C7.96567 13.6343 6.83149 12.4429 6.83149 10.9922C6.83149 9.54132 7.94144 8.34791 9.34871 8.34791C10.756 8.34791 11.8901 9.53924 11.8659 10.9922C11.8682 12.4429 10.756 13.6343 9.34871 13.6343ZM18.6512 13.6343C17.2682 13.6343 16.1339 12.4429 16.1339 10.9922C16.1339 9.54132 17.2439 8.34791 18.6512 8.34791C20.0584 8.34791 21.1926 9.53924 21.1684 10.9922C21.1684 12.4429 20.0584 13.6343 18.6512 13.6343Z" />
                      </svg>
                      <p className="mx-4 -mt-1">Discord</p>
                    </div>
                  </a>

                  <a
                    href="https://twitter.com/mangomarkets"
                    className="text-base font-medium text-th-fgd-5 transition duration-150 ease-in-out hover:bg-mango-bkg-4"
                  >
                    <div className="flex flex-row">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.78874 23C5.55374 23 2.53817 22.0591 0 20.4356C2.15499 20.5751 5.95807 20.2411 8.32358 17.9848C4.76508 17.8215 3.16026 15.0923 2.95094 13.926C3.25329 14.0426 4.6953 14.1826 5.50934 13.856C1.4159 12.8296 0.787928 9.23732 0.927477 8.14097C1.695 8.67749 2.99745 8.8641 3.50913 8.81744C-0.305207 6.08823 1.06703 1.98276 1.74151 1.09635C4.47882 4.88867 8.5812 7.01857 13.6564 7.13704C13.5607 6.71736 13.5102 6.28042 13.5102 5.83164C13.5102 2.61092 16.1134 0 19.3247 0C21.0025 0 22.5144 0.712754 23.5757 1.85284C24.6969 1.59011 26.3843 0.975068 27.2092 0.443205C26.7934 1.93611 25.4989 3.18149 24.7159 3.64308C24.7224 3.65878 24.7095 3.62731 24.7159 3.64308C25.4037 3.53904 27.2648 3.18137 28 2.68256C27.6364 3.52125 26.264 4.91573 25.1377 5.69642C25.3473 14.9381 18.2765 23 8.78874 23Z"
                          fill="#4F4C67"
                        />
                      </svg>
                      <p className="mx-4 -mt-1">Twitter</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Nav;
