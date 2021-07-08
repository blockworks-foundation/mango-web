import MangoPill from '../components/MangoPill'

const FooterSection = () => {
  return (
    <div className="bg-bg-texture bg-cover bg-bottom bg-no-repeat">
      <div className="max-w-7xl mx-auto ">
        <section className="py-8 px-4">
          <div className="flex flex-wrap items-center text-center md:text-left -mx-2">
            <div className="lg:w-1/2 px-2 mt-10 lg:mt-0 order-1 lg:order-none">
              <h2 className="text-4xl mb-6 font-semibold font-heading">
                Keep in touch through email.
              </h2>
              <form className="w-full max-w-lg mx-auto sm:mx-0">
                <div className="flex flex-wrap">
                  <div className="w-full md:w-2/3 mb-4">
                    <input
                      className="appearance-none block w-full py-3 px-4 leading-snug text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-green-500 rounded-l-full focus:outline-none"
                      type="text"
                      placeholder="Your email @protnmail.com.."
                    />
                  </div>
                  <div className="w-full md:w-1/3 mb-4">
                    <button
                      className="inline-block w-full py-4 px-8 leading-none text-white bg-gradient-to-br from-yellow-200 via-lime-400 to-green-500 
 hover:bg-indigo-700 font-semibold rounded-r-full"
                    >
                      Subscribe
                    </button>
                  </div>
                  <div className="w-full">
                    <p>We promise to never spam and only send alpha.</p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
        <footer className="py-20">
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap -mx-4 mb-8 lg:mb-16">
              <div className="w-full lg:w-1/3 px-4 mb-12 lg:mb-0">
                <a className="text-gray-600 text-2xl leading-none" href="#">
                  <img
                    className="h-8"
                    src="img/logoMango.png"
                    alt=""
                    width="auto"
                  />
                </a>
                <p className="mt-5 mb-6 max-w-xs text-gray-500 leading-loose">
                  Mango is a decentralized autonomous organization.{' '}
                </p>
                <div>
                  <a className="inline-block h-6 mr-8" href="#">
                    <img className="mx-auto" src="socials/github.svg" />
                  </a>
                  <a className="inline-block h-6 mr-8" href="#">
                    <img className="mx-auto" src="socials/discord.svg" />
                  </a>
                  <a className="inline-block h-6" href="#">
                    <img className="mx-auto" src="socials/twitter.svg" />
                  </a>
                </div>
              </div>
              <div className="w-full lg:w-2/3 px-4">
                <div className="flex flex-wrap justify-between">
                  <div className="w-1/2 lg:w-1/4 mb-8 lg:mb-0">
                    <h3 className="mb-6 text-lg font-bold font-heading">
                      Products
                    </h3>
                    <ul className="text-sm">
                      <li className="mb-4">
                        <a
                          className="text-gray-500 hover:text-gray-600"
                          href="#"
                        >
                          Spot Markets
                        </a>
                      </li>
                      <li className="mb-4">
                        <a
                          className="text-gray-500 hover:text-gray-600"
                          href="#"
                        >
                          Perpetual Futures
                        </a>{' '}
                        <MangoPill />
                      </li>
                      <li className="mb-4">
                        <a
                          className="text-gray-500 hover:text-gray-600"
                          href="#"
                        >
                          Decentralized Lending
                        </a>
                      </li>
                      <li className="mb-4">
                        <a
                          className="text-gray-500 hover:text-gray-600"
                          href="#"
                        >
                          Liquidator Program
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="w-1/2 lg:w-1/4 mb-8 lg:mb-0">
                    <h3 className="mb-6 text-lg font-bold font-heading">
                      Developers
                    </h3>
                    <ul className="text-sm">
                      <li className="mb-4">
                        <a
                          className="text-gray-500 hover:text-gray-600"
                          href="#"
                        >
                          Explore the docs
                        </a>
                      </li>
                      <li className="mb-4">
                        <a
                          className="text-gray-500 hover:text-gray-600"
                          href="#"
                        >
                          Interested in contributing?
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="w-1/2 lg:w-1/4">
                    <h3 className="mb-6 text-lg font-bold font-heading">
                      Contact
                    </h3>
                    <ul className="text-sm">
                      <li className="mb-4">
                        <a
                          className="text-gray-500 hover:text-gray-600"
                          href="#"
                        >
                          Discord
                        </a>
                      </li>
                      <li className="mb-4">
                        <a
                          className="text-gray-500 hover:text-gray-600"
                          href="#"
                        >
                          Twitter
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-8">
              <p className="lg:text-center text-sm text-gray-400">
                All rights reserved &copy; Blockworks Foundation 2021
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default FooterSection
