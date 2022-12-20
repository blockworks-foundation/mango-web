// import { Tab } from '@headlessui/react'

//import {
//  ReceiptTaxIcon,
//  LightningBoltIcon,
//  CurrencyDollarIcon,
// } from '@heroicons/react/outline'

const gridItemOne = [
  {
    name: 'Maximum capital efficiency.',
    description:
      "Every market is cross-collateralized. Mango's risk engine let's you utilize all your assets and derivative contracts as collateral.",
    //icon: CurrencyDollarIcon,
  },
]
const gridItemTwo = [
  {
    name: 'LOL.',
    description:
      "Every market is cross-collateralized. Mango's risk engine let's you utilize all your assets and derivative contracts as collateral.",
    //icon: CurrencyDollarIcon,
  },
]
const gridItemThree = [
  {
    name: 'Nice.',
    description:
      "Every market is cross-collateralized. Mango's risk engine let's you utilize all your assets and derivative contracts as collateral.",
    //icon: CurrencyDollarIcon,
  },
]
const gridItemFour = [
  {
    name: 'Maximum capital efficiency.',
    description:
      "Every market is cross-collateralized. Mango's risk engine let's you utilize all your assets and derivative contracts as collateral.",
    //icon: CurrencyDollarIcon,
  },
]

function FeaturesTwoGrid() {
  return (
    <>
       <section className="max-w-7xl mx-auto px-8">
        <div className="z-20 grid grid-cols-3 gap-6 mb-6 overflow-hidden">

          <div className="lg:col-span-1 md:col-span-3 sm:col-span-3 xs:col-span-3">
            <div className="z-10 p-3 bg-white backdrop-blur-xl bg-opacity-5 border border-white border-opacity-5 h-350 w-full shadow-md rounded-xl overflow-hidden mx-auto">
              <div className="py-4 px-8 mt-3">
                <div className="flex flex-col mb-8">

                  <dl className="">
                      {gridItemOne.map((gridItemOne) => (
                        <div className="text-left" key={gridItemOne.name}>
                          <dt>
                            {/* 
                            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-bkg-3 text-mango-yellow">
                              <feature.icon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </div>
                            */}
                            <h2 className="text-yellow-300 font-semibold text-xl tracking-wide mb-2">
                            {gridItemOne.name}
                            </h2>
                          </dt>
                          <dd className="text-white text-opacity-50 text-lg">
                            {gridItemOne.description}
                            </dd>
                        </div>
                      ))}
                    </dl>

                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 md:col-span-3 sm:col-span-3 xs:col-span-3">
            <div className="z-10 p-3 bg-white backdrop-blur-xl bg-opacity-5 border border-white border-opacity-5 h-350 w-full shadow-md rounded-xl overflow-hidden mx-auto">
              <div className="py-4 px-8 mt-3">
                <div className="flex flex-col mb-8">
                  
                <dl className="">
                      {gridItemTwo.map((gridItemTwo) => (
                        <div className="text-left" key={gridItemTwo.name}>
                          <dt>
                            {/* 
                            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-bkg-3 text-mango-yellow">
                              <feature.icon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </div>
                            */}
                            <h2 className="text-yellow-300 font-semibold text-xl tracking-wide mb-2">
                            {gridItemTwo.name}
                            </h2>
                          </dt>
                          <dd className="text-white text-opacity-50 text-lg">
                            {gridItemTwo.description}
                            </dd>
                        </div>
                      ))}
                    </dl>

                </div>
              </div>
            </div>
          </div>
        </div>



        <div className="z-20 grid grid-cols-3 gap-6">
          <div className="lg:col-span-2 md:col-span-3 sm:col-span-3 xs:col-span-3">
            <div className="z-10 p-3 bg-white backdrop-blur-xl bg-opacity-5 border border-white border-opacity-5 h-350 w-full shadow-md rounded-xl overflow-hidden mx-auto">
              <div className="py-4 px-8 mt-3">
                <div className="flex flex-col mb-8">
                  
                <dl className="">
                      {gridItemThree.map((gridItemThree) => (
                        <div className="text-left" key={gridItemThree.name}>
                          <dt>
                            {/* 
                            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-bkg-3 text-mango-yellow">
                              <feature.icon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </div>
                            */}
                            <h2 className="text-yellow-300 font-semibold text-xl tracking-wide mb-2">
                            {gridItemThree.name}
                            </h2>
                          </dt>
                          <dd className="text-white text-opacity-50 text-lg">
                            {gridItemThree.description}
                            </dd>
                        </div>
                      ))}
                    </dl>

                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-1 md:col-span-3 sm:col-span-3 xs:col-span-3">
            <div className="z-10 p-3 bg-white backdrop-blur-xl bg-opacity-5 border border-white border-opacity-5 h-350 w-full shadow-md rounded-xl overflow-hidden mx-auto">
              <div className="py-4 px-8 mt-3">
                <div className="flex flex-col mb-8">
                  
                <dl className="">
                      {gridItemFour.map((gridItemFour) => (
                        <div className="text-left" key={gridItemFour.name}>
                          <dt>
                            {/* 
                            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-bkg-3 text-mango-yellow">
                              <feature.icon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </div>
                            */}
                            <h2 className="text-yellow-300 font-semibold text-xl tracking-wide mb-2">
                            {gridItemFour.name}
                            </h2>
                          </dt>
                          <dd className="text-white text-opacity-50 text-lg">
                            {gridItemFour.description}
                            </dd>
                        </div>
                      ))}
                    </dl>

                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  )
}

export default FeaturesTwoGrid;
