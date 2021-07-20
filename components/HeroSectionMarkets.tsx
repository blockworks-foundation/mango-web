import Button from "./Button"
import Link from './Link'


const HeroSectionMarkets = () => {
  return (
    <div className="">
      <section className="bg-hero-img bg-no-repeat bg-cover">
        <div className="container px-4 mx-auto">
          <div className="relative pt-12 md:pt-48 pb-32 lg:pb-48 mb-48 lg:mb-48">
            <div className="max-w-2xl mb-16 mx-auto text-center">
              <h2 className="text-5xl mb-6 leading-tight font-semibold font-heading">
                Simple, intuitive, and fast.{' '}
              </h2>
              <p className="mb-8 text-gray-400 leading-relaxed">
                The Mango margin protocol is a fully open-source margin trading
                exchange. Its best in class user interface provides access to
                deep liquidity and high leverage for traders, built by traders.{' '}
              </p>
              <div className="flex lg:flex-row md:flex-row justify-center">
                <Button>Start trading</Button>
                <Link>Learn to trade on Mango</Link>
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
