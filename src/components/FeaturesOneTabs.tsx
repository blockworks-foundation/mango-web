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
      <div className="border-t-4 border-th-bkg-2 border-opacity-5 w-screen 2xl:ml-44 xl:ml-16">

      </div>
      <Tab.List className={"text-white grid grid-cols-3 max-w-7xl m-auto"}>
          <Tab className={"group bg-white bg-opacity-0 hover:bg-opacity-5 focus:bg-opacity-0 p-8 -mt-1 mb-4 align-top focus:border-t-4 focus:border-mango-red focus:border-opacity-100"}>
        
            <dl className="">
              {featureOne.map((featureOne) => (
                <div className="text-left" key={featureOne.name}>
                  <dt>
                    <div className="mb-3 flex items-center justify-center h-10 w-10 rounded-lg text-white text-opacity-40 bg-white bg-opacity-10 group-focus:bg-gradient-to-tr from-mango-green to-mango-orange group-focus:text-opacity-90 group-hover:shadow-lg transition-all duration-150 ease-in-out">
                      <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill="currentColor"
                      className="w-6 h-6">
                        <path 
                        fillRule="evenodd" 
                        d="M8.478 1.6a.75.75 0 01.273 1.025 3.72 3.72 0 00-.425 1.122c.058.057.118.114.18.168A4.491 4.491 0 0112 2.25c1.413 0 2.673.651 3.497 1.668.06-.054.12-.11.178-.167a3.717 3.717 0 00-.426-1.126.75.75 0 111.298-.75 5.22 5.22 0 01.671 2.045.75.75 0 01-.187.582c-.241.27-.505.52-.787.749a4.495 4.495 0 01.216 2.1c-.106.792-.753 1.295-1.417 1.403-.182.03-.364.057-.547.081.152.227.273.476.359.741a23.122 23.122 0 003.832-.802 23.241 23.241 0 00-.345-2.634.75.75 0 011.474-.28c.21 1.115.348 2.256.404 3.418a.75.75 0 01-.516.749c-1.527.5-3.119.855-4.76 1.05-.074.38-.22.735-.423 1.05a24.61 24.61 0 015.943 1.358.75.75 0 01.492.75 24.665 24.665 0 01-1.189 6.25.75.75 0 01-1.425-.47 23.141 23.141 0 001.077-5.307c-.5-.168-1.009-.32-1.524-.454.068.234.104.484.104.746 0 3.956-2.521 7.5-6 7.5-3.478 0-6-3.544-6-7.5 0-.262.037-.511.104-.746-.514.134-1.022.286-1.522.454a23.14 23.14 0 001.077 5.308.75.75 0 01-1.425.468 24.663 24.663 0 01-1.19-6.25.75.75 0 01.493-.749 24.593 24.593 0 014.964-1.24h.01c.321-.046.644-.085.969-.118a2.982 2.982 0 01-.424-1.05 24.614 24.614 0 01-4.76-1.05.75.75 0 01-.516-.75c.057-1.161.194-2.302.405-3.417a.75.75 0 011.474.28c-.164.862-.28 1.74-.345 2.634 1.237.37 2.517.641 3.832.802.085-.265.207-.514.359-.74a18.732 18.732 0 01-.547-.082c-.664-.108-1.311-.611-1.417-1.403a4.535 4.535 0 01.217-2.103 6.788 6.788 0 01-.788-.751.75.75 0 01-.187-.583 5.22 5.22 0 01.67-2.04.75.75 0 011.026-.273z" 
                        clipRule="evenodd" />
                      </svg>

                    </div>
                                        
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
          <Tab className={"group bg-white bg-opacity-0 hover:bg-opacity-5 focus:bg-opacity-0 p-8 -mt-1 mb-4 align-top focus:border-t-4 focus:border-mango-green focus:border-opacity-100"}>
        
          <dl className="">
            {featureTwo.map((featureTwo) => (
              <div className="text-left" key={featureTwo.name}>
                <dt>
                  <div className="mb-3 flex items-center justify-center h-10 w-10 rounded-lg text-white text-opacity-40 bg-white bg-opacity-10 group-focus:bg-gradient-to-tr from-mango-green to-mango-orange group-focus:text-opacity-90 group-hover:shadow-lg transition-all duration-150 ease-in-out">
                      <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill="currentColor"
                      className="w-6 h-6">
                        <path 
                        fillRule="evenodd" 
                        d="M8.478 1.6a.75.75 0 01.273 1.025 3.72 3.72 0 00-.425 1.122c.058.057.118.114.18.168A4.491 4.491 0 0112 2.25c1.413 0 2.673.651 3.497 1.668.06-.054.12-.11.178-.167a3.717 3.717 0 00-.426-1.126.75.75 0 111.298-.75 5.22 5.22 0 01.671 2.045.75.75 0 01-.187.582c-.241.27-.505.52-.787.749a4.495 4.495 0 01.216 2.1c-.106.792-.753 1.295-1.417 1.403-.182.03-.364.057-.547.081.152.227.273.476.359.741a23.122 23.122 0 003.832-.802 23.241 23.241 0 00-.345-2.634.75.75 0 011.474-.28c.21 1.115.348 2.256.404 3.418a.75.75 0 01-.516.749c-1.527.5-3.119.855-4.76 1.05-.074.38-.22.735-.423 1.05a24.61 24.61 0 015.943 1.358.75.75 0 01.492.75 24.665 24.665 0 01-1.189 6.25.75.75 0 01-1.425-.47 23.141 23.141 0 001.077-5.307c-.5-.168-1.009-.32-1.524-.454.068.234.104.484.104.746 0 3.956-2.521 7.5-6 7.5-3.478 0-6-3.544-6-7.5 0-.262.037-.511.104-.746-.514.134-1.022.286-1.522.454a23.14 23.14 0 001.077 5.308.75.75 0 01-1.425.468 24.663 24.663 0 01-1.19-6.25.75.75 0 01.493-.749 24.593 24.593 0 014.964-1.24h.01c.321-.046.644-.085.969-.118a2.982 2.982 0 01-.424-1.05 24.614 24.614 0 01-4.76-1.05.75.75 0 01-.516-.75c.057-1.161.194-2.302.405-3.417a.75.75 0 011.474.28c-.164.862-.28 1.74-.345 2.634 1.237.37 2.517.641 3.832.802.085-.265.207-.514.359-.74a18.732 18.732 0 01-.547-.082c-.664-.108-1.311-.611-1.417-1.403a4.535 4.535 0 01.217-2.103 6.788 6.788 0 01-.788-.751.75.75 0 01-.187-.583 5.22 5.22 0 01.67-2.04.75.75 0 011.026-.273z" 
                        clipRule="evenodd" />
                      </svg>
                    </div>
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
          <Tab className={"group bg-white bg-opacity-0 hover:bg-opacity-5 focus:bg-opacity-0 p-8 -mt-1 mb-4 align-top focus:border-t-4 focus:border-mango-green focus:border-opacity-100"}>

          <dl className="">
            {featureThree.map((featureThree) => (
              <div className="text-left" key={featureThree.name}>
                <dt>
                  <div className="mb-3 flex items-center justify-center h-10 w-10 rounded-lg text-white text-opacity-40 bg-white bg-opacity-10 group-focus:bg-gradient-to-tr from-mango-green to-mango-orange group-focus:text-opacity-90 group-hover:shadow-lg transition-all duration-150 ease-in-out">
                    <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                    className="w-6 h-6">
                      <path 
                      fillRule="evenodd" 
                      d="M8.478 1.6a.75.75 0 01.273 1.025 3.72 3.72 0 00-.425 1.122c.058.057.118.114.18.168A4.491 4.491 0 0112 2.25c1.413 0 2.673.651 3.497 1.668.06-.054.12-.11.178-.167a3.717 3.717 0 00-.426-1.126.75.75 0 111.298-.75 5.22 5.22 0 01.671 2.045.75.75 0 01-.187.582c-.241.27-.505.52-.787.749a4.495 4.495 0 01.216 2.1c-.106.792-.753 1.295-1.417 1.403-.182.03-.364.057-.547.081.152.227.273.476.359.741a23.122 23.122 0 003.832-.802 23.241 23.241 0 00-.345-2.634.75.75 0 011.474-.28c.21 1.115.348 2.256.404 3.418a.75.75 0 01-.516.749c-1.527.5-3.119.855-4.76 1.05-.074.38-.22.735-.423 1.05a24.61 24.61 0 015.943 1.358.75.75 0 01.492.75 24.665 24.665 0 01-1.189 6.25.75.75 0 01-1.425-.47 23.141 23.141 0 001.077-5.307c-.5-.168-1.009-.32-1.524-.454.068.234.104.484.104.746 0 3.956-2.521 7.5-6 7.5-3.478 0-6-3.544-6-7.5 0-.262.037-.511.104-.746-.514.134-1.022.286-1.522.454a23.14 23.14 0 001.077 5.308.75.75 0 01-1.425.468 24.663 24.663 0 01-1.19-6.25.75.75 0 01.493-.749 24.593 24.593 0 014.964-1.24h.01c.321-.046.644-.085.969-.118a2.982 2.982 0 01-.424-1.05 24.614 24.614 0 01-4.76-1.05.75.75 0 01-.516-.75c.057-1.161.194-2.302.405-3.417a.75.75 0 011.474.28c-.164.862-.28 1.74-.345 2.634 1.237.37 2.517.641 3.832.802.085-.265.207-.514.359-.74a18.732 18.732 0 01-.547-.082c-.664-.108-1.311-.611-1.417-1.403a4.535 4.535 0 01.217-2.103 6.788 6.788 0 01-.788-.751.75.75 0 01-.187-.583 5.22 5.22 0 01.67-2.04.75.75 0 011.026-.273z" 
                      clipRule="evenodd" />
                    </svg>
                  </div>

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

      <Tab.Panels className={"max-w-7xl mx-auto"}>
        <Tab.Panel>

        <div className="mt-20 w-screen m-auto rounded-2xl shadow-xl">
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

        <div className="mt-20 w-screen m-auto rounded-2xl shadow-xl">
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

        <div className="mt-20 w-screen m-auto rounded-2xl shadow-xl">
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
