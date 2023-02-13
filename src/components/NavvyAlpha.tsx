import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
    BuildingLibraryIcon,
    DevicePhoneMobileIcon,
    BanknotesIcon,
    UsersIcon,
    PuzzlePieceIcon,
    PresentationChartLineIcon,
    BookOpenIcon,
    UserGroupIcon,
    ChatBubbleLeftRightIcon,
    GiftIcon,
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/solid'
import ButtonTwo from '@/components/ButtonTwo'
import QrCodeDrop from '@/components/QrCodeDrop'
import StyleGuideDrop from '@/components/StyleGuideDrop'
import Image from 'next/image';
// import CapIcon from '@/components/CapIcon'
import CapIconGold from '@/components/CapIconGold'
import Logo from '@/components/Logo'
import DiscordIcon from '@/components/Discord'
import TwitterIcon from '@/components/Twitter'
// import ThemeSwitcher from './ThemeSwitcher'


const exlpore = [
  {
    name: 'Markets',
    description: 'Access margin and leverage to trade permissionless spot and derivitive markets.',
    href: '/markets',
    icon: BuildingLibraryIcon,
  },
  {
    name: 'Pay',
    description: 'Move money globally without borders. Pay, send, swap, receive, and earn all from your device.',
    href: '/pay',
    icon: DevicePhoneMobileIcon,
  },
  {
    name: 'Earn',
    description: "Automatically earn variable yield right into your mango account, all powered by decentralized money markets.",
    href: '/earn',
    icon: BanknotesIcon,
  },
]
const callsToAction = [
  { name: 'Liquidator Program', href: 'https://github.com/blockworks-foundation/mango-explorer/blob/main/docs/LiquidatorQuickstart.md', icon: UsersIcon },
  { name: 'Market Maker Program', href: 'https://github.com/blockworks-foundation/mango-explorer/blob/main/docs/MarketmakingIntroduction.md', icon: PuzzlePieceIcon },
]
const community = [
    {
      name: 'Exlpore the docs',
      description: 'Learn about the protocol on a deaper level and start composing and integrating today.',
      href: 'https://docs.mango.markets/',
      icon: BookOpenIcon,
    },
    {
      name: 'Protocol Stats',
      description: 'Total Value Deposited, Current rates for borrowing/lending, and other valuable stats.',
      href: 'https://alpha.mango.markets/stats',
      icon: PresentationChartLineIcon,
    },
    {
      name: 'Mango DAO',
      description: "Mango DAO is building a distributed way to organize like minded builders, have a stake in the protocol.",
      href: '/dao',
      icon: UserGroupIcon,
    },
    {
        name: 'Mango Forum',
        description: "Discuss proposals, partnerships, and improvements to Mango, all in one place.",
        href: 'https://forum.mango.markets/',
        icon: ChatBubbleLeftRightIcon,
      },    
  ]
  const callsToActionTwo = [
    { name: 'Redeem your MNGO', href: 'https://token.mango.markets/', icon: GiftIcon },
    { name: 'Mango Market Caps', href: 'https://initialcapoffering.com/', icon: CapIconGold },
  ]
  const support = [
    {
        name: 'Discord',
        description: 'Learn about the protocol on a deaper level and start composing and integrating today.',
        href: 'https://discord.gg/2uwjsBc5yw',
        icon: DiscordIcon,
      },
      {
        name: 'Twitter',
        description: 'Learn about the protocol on a deaper level and start composing and integrating today.',
        href: 'https://twitter.com/mangomarkets',
        icon: TwitterIcon,
    },
]

const blogPosts = [
  {
    id: 1,
    name: 'Setting up a wallet!',
    href: '#',
    preview: "It's easy to get started with crypto! learn how to set up a wallet to become a crypto native.",
    imageUrl:
      '/assets/images/walletpost.png',
  },
]

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

