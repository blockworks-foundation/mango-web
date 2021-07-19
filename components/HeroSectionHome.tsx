import Button from './Button'
import Link from './Link'

const HeroSectionHome = () => {
  return (
    <div className="">
      <div className="relative bg-th-bkg-1 overflow-hidden">
        <div className="relative pt-6 pb-16 sm:pb-24">
          <main className="mt-16 sm:mt-16">
            <div className="mx-auto max-w-7xl">
              <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                <div className="pl-4 ml-6 sm:pr-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:my-24">
                  <div>
                    <h1 className="mb-3 lg:text-5xl md:text-4xl sm:text-4xl xs:text-3xl text-white font-bold font-heading">
                      Long &amp; short everything.
                    </h1>

                    <p className="mb-8 text-gray-400 lg:text-2xl md:text-2xl sm:text-2xl xs:text-lg">
                      Community governed{' '}
                      <span className="text-yellow-300 font-bold">·</span>{' '}
                      Lightning fast{' '}
                      <span className="text-yellow-300 font-bold">·</span>{' '}
                      Near-zero fees
                    </p>

                    <div className="flex lg:flex-row md:flex-row lg:justify-start md:justify-center sm:justify-center">
                      <Button>Start trading</Button>
                      <Link>Explore the docs</Link>
                    </div>

                    <p className="mt-16 text-sm text-gray-400 uppercase tracking-wide font-semibold sm:mt-16">
                      Powered by
                    </p>
                    <div className="mt-5 w-full sm:mx-auto sm:max-w-lg lg:ml-0 md:w-1/2 sm:w-1/2">
                      <div className="flex">
                        <div className="flex justify-center">
                          <a
                            className="hover:opacity-70"
                            href="https://solana.com/"
                          >
                            <img
                              className="h-8 sm:h-8"
                              src="../logo_solana.svg"
                              alt="Solana"
                            />
                          </a>
                        </div>
                        <div className="flex justify-center -my-1 mx-10">
                          <a
                            className="hover:opacity-70"
                            href="https://projectserum.com/#/"
                          >
                            <img
                              className="h-9 sm:h-10"
                              src="../logo_serum.svg"
                              alt="Serum"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-16 sm:mt-24 mt- lg:-mt-20 lg:col-span-6">
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
