import { Tab } from '@headlessui/react'

//import {
//  ReceiptTaxIcon,
//  LightningBoltIcon,
//  CurrencyDollarIcon,
// } from '@heroicons/react/outline'

const featureOne = [
  {
    name: 'Feature',
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    //icon: CurrencyDollarIcon,
  },
]
const featureTwo = [
  {
    name: 'Feature',
    description:
      'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis. Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
   //icon: LightningBoltIcon,
  },
]
const featureThree = [
  {
    name: 'Feature',
    description:
      'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
   // icon: ReceiptTaxIcon,
  },
]

function PhoneFeaturesTabs() {
  return (
    <>
    <div className="grid grid-cols-2 max-w-7xl mx-auto py-20">
        <Tab.Group vertical>
            <div className="">
            <Tab.List className={"text-white flex flex-col gap-8 max-w-xl m-auto"}>
                <Tab className={"group bg-white bg-opacity-0 hover:bg-opacity-5 focus:bg-opacity-5 p-8 rounded-xl mt-4 mb-4 align-top hover:shadow-xl transition-shadow duration-300 ease-in-out"}>
                
                    <dl className="">
                    {featureOne.map((featureOne) => (
                        <div className="text-left  align-top" key={featureOne.name}>
                        <dt>
                            <div className="mb-3 flex items-center justify-center h-10 w-10 rounded-lg text-white text-opacity-40 bg-white bg-opacity-10 group-hover:bg-gradient-to-tr from-mango-green to-mango-orange group-hover:text-opacity-90 group-hover:shadow-lg transition-all duration-150 ease-in-out">
                            
                            <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 24 24" 
                            fill="currentColor"
                            className="w-6 h-6">
                                <path fillRule="evenodd" 
                                d="M11.622 1.602a.75.75 0 01.756 0l2.25 1.313a.75.75 0 01-.756 1.295L12 3.118 10.128 4.21a.75.75 0 11-.756-1.295l2.25-1.313zM5.898 5.81a.75.75 0 01-.27 1.025l-1.14.665 1.14.665a.75.75 0 11-.756 1.295L3.75 8.806v.944a.75.75 0 01-1.5 0V7.5a.75.75 0 01.372-.648l2.25-1.312a.75.75 0 011.026.27zm12.204 0a.75.75 0 011.026-.27l2.25 1.312a.75.75 0 01.372.648v2.25a.75.75 0 01-1.5 0v-.944l-1.122.654a.75.75 0 11-.756-1.295l1.14-.665-1.14-.665a.75.75 0 01-.27-1.025zm-9 5.25a.75.75 0 011.026-.27L12 11.882l1.872-1.092a.75.75 0 11.756 1.295l-1.878 1.096V15a.75.75 0 01-1.5 0v-1.82l-1.878-1.095a.75.75 0 01-.27-1.025zM3 13.5a.75.75 0 01.75.75v1.82l1.878 1.095a.75.75 0 11-.756 1.295l-2.25-1.312a.75.75 0 01-.372-.648v-2.25A.75.75 0 013 13.5zm18 0a.75.75 0 01.75.75v2.25a.75.75 0 01-.372.648l-2.25 1.312a.75.75 0 11-.756-1.295l1.878-1.096V14.25a.75.75 0 01.75-.75zm-9 5.25a.75.75 0 01.75.75v.944l1.122-.654a.75.75 0 11.756 1.295l-2.25 1.313a.75.75 0 01-.756 0l-2.25-1.313a.75.75 0 11.756-1.295l1.122.654V19.5a.75.75 0 01.75-.75z" 
                                clipRule="evenodd" />
                            </svg>

                            </div>
                                                
                            <div className="flex flex-row">
                                <p className="text-xl font-semibold font-heading">
                                {featureOne.name}
                                </p>

                            </div>

                        </dt>
                        <dd className="mt-2 text-base text-white opacity-40 transition duration-75 ease-in group-hover:opacity-80">
                            {featureOne.description}
                        </dd>
                        </div>
                    ))}
                    </dl>
                </Tab>
                <Tab className={"group bg-white bg-opacity-0 hover:bg-opacity-5 focus:bg-opacity-5 p-8 rounded-xl mt-4 mb-4 hover:shadow-xl transition-shadow duration-300 ease-in-out"}>
                
                <dl className="">
                    {featureTwo.map((featureTwo) => (
                    <div className="text-left" key={featureTwo.name}>
                        <dt>
                        <div className="mb-3 flex items-center justify-center h-10 w-10 rounded-lg text-white text-opacity-40 bg-white bg-opacity-10 group-hover:bg-gradient-to-tr from-mango-green to-mango-orange group-hover:text-opacity-90 group-hover:shadow-lg transition-all duration-150 ease-in-out">
                            
                            <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 24 24" 
                            fill="currentColor"
                            className="w-6 h-6">
                                <path 
                                    fillRule="evenodd" 
                                    d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z" 
                                    clipRule="evenodd" />
                            </svg>
                            </div>
                        <div className="flex flex-row">
                            <p className="text-xl font-semibold font-heading">
                                {featureTwo.name}
                            </p>

                            </div>

                        </dt>
                        <dd className="mt-2 text-base text-white opacity-40 transition duration-75 ease-in group-hover:opacity-80">
                        {featureTwo.description}
                        </dd>
                    </div>
                    ))}
                </dl>

                </Tab>
                <Tab className={"group bg-white bg-opacity-0 hover:bg-opacity-5 focus:bg-opacity-5 p-8 rounded-xl mt-4 mb-4 hover:shadow-xl transition-shadow duration-300 ease-in-out"}>

                <dl className="">
                    {featureThree.map((featureThree) => (
                    <div className="text-left" key={featureThree.name}>
                        <dt>
                        <div className="mb-3 flex items-center justify-center h-10 w-10 rounded-lg text-white text-opacity-40 bg-white bg-opacity-10 group-hover:bg-gradient-to-tr from-mango-green to-mango-orange group-hover:text-opacity-90 group-hover:shadow-lg transition-all duration-150 ease-in-out">
                            <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 24 24" 
                            fill="currentColor"
                            className="w-6 h-6">
                                <path 
                                    d="M11.25 5.337c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.036 1.007-1.875 2.25-1.875S15 2.34 15 3.375c0 .369-.128.713-.349 1.003-.215.283-.401.604-.401.959 0 .332.278.598.61.578 1.91-.114 3.79-.342 5.632-.676a.75.75 0 01.878.645 49.17 49.17 0 01.376 5.452.657.657 0 01-.66.664c-.354 0-.675-.186-.958-.401a1.647 1.647 0 00-1.003-.349c-1.035 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401.31 0 .557.262.534.571a48.774 48.774 0 01-.595 4.845.75.75 0 01-.61.61c-1.82.317-3.673.533-5.555.642a.58.58 0 01-.611-.581c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.035-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959a.641.641 0 01-.658.643 49.118 49.118 0 01-4.708-.36.75.75 0 01-.645-.878c.293-1.614.504-3.257.629-4.924A.53.53 0 005.337 15c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.036 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.369 0 .713.128 1.003.349.283.215.604.401.959.401a.656.656 0 00.659-.663 47.703 47.703 0 00-.31-4.82.75.75 0 01.83-.832c1.343.155 2.703.254 4.077.294a.64.64 0 00.657-.642z" />
                            </svg>
                        </div>

                        <div className="flex flex-row">
                            <p className="text-xl font-semibold font-heading">
                                {featureThree.name}
                            </p>

                            </div>
                        </dt>
                        <dd className="mt-2 text-base text-white opacity-40 transition duration-75 ease-in group-hover:opacity-80">
                        {featureThree.description}
                        </dd>
                    </div>
                    ))}
                </dl>

                </Tab>
            </Tab.List>

            </div>
            <div className="">
            <Tab.Panels className={"text-white"}>
                <Tab.Panel>

                <div className="mt-20 m-auto rounded-[50px] w-450 shadow-xl">
                <div className="bg-white bg-opacity-0 h-750 w-450 rounded-[50px] backdrop-blur-xl border-[5px] border-solid border-white border-opacity-10">
                <div className="flex items-center flex-col">
                    <ul className="absolute">
                        <li className="bg-mango-bkg-4 h-8 w-28 rounded-full mt-8"></li>
                    </ul>
                </div>
                <img
                    className="z-0 reletive w-full h-auto rounded-[50px]"
                    src={`/assets/images/feature_screen_one.png`}          
                    alt=""
                    />
                </div>
                </div>

                </Tab.Panel>
                <Tab.Panel>

                <div className="mt-20 max-w-7xl m-auto rounded-2xl shadow-xl">
                <div className="bg-white bg-opacity-5 h-12 w-full py-4 pl-4 rounded-t-2xl backdrop-blur-xl border border-1 border-solid border-white border-opacity-10">
                    <ul className="flex flex-row space-x-4">
                        <li className="bg-mango-red h-4 w-4 rounded-full"></li>
                        <li className="bg-mango-yellow h-4 w-4 rounded-full"></li>
                        <li className="bg-mango-green h-4 w-4 rounded-full"></li>
                    </ul>
                </div>
                <div className="bg-white bg-opacity-10 h-auto w-full rounded-b-2xl backdrop-blur-xl border border-1 border-solid border-white border-opacity-10">
                <img
                    className="z-0 reletive w-full h-auto rounded-b-2xl"
                    src={`/assets/images/feature_screen_two.png`}          
                    alt=""
                    />
                </div>
                </div>

                </Tab.Panel>
                <Tab.Panel>

                <div className="mt-20 max-w-7xl m-auto rounded-2xl shadow-xl">
                <div className="bg-white bg-opacity-5 h-12 w-full py-4 pl-4 rounded-t-2xl backdrop-blur-xl border border-1 border-solid border-white border-opacity-10">
                    <ul className="flex flex-row space-x-4">
                        <li className="bg-mango-red h-4 w-4 rounded-full"></li>
                        <li className="bg-mango-yellow h-4 w-4 rounded-full"></li>
                        <li className="bg-mango-green h-4 w-4 rounded-full"></li>
                    </ul>
                </div>
                <div className="bg-white bg-opacity-10 h-auto w-full rounded-b-2xl backdrop-blur-xl border border-1 border-solid border-white border-opacity-10">
                <img
                    className="z-0 reletive w-full h-auto rounded-b-2xl"
                    src={`/assets/images/feature_screen_three.png`}          
                    alt=""
                    />
                </div>
                </div>

                </Tab.Panel>
            </Tab.Panels>

        </div>          
    </Tab.Group>

    </div>
    </>
  )
}

export default PhoneFeaturesTabs;
