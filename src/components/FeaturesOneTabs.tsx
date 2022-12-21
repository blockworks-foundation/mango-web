import { Tab } from '@headlessui/react'

//import {
//  ReceiptTaxIcon,
//  LightningBoltIcon,
//  CurrencyDollarIcon,
// } from '@heroicons/react/outline'

const featureOne = [
  {
    name: 'Maximum capital efficiency.',
    description:
      "Every market is cross-collateralized. Mango's risk engine let's you utilize all your assets and derivative contracts as collateral.",
    //icon: CurrencyDollarIcon,
  },
]
const featureTwo = [
  {
    name: 'Sub-second latency.',
    description:
      'Instant order execution at the price of less than a cent. Low latency allows market makers to post tight spreads on the books. Oh, and liquidations are instant as well, so watch your exposure.',
   //icon: LightningBoltIcon,
  },
]
const featureThree = [
  {
    name: 'The lowest fees.',
    description:
      'Trade with the lowest fee possible. SRM deposits are pooled for a collective discount. Mango is the first protocol to charge zero fees on margin borrowing & lending.',
   // icon: ReceiptTaxIcon,
  },
]

function FeaturesOneTabs() {
  return (
    <>
    <Tab.Group manual>
      <Tab.List className={"text-white grid grid-cols-3 gap-8 max-w-7xl m-auto"}>
          <Tab className={"group bg-white bg-opacity-0 hover:bg-opacity-5 focus:bg-opacity-5 p-8 rounded-lg mt-4 mb-4 align-top"}>
        
            <dl className="">
              {featureOne.map((featureOne) => (
                <div className="text-left" key={featureOne.name}>
                  <dt>
                    {/* 
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-bkg-3 text-mango-yellow">
                      <feature.icon
                        className="h-6 w-6"
                        aria-hidden="true"
                      />
                    </div>
                    */}
                    <div className="flex flex-row">
                        <p className="text-xl font-semibold font-heading">
                          {featureOne.name}
                        </p>
                      <svg 
                              xmlns="http://www.w3.org/2000/svg" 
                              viewBox="0 0 20 20" 
                              fill="currentColor" 
                              className="w-8 h-8 group-hover:opacity-100 text-mango-yellow opacity-0 transform -translate-x-6 group-hover:translate-x-0 transition duration-150 ease-in">
                          <path fillRule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clipRule="evenodd" />
                        </svg>
                      </div>

                  </dt>
                  <dd className="mt-2 text-base text-white opacity-40 transition duration-75 ease-in group-hover:opacity-80">
                    {featureOne.description}
                  </dd>
                </div>
              ))}
            </dl>

          </Tab>
          <Tab className={"group bg-white bg-opacity-0 hover:bg-opacity-5 focus:bg-opacity-5 p-8 rounded-lg mt-4 mb-4"}>
        
          <dl className="">
            {featureTwo.map((featureTwo) => (
              <div className="text-left" key={featureTwo.name}>
                <dt>
                  {/* 
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-bkg-3 text-mango-yellow">
                    <feature.icon
                      className="h-6 w-6"
                      aria-hidden="true"
                    />
                  </div>
                  */}
                  <div className="flex flex-row">
                      <p className="text-xl font-semibold font-heading">
                        {featureTwo.name}
                      </p>
                    <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 20 20" 
                            fill="currentColor" 
                            className="w-8 h-8 group-hover:opacity-100 text-mango-yellow opacity-0 transform -translate-x-6 group-hover:translate-x-0 transition duration-150 ease-in">
                        <path fillRule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clipRule="evenodd" />
                      </svg>
                    </div>

                </dt>
                <dd className="mt-2 text-base text-white opacity-40 transition duration-75 ease-in group-hover:opacity-80">
                  {featureTwo.description}
                </dd>
              </div>
            ))}
          </dl>

          </Tab>
          <Tab className={"group bg-white bg-opacity-0 hover:bg-opacity-5 focus:bg-opacity-5 p-8 rounded-lg mt-4 mb-4"}>

          <dl className="">
            {featureThree.map((featureThree) => (
              <div className="text-left" key={featureThree.name}>
                <dt>
                  {/* 
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-bkg-3 text-mango-yellow">
                    <feature.icon
                      className="h-6 w-6"
                      aria-hidden="true"
                    />
                  </div>
                  */}
                  <div className="flex flex-row">
                      <p className="text-xl font-semibold font-heading">
                        {featureThree.name}
                      </p>
                    <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 20 20" 
                            fill="currentColor" 
                            className="w-8 h-8 group-hover:opacity-100 text-mango-yellow opacity-0 transform -translate-x-6 group-hover:translate-x-0 transition duration-150 ease-in">
                        <path fillRule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clipRule="evenodd" />
                      </svg>
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

      <Tab.Panels className={"text-white"}>
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
    </Tab.Group>
    </>
  )
}

export default FeaturesOneTabs;
