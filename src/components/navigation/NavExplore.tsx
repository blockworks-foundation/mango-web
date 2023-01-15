import { Popover, Transition } from '@headlessui/react'
import { Fragment } from 'react'

import { 
    BuildingLibraryIcon,
    DevicePhoneMobileIcon,
    BanknotesIcon,
    UsersIcon,
    PuzzlePieceIcon,
    AcademicCapIcon,
  
    } from '@heroicons/react/20/solid'

import NavvyLink from '@/components/navigation/NavvyLink'

// Explore Links...
const navLinkOne: any = [
    {
      url:'/markets',
      name: 'Markets',
      description:
        "Trade spot margin or permisionless perpectual futures on up to 20x leverage.",
    },
  ];
  const navLinkTwo: any = [
    {
      url:'/redacted',
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
const NavExplore = () => {
  return (
    <Popover>
      {({ open }) => (
        <div className="relative">
          <Popover.Button
            className={`group inline-flex items-center rounded-xl p-1 px-2 text-sm font-medium text-th-fgd-5 opacity-40 transition duration-150 ease-in-out hover:opacity-100 focus:opacity-100 focus:outline-none`}
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
            appear={true}
            show={open}
            as={Fragment}
            enter="transition ease-in-out duration-150"
            enterFrom="-translate-y-3"
            enterTo=""
            leave="transition ease-out duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            
            <Popover.Panel
              className={`absolute transform -translate-x-44 translate-y-4`}
            >  
                      <div className="overflow-hidden w-700 grid grid-cols-2 rounded-[19px] border border-white border-opacity-10 shadow-lg ">

                      <div className=" space-y-3  p-4 px-5 bg-th-bkg-4 rounded-l-[18px]">
                        
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

                      <div className=" space-y-3 bg-th-bkg-3 p-4 px-5 rounded-r-[18px]">
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

             </Popover.Panel>
          </Transition>
        </div>
        
      )}
    </Popover>
  )
}

export default NavExplore;