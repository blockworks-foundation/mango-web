//import { useState } from 'react'
//import Button from '@/components/Button'
import Logo from '@/components/Logo'
import EmailForm from '@/components/EmailForm'
import GradientText from '@/components/GradientText'


const Footer = () => {

  return (
    <>
      <div className="max-w-7xl h-[4px] mx-auto bg-gradient-to-r from-th-fgd-2 mt-10"></div>
        <div className="max-w-7xl mx-auto border-l-[4px] border-th-fgd-2 border-solid px-8">

            <EmailForm />
            <div className="w-1/3 h-[4px] bg-gradient-to-r from-th-fgd-2 transform -translate-x-[32px] mt-10"></div>

          <div className="py-20">
            <div className="py-8 mx-auto">
              <div className="flex flex-wrap -mx-4 mb-8 lg:mb-16">
                <div className="w-full lg:w-1/3 px-4 mb-12 lg:mb-0">
                  <div className="w-full h-[4px] bg-gradient-to-r from-th-fgd-2 transform -translate-x-[32px] my-4"></div>
                     <Logo />         
                   <div className="w-1/2 h-[4px] bg-gradient-to-r from-th-fgd-2 transform -translate-x-[32px] my-4"></div>
 
                  <p className="font-body text-sm mt-5 mb-6 max-w-xs text-th-fgd-4 opacity-50 leading-normal">
                    Mango is a decentralized organization building the 
                    next generation of decentralied financial products
                    and infratructure for the people.{' '}
                  </p>
                  <div className="w-1/2 h-[4px] bg-gradient-to-r from-th-fgd-2 transform -translate-x-[32px] my-4"></div>

                  <div className="flex flex-col p-0 -ml-2">
                      <div className="flex flex-row group h-6 w-6 m-2 hover:text-th-fgd-5 transition ease-in-out duration-150 text-th-fgd-3">
                         <a
                           className="inline-flex"
                           href="https://github.com/blockworks-foundation"
                          >
                         <svg 
                          width="23" 
                          height="23" 
                          viewBox="0 0 30 30" 
                          fill="currentColor" 
                          className="group-hover:text-slate-400 mr-2"
                          xmlns="http://www.w3.org/2000/svg">
                        <path 
                          d="M14 0C6.26967 0 0 6.19744 0 13.8413C0 19.9568 4.011 25.145 9.57483 26.9755C10.2737 27.1035 10.5 26.6745 10.5 26.31V23.7332C6.60567 24.5706 5.79483 22.0999 5.79483 22.0999C5.15783 20.5001 4.23967 20.0745 4.23967 20.0745C2.96917 19.2152 4.3365 19.2336 4.3365 19.2336C5.74233 19.3305 6.482 20.6604 6.482 20.6604C7.73033 22.7758 9.75683 22.1645 10.556 21.8104C10.6808 20.9165 11.0437 20.3052 11.445 19.9603C8.33583 19.6085 5.06683 18.4216 5.06683 13.1192C5.06683 11.6071 5.614 10.3729 6.50883 9.404C6.36417 9.05451 5.88467 7.64616 6.64533 5.74067C6.64533 5.74067 7.82133 5.36926 10.4965 7.1594C11.613 6.85259 12.81 6.69918 14 6.69341C15.19 6.69918 16.3882 6.85259 17.507 7.1594C20.1798 5.36926 21.3535 5.74067 21.3535 5.74067C22.1153 7.64731 21.6358 9.05566 21.4912 9.404C22.3895 10.3729 22.932 11.6082 22.932 13.1192C22.932 18.4354 19.6572 19.6062 16.5398 19.9488C17.0415 20.3778 17.5 21.2198 17.5 22.5117V26.31C17.5 26.6779 17.724 27.1105 18.4345 26.9744C23.9937 25.1415 28 19.9545 28 13.8413C28 6.19744 21.7315 0 14 0Z" 
                          />
                        </svg>
                        <p className=" font-mono text-sm">@Github</p>
                        </a>
                      </div>

                    
                      <div className="flex flex-row group h-6 w-6 m-2 hover:text-th-fgd-5 transition ease-in-out duration-150 text-th-fgd-3">
                         <a
                           className="inline-flex"
                           href="https://discord.gg/2uwjsBc5yw"
                          >
                    <svg 
                        width="24" 
                        height="24" 
                        viewBox="0 0 30 30" 
                        fill="currentColor" 
                        className="group-hover:text-indigo-500 mr-2"
                        xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.7187 1.67497C21.9061 0.89249 19.9681 0.323786 17.9421 0C17.6932 0.41511 17.4025 0.973432 17.2021 1.4176C15.0482 1.11872 12.9142 1.11872 10.8 1.4176C10.5996 0.973432 10.3023 0.41511 10.0513 0C8.02293 0.323786 6.08271 0.894565 4.27023 1.67912C0.614418 6.77668 -0.376613 11.7477 0.118903 16.648C2.54363 18.3188 4.89347 19.3337 7.20367 19.9979C7.77407 19.2736 8.2828 18.5036 8.72106 17.692C7.88639 17.3993 7.08696 17.0382 6.33156 16.6189C6.53197 16.482 6.72798 16.3387 6.91738 16.1914C11.5246 18.1797 16.5304 18.1797 21.0826 16.1914C21.2741 16.3387 21.4701 16.482 21.6683 16.6189C20.9107 17.0402 20.1091 17.4014 19.2744 17.6941C19.7127 18.5036 20.2192 19.2757 20.7918 20C23.1042 19.3358 25.4563 18.3209 27.881 16.648C28.4624 10.9672 26.8878 6.04193 23.7187 1.67497ZM9.34871 13.6343C7.96567 13.6343 6.83149 12.4429 6.83149 10.9922C6.83149 9.54132 7.94144 8.34791 9.34871 8.34791C10.756 8.34791 11.8901 9.53924 11.8659 10.9922C11.8682 12.4429 10.756 13.6343 9.34871 13.6343ZM18.6512 13.6343C17.2682 13.6343 16.1339 12.4429 16.1339 10.9922C16.1339 9.54132 17.2439 8.34791 18.6512 8.34791C20.0584 8.34791 21.1926 9.53924 21.1684 10.9922C21.1684 12.4429 20.0584 13.6343 18.6512 13.6343Z"/>
                      </svg>
                      <p className="-mt-1 font-mono text-sm">@Discord</p>
                      </a>
                    </div>


                    <div className="flex flex-row group h-6 w-6 m-2 hover:text-th-fgd-5 transition ease-in-out duration-150 text-th-fgd-3">
                         <a
                           className="inline-flex"
                           href="https://twitter.com/mangomarkets"
                          >
                    <svg 
                        width="22" 
                        height="22" 
                        viewBox="0 0 30 30" 
                        fill="currentColor" 
                        className="group-hover:text-blue-400 mr-2"
                        xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.78874 23C5.55374 23 2.53817 22.0591 0 20.4356C2.15499 20.5751 5.95807 20.2411 8.32358 17.9848C4.76508 17.8215 3.16026 15.0923 2.95094 13.926C3.25329 14.0426 4.6953 14.1826 5.50934 13.856C1.4159 12.8296 0.787928 9.23732 0.927477 8.14097C1.695 8.67749 2.99745 8.8641 3.50913 8.81744C-0.305207 6.08823 1.06703 1.98276 1.74151 1.09635C4.47882 4.88867 8.5812 7.01857 13.6564 7.13704C13.5607 6.71736 13.5102 6.28042 13.5102 5.83164C13.5102 2.61092 16.1134 0 19.3247 0C21.0025 0 22.5144 0.712754 23.5757 1.85284C24.6969 1.59011 26.3843 0.975068 27.2092 0.443205C26.7934 1.93611 25.4989 3.18149 24.7159 3.64308C24.7224 3.65878 24.7095 3.62731 24.7159 3.64308C25.4037 3.53904 27.2648 3.18137 28 2.68256C27.6364 3.52125 26.264 4.91573 25.1377 5.69642C25.3473 14.9381 18.2765 23 8.78874 23Z"/>
                    </svg>
                    <p className="-mt-1 font-mono text-sm">@Twitter</p>
                    </a>
                   </div>

                  </div>
                </div>
                <div className="w-full lg:w-2/3 px-4">
                  <div className="flex flex-wrap justify-between">
                    <div className="w-1/2 lg:w-1/4 mb-8 lg:mb-0">
                    <h3 className="mb-4 text-lg font-mono text-th-fgd-4 opacity-80 border-l-4 border-l-mango-red pl-4 transition duration-100 ease-in-out">
                        Explore
                      </h3>
                      <ul className="">
                        <li className="group mb-4 text-sm">
                          <a
                            className="text-th-fgd-3 hover:text-th-fgd-5 py-2 px-4 rounded-lg hover:bg-th-fgd-1 transition duration-100 ease-in-out"
                            href="/markets"
                          >
                            Markets
                            <span
                                  className="text-th-fgd-5 opacity-0 transition duration-100 ease-in group-hover:opacity-50 ml-2"
                                  aria-hidden="true"
                                >
                                  &rarr;
                                </span>
                          </a>
                        </li>
                        <li className="group mb-4 text-sm">
                          <a
                            className="text-th-fgd-3 hover:text-th-fgd-5 py-2 px-4 rounded-lg hover:bg-th-fgd-1 transition duration-100 ease-in-out"
                            href="/earn"
                          >
                            Earn
                            <span
                                  className="text-th-fgd-5 opacity-0 transition duration-100 ease-in group-hover:opacity-50 ml-2"
                                  aria-hidden="true"
                                >
                                  &rarr;
                                </span>
                          </a>
                        </li>
                        <li className="group mb-4 text-sm">
                          <a
                            className="text-th-fgd-3 hover:text-th-fgd-5 py-2 px-4 rounded-lg hover:bg-th-fgd-1 transition duration-100 ease-in-out"
                            href="/pay"
                          >
                            Pay
                            <span
                                  className="text-th-fgd-5 opacity-0 transition duration-100 ease-in group-hover:opacity-50 ml-2"
                                  aria-hidden="true"
                                >
                                  &rarr;
                                </span>
                          </a>
                        </li>
                      </ul>
                      <h3 className="mb-4 text-lg font-mono text-th-fgd-4 opacity-80 border-l-4 border-l-mango-yellow pl-4 transition duration-100 ease-in-out">
                        Infrastructure
                      </h3>
                      <ul className="mt-12">
                      <li className="group mb-4 text-sm">
                          <a
                            className="text-th-fgd-3 hover:text-th-fgd-5 py-2 px-4 rounded-lg hover:bg-th-fgd-1 transition duration-100 ease-in-out"
                            href="https://github.com/blockworks-foundation/mango-explorer/blob/main/docs/LiquidatorQuickstart.md"
                          >
                            Liquidator
                            <span
                                  className="text-th-fgd-5 opacity-0 transition duration-100 ease-in group-hover:opacity-50 ml-2"
                                  aria-hidden="true"
                                >
                                  &rarr;
                                </span>
                          </a>
                        </li>
                        <li className="group mb-4 text-sm">
                          <a
                            className="text-th-fgd-3 hover:text-th-fgd-5 py-2 px-4 rounded-lg hover:bg-th-fgd-1 transition duration-100 ease-in-out"
                            href="https://github.com/blockworks-foundation/mango-explorer/blob/main/docs/MarketmakingIntroduction.md"
                          >
                            Market Maker
                            <span
                                  className="text-th-fgd-5 opacity-0 transition duration-100 ease-in group-hover:opacity-50 ml-2"
                                  aria-hidden="true"
                                >
                                  &rarr;
                                </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="w-1/2 lg:w-1/4 mb-8 lg:mb-0">
                    <h3 className="mb-4 text-lg font-mono text-th-fgd-4 opacity-80 border-l-4 border-l-mango-green pl-4 transition duration-100 ease-in-out">
                        Developers
                      </h3>
                    <ul className="">
                      <li className="group mb-4 text-sm">
                          <a
                            className="text-th-fgd-3 hover:text-th-fgd-5 py-2 px-4 rounded-lg hover:bg-th-fgd-1 transition duration-100 ease-in-out"
                            href="https://docs.mango.markets/"
                          >
                            Explore the docs
                            <span
                                  className="text-th-fgd-5 opacity-0 transition duration-100 ease-in group-hover:opacity-50 ml-2"
                                  aria-hidden="true"
                                >
                                  &rarr;
                                </span>
                          </a>
                        </li>
                        <li className="group mb-4 text-sm">
                          <a
                            className="text-th-fgd-3 hover:text-th-fgd-5 py-2 px-4 rounded-lg hover:bg-th-fgd-1 transition duration-100 ease-in-out"
                            href="https://trello.com/c/0iz8GfW6/32-how-to-use-this-board"
                          >
                            Start contributing
                            <span
                                  className="text-th-fgd-5 opacity-0 transition duration-100 ease-in group-hover:opacity-50 ml-2"
                                  aria-hidden="true"
                                >
                                  &rarr;
                                </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="w-1/2 lg:w-1/4">
                    <h3 className="mb-4 text-lg font-mono text-th-fgd-4 opacity-80 border-l-4 border-l-mango-orange pl-4 transition duration-100 ease-in-out">
                        Contact
                      </h3>
                    <ul className="">
                      <li className="group mb-4 text-sm">
                          <a
                            className="text-th-fgd-3 hover:text-th-fgd-5 py-2 px-4 rounded-lg hover:bg-th-fgd-1 transition duration-100 ease-in-out"
                            href="https://discord.gg/2uwjsBc5yw"
                          >
                            Discord
                            <span
                                  className="text-th-fgd-5 opacity-0 transition duration-100 ease-in group-hover:opacity-50 ml-2"
                                  aria-hidden="true"
                                >
                                  &rarr;
                                </span>
                          </a>
                        </li>
                        <li className="group mb-4 text-sm">
                          <a
                            className="text-th-fgd-3 hover:text-th-fgd-5 py-2 px-4 rounded-lg hover:bg-th-fgd-1 transition duration-100 ease-in-out"
                            href="https://twitter.com/mangomarkets"
                          >
                            Twitter
                            <span
                                  className="text-th-fgd-5 opacity-0 transition duration-100 ease-in group-hover:opacity-50 ml-2"
                                  aria-hidden="true"
                                >
                                  &rarr;
                                </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-8">
                {/* Do we still want to go with blockworks foundation? should we start up a mango foundation or can we copywrite mango DAO? */}
                <p className="font-mono lg:text-center text-md text-th-fgd-4 mb-2">
                🥭 is made with ❤️ in <GradientText><span className="type-footer text-opacity-100"></span></GradientText>
                </p>
                <p className="font-mono lg:text-center text-sm text-th-fgd-3 text-opacity-20">
                  All rights reserved &copy; 2023
                </p>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default Footer
