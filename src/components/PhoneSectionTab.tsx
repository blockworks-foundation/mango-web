import { Tab } from '@headlessui/react'
import MangoBlob from '@/components/MangoBlob'
import IphoneMockup from '@/components/mockups/IphoneMockup'

import { 
    FireIcon,
    ArrowSmallRightIcon,
  
    } from '@heroicons/react/20/solid'

const featureOne = [
  {
    name: 'Pay anyone in your contacts.',
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
  },
]
const featureTwo = [
  {
    name: 'Feature',
    description:
      'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis. Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
  },
]
const featureThree = [
  {
    name: 'Auto-Lending through Earn.',
    description:
      'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
  },
]

function PhoneSectionTab() {
  return (
    <div className="grid grid-cols-2 max-w-7xl mx-auto py-40 space-y-0 mt-40">
        <Tab.Group vertical>
            <div className="">
            <Tab.List className={"text-th-fgd-5 flex flex-col max-w-xl m-auto border-l-4 border-th-bkg-2 border-opacity-5 "}>
                <Tab className="group -ml-1 hover:bg-th-bkg-1 hover:border-l-4 border-th-bkg-3 focus:bg-opacity-0 p-8 align-top focus:border-l-4 focus:border-mango-red focus:border-opacity-100">
                    <dl>
                    {featureOne.map((feature) => (
                        <div className="text-left" key={feature.name}>
                            <span className="mb-3 flex items-center justify-center h-10 w-10 rounded-lg text-th-fgd-4 bg-th-fgd-3 group-hover:bg-th-fgd-2 group-focus:bg-gradient-to-tr from-mango-green to-mango-orange group-focus:text-white transition-all duration-150 ease-in-out">
                                <FireIcon className="h-6 w-6" />
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

                <Tab className="group -ml-1 hover:-ml-1 hover:bg-th-bkg-1 hover:border-l-4 border-th-bkg-3 focus:bg-opacity-0 p-8 align-top focus:border-l-4 focus:border-mango-yellow focus:border-opacity-100">
                    <dl>
                    {featureTwo.map((feature) => (
                        <div className="text-left" key={feature.name}>
                            <span className="mb-3 flex items-center justify-center h-10 w-10 rounded-lg text-th-fgd-4 bg-th-fgd-3 group-hover:bg-th-fgd-2 group-focus:bg-gradient-to-tr from-mango-green to-mango-orange group-focus:text-white transition-all duration-150 ease-in-out">
                                <FireIcon className="h-6 w-6" />
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

                <Tab className="group -ml-1 hover:bg-th-bkg-1 hover:border-l-4 border-th-bkg-3 focus:bg-opacity-0 p-8 align-top focus:border-l-4 focus:border-mango-green focus:border-opacity-100">
                    <dl>
                    {featureThree.map((feature) => (
                        <div className="text-left" key={feature.name}>
                            <span className="mb-3 flex items-center justify-center h-10 w-10 rounded-lg text-th-fgd-4 bg-th-fgd-3 group-hover:bg-th-fgd-2 group-focus:bg-gradient-to-tr from-mango-green to-mango-orange group-focus:text-white transition-all duration-150 ease-in-out">
                                <FireIcon className="h-6 w-6" />
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
            <div className="absolute z-0 transform -translate-x-72 translate-y-36">
                            <MangoBlob />
                        </div> 
                <Tab.Panel>
                        <IphoneMockup src="/assets/images/iphone-1.jpg" />
                </Tab.Panel>
                <Tab.Panel>
                         <IphoneMockup src="/assets/images/iphone-2.jpg" />

                </Tab.Panel>
                <Tab.Panel>
                        <IphoneMockup src="/assets/images/iphone-3.jpg" />
                </Tab.Panel>
            </Tab.Panels>

        </div>          
    </Tab.Group>
  </div>
  )
}

export default PhoneSectionTab;
