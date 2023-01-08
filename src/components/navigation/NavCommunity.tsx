import { Popover, Transition } from '@headlessui/react'
import { Fragment } from 'react'

import { 
    PresentationChartLineIcon,
    BookOpenIcon,
    UserGroupIcon,
    ChatBubbleLeftRightIcon,
    GiftIcon,
  
    } from '@heroicons/react/20/solid'

import NavvyLink from '@/components/navigation/NavvyLink'

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

const NavCommunity = () => {
  return (
    <Popover>
      {({ open }) => (
        <div className="relative">
          <Popover.Button
            className={`group inline-flex items-center rounded-xl p-1 px-2 text-base font-medium text-th-fgd-5 opacity-40 transition duration-150 ease-in-out hover:opacity-100 focus:opacity-100 focus:outline-none`}
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
            appear={true}
            show={open}
            as={Fragment}
            enter="transition ease-in duration-100"
            enterFrom="scale-90"
            enterTo="scale-100"
            leave="transition ease-out duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Popover.Panel
              className={`absolute transform -translate-x-44 translate-y-5 w-700 grid grid-cols-2 overflow-hidden rounded-[18px] border border-white border-opacity-10 shadow-lg`}
            >
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
             </Popover.Panel>
          </Transition>
        </div>
        
      )}
    </Popover>
  )
}

export default NavCommunity;