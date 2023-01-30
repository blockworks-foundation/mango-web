import { Tab } from '@headlessui/react'
import MangoBlob from '@/components/MangoBlob'
import BrowserMockup from '@/components/mockups/BrowserMockup'

import { 
    CubeIcon,
    CurrencyYenIcon,
    FaceSmileIcon,
    ArrowSmallRightIcon,
  
    } from '@heroicons/react/20/solid'

const featureOne = [
  {
    name: "Decentralized & Secure.",
    description:
      "Powered by Solana blockchains decentralized trustless network, transactions are sent instantly with little to no cost to the user. ",
  },
]
const featureTwo = [
  {
    name: "Simple & intuitive.",
    description:
      "We keep it light and simple. No complicated features or cognative overload. Pay, mange, discover, all from one hub.",
  },
]
const featureThree = [
  {
    name: "Pay how you're familiar.",
    description:
      "We use USDC as a base token and we seamlessly convert into over 50+ local currencies such US Dollar, Euro and Mexican Peso automatically for you.",
  },
]

function EarnFeaturesTabs() {
  return (
    <>
    <div className="grid grid-cols-2 max-w-7xl mx-auto space-y-0">
        <Tab.Group vertical>
            <div className="">
            <div className="h-[100px] w-[4px] bg-gradient-to-t from-th-fgd-2"></div>

            <Tab.List className={"text-th-fgd-5 flex flex-col max-w-7xl m-auto border-l-4 border-th-fgd-2 border-opacity-5 "}>
                <Tab className="group -ml-1 hover:bg-th-bkg-1 hover:border-l-4 border-th-bkg-3 focus:bg-opacity-0 p-10 hover:px-9 focus:px-9 align-top focus:border-l-4 focus:border-mango-red focus:border-opacity-100 focus:bg-th-bkg-2">
                    <dl>
                    {featureOne.map((feature) => (
                        <div className="text-left" key={feature.name}>
                            <span className="mb-3 flex items-center justify-center h-10 w-10 rounded-lg text-th-fgd-4 bg-th-fgd-1 group-hover:bg-th-fgd-2 group-focus:bg-gradient-to-tr from-mango-green to-mango-orange group-focus:text-white transition-all duration-150 ease-in-out">
                                <CubeIcon className="h-6 w-6 text-th-fgd-3 group-hover:text-mango-yellow" />
                            </span>
                        <div className="inline-flex">
                            <dt className="text-xl font-display text-th-fgd-5">{feature.name}</dt>
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

                <Tab className="group -ml-1 hover:-ml-1 hover:bg-th-bkg-1 hover:border-l-4 border-th-bkg-3 focus:bg-opacity-0 p-10 hover:px-9 focus:px-9 align-top focus:border-l-4 focus:border-mango-yellow focus:border-opacity-100 focus:bg-th-bkg-2">
                    <dl>
                    {featureTwo.map((feature) => (
                        <div className="text-left" key={feature.name}>
                            <span className="mb-3 flex items-center justify-center h-10 w-10 rounded-lg text-th-fgd-4 bg-th-fgd-1 group-hover:bg-th-fgd-2 group-focus:bg-gradient-to-tr from-mango-green to-mango-orange group-focus:text-white transition-all duration-150 ease-in-out">
                                <FaceSmileIcon className="h-6 w-6 text-th-fgd-3 group-hover:text-mango-yellow" />
                            </span>
                        <div className="inline-flex">
                            <dt className="text-xl font-display text-th-fgd-5">{feature.name}</dt>
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

                <Tab className="group -ml-1 hover:bg-th-bkg-1 hover:border-l-4 border-th-bkg-3 focus:bg-opacity-0 p-10 hover:px-9 focus:px-9 align-top focus:border-l-4 focus:border-mango-green focus:border-opacity-100 focus:bg-th-bkg-2">
                    <dl>
                    {featureThree.map((feature) => (
                        <div className="text-left" key={feature.name}>
                            <span className="mb-3 flex items-center justify-center h-10 w-10 rounded-lg text-th-fgd-4 bg-th-fgd-1 group-hover:bg-th-fgd-2 group-focus:bg-gradient-to-tr from-mango-green to-mango-orange group-focus:text-white transition-all duration-150 ease-in-out">
                                <CurrencyYenIcon className="h-6 w-6 text-th-fgd-3 group-hover:text-mango-yellow" />
                            </span>
                        <div className="inline-flex">
                            <dt className="text-xl font-display text-th-fgd-5">{feature.name}</dt>
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

            </div>
            <div className="">
            <Tab.Panels className={"text-white"}>
            <div className="reletive z-0 transform -translate-x-72 -translate-y-[0px]">
                 <MangoBlob />
            </div> 
                    <Tab.Panel>
                        <BrowserMockup src="/assets/images/feature_screen_one.png" />
                     </Tab.Panel>
                     <Tab.Panel>
                        <BrowserMockup src="/assets/images/feature_screen_two.png" />
                    </Tab.Panel>
                     <Tab.Panel>
                        <BrowserMockup src="/assets/images/feature_screen_three.png" />
                    </Tab.Panel>

            </Tab.Panels>

        </div>          
    </Tab.Group>
    <div>    
    <div className="-mt-[181px] h-[200px] w-[4px] ml-0 bg-gradient-to-b from-th-fgd-2"></div>
    </div>
  </div>
</>
  )
}

export default EarnFeaturesTabs;
