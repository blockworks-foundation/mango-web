import { Popover, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import GradientText from '@/components/GradientText'

import { 
    GiftIcon,
  
    } from '@heroicons/react/20/solid'

import NavvyLink from '@/components/navigation/NavvyLink'

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
  

const NavSupport = () => {
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
              className={`absolute transform -translate-x-20 translate-y-5 w-96 grid grid-cols-1 overflow-hidden rounded-[18px] border border-white border-opacity-10 shadow-lg`}
            >
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
             </Popover.Panel>
          </Transition>
        </div>
        
      )}
    </Popover>
  )
}

export default NavSupport;