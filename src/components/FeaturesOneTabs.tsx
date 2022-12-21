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
                  <p className="text-xl font-semibold font-heading">
                    {featureOne.name}
                  <span className="text-mango-yellow opacity-0 transition duration-150 ease-in group-hover:opacity-100 ml-2" aria-hidden="true">&rarr;</span>
                  </p>
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
                  <p className="text-xl font-semibold font-heading">
                    {featureTwo.name}
                  <span className="text-mango-yellow opacity-0 transition duration-150 ease-in group-hover:opacity-100 ml-2" aria-hidden="true">&rarr;</span>
                  </p>
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
                  <p className="text-xl font-semibold font-heading">
                    {featureThree.name}
                  <span className="text-mango-yellow opacity-0 transition duration-150 ease-in group-hover:opacity-100 ml-2" aria-hidden="true">&rarr;</span>
                  </p>
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

        <div className="">
           <div className="bg-white bg-opacity-5 h-12 w-full py-4 pl-4 rounded-t-2xl backdrop-blur-xl">
              <ul className="flex flex-row space-x-4">
                <li className="bg-mango-red h-4 w-4 rounded-full"></li>
                <li className="bg-mango-yellow h-4 w-4 rounded-full"></li>
                <li className="bg-mango-green h-4 w-4 rounded-full"></li>
              </ul>
          </div>
          <div className="bg-white bg-opacity-10 h-auto w-full rounded-b-2xl backdrop-blur-xl">
          <img
            className="z-0 reletive w-full h-auto rounded-b-2xl"
            src={`/assets/images/feature_screen_one.png`}          
            alt=""
            />
          </div>
        </div>
        </Tab.Panel>
        <Tab.Panel>

        <div className="">
           <div className="bg-white bg-opacity-5 h-12 w-full py-4 pl-4 rounded-t-2xl backdrop-blur-xl">
              <ul className="flex flex-row space-x-4">
                <li className="bg-mango-red h-4 w-4 rounded-full"></li>
                <li className="bg-mango-yellow h-4 w-4 rounded-full"></li>
                <li className="bg-mango-green h-4 w-4 rounded-full"></li>
              </ul>
          </div>
          <div className="bg-white bg-opacity-10 h-auto w-full rounded-b-2xl backdrop-blur-xl">
          <img
            className="z-0 reletive w-full h-auto rounded-b-2xl"
            src={`/assets/images/feature_screen_two.png`}          
            alt=""
            />
          </div>
        </div>

        </Tab.Panel>
        <Tab.Panel>

        <div className="">
           <div className="bg-white bg-opacity-5 h-12 w-full py-4 pl-4 rounded-t-2xl backdrop-blur-xl">
              <ul className="flex flex-row space-x-4">
                <li className="bg-mango-red h-4 w-4 rounded-full"></li>
                <li className="bg-mango-yellow h-4 w-4 rounded-full"></li>
                <li className="bg-mango-green h-4 w-4 rounded-full"></li>
              </ul>
          </div>
          <div className="bg-white bg-opacity-10 h-auto w-full rounded-b-2xl backdrop-blur-xl">
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
