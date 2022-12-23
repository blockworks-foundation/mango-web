//import { useState } from 'react'
//import Button from '@/components/Button'
import CallToAction from '@/components/CallToAction'
import Logo from '@/components/Logo'
import EmailForm from './EmailForm'


const Footer = () => {

  return (
    <>
    <CallToAction /> 
      <div className="bg-bg-texture bg-cover bg-bottom bg-no-repeat">
        <div className="max-w-7xl mx-auto ">
            <EmailForm />
          <footer className="py-20 px-4">
            <div className="px-4 py-8 mx-auto">
              <div className="flex flex-wrap -mx-4 mb-8 lg:mb-16">
                <div className="w-full lg:w-1/3 px-4 mb-12 lg:mb-0">
                  <a className="text-gray-600 text-2xl leading-none" href="#">
                   <Logo /> {/*
                    <img
                      className="h-1/4 w-auto"
                      src="/assets/images/mango-rainbow.png"
                      alt=""
                      width="auto"
                    />*/} 
                  </a>
                  <p className="mt-5 mb-6 max-w-xs text-white opacity-50 leading-loose">
                    Mango is a decentralized organization building the 
                    next generation of decentralied trading products
                    and infratructure.{' '}
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
                      <h3 className="mb-6 text-lg font-mono text-white opacity-80">
                        Explore
                      </h3>
                      <ul className="text-sm">
                        <li className="mb-4">
                          <a
                            className="text-gray-500 hover:text-gray-600 transition duration-100 ease-in-out"
                            href="https://trade.mango.markets/"
                          >
                            Markets
                          </a>
                        </li>
                        <li className="mb-4">
                          <a
                            className="text-gray-500 hover:text-gray-600 transition duration-100 ease-in-out"
                            href="https://trade.mango.markets/perp/BTC"
                          >
                            Redacted
                          </a>
                        </li>
                        <li className="mb-4">
                          <a
                            className="text-gray-500 hover:text-gray-600 transition duration-100 ease-in-out"
                            href="https://trade.mango.markets/borrow"
                          >
                            Earn
                          </a>
                        </li>
                      </ul>
                      <h3 className="mb-6 text-lg font-mono text-white opacity-80">
                        Infrastructure
                      </h3>
                      <ul className="text-sm">
                        <li className="mb-4">
                          <a
                            className="text-gray-500 hover:text-gray-600 transition duration-100 ease-in-out"
                            href="https://trade.mango.markets/"
                          >
                            Liquidator Program
                          </a>
                        </li>
                        <li className="mb-4">
                          <a
                            className="text-gray-500 hover:text-gray-600 transition duration-100 ease-in-out"
                            href="https://trade.mango.markets/perp/BTC"
                          >
                            Become a Market Maker
                          </a>
                        </li>
                        <li className="mb-4">
                          <a
                            className="text-gray-500 hover:text-gray-600 transition duration-100 ease-in-out"
                            href="https://trade.mango.markets/borrow"
                          >
                            Run it locally
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="w-1/2 lg:w-1/4 mb-8 lg:mb-0">
                      <h3 className="mb-6 text-lg font-mono text-white opacity-80">
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
                            href="https://github.com/blockworks-foundation/mango-explorer/blob/main/docs/MarketmakingIntroduction.md"
                          >
                            Become a market maker
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="w-1/2 lg:w-1/4">
                      <h3 className="mb-6 text-lg font-mono text-white opacity-80">
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
                {/* Do we still want to go with blockworks foundation? should we start up a mango foundation or can we copywrite mango DAO? */}
                <p className="lg:text-center text-sm text-white text-opacity-20">
                  All rights reserved &copy; Blockworks Foundation 2023
                </p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  )
}

export default Footer
