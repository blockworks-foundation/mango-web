// import { Tab } from '@headlessui/react'

//import {
//  ReceiptTaxIcon,
//  LightningBoltIcon,
//  CurrencyDollarIcon,
// } from '@heroicons/react/outline'



function FeaturesTwoGrid() {
  return (
    <>
       <section className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-1 md:col-span-3 sm:col-span-3 xs:col-span-3">
            <div className="z-10 bg-mango-bkg-2 border border-mango-bkg-3 bg-product-one bg-cover bg-no-repeat h-350 w-full shadow-md rounded-xl overflow-hidden mx-auto">
              <div className="py-4 px-8 mt-3">
                <div className="flex flex-col mb-8">
                  <h2 className="text-yellow-300 font-semibold text-xl tracking-wide mb-2">
                    You are in control.
                  </h2>
                  <p className="text-white text-opacity-50 text-lg">
                    You have self-custody of your assets; no more centralized
                    counter-party risk.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 md:col-span-3 sm:col-span-3 xs:col-span-3">
            <div className="z-50 bg-mango-bkg-2 border border-mango-bkg-3 bg-product-two bg-cover bg-no-repeat h-350 w-full shadow-md rounded-xl overflow-hidden mx-auto">
              <div className="py-4 px-8 mt-3">
                <div className="flex flex-col mb-8">
                  <h2 className="text-yellow-300 font-semibold text-xl tracking-wide mb-2">
                    Fully customize your experience.
                  </h2>
                  <p className="text-white text-opacity-50 text-lg">
                    Complete control over layout, theme, and your trading view.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          <div className="lg:col-span-2 md:col-span-3 sm:col-span-3 xs:col-span-3">
            <div className="z-10 bg-mango-bkg-2 border border-mango-bkg-3 bg-product-three bg-cover bg-no-repeat h-350 w-full shadow-md rounded-xl overflow-hidden mx-auto">
              <div className="py-4 px-8 mt-3">
                <div className="flex flex-col mb-8">
                  <h2 className="text-yellow-300 font-semibold text-xl tracking-wide mb-2">
                    Trade management simplified.
                  </h2>
                  <p className="text-white text-opacity-50 text-lg">
                    Track your futures positions, liabilities, create
                    sub-accounts and track progress overtime.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-1 md:col-span-3 sm:col-span-3 xs:col-span-3">
            <div className="z-10 bg-mango-bkg-2 border border-mango-bkg-3 bg-product-four bg-cover bg-no-repeat h-350 w-full shadow-md rounded-xl overflow-hidden mx-auto">
              <div className="py-4 px-8 mt-3">
                <div className="flex flex-col mb-8">
                  <h2 className="text-yellow-300 font-semibold text-xl tracking-wide mb-2">
                    Organically grown, fully opensource.
                  </h2>
                  <p className="text-white text-opacity-50 text-lg">
                    Mango markets are grown organically with no pesticides,
                    trade and manage your assets with the best in class user
                    interface, built by traders for traders.
                  </p>
                  <br />
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
