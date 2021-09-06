import Button from './Button'
import ButtonWhite from './ButtonWhite'

import { ReceiptTaxIcon, LightningBoltIcon, CurrencyDollarIcon, LibraryIcon } from '@heroicons/react/outline'
import LinkLeft from './LinkLeft'


const features = [
  {
    name: 'Maximum capital efficiency.',
    description: "Every market is cross-collateralized. Mango's risk engine let's you utilize all your assets and derivative contracts as collateral.",
    icon: CurrencyDollarIcon,
  },
  {
    name: 'Sub-second latency.',
    description:
      'Instant order execution at the price of less than a cent. Low latency allows market makers to post tight spreads on the books. Oh, and liquidations are instant as well, so watch your exposure.',
    icon: LightningBoltIcon,
  },
  {
    name: 'The lowest fees.',
    description:
      'Trade with the lowest fee possible. SRM deposits are pooled for a collective discount. Mango is the first protocol to charge zero fees on margin borrowing & lending.',
    icon: ReceiptTaxIcon,
  },
  {
    name: 'Spot & perpetual markets.',
    description:
      'Trade spot markets and derivitive assets all in one unified experience. Spot margin with up to 5x leverage, perpetuals futures with up to 10x.',
    icon: LibraryIcon,
  },
]

const FeatureSection = () => {
  return (
    <>
    <div className="bg-th-bkg-3 transform -skew-y-3 pt-16 pb-32 lg:pb-48 mb-48 lg:mb-48 -mt-64">
      <div className="max-w-7xl mx-auto px-4 transform skew-y-3">
      <section className="py-16 md:py-28 px-4">

      <div className="relative pt-16 pb-12">
      <div className="relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <div>

              <div className="mt-6">
                <h2 className="lg:text-4xl sm:text-3xl text-3xl text-white font-bold font-heading">
                  Completely permissionless.
                </h2>
                <p className="mt-4 text-xl text-gray-400">
                  No KYC, no personal information held, all data is on-chain. Trade spot margined markets and leveraged perpetual futures all cross-collateralized with up to 10x leverage.  
                </p>
                <div className="mt-6">
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://trade.mango.markets/accounts"
                  >
                  <Button>Start trading today</Button>
                </a>
                </div>
              </div>


            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-650">
              <img
                className="-mt-20 w-full rounded-xl shadow-xl lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src="../img/feature-cta2.png"
                alt="mango markets"
              />
            </div>
          </div>
        </div>
      </div>
      
    </div>
    <div className="overflow-hidden">
      <div className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <svg
          className="absolute top-0 left-full transform -translate-x-1/2 -translate-y-3/4 lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="8b1b5f72-e944-4457-af67-0c6d15a99f38"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} className="text-th-fgd-4" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={784} fill="url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)" />
        </svg>

        <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div className="lg:col-span-1">
            <h2 className="lg:text-4xl sm:text-3xl text-3xl text-white font-bold font-heading">
              Love trading again.
            </h2>
            <div className="pt-6">
              <blockquote>
                <div>
                  <p className="text-base text-gray-500">
                    &ldquo;Cras velit quis eros eget rhoncus lacus ultrices sed diam. Sit orci risus aenean curabitur
                    donec aliquet. Mi venenatis in euismod ut.&rdquo;
                  </p>
                </div>
                <footer className="mt-3">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <img
                        className="h-6 w-6 rounded-full"
                        src="https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                        alt=""
                      />
                    </div>
                    <div className="text-base font-bold text-mango-yellow">@troll_arse</div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
          
          <dl className="mt-10 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:mt-0 lg:col-span-2">
            {features.map((feature) => (
              <div key={feature.name}>
                <dt>
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-bkg-3 text-mango-yellow">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="mt-5 text-xl my-3 font-semibold font-heading">{feature.name}</p>
                </dt>
                <dd className="mt-2 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
    </section>
      </div>
    </div>
            <section className="py-16 md:py-28 px-4">
            <div className="relative pt-16 pb-12">
          <div className="relative">
            <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
              <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
                <div>
    
                  <div className="mt-6">
                    <h2 className="lg:text-4xl sm:text-3xl text-3xl text-white font-bold font-heading">
                    More than an exchange.
                    </h2>
                    <p className="mt-4 text-xl text-gray-400">
                    Mango gives full control and tracking over assets right from the account hub. Earn interest on deposits and borrow against collateral all in one single place.
                    </p>
                    <div className="mt-6">
                      <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://trade.mango.markets/accounts"
                      >
                      <Button>Open a 🥭 account</Button>
                    </a>
                    </div>
                  </div>
                  <div className="mt-8 pt-6">
                  <blockquote>
                    <div>
                      <p className="text-base text-gray-400">
                        &ldquo;Cras velit quis eros eget rhoncus lacus ultrices sed diam. Sit orci risus aenean curabitur
                        donec aliquet. Mi venenatis in euismod ut.&rdquo;
                      </p>
                    </div>
                    <div className="z-0 relative -bottom-72 -right-96 lg:-bottom-96 ">
                      <div className="absolute bottom-4 left-8 w-450 h-450 bg-mango-yellow mix-blend-screen rounded-full filter blur-3xl opacity-5 animate-blob"></div>
                      <div className="absolute bottom-4 w-450 h-450 bg-mango-red mix-blend-screen rounded-full filter blur-2xl opacity-20 animate-blob animation-delay-4000"></div>
                      <div className="absolute bottom-8 left-20 w-450 h-450 bg-mango-green mix-blend-screen rounded-full filter blur-2xl opacity-10 animate-blob animation-delay-2000"></div>
                    </div>
                    <footer className="mt-3">
                      <div className="flex items-center space-x-3">
                        <div className="flex-shrink-0">
                          <img
                            className="h-6 w-6 rounded-full"
                            src="https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                            alt=""
                          />
                        </div>
                        <div className="text-base font-bold text-mango-yellow">@troll_arse</div>
                      </div>
                    </footer>
                  </blockquote>
                </div>
                </div>
              </div>
              
              <div className="mt-12 sm:mt-16 lg:mt-0">
                <div className="z-10 pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-650">
                  <img
                    className="-mt-12 w-full rounded-xl shadow-xl lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                    src="../img/feature-cta1.png"
                    alt="Inbox user interface"
                  />
                </div>


              </div>
            </div>
          </div>
        </div>
       
            </section>
    
            <section className="max-w-7xl mx-auto px-8">
              
              <div className="grid grid-cols-3 gap-6 mb-6">
                <div className="lg:col-span-1 md:col-span-3 sm:col-span-3 xs:col-span-3">
                  <div className="z-10 bg-th-fgd-4 border border-bkg-3 bg-product-one bg-cover bg-no-repeat h-650 w-full shadow-md rounded-xl overflow-hidden mx-auto">
                    <div className="py-4 px-8 mt-3">
                      <div className="flex flex-col mb-8">
                        <h2 className="text-yellow-300 font-semibold text-xl tracking-wide mb-2">
                          Completely self-custododied. 
                        </h2>
                        <p className="text-white text-opacity-50 text-lg">
                          You are in control of your assets; no more centralized
                          counter-party risk.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-2 md:col-span-3 sm:col-span-3 xs:col-span-3">
                  <div className="z-50 bg-th-fgd-4 border border-bkg-3 bg-product-two bg-cover bg-no-repeat h-650 w-full shadow-md rounded-xl overflow-hidden mx-auto">
                    <div className="py-4 px-8 mt-3">
                      <div className="flex flex-col mb-8">
                        <h2 className="text-yellow-300 font-semibold text-xl tracking-wide mb-2">
                          Fully control your experience.
                        </h2>
                        <p className="text-white text-opacity-50 text-lg">
                          Complete control over layout, theme, and your trading
                          view.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    
              <div className="grid grid-cols-3 gap-6">
                <div className="lg:col-span-2 md:col-span-3 sm:col-span-3 xs:col-span-3">
                  <div className="z-10 bg-th-fgd-4 border border-bkg-3 bg-product-three bg-cover bg-no-repeat h-650 w-full shadow-md rounded-xl overflow-hidden mx-auto">
                    <div className="py-4 px-8 mt-3">
                      <div className="flex flex-col mb-8">
                        <h2 className="text-yellow-300 font-semibold text-xl tracking-wide mb-2">
                          Trade management simplified.
                        </h2>
                        <p className="text-white text-opacity-50 text-lg">
                          Track your futures positions, liabilities, create sub-accounts and track progress overtime. 
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-1 md:col-span-3 sm:col-span-3 xs:col-span-3">
                  <div className="z-10 bg-th-fgd-4 border border-bkg-3 bg-product-four bg-cover bg-no-repeat h-650 w-full shadow-md rounded-xl overflow-hidden mx-auto">
                    <div className="py-4 px-8 mt-3">
                      <div className="flex flex-col mb-8">
                        <h2 className="text-yellow-300 font-semibold text-xl tracking-wide mb-2">
                          Organically grown, fully opensource.
                        </h2>
                        <p className="text-white text-opacity-50 text-lg">
                          Mango markets are grown organically with no pesticides, trade and manage your assets with the best in class user interface, built by traders for traders.
                        </p>
                        <br />
                        <a
                              rel="noreferrer"
                              target="_blank"
                              href="https://github.com/blockworks-foundation/mango-ui-v3"
                            >
                              <LinkLeft>Run it yourself locally</LinkLeft>
                            </a>                      
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
    
            <div className="z-50 mx-auto max-w-7xl py-16 px-8 my-16">
              <div className=" h-80 bg-bkg-2 border border-mango-orange rounded-xl shadow-md overflow-hidden lg:grid lg:grid-cols-2 lg:gap-2 mt-8 bg-bg-cta bg-cover bg-bottom bg-no-repeat">
                      <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
                        <div className="lg:self-center">
                          <h2 className="text-5xl font-extrabold text-white">
                            <span className="block">Every market cross-collateralized.</span>
                          </h2>

                          <div className="pt-8">
                            <a
                              rel="noreferrer"
                              target="_blank"
                              href="https://discord.gg/67jySBhxrgs"
                            >
                              <ButtonWhite>Start trading now</ButtonWhite>
                            </a>
                          </div>
                        </div>
                      </div>
                      
                      <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
                        <img
                          className="transform translate-x-2 translate-y-2 object-cover object-left-top sm:translate-x-12 lg:translate-y-16"
                          src="../img/tilted.png"
                          alt="mango markets"
                        />
                      </div>
                </div>

              </div>
              </>
  )
}

export default FeatureSection
