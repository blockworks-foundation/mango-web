import { useState } from 'react'
//import MangoPill from '../components/MangoPill'
import Button from './Button'
import ButtonWhite from './ButtonWhite'


//const doNothing = (e) => {
//  e.stopPropagation()
//}

const FooterSection = () => {
  const [done, setDone] = useState(false)
  const [email, setEmail] = useState('')

  const handleChange = (e) => {
    setEmail(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    await fetch('/api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    })

    setDone(true)
  }

  return (
    <>
    <div className="z-50 mx-auto max-w-7xl pt-0 pb-16 px-8 my-16 mt-0">
        <div className=" h-80 bg-bkg-2 border border-mango-orange rounded-xl shadow-md overflow-hidden lg:grid lg:grid-cols-2 lg:gap-2 mt-8 bg-bg-cta bg-cover bg-bottom bg-no-repeat">
          <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
            <div className="lg:self-center">
              <h2 className="text-5xl font-extrabold text-white">
                <span className="block">
                  Every market cross-collateralized.
                </span>
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

    <div className="bg-bg-texture bg-cover bg-bottom bg-no-repeat">
      <div className="max-w-7xl mx-auto ">
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
            <h2 className="inline text-3xl font-extrabold sm:block sm:text-4xl">
              Want product news and updates?{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-mango-red via-mango-yellow to-mango-green sm:block sm:text-4xl">
                Sign up for our newsletter.
              </span>
            </h2>

            <form className="mt-8 sm:flex" onSubmit={handleSubmit}>
              <label className="sr-only">Email address</label>
              {done ? (
                <span>Thank you for signing up! 🎉</span>
              ) : (
                <>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="w-full px-5 py-2 placeholder-gray-400 text-black text-opacity-80 sm:max-w-xs border-gray-300 rounded-full focus:outline-none"
                    placeholder="Drop us your email..."
                    value={email}
                    onChange={handleChange}
                  />
                  <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                    <Button>
                      <span className="">Sign me up!</span>
                    </Button>
                  </div>
                </>
              )}
            </form>
            <div className="w-full mt-4">
              <p className="text-xl text-white text-opacity-50">
                We promise to never spam and only send alpha.
              </p>
            </div>
          </div>
        </section>

        <footer className="py-20 px-4">
          <div className="px-4 py-8 mx-auto">
            <div className="flex flex-wrap -mx-4 mb-8 lg:mb-16">
              <div className="w-full lg:w-1/3 px-4 mb-12 lg:mb-0">
                <a className="text-gray-600 text-2xl leading-none" href="#">
                  <img
                    className="h-8"
                    src="img/logo_mango.svg"
                    alt=""
                    width="auto"
                  />
                </a>
                <p className="mt-5 mb-6 max-w-xs text-gray-500 leading-loose">
                  Mango is a decentralized autonomous organization.{' '}
                </p>
                <div className="flex flex-row">
                  <a
                    className="flex h-6 w-6 m-2"
                    href="https://github.com/blockworks-foundation"
                  >
                    <img className="mx-auto" src="socials/github.svg" />
                  </a>
                  <a
                    className="flex h-6 w-6 m-2"
                    href="https://discord.gg/2uwjsBc5yw"
                  >
                    <img className="mx-auto" src="socials/discord.svg" />
                  </a>
                  <a
                    className="flex h-6 w-6 m-2"
                    href="https://twitter.com/mangomarkets"
                  >
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
                          className="text-gray-500 hover:text-gray-600 transition duration-100 ease-in-out"
                          href="https://trade.mango.markets/"
                        >
                          Spot Markets
                        </a>
                      </li>
                      <li className="mb-4">
                        <a
                          className="text-gray-500 hover:text-gray-600 transition duration-100 ease-in-out"
                          href="https://trade.mango.markets/perp/BTC"
                        >
                          Perpetual Futures
                        </a>
                      </li>
                      <li className="mb-4">
                        <a
                          className="text-gray-500 hover:text-gray-600 transition duration-100 ease-in-out"
                          href="https://trade.mango.markets/borrow"
                        >
                          Decentralized Lending
                        </a>
                      </li>
                      <li className="mb-4">
                        <a
                          className="text-gray-500 hover:text-gray-600 transition duration-100 ease-in-out"
                          href="https://gitlab.com/OpinionatedGeek/mango-explorer/-/blob/master/Quickstart.md"
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
                          className="text-gray-500 hover:text-gray-600 transition duration-100 ease-in-out"
                          href="https://docs.mango.markets/"
                        >
                          Explore the docs
                        </a>
                      </li>
                      <li className="mb-4">
                        <a
                          className="text-gray-500 hover:text-gray-600 transition duration-100 ease-in-out"
                          href="https://trello.com/c/0iz8GfW6/32-how-to-use-this-board"
                        >
                          Start contributing
                        </a>
                      </li>
                      <li className="mb-4">
                        <a
                          className="text-gray-500 hover:text-gray-600 transition duration-100 ease-in-out"
                          href="https://gitlab.com/OpinionatedGeek/mango-explorer/-/blob/master/mango/marketmaking/simplemarketmaker.py"
                        >
                          Become a market maker
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
                          className="text-gray-500 hover:text-gray-600 transition duration-100 ease-in-out"
                          href="https://discord.gg/2uwjsBc5yw"
                        >
                          Discord
                        </a>
                      </li>
                      <li className="mb-4">
                        <a
                          className="text-gray-500 hover:text-gray-600 transition duration-100 ease-in-out"
                          href="https://twitter.com/mangomarkets"
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
              <p className="lg:text-center text-sm text-white text-opacity-20">
                All rights reserved &copy; Blockworks Foundation 2021
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
    </>
  )
}

export default FooterSection
