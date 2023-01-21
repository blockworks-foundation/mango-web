import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
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
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/solid'
import ButtonTwo from '@/components/ButtonTwo'
import QrCodeDrop from '@/components/QrCodeDrop'
import StyleGuideDrop from '@/components/StyleGuideDrop'
import Image from 'next/image';
// import ThemeSwitcher from './ThemeSwitcher'


const exlpore = [
  {
    name: 'Markets',
    description: 'Access margin and leverage to trade permissionless spot and derivitive markets.',
    href: '#',
    icon: BuildingLibraryIcon,
  },
  {
    name: 'Earn',
    description: "Automatically earn variable yield right into your mango account, all powered by decentralized money markets.",
    href: '#',
    icon: BanknotesIcon,
  },
  {
    name: 'Redacted',
    description: 'Move money globally without borders. Pay, send, swap, receive, and earn all from your device.',
    href: '#',
    icon: DevicePhoneMobileIcon,
  },
]
const callsToAction = [
  { name: 'Liquidator Program', href: '#', icon: UsersIcon },
  { name: 'Market Maker Program', href: '#', icon: PuzzlePieceIcon },
]
const community = [
    {
      name: 'Exlpore the docs',
      description: 'Learn about the protocol on a deaper level and start composing and integrating today.',
      href: '#',
      icon: BookOpenIcon,
    },
    {
      name: 'Protocol Stats',
      description: 'Total Value Deposited, Current rates for borrowing/lending, and other valuable stats.',
      href: '#',
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
        href: '/dao',
        icon: ChatBubbleLeftRightIcon,
      },    
  ]
  const callsToActionTwo = [
    { name: 'Redeem your MNGO', href: '#', icon: GiftIcon },
    { name: 'Mango Market Caps', href: '#', icon: AcademicCapIcon },
  ]
const support = [
    {
        name: 'Discord',
        description: 'Learn about the protocol on a deaper level and start composing and integrating today.',
        href: '#',
        icon: GiftIcon,
      },
      {
        name: 'Twitter',
        description: 'Learn about the protocol on a deaper level and start composing and integrating today.',
        href: '#',
        icon: GiftIcon,
    },
]

const blogPosts = [
  {
    id: 1,
    name: 'Boost your conversion rate',
    href: '#',
    preview: 'Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.',
    imageUrl:
      'https://images.unsplash.com/photo-1558478551-1a378f63328e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2849&q=80',
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
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
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
                                    <item.icon className="h-6 w-6 group-hover:text-mango-yellow" aria-hidden="true" />
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

                                    <div className="flex md:h-full lg:flex-col">

                                    <div className="bg-white p-2 rounded-xl w-[179px]">

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
                                  className="group -m-3 flex items-center rounded-md p-3 text-base font-medium text-th-fgd-3 hover:text-th-fgd-4 hover:bg-th-fgd-1"
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
                                    <item.icon className="h-6 w-6 group-hover:text-mango-yellow" aria-hidden="true" />
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
                                  className="group -m-3 flex items-center rounded-md p-3 text-base font-medium text-th-fgd-3 hover:text-th-fgd-4 hover:bg-th-fgd-1"
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
                                    <item.icon className="h-6 w-6 group-hover:text-mango-yellow" aria-hidden="true" />
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
                              <h3 className="text-base font-medium text-th-fgd-3">From the blog</h3>
                              <ul role="list" className="mt-6 space-y-6">
                                {blogPosts.map((post) => (
                                  <li key={post.id} className="flow-root">
                                    <a href={post.href} className="-m-3 flex rounded-lg p-3 hover:bg-th-fgd-1">
                                      <div className="hidden flex-shrink-0 sm:block">
                                        <img className="h-20 w-32 rounded-md object-cover" src={post.imageUrl} alt="" />
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

            <div className="">
                  <ButtonTwo>
                      Discover 🥭
                  </ButtonTwo>
              </div>
              <div className="z-30 bg-th-fgd-2 mt-2 rounded-full ml-6 shadow-lg">
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
          className="absolute inset-x-0 top-0 z-30 origin-top-right transform p-2 transition md:hidden"
        >
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6 sm:pb-8">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Your Company"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
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
                        className="-m-3 flex items-center rounded-lg p-3 hover:bg-gray-50"
                      >
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                          <item.icon className="h-6 w-6" aria-hidden="true" />
                        </div>
                        <div className="ml-4 text-base font-medium text-gray-900">{item.name}</div>
                      </a>
                    ))}
                  </div>
                  <div className="mt-8 text-base">
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                      View all products
                      <span aria-hidden="true"> &rarr;</span>
                    </a>
                  </div>
                </nav>
              </div>
            </div>
            <div className="py-6 px-5">
              <div className="grid grid-cols-2 gap-4">
                <a href="#" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                  Pricing
                </a>
                <a href="#" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                  Docs
                </a>
                <a href="#" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                  Company
                </a>
                <a href="#" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                  Resources
                </a>
                <a href="#" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                  Blog
                </a>
                <a href="#" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                  Contact Sales
                </a>
              </div>
              <div className="mt-6">
                <a
                  href="#"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                >
                  Sign up
                </a>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Existing customer?{' '}
                  <a href="#" className="text-indigo-600 hover:text-indigo-500">
                    Sign in
                  </a>
                </p>
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