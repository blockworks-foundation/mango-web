import { Tab } from '@headlessui/react'
import MangoBlob from '@/components/MangoBlob'
import IphoneMockup from '@/components/mockups/IphoneMockup'

import { 
    CubeIcon,
    CurrencyYenIcon,
    FaceSmileIcon,
    ArrowSmallRightIcon,
  
    } from '@heroicons/react/20/solid'

const featureOne = [
    {
        name: "Pay how you're familiar.",
        description:
          "You can pay anyone at little to no cost unlike traditional remittance services, we use USDC as a base token and we seamlessly convert into over 50+ local currencies such US Dollar, Euro and Mexican Peso automatically for you.",
      },

]
const featureTwo = [
  {
    name: "Secure, simple, & intuitive",
    description:
      "We keep it light. Mange your digital money and assets from one mobile hub. Payments and integrated non-custodial wallets are powered by Solana blockchain network. Your keys, you're in control.",
  },
]
const featureThree = [
    {
        name: "Decentralized money markets built in.",
        description:
          "Powered by Mango V4, Mango Pay users unlock passive yield in the form an Earn account. Enjoy variable yield generated from auto-lending in Mango Markets.",
      },
]

function PhoneSectionTab() {
  return (
    <>
    <div className="grid grid-cols-2 max-w-7xl mx-auto space-y-0">
        <Tab.Group vertical>
            
            <div className="">

            <Tab.List className={"text-th-fgd-5 flex flex-col max-w-7xl m-auto border-l-4 border-th-fgd-2 border-opacity-5 "}>
                
                <Tab className="group -ml-1 hover:bg-th-bkg-1 hover:border-l-4 border-th-bkg-3 focus:bg-opacity-0 p-10 hover:px-9 focus:px-9 align-top focus:border-l-4 focus:border-mango-red focus:border-opacity-100 focus:bg-th-bkg-2">
                    <dl>
                    {featureOne.map((feature) => (
                        <div className="text-left" key={feature.name}>
                    <span className="mb-3 flex items-center justify-center h-10 w-10 rounded-lg text-th-fgd-4 bg-th-fgd-1 group-hover:bg-th-fgd-2 group-focus:bg-gradient-to-tr from-mango-green to-mango-orange transition-all duration-150 ease-in-out">
                                 <CurrencyYenIcon className="h-6 w-6 text-th-fgd-3 group-hover:text-mango-yellow group-focus:text-white" />
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
                    <span className="mb-3 flex items-center justify-center h-10 w-10 rounded-lg text-th-fgd-4 bg-th-fgd-1 group-hover:bg-th-fgd-2 group-focus:bg-gradient-to-tr from-mango-green to-mango-orange transition-all duration-150 ease-in-out">
                                <FaceSmileIcon className="h-6 w-6 text-th-fgd-3 group-hover:text-mango-yellow group-focus:text-white" />
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
                            <span className="mb-3 flex items-center justify-center h-10 w-10 rounded-lg text-th-fgd-4 bg-th-fgd-1 group-hover:bg-th-fgd-2 group-focus:bg-gradient-to-tr from-mango-green to-mango-orange transition-all duration-150 ease-in-out">
                                 <CubeIcon className="h-6 w-6 text-th-fgd-3 group-hover:text-mango-yellow group-focus:text-white" />
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
                        <IphoneMockup src="/assets/images/ui_mobil_01.svg" />
                </Tab.Panel>
                <Tab.Panel>
                         <IphoneMockup src="/assets/images/ui_mobil_02.svg" />

                </Tab.Panel>
                <Tab.Panel>
                        <IphoneMockup src="/assets/images/ui_mobil_03.svg" />
                </Tab.Panel>
            </Tab.Panels>

        </div>          
    </Tab.Group>
    <div>    
    <div className=" h-[200px] w-[4px] ml-0 bg-gradient-to-b from-th-fgd-2"></div>
    </div>
  </div>
</>
  )
}

export default PhoneSectionTab;
