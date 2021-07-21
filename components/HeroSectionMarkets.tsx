import Button from './Button'
import Link from './Link'

const HeroSectionMarkets = () => {
  return (
    <div className="">
      <section className="bg-hero-img bg-no-repeat bg-cover bg-top">
        <div className="px-4 mx-auto">
          <div className="relative xs:py-16 sm:py-16 md:py-16 lg:py-16 lg:mb-48 xs:mb-48">
            <div className="max-w-2xl mb-16 mx-auto text-center">
              <h2 className="mb-3 lg:text-5xl md:text-4xl sm:text-4xl xs:text-3xl text-white font-bold font-heading">
                A better trading experience. {' '}
              </h2>
              <p className="text-white text-opacity-50 lg:text-2xl md:text-2xl sm:text-2xl xs:text-lg">
                The Mango margin protocol is a fully open-source margin trading
                exchange. Its best in class user interface provides access to
                deep liquidity and high leverage for traders, built by traders.{' '}
              </p>
              <div className="flex lg:flex-row md:flex-row sm: flex-row xs:flex-col justify-center py-8">
              <a rel="noreferrer" target="_blank" href="https://trade.mango.markets">
                <Button>Start trading</Button>
              </a>
              <a rel="noreferrer" target="_blank" href="https://docs.mango.markets/tutorials/trade-on-mango.markets">
                <div className="xs:relative xs:left-12 lg:left-0 md:left-0 sm:left-0">
                  <Link>Learn to trade on Mango</Link>
                </div>
              </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 
      <section className="py-12 px-3 bg-hero-img bg-no-repeat bg-cover">
          <div className="flex flex-wrap items-center text-center lg:text-left -mx-2">
            <div className="lg:w-1/2 px-2 lg:pr-10 mt-10 lg:mt-0 order-1 lg:order-none">
              <h2 className="text-5xl mb-6 leading-tight font-semibold font-heading">
                Simple, intuitive, and fast.{' '}
              </h2>
              <p className="mb-8 text-gray-400 leading-relaxed">
                The Mango margin protocol is a fully open-source margin trading
                exchange. Its best in class user interface provides access to
                deep liquidity and high leverage for traders, built by traders.{' '}
              </p>
              <div>
                <Button>Start trading</Button>
              </div>
            </div>
          </div>
        </section>
         */}
    </div>
  )
}

export default HeroSectionMarkets
