import { Tab } from '@headlessui/react'

import { 
  FireIcon,
  ArrowSmallRightIcon,

  } from '@heroicons/react/20/solid'

const featureOne = [
  {
    name: 'Maximum capital efficiency.',
    description:
      "Every market is cross-collateralized. Mango's risk engine let's you utilize all your assets and derivative contracts as collateral.",
    icon: FireIcon,
  },
]
const featureTwo = [
  {
    name: 'Sub-second latency.',
    description:
      'Instant order execution at the price of less than a cent. Low latency allows market makers to post tight spreads on the books. Oh, and liquidations are instant as well, so watch your exposure.',
   //icon: FireIcon,
  },
]
const featureThree = [
  {
    name: 'The lowest fees.',
    description:
      'Trade with the lowest fee possible. SRM deposits are pooled for a collective discount. Mango is the first protocol to charge zero fees on margin borrowing & lending.',
   // icon: FiriIcon,
  },
]

function FeaturesOneTabs() {

  return (
    <>
    <Tab.Group manual>
      <div className="border-t-4 border-th-bkg-2 border-opacity-5 w-screen 2xl:ml-44 xl:ml-16">

      </div>
      <Tab.List className={"text-white grid grid-cols-3 max-w-7xl m-auto"}>
          <Tab className="group hover:bg-th-bkg-1 hover:border-t-4 border-th-bkg-3 focus:bg-opacity-0 p-8 -mt-1 mb-4 align-top focus:border-t-4 focus:border-mango-red focus:border-opacity-100">
            <dl>
              {featureOne.map((feature) => (
                <div className="text-left" key={feature.name}>
                    <div className="mb-3 flex items-center justify-center h-10 w-10 rounded-lg text-th-fgd-4 bg-th-fgd-3 group-hover:bg-th-fgd-2 group-focus:bg-gradient-to-tr from-mango-green to-mango-orange group-focus:text-white transition-all duration-150 ease-in-out">
                        <FireIcon className="h-6 w-6" />
                    </div>
                  <dt className="inline-flex">
                    <dd className="text-xl font-display text-th-fgd-5">{feature.name}</dd>
                    <div>
                      <ArrowSmallRightIcon
                        className="mt-[1px] w-8 h-8 group-hover:opacity-100 text-mango-yellow opacity-0 transform -translate-x-6 group-hover:translate-x-0 transition duration-150 ease-in"
                      />
                    </div>
                  </dt>
                  <dd className="mt-2 text-base text-th-fgd-4 opacity-40 transition duration-75 ease-in group-hover:opacity-80">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </Tab>
          <Tab className="group hover:bg-th-bkg-1 hover:border-t-4 border-th-bkg-3 focus:bg-opacity-0 p-8 -mt-1 mb-4 align-top focus:border-t-4 focus:border-mango-yellow focus:border-opacity-100">
            <dl>
              {featureTwo.map((feature) => (
                <div className="text-left" key={feature.name}>
                    <div className="mb-3 flex items-center justify-center h-10 w-10 rounded-lg text-th-fgd-4 bg-th-fgd-3 group-hover:bg-th-fgd-2 group-focus:bg-gradient-to-tr from-mango-green to-mango-orange group-focus:text-white transition-all duration-150 ease-in-out">
                      <FireIcon className="h-6 w-6" />
                    </div>
                  <dt className="inline-flex">
                    <dd className="text-xl font-display text-th-fgd-5">{feature.name}</dd>
                    <div>
                      <ArrowSmallRightIcon
                        className="mt-[1px] w-8 h-8 group-hover:opacity-100 text-mango-yellow opacity-0 transform -translate-x-6 group-hover:translate-x-0 transition duration-150 ease-in"
                      />
                    </div>
                  </dt>
                  <dd className="mt-2 text-base text-th-fgd-4 opacity-40 transition duration-75 ease-in group-hover:opacity-80">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </Tab>
          <Tab className="group hover:bg-th-bkg-1 hover:border-t-4 border-th-bkg-3 focus:bg-opacity-0 p-8 -mt-1 mb-4 align-top focus:border-t-4 focus:border-mango-green focus:border-opacity-100">
            <dl>
              {featureThree.map((feature) => (
                <div className="text-left" key={feature.name}>
                    <div className="mb-3 flex items-center justify-center h-10 w-10 rounded-lg text-th-fgd-4 bg-th-fgd-3 group-hover:bg-th-fgd-2 group-focus:bg-gradient-to-tr from-mango-green to-mango-orange group-focus:text-white transition-all duration-150 ease-in-out">
                       <FireIcon className="h-6 w-6" />
                    </div>
                  <dt className="inline-flex">
                    <dd className="text-xl font-display text-th-fgd-5">{feature.name}</dd>
                    <div>
                      <ArrowSmallRightIcon
                        className="mt-[1px] w-8 h-8 group-hover:opacity-100 text-mango-yellow opacity-0 transform -translate-x-6 group-hover:translate-x-0 transition duration-150 ease-in"
                      />
                    </div>
                  </dt>
                  <dd className="mt-2 text-base text-th-fgd-4 opacity-40 transition duration-75 ease-in group-hover:opacity-80">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </Tab>
      </Tab.List>

      <Tab.Panels className={"max-w-7xl mx-auto"}>
        <Tab.Panel>

          <div className="mt-20 w-screen m-auto rounded-2xl shadow-[0_8px_62px_-5px_rgba(0,0,0,0.25)]">
              <div className="bg-th-bkg-3 h-14 w-full py-4 pl-4 rounded-t-2xl backdrop-blur-xl border border-1 border-solid border-th-fgd-1">
                  <ul className="flex flex-row space-x-4">
                    <li className="bg-mango-red h-5 w-5 rounded-full"></li>
                    <li className="bg-mango-yellow h-5 w-5 rounded-full"></li>
                    <li className="bg-mango-green h-5 w-5 rounded-full"></li>
                  </ul>
              </div>

            <div className="flex flex-row bg-th-bkg-3 w-full py-4 pl-4 backdrop-blur-xl border border-1 border-solid border-th-fgd-1">
              <div>
                <ul className="flex flex-row space-x-3">
                  <li className="bg-th-fgd-2 p-1 rounded-full text-th-fgd-3">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill="currentColor" 
                      className="w-6 h-6">
                      <path 
                      fillRule="evenodd" 
                      d="M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z" 
                      clipRule="evenodd" />
                    </svg>

                    </li>
                    <li className="bg-th-fgd-2 p-1 rounded-full text-th-fgd-3">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill="currentColor" 
                      className="w-6 h-6">
                      <path 
                        fillRule="evenodd" 
                        d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" 
                        clipRule="evenodd" />
                    </svg>

                    </li>
                    <li className="bg-th-fgd-2 p-1 rounded-full text-th-fgd-3">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill="currentColor" 
                      className="w-6 h-6">                  
                    <path 
                        fillRule="evenodd" 
                        d="M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z" 
                        clipRule="evenodd" />
                    </svg>
                    </li>
                  </ul>
              </div>

              <div className="flex flex-row bg-dark-theme-bkg-3 border-2 border-th-fgd-2 rounded-[10px] ml-6">
                          <span className="p-[5px] bg-black bg-opacity-20 border-r-2 border-th-fgd-2 rounded-l-[8px]">
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 24 24" 
                            fill="currentColor" 
                            className="w-5 h-5 text-mango-green group-hover:text-mango-yellow">
                            <path 
                              fillRule="evenodd" 
                              d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" 
                              clipRule="evenodd" />
                          </svg>
                          </span>
                            <span>
                              <p className="type-url text-xs font-mono ml-1 text-white text-opacity-60 w-screen p-[5px]">
                              </p>
                            </span>

          </div>
            </div>

            <div className="bg-white bg-opacity-10 h-auto w-full rounded-b-2xl backdrop-blur-xl border border-1 border-solid border-th-fgd-1">
            <img
              className="z-0 reletive w-full h-auto rounded-b-2xl"
              src={`/assets/images/feature_screen_one.png`}          
              alt=""
              />
            </div>
          </div>

        </Tab.Panel>
        <Tab.Panel>
        <div className="mt-20 w-screen m-auto rounded-2xl shadow-[0_8px_62px_-5px_rgba(0,0,0,0.25)]">
            <div className="bg-th-bkg-3 h-14 w-full py-4 pl-4 rounded-t-2xl backdrop-blur-xl border border-1 border-solid border-th-fgd-1">
                <ul className="flex flex-row space-x-4">
                  <li className="bg-mango-red h-5 w-5 rounded-full"></li>
                  <li className="bg-mango-yellow h-5 w-5 rounded-full"></li>
                  <li className="bg-mango-green h-5 w-5 rounded-full"></li>
                </ul>
            </div>

            <div className="flex flex-row bg-th-bkg-3 w-full py-4 pl-4 backdrop-blur-xl border border-1 border-solid border-th-fgd-1">
              <div>
                <ul className="flex flex-row space-x-3">
                  <li className="bg-th-fgd-2 p-1 rounded-full text-th-fgd-3">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill="currentColor" 
                      className="w-6 h-6">
                      <path 
                      fillRule="evenodd" 
                      d="M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z" 
                      clipRule="evenodd" />
                    </svg>

                    </li>
                    <li className="bg-th-fgd-2 p-1 rounded-full text-th-fgd-3">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill="currentColor" 
                      className="w-6 h-6">
                      <path 
                        fillRule="evenodd" 
                        d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" 
                        clipRule="evenodd" />
                    </svg>

                    </li>
                    <li className="bg-th-fgd-2 p-1 rounded-full text-th-fgd-3">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill="currentColor" 
                      className="w-6 h-6">                  
                    <path 
                        fillRule="evenodd" 
                        d="M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z" 
                        clipRule="evenodd" />
                    </svg>
                    </li>
                  </ul>
              </div>

              <div className="flex flex-row bg-dark-theme-bkg-3 border-2 border-th-fgd-2 rounded-[10px] ml-6">
                          <span className="p-[5px] bg-black bg-opacity-20 border-r-2 border-th-fgd-2 rounded-l-[8px]">
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 24 24" 
                            fill="currentColor" 
                            className="w-5 h-5 text-mango-green group-hover:text-mango-yellow">
                            <path 
                              fillRule="evenodd" 
                              d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" 
                              clipRule="evenodd" />
                          </svg>
                          </span>
                            <span>
                              <p className="type-url text-xs font-mono ml-1 text-white text-opacity-60 w-screen p-[5px]">
                              </p>
                            </span>

          </div>
            </div>

            <div className="bg-white bg-opacity-10 h-auto w-full rounded-b-2xl backdrop-blur-xl border border-1 border-solid border-th-fgd-1">
            <img
              className="z-0 reletive w-full h-auto rounded-b-2xl"
              src={`/assets/images/feature_screen_two.png`}          
              alt=""
              />
            </div>
          </div>


        </Tab.Panel>
        <Tab.Panel>
        <div className="mt-20 w-screen m-auto rounded-2xl shadow-[0_8px_62px_-5px_rgba(0,0,0,0.25)]">
            <div className="bg-th-bkg-3 h-14 w-full py-4 pl-4 rounded-t-2xl backdrop-blur-xl border border-1 border-solid border-th-fgd-1">
                <ul className="flex flex-row space-x-4">
                  <li className="bg-mango-red h-5 w-5 rounded-full"></li>
                  <li className="bg-mango-yellow h-5 w-5 rounded-full"></li>
                  <li className="bg-mango-green h-5 w-5 rounded-full"></li>
                </ul>
            </div>

            <div className="flex flex-row bg-th-bkg-3 w-full py-4 pl-4 backdrop-blur-xl border border-1 border-solid border-th-fgd-1">
              <div>
                <ul className="flex flex-row space-x-3">
                  <li className="bg-th-fgd-2 p-1 rounded-full text-th-fgd-3">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill="currentColor" 
                      className="w-6 h-6">
                      <path 
                      fillRule="evenodd" 
                      d="M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z" 
                      clipRule="evenodd" />
                    </svg>

                    </li>
                    <li className="bg-th-fgd-2 p-1 rounded-full text-th-fgd-3">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill="currentColor" 
                      className="w-6 h-6">
                      <path 
                        fillRule="evenodd" 
                        d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" 
                        clipRule="evenodd" />
                    </svg>

                    </li>
                    <li className="bg-th-fgd-2 p-1 rounded-full text-th-fgd-3">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill="currentColor" 
                      className="w-6 h-6">                  
                    <path 
                        fillRule="evenodd" 
                        d="M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z" 
                        clipRule="evenodd" />
                    </svg>
                    </li>
                  </ul>
              </div>

              <div className="flex flex-row bg-dark-theme-bkg-3 border-2 border-th-fgd-2 rounded-[10px] ml-6">
                          <span className="p-[5px] bg-black bg-opacity-20 border-r-2 border-th-fgd-2 rounded-l-[8px]">
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 24 24" 
                            fill="currentColor" 
                            className="w-5 h-5 text-mango-green group-hover:text-mango-yellow">
                            <path 
                              fillRule="evenodd" 
                              d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" 
                              clipRule="evenodd" />
                          </svg>
                          </span>
                            <span>
                              <p className="type-url text-xs font-mono ml-1 text-white text-opacity-60 w-screen p-[5px]">
                              </p>
                            </span>

          </div>
            </div>

            <div className="bg-white bg-opacity-10 h-auto w-full rounded-b-2xl backdrop-blur-xl border border-1 border-solid border-th-fgd-1">
            <img
              className="z-0 reletive w-full h-auto rounded-b-2xl"
              src={`/assets/images/feature_screen_three.png`}          
              alt=""
              />
            </div>
          </div>


        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
    </>
  )
}

export default FeaturesOneTabs;
