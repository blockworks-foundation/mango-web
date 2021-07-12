const HeroSectionHome = () => {
  return (
    <div className="">
      <div className="relative bg-th-bkg-1 overflow-hidden">
        <div className="relative pt-6 pb-16 sm:pb-24">
          <main className="mt-16 sm:mt-16">
            <div className="mx-auto max-w-7xl">
              <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                <div className="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:my-24">
                  <div>
                    <h1 className="mb-3 text-4xl lg:text-5xl text-white font-bold font-heading">
                      Long &amp; short everything.
                    </h1>

                    <p className="mb-8 text-2xl text-gray-400">
                      Community governed{' '}
                      <span className="text-yellow-300 font-bold">·</span>{' '}
                      Lightning fast{' '}
                      <span className="text-yellow-300 font-bold">·</span>{' '}
                      Near-zero fees
                    </p>

                    <div>
                      <button className="inline-flex items-center px-8 py-2 text-lg text-white font-bold bg-gradient-to-br from-yellow-200 via-lime-400 to-green-500 hover:from-yellow-100 via-lime-300 to-green-400 rounded-full transition duration-100">
                        <span className="pr-4">Start trading</span>
                        <svg
                          width="9"
                          height="16"
                          viewBox="0 0 9 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 1.6665L7.8963 7.99984L1 14.3332"
                            stroke="white"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                      <button className="inline-flex items-center mx-4 px-8 py-2 text-lg text-gray-400 font-bold bg-gray-600 hover:bg-gray-700 hover:text-gray-100 rounded-full transition duration-100">
                        Explore the docs
                      </button>
                    </div>

                    <p className="mt-16 text-sm text-gray-400 uppercase tracking-wide font-semibold sm:mt-16">
                      Powered by
                    </p>
                    <div className="mt-5 w-full sm:mx-auto sm:max-w-lg lg:ml-0">
                      <div className="flex">
                        <div className="flex justify-center">
                          <img
                            className="h-8 sm:h-8"
                            src="../logo_solana.svg"
                            alt="Solana"
                          />
                        </div>
                        <div className="flex justify-center -my-1 mx-10">
                          <img
                            className="h-9 sm:h-10"
                            src="../logo_serum.svg"
                            alt="Serum"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6">
                  <div className="z-10 relative pl-4 -mr-40 sm:mx-auto sm:max-w-3xl sm:px-0 lg:max-w-none lg:h-full">
                    <img
                      className="lg:h-750 lg:w-auto lg:max-w-none"
                      src="../img/herp_image_main_flat.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default HeroSectionHome
