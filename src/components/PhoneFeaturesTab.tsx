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
    <div className="grid grid-cols-2 max-w-7xl mx-auto py-40 space-y-0 mt-40">
        <Tab.Group vertical>
            <div className="">
            <Tab.List className={"text-th-fgd-5 flex flex-col max-w-xl m-auto border-l-4 border-th-bkg-2 border-opacity-5 "}>
                <Tab className={"group -ml-1 hover:border-l-4 border-th-bkg-3 hover:bg-th-bkg-1 p-8 my-0 align-top transition-shadow duration-300 ease-in-out focus:border-l-4 focus:border-mango-red focus:border-opacity-100"}>
                
                    <dl className="">
                    {featureOne.map((featureOne) => (
                        <div className="text-left  align-top" key={featureOne.name}>
                        <dt>
                            <div className="mb-3 flex items-center justify-center h-10 w-10 rounded-lg text-white text-opacity-40 bg-white bg-opacity-10 group-focus:bg-gradient-to-tr group-hover:bg-gradient-to-tr from-mango-green to-mango-orange group-hover:text-opacity-90 group-hover:shadow-lg group-focus:text-opacity-100 transition-all duration-150 ease-in-out">
                            
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
                        <dd className="mt-2 text-base text-th-fgd-3 transition duration-75 ease-in group-hover:text-th-fgd-5">
                            {featureOne.description}
                        </dd>
                        </div>
                    ))}
                    </dl>
                </Tab>
                <Tab className={"group -ml-1 hover:border-l-4 border-th-bkg-3 hover:bg-th-bkg-1 p-8 my-0 align-top transition-shadow duration-300 ease-in-out focus:border-l-4 focus:border-mango-yellow focus:border-opacity-100 "}>
                
                <dl className="">
                    {featureTwo.map((featureTwo) => (
                    <div className="text-left" key={featureTwo.name}>
                        <dt>
                        <div className="mb-3 flex items-center justify-center h-10 w-10 rounded-lg text-white text-opacity-40 bg-white bg-opacity-10 group-focus:bg-gradient-to-tr group-hover:bg-gradient-to-tr from-mango-green to-mango-orange group-hover:text-opacity-90 group-hover:shadow-lg group-focus:text-opacity-100 transition-all duration-150 ease-in-out">
                            
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
                        <dd className="mt-2 text-base text-th-fgd-3 transition duration-75 ease-in group-hover:text-th-fgd-5">
                        {featureTwo.description}
                        </dd>
                    </div>
                    ))}
                </dl>

                </Tab>
                <Tab className={"group -ml-1 hover:border-l-4 border-th-bkg-3 hover:bg-th-bkg-1 p-8 my-0 align-top transition-shadow duration-300 ease-in-out focus:border-l-4 focus:border-mango-green focus:border-opacity-100"}>

                <dl className="">
                    {featureThree.map((featureThree) => (
                    <div className="text-left" key={featureThree.name}>
                        <dt>
                        <div className="mb-3 flex items-center justify-center h-10 w-10 rounded-lg text-white text-opacity-40 bg-white bg-opacity-10 group-focus:bg-gradient-to-tr group-hover:bg-gradient-to-tr from-mango-green to-mango-orange group-hover:text-opacity-90 group-hover:shadow-lg group-focus:text-opacity-100 transition-all duration-150 ease-in-out">
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
                        <dd className="mt-2 text-base text-th-fgd-3 transition duration-75 ease-in group-hover:text-th-fgd-5">
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
                    {/* PHone in CSS */}
                        <div className="-mt-24 m-auto rounded-[50px] w-450 shadow-xl">
                            <span className="h-[30px] w-1 absolute bg-th-fgd-3 mt-[150px] rounded-l-full -ml-1"></span>
                            <span className="transform translate-y-56 translate-x-[450px] h-[110px] w-1 absolute bg-th-fgd-3 rounded-r-full"></span>
                            <span className="h-[80px] w-1 absolute bg-th-fgd-2 mt-[200px] rounded-l-full -ml-1"></span>
                            <span className="h-[80px] w-1 absolute bg-th-fgd-2 mt-[300px] rounded-l-full -ml-1"></span>

                            <div className="bg-th-fgd-1 bg-opacity-0 h-900 w-450 rounded-[50px] backdrop-blur-xl border-[5px] border-solid border-th-bkg-4 border-opacity-10">           
                                <div className="h-901 border-[5px] border-solid border-th-bkg-3 rounded-[46px]">
                                    <div className="flex items-center flex-col">
                                        <ul className="absolute">
                                            <li className="bg-black bg-opacity-80 h-[30px] w-[130px] rounded-full mt-6"></li>
                                        </ul>
                                    </div>
                                        <img
                                            className="z-0 reletive w-full h-full rounded-[41px]"
                                            src={`/assets/images/iphone-1.jpg`}          
                                            alt=""
                                            />
                                    <div className="flex items-center flex-col">
                                        <ul className="absolute">
                                            <li className="bg-white bg-opacity-80 h-[6px] w-[125px] rounded-full -mt-6 animate-bounce"></li>
                                        </ul>
                                    </div>   
                                </div>
                                </div> 
                        </div>

                </Tab.Panel>
                <Tab.Panel>

                        <div className="-mt-24 m-auto rounded-[50px] w-450 shadow-xl">
                                    <span className="h-[30px] w-1 absolute bg-th-fgd-3 mt-[150px] rounded-l-full -ml-1"></span>
                                    <span className="transform translate-y-56 translate-x-[450px] h-[110px] w-1 absolute bg-th-fgd-3 rounded-r-full"></span>
                                    <span className="h-[80px] w-1 absolute bg-th-fgd-2 mt-[200px] rounded-l-full -ml-1"></span>
                                    <span className="h-[80px] w-1 absolute bg-th-fgd-2 mt-[300px] rounded-l-full -ml-1"></span>

                                    <div className="bg-th-fgd-1 bg-opacity-0 h-900 w-450 rounded-[50px] backdrop-blur-xl border-[5px] border-solid border-th-bkg-4 border-opacity-10">           
                                        <div className="h-901 border-[5px] border-solid border-th-bkg-3 rounded-[46px]">
                                            <div className="flex items-center flex-col">
                                                <ul className="absolute">
                                                    <li className="bg-black bg-opacity-80 h-[30px] w-[130px] rounded-full mt-6"></li>
                                                </ul>
                                            </div>
                                                <img
                                                    className="z-0 reletive w-full h-full rounded-[41px]"
                                                    src={`/assets/images/iphone-2.jpg`}          
                                                    alt=""
                                                    />
                                            <div className="flex items-center flex-col">
                                                <ul className="absolute">
                                                    <li className="bg-white bg-opacity-80 h-[6px] w-[125px] rounded-full -mt-6 animate-bounce"></li>
                                                </ul>
                                            </div>   
                                        </div>
                                        </div> 
                                </div>
                </Tab.Panel>
                <Tab.Panel>

                        <div className="-mt-24 m-auto rounded-[50px] w-450 shadow-xl">
                                    <span className="h-[30px] w-1 absolute bg-th-fgd-3 mt-[150px] rounded-l-full -ml-1"></span>
                                    <span className="transform translate-y-56 translate-x-[450px] h-[110px] w-1 absolute bg-th-fgd-3 rounded-r-full"></span>
                                    <span className="h-[80px] w-1 absolute bg-th-fgd-2 mt-[200px] rounded-l-full -ml-1"></span>
                                    <span className="h-[80px] w-1 absolute bg-th-fgd-2 mt-[300px] rounded-l-full -ml-1"></span>

                                    <div className="bg-th-fgd-1 bg-opacity-0 h-900 w-450 rounded-[50px] backdrop-blur-xl border-[5px] border-solid border-th-bkg-4 border-opacity-10">           
                                        <div className="h-901 border-[5px] border-solid border-th-bkg-3 rounded-[46px]">
                                            <div className="flex items-center flex-col">
                                                <ul className="absolute">
                                                    <li className="bg-black bg-opacity-80 h-[30px] w-[130px] rounded-full mt-6"></li>
                                                </ul>
                                            </div>
                                                <img
                                                    className="z-0 reletive w-full h-full rounded-[41px]"
                                                    src={`/assets/images/iphone-3.jpg`}          
                                                    alt=""
                                                    />
                                            <div className="flex items-center flex-col">
                                                <ul className="absolute">
                                                    <li className="bg-white bg-opacity-80 h-[6px] w-[125px] rounded-full -mt-6 animate-bounce"></li>
                                                </ul>
                                            </div>   
                                        </div>
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