const NavvyAlpha = () => {
  return (
    <>
          <div className="z-40 h-2 w-screen fixed bg-gradient-to-r from-mango-red via-mango-yellow to-mango-green"></div>

     <Popover className="w-screen fixed backdrop-blur-xl bg-opacity-50 z-50 mt-2">
      <div className="pointer-events-none absolute inset-0 z-30 shadow" aria-hidden="true" />
      <div className="relative z-20">
        <div className="mx-auto flex pt-8 pb-2 px-10 max-w-7xl justify-between ">
            <StyleGuideDrop />
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-xl bg-white bg-opacity-10 p-2 text-th-fgd-3 hover:bg-opacity-20 hover:text-mango-yellow transition duration-150 easi-in-out">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <div className="hidden md:flex  items-center justify-center">

            <Popover.Group as="nav" className="flex space-x-1 mt-0 mr-40">

                  {/* 
                 Explore
                  */}
              <Popover>
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? 'text-th-fgd-5' : 'text-th-fgd-3',
                        'group inline-flex items-center rounded-xl p-1 px-2 hover:text-th-fgd-5 text-sm font-medium transition duration-150 ease-in-out hover:opacity-100 focus:opacity-100 focus:outline-none'
                      )}
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
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-150"
                      enterFrom="opacity-0 -translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 -translate-y-1"
                    >
                      <Popover.Panel className="mt-5 absolute inset-x-0 top-full z-40 hidden transform bg-th-bkg-2 shadow-2xl md:block">
                        <div className="mx-auto grid max-w-7xl gap-y-6 px-4 py-6 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:py-8 lg:grid-cols-4 lg:px-8 lg:py-12 xl:py-8">
                          {exlpore.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="group -m-3 flex flex-col justify-between rounded-2xl p-4 hover:bg-th-fgd-1 transition-all duration-100 ease-in-out"
                            >
                              <div className="flex md:h-full lg:flex-col">
                                <div className="flex-shrink-0">
                                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-th-fgd-1 group-hover:bg-th-fgd-2 text-white sm:h-12 sm:w-12">
                                    <item.icon className="h-6 w-6 text-th-fgd-3 group-hover:text-mango-yellow" aria-hidden="true" />
                                  </span>
                                </div>
                                <div className="ml-4 md:flex md:flex-1 md:flex-col md:justify-between lg:ml-0 lg:mt-4">
                                  <div>
                                    <p className="text-base font-body font-bold text-th-fgd-4 group-hover:text-th-fgd-5">{item.name}</p>
                                    <p className="mt-1 text-sm text-th-fgd-3 group-hover:text-th-fgd-4">{item.description}</p>
                                  </div>

                                </div>
                              </div>
                            </a>

                          ))}

                                <div className="group flex md:h-full lg:flex-col">

                                    <div className=" p-2 w-[179px] bg-white bg-opacity-10 group-hover:bg-opacity-20 group-hover:saturate-[1.25] rounded-xl m-2 transition duration-150 ease-in-out">

                                        <Image
                                        src="/assets/images/qr-code-test.svg"
                                        alt="Github"
                                        width={160}
                                        height={160}
                                        loading="lazy"
                                        />

                                        </div>
                                     </div>
                        </div>


                        <div className="bg-th-bkg-3">
                          <div className="mx-auto max-w-7xl space-y-6 px-4 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-6 lg:px-8">
                            {callsToAction.map((item) => (
                              <div key={item.name} className="flow-root">
                                <a
                                  href={item.href}
                                  className="group -m-3 flex items-center rounded-xl p-3 text-base font-medium text-th-fgd-3 hover:text-th-fgd-4 hover:bg-th-fgd-1"
                                >
                                  <item.icon className="h-6 w-6 flex-shrink-0 text-th-fgd-3 group-hover:text-mango-yellow" aria-hidden="true" />
                                  <span className="ml-3">{item.name}</span>
                                </a>
                              </div>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
                  {/* 
                 Community
                  */}
              <Popover>
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? 'text-th-fgd-5' : 'text-th-fgd-3',
                        'group inline-flex items-center rounded-xl p-1 px-2 hover:text-th-fgd-5 text-sm font-medium transition duration-150 ease-in-out hover:opacity-100 focus:opacity-100 focus:outline-none'
                      )}
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

                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-150"
                      enterFrom="opacity-0 -translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 -translate-y-1"
                    >
                      <Popover.Panel className="mt-5 absolute inset-x-0 top-full z-40 hidden transform bg-th-bkg-2 shadow-2xl md:block">
                      <div className="mx-auto grid max-w-7xl gap-y-6 px-4 py-6 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:py-8 lg:grid-cols-4 lg:px-8 lg:py-12 xl:py-8">
                          {community.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="group -m-3 flex flex-col justify-between rounded-2xl p-4 hover:bg-th-fgd-1 transition-all duration-100 ease-in-out"
                            >
                              <div className="flex md:h-full lg:flex-col">
                                <div className="flex-shrink-0">
                                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-th-fgd-1 group-hover:bg-th-fgd-2 text-white sm:h-12 sm:w-12">
                                    <item.icon className="h-6 w-6 text-th-fgd-3 group-hover:text-mango-yellow" aria-hidden="true" />
                                  </span>
                                </div>
                                <div className="ml-4 md:flex md:flex-1 md:flex-col md:justify-between lg:ml-0 lg:mt-4">
                                  <div>
                                  <p className="text-base font-body font-bold text-th-fgd-4 group-hover:text-th-fgd-5">{item.name}</p>
                                    <p className="mt-1 text-sm text-th-fgd-3 group-hover:text-th-fgd-4">{item.description}</p>
                                  </div>

                                </div>
                              </div>
                            </a>
                          ))}
                        </div>
                        <div className="bg-th-bkg-3">
                          <div className="mx-auto max-w-7xl space-y-6 px-4 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-6 lg:px-8">
                            {callsToActionTwo.map((item) => (
                              <div key={item.name} className="flow-root">
                                <a
                                  href={item.href}
                                  className="group -m-3 flex items-center rounded-xl p-3 text-base font-medium text-th-fgd-3 hover:text-th-fgd-4 hover:bg-th-fgd-1"
                                >
                                  <item.icon className="h-6 w-6 flex-shrink-0 text-th-fgd-3 group-hover:text-mango-yellow" aria-hidden="true" />
                                  <span className="ml-3">{item.name}</span>
                                </a>
                              </div>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
                  {/* 
                 Support
                  */}
              <Popover>
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? 'text-th-fgd-5' : 'text-th-fgd-3',
                        'group inline-flex items-center rounded-xl p-1 px-2 hover:text-th-fgd-5 text-sm font-medium transition duration-150 ease-in-out hover:opacity-100 focus:opacity-100 focus:outline-none'
                      )}
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
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-150"
                      enterFrom="opacity-0 -translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 -translate-y-1"
                    >
                      <Popover.Panel className="absolute inset-x-0 top-full z-10 hidden transform shadow-lg md:block mt-5">
                        <div className="absolute inset-0 flex">
                          <div className="w-1/2 bg-th-bkg-2" />
                          <div className="w-1/2 bg-th-bkg-2" />
                        </div>
                        <div className="relative mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
                          <nav className="grid gap-y-10 bg-th-bkg-2 px-4 py-8 sm:grid-cols-2 sm:gap-x-8 sm:py-12 sm:px-6 lg:px-8 xl:pr-8">
                          {support.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="group -m-3 flex flex-col justify-between rounded-2xl p-4 hover:bg-th-fgd-1 transition-all duration-100 ease-in-out"
                            >
                              <div className="flex md:h-full lg:flex-col">
                                <div className="flex-shrink-0">
                                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-th-fgd-1 group-hover:bg-th-fgd-2 text-white sm:h-12 sm:w-12">
                                    <item.icon  aria-hidden="true" />
                                  </span>
                                </div>
                                <div className="ml-4 md:flex md:flex-1 md:flex-col md:justify-between lg:ml-0 lg:mt-4">
                                  <div>
                                  <p className="text-base font-body font-bold text-th-fgd-4 group-hover:text-th-fgd-5">{item.name}</p>
                                    <p className="mt-1 text-sm text-th-fgd-3 group-hover:text-th-fgd-4">{item.description}</p>
                                  </div>

                                </div>
                              </div>
                            </a>
                          ))}


                          </nav>
                          <div className="bg-th-bkg-3 px-4 py-8 sm:py-12 sm:px-6 lg:px-8 xl:pl-12">
                            <div>
                              <h3 className="text-base font-medium text-th-fgd-3">Mango Guides</h3>
                              <ul role="list" className="mt-6 space-y-6">
                                {blogPosts.map((post) => (
                                  <li key={post.id} className="flow-root">
                                    <a href={post.href} className="-m-3 flex rounded-xl p-3 hover:bg-th-fgd-1 hover:rounded-2xl">
                                      <div className="hidden flex-shrink-0 sm:block">
                                        <img className="h-20 w-32 rounded-xl object-cover" src={post.imageUrl} alt="" />
                                      </div>
                                      <div className="w-0 flex-1 sm:ml-8">
                                        <h4 className="truncate text-base font-medium text-th-fgd-4">{post.name}</h4>
                                        <p className="mt-1 text-sm text-th-fgd-3">{post.preview}</p>
                                      </div>
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="mt-6 text-sm font-medium">
                              <a href="#" className="text-mango-yellow hover:text-mango-orange">
                                View all posts
                                <span aria-hidden="true"> &rarr;</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>

            </Popover.Group>

             <div className="-mt-2">
                  <ButtonTwo>
                    <a href="http://alpha.mango.markets"
                      >
                      Discover 🥭
                    </a>
                  </ButtonTwo>
              </div>
              <div className="z-30 bg-th-fgd-2 rounded-full ml-6 shadow-lg -mt-1">
                  <QrCodeDrop />
                  {/* 
                  <ThemeSwitcher /> 
                  */}
              </div>
          </div>
          
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 z-30 origin-top-right transform transition md:hidden"
        >
          <div className="rounded-xl bg-th-bkg-2 shadow-lg">
            <div className="px-5 pt-5 pb-6 sm:pb-8">
              <div className="flex items-center justify-between">
                <div>
                  <Logo />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-xl bg-white bg-opacity-10 p-2 text-th-fgd-3 hover:bg-opacity-20 hover:text-mango-yellow transition duration-150 ease-in-out">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6 sm:mt-8">
                <nav>
                  <div className="grid gap-7 sm:grid-cols-2 sm:gap-y-8 sm:gap-x-4">
                    {exlpore.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-center rounded-xl p-3 hover:bg-mango-bkg-3"
                      >
                        <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-th-fgd-1 group-hover:bg-th-fgd-2 text-white sm:h-12 sm:w-12">
                          <item.icon className="h-6 w-6 flex-shrink-0 text-th-fgd-3 group-hover:text-mango-yellow" aria-hidden="true" />
                        </div>
                        <div className="ml-4 text-base font-medium text-th-fgd-4">{item.name}</div>
                      </a>
                    ))}
                  </div>
                  <div className="mt-8 text-base">
                    <a href="#" className="font-medium text-mango-yellow">
                      Learn about the DAO
                      <span aria-hidden="true"> &rarr;</span>
                    </a>
                  </div>
                </nav>
              </div>
            </div>
            <div className="h-[2px] bg-gradient-to-r from-white/0 via-th-fgd-2 to-white/0 "></div>

            <div className="py-3 px-5">
              <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-row">
                      <svg
                        className="mt-[6px] mr-3"
                        width="18"
                        height="18"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M23.7187 1.67497C21.9061 0.89249 19.9681 0.323786 17.9421 0C17.6932 0.41511 17.4025 0.973432 17.2021 1.4176C15.0482 1.11872 12.9142 1.11872 10.8 1.4176C10.5996 0.973432 10.3023 0.41511 10.0513 0C8.02293 0.323786 6.08271 0.894565 4.27023 1.67912C0.614418 6.77668 -0.376613 11.7477 0.118903 16.648C2.54363 18.3188 4.89347 19.3337 7.20367 19.9979C7.77407 19.2736 8.2828 18.5036 8.72106 17.692C7.88639 17.3993 7.08696 17.0382 6.33156 16.6189C6.53197 16.482 6.72798 16.3387 6.91738 16.1914C11.5246 18.1797 16.5304 18.1797 21.0826 16.1914C21.2741 16.3387 21.4701 16.482 21.6683 16.6189C20.9107 17.0402 20.1091 17.4014 19.2744 17.6941C19.7127 18.5036 20.2192 19.2757 20.7918 20C23.1042 19.3358 25.4563 18.3209 27.881 16.648C28.4624 10.9672 26.8878 6.04193 23.7187 1.67497ZM9.34871 13.6343C7.96567 13.6343 6.83149 12.4429 6.83149 10.9922C6.83149 9.54132 7.94144 8.34791 9.34871 8.34791C10.756 8.34791 11.8901 9.53924 11.8659 10.9922C11.8682 12.4429 10.756 13.6343 9.34871 13.6343ZM18.6512 13.6343C17.2682 13.6343 16.1339 12.4429 16.1339 10.9922C16.1339 9.54132 17.2439 8.34791 18.6512 8.34791C20.0584 8.34791 21.1926 9.53924 21.1684 10.9922C21.1684 12.4429 20.0584 13.6343 18.6512 13.6343Z"
                          fill="#4F4C67"

                        />
                      </svg>
                <a href="#" className="rounded-xl text-base font-medium text-th-fgd-4 hover:text-mango-yellow">
                  Discord
                </a>
                </div>
                <div className="flex flex-row mb-3">
                      <svg
                        className="mt-[6px] mr-3"
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
                <a href="#" className="rounded-xl text-base font-medium text-th-fgd-4 hover:text-mango-yellow">
                  Twitter
                </a>
                </div>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
      <div className="h-[4px] bg-gradient-to-r from-th-fgd-2 transform mt-4"></div>

    </Popover>
    
    </>

  )
}

export default NavvyAlpha;