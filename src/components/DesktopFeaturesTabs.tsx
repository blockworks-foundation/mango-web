import { Tab } from '@headlessui/react'
import BrowserMockup from './mockups/BrowserMockup'

import { 
  ArrowSmallRightIcon,
  WindowIcon,
  TableCellsIcon,
  SquaresPlusIcon,

  } from '@heroicons/react/20/solid'
//import MangoAbstract from './MangoAbstract'
// import BrowserMockupAbstract from './mockups/BrowserMockupAbstract'

const featureOne = [
    {
      name: 'The Defi markets powertool.',
      description:
        'Swap, trade, borrow, lend, all in one place. Mango brings the power to you in one powerful interface.  ',
    },
]
const featureTwo = [
    {
      name: 'Permisionless derivitives.',
      description:
        'Delta neutral, longing the bottom, or selling the rip. Do it non-custodial, transparent, and all on-chain. ',
    },
]
const featureThree = [
    {
      name: 'Margin on swaps.',
      description:
        "A power tool for the defi native trader, access margin on any spot markets integrated into jupiter, orca, and openbook.",
    },
]

function DesktopFeaturesTabs() {

  return (
    <>
    <Tab.Group manual>
      <div className="border-t-4 border-th-fgd-2 border-opacity-5 w-screen">

      </div>
      <Tab.List className={"text-white grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 max-w-7xl m-auto"}>
          <Tab className="group hover:bg-th-bkg-1 hover:border-t-4 border-th-bkg-3 focus:bg-opacity-0 -mt-1 align-top focus:border-t-4 focus:border-mango-red focus:border-opacity-100 focus:bg-th-bkg-2 px-9 py-8 hover:py-8 focus:py-8">
            <dl>
              {featureOne.map((feature) => (
                <div className="text-left" key={feature.name}>
                    <span className="mb-3 flex items-center justify-center h-10 w-10 rounded-lg text-th-fgd-4 bg-th-fgd-1 group-hover:bg-th-fgd-2 group-focus:bg-gradient-to-tr from-mango-green to-mango-orange group-focus:text-white transition-all duration-150 ease-in-out">
                        <WindowIcon className="h-6 w-6" />
                    </span>
                  <div className="inline-flex">
                    <dt className="text-th-fgd-4 group-hover:text-mango-yellow font-display tracking-tighter text-xl mb-2 transition duration-150 ease-in-out">{feature.name}</dt>
                    <span>
                      <ArrowSmallRightIcon
                        className="mt-[1px] w-8 h-8 group-hover:opacity-100 text-mango-yellow opacity-0 transform -translate-x-6 group-hover:translate-x-0 transition duration-150 ease-in"
                      />
                    </span>
                  </div>
                  <dd className="mt-2 text-base text-th-fgd-4 opacity-40 transition duration-75 ease-in group-hover:opacity-80">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </Tab>
          <Tab className="group hover:bg-th-bkg-1 hover:border-t-4 border-th-bkg-3 focus:bg-opacity-0 -mt-1 align-top focus:border-t-4 focus:border-mango-yellow focus:border-opacity-100 focus:bg-th-bkg-2 p-9 hover:py-8 focus:py-8">
            <dl>
              {featureTwo.map((feature) => (
                <div className="text-left" key={feature.name}>
                    <span className="mb-3 flex items-center justify-center h-10 w-10 rounded-lg text-th-fgd-4 bg-th-fgd-1 group-hover:bg-th-fgd-2 group-focus:bg-gradient-to-tr from-mango-green to-mango-orange group-focus:text-white transition-all duration-150 ease-in-out">
                      <TableCellsIcon className="h-6 w-6" />
                    </span>
                  <div className="inline-flex">
                    <dt className="text-th-fgd-4 group-hover:text-mango-yellow font-display tracking-tighter text-xl mb-2 transition duration-150 ease-in-out">{feature.name}</dt>
                    <span>
                      <ArrowSmallRightIcon
                        className="mt-[1px] w-8 h-8 group-hover:opacity-100 text-mango-yellow opacity-0 transform -translate-x-6 group-hover:translate-x-0 transition duration-150 ease-in"
                      />
                    </span>
                  </div>
                  <dd className="mt-2 text-base text-th-fgd-4 opacity-40 transition duration-75 ease-in group-hover:opacity-80">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </Tab>
          <Tab className="group hover:bg-th-bkg-1 hover:border-t-4 border-th-bkg-3 focus:bg-opacity-0 -mt-1 align-top focus:border-t-4 focus:border-mango-green focus:border-opacity-100 focus:bg-th-bkg-2 p-9 hover:py-8 focus:py-8">
            <dl>
              {featureThree.map((feature) => (
                <div className="text-left" key={feature.name}>
                    <span className="mb-3 flex items-center justify-center h-10 w-10 rounded-lg text-th-fgd-4 bg-th-fgd-1 group-hover:bg-th-fgd-2 group-focus:bg-gradient-to-tr from-mango-green to-mango-orange group-focus:text-white transition-all duration-150 ease-in-out">
                       <SquaresPlusIcon className="h-6 w-6" />
                    </span>
                  <div className="inline-flex">
                    <dt className="text-th-fgd-4 group-hover:text-mango-yellow font-display tracking-tighter text-xl mb-2 transition duration-150 ease-in-out">{feature.name}</dt>
                    <span>
                      <ArrowSmallRightIcon
                        className="mt-[1px] w-8 h-8 group-hover:opacity-100 text-mango-yellow opacity-0 transform -translate-x-6 group-hover:translate-x-0 transition duration-150 ease-in"
                      />
                    </span>
                  </div>
                  <dd className="mt-2 text-base text-th-fgd-4 opacity-40 transition duration-75 ease-in group-hover:opacity-80">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </Tab>
      </Tab.List>

      <Tab.Panels className={"max-w-7xl mx-auto"}>
      <Tab.Panel>
      <BrowserMockup src="/assets/images/UI_Accounts.svg" />
        </Tab.Panel>
        <Tab.Panel>
           <BrowserMockup src="/assets/images/UI_Trade.svg" />
        </Tab.Panel>
        <Tab.Panel>
           <BrowserMockup src="/assets/images/UI_Swap.svg" />
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
    </>
  )
}

export default DesktopFeaturesTabs;
