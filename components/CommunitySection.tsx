import Button from './Button'
import LinkLeft from './LinkLeft'
import Link from './Link'

const CommunitySection = () => {
  return (
    <div className="">
      <div className="bg-th-bkg-3 h-2150 transform -skew-y-3 pt-12 md:pt-48 pb-32 lg:pb-48 mb-48 lg:mb-48 -mt-64">
        <div className="max-w-7xl mx-auto px-4 transform skew-y-3">
          <section className="py-12 px-3 mt-60">
            <div className="flex flex-wrap justify-center items-center text-center">
              <div className="px-2 order-1 lg:order-none">
                <h2 className="text-5xl mb-6 leading-tight font-semibold font-heading">
                  Community driven innovation.{' '}
                </h2>
                <p className="mb-8 px-24 text-2xl text-gray-400 leading-relaxed">
                  Mango is building the infrastructure for the future
                  decentralized web and open sourcing the code for anyone to use
                  and contribute.{' '}
                </p>
                <div className="flex flex-row justify-center">
                  <Button>Join the discord</Button>
                  <Link>Explore the docs</Link>
                </div>
              </div>
            </div>
          </section>
          <section className="py-12 px-3">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-4">
                <div className="col-span-1 flex md:col-span-2 lg:col-span-1">
                  <div className="flex flex-col bg-th-fgd-4 py-8 px-8 h-auto w-auto shadow-md rounded-xl">
                    <svg
                      width="31"
                      height="31"
                      viewBox="0 0 31 31"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.5 2.90625C15.5 1.30117 16.8012 0 18.4062 0C20.0113 0 21.3125 1.30117 21.3125 2.90625V3.875C21.3125 4.94505 22.1799 5.8125 23.25 5.8125H29.0625C30.1326 5.8125 31 6.67995 31 7.75V13.5625C31 14.6326 30.1326 15.5 29.0625 15.5H28.0938C26.4887 15.5 25.1875 16.8012 25.1875 18.4062C25.1875 20.0113 26.4887 21.3125 28.0938 21.3125H29.0625C30.1326 21.3125 31 22.1799 31 23.25V29.0625C31 30.1326 30.1326 31 29.0625 31H23.25C22.1799 31 21.3125 30.1326 21.3125 29.0625V28.0938C21.3125 26.4887 20.0113 25.1875 18.4062 25.1875C16.8012 25.1875 15.5 26.4887 15.5 28.0938V29.0625C15.5 30.1326 14.6326 31 13.5625 31H7.75C6.67995 31 5.8125 30.1326 5.8125 29.0625V23.25C5.8125 22.1799 4.94505 21.3125 3.875 21.3125H2.90625C1.30117 21.3125 0 20.0113 0 18.4062C0 16.8012 1.30117 15.5 2.90625 15.5H3.875C4.94505 15.5 5.8125 14.6326 5.8125 13.5625V7.75C5.8125 6.67995 6.67995 5.8125 7.75 5.8125H13.5625C14.6326 5.8125 15.5 4.94505 15.5 3.875V2.90625Z"
                        fill="url(#paint0_linear)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear"
                          x1="-15.5"
                          y1="-5.8125"
                          x2="53.2813"
                          y2="31"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#E54033" />
                          <stop offset="0.520833" stopColor="#FECA1A" />
                          <stop offset="1" stopColor="#AFD803" />
                        </linearGradient>
                      </defs>
                    </svg>

                    <p className="text-lg font-bold py-6 pb-2">
                      Open by default
                    </p>
                    <div className="flex flex-col">
                      <p className="text-md text-gray-500 pb-2">
                        All pieces of the mango protocol puzzle are completely
                        open source. Run it, mod it, improve it, we are a
                        community driven organization.
                      </p>
                      <LinkLeft>Find us on github</LinkLeft>
                    </div>
                  </div>
                </div>

                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <div className="flex flex-col bg-th-fgd-4 py-8 px-8 h-auto w-auto shadow-md rounded-xl">
                    <svg
                      width="31"
                      height="32"
                      viewBox="0 0 31 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.321833 5.96983C6.15035 5.89006 11.4609 3.6468 15.5 0C19.5391 3.6468 24.8497 5.89006 30.6782 5.96983C30.8898 7.24175 31 8.54838 31 9.88098C31 20.0928 24.5302 28.7803 15.5 32C6.46976 28.7803 0 20.0928 0 9.88098C0 8.54838 0.110173 7.24175 0.321833 5.96983ZM22.6825 13.2174C23.4392 12.4541 23.4392 11.2166 22.6825 10.4534C21.9259 9.6901 20.6991 9.6901 19.9425 10.4534L13.5625 16.8892L11.0575 14.3623C10.3009 13.599 9.07412 13.599 8.31748 14.3623C7.56084 15.1256 7.56084 16.3631 8.31748 17.1263L12.1925 21.0353C12.9491 21.7986 14.1759 21.7986 14.9325 21.0353L22.6825 13.2174Z"
                        fill="url(#paint0_linear)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear"
                          x1="-46.5"
                          y1="-11.7268"
                          x2="31.4001"
                          y2="38.4685"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#E54033" />
                          <stop offset="0.520833" stopColor="#FECA1A" />
                          <stop offset="1" stopColor="#AFD803" />
                        </linearGradient>
                      </defs>
                    </svg>

                    <p className="text-lg font-bold py-6 pb-2">
                      Liquidator Program
                    </p>
                    <div className="flex flex-col">
                      <p className="text-md text-gray-500 pb-2">
                        Liquidators are an important part in a trading
                        ecosystem, help ensure the protocol funds stay safe even
                        when borrowers default.
                      </p>
                      <LinkLeft>Become a liquidator</LinkLeft>
                    </div>
                  </div>
                </div>

                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <div className="flex flex-col bg-th-fgd-4 py-8 px-8 h-auto w-auto shadow-md rounded-xl">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M16 0C17.1045 0 17.9999 0.89543 17.9999 2V4.64593L25.9086 7.80949L29.1052 6.21115C30.0931 5.71717 31.2945 6.11762 31.7884 7.10557C32.2824 8.09353 31.8819 9.29488 30.894 9.78885L28.4278 11.022L31.904 21.8614C32.1451 22.613 31.9215 23.436 31.3334 23.9624C29.9194 25.228 28.0473 26 25.9997 26C23.9521 26 22.08 25.228 20.666 23.9624C20.0779 23.436 19.8544 22.613 20.0954 21.8614L23.526 11.1645L17.9999 8.95407V28H21.9998C23.1044 28 23.9998 28.8954 23.9998 30C23.9998 31.1046 23.1044 32 21.9998 32H10.0002C8.89562 32 8.00022 31.1046 8.00022 30C8.00022 28.8954 8.89562 28 10.0002 28H14.0001V8.95407L8.47403 11.1645L11.9046 21.8614C12.1456 22.613 11.9221 23.436 11.334 23.9624C9.91997 25.228 8.04788 26 6.00027 26C3.95267 26 2.08058 25.228 0.666592 23.9624C0.0784726 23.436 -0.145058 22.613 0.0959823 21.8614L3.57223 11.022L1.10598 9.78885C0.118051 9.29488 -0.282387 8.09353 0.211578 7.10557C0.705543 6.11762 1.90686 5.71717 2.89479 6.21115L6.09139 7.80949L14.0001 4.64593V2C14.0001 0.89543 14.8955 0 16 0ZM6.00027 16.549L4.36384 21.6515C4.863 21.8757 5.41635 22 6.00027 22C6.5842 22 7.13755 21.8757 7.6367 21.6515L6.00027 16.549ZM25.9997 16.549L24.3633 21.6515C24.8624 21.8757 25.4158 22 25.9997 22C26.5837 22 27.137 21.8757 27.6362 21.6515L25.9997 16.549Z"
                        fill="url(#paint0_linear)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear"
                          x1="-19.5"
                          y1="-1.3609e-06"
                          x2="85.5"
                          y2="70"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#E54033" />
                          <stop offset="0.505208" stopColor="#FECA1A" />
                          <stop
                            offset="1"
                            stopColor="#111827"
                            stopOpacity="0"
                          />
                          <stop offset="1" stopColor="#AFD803" />
                        </linearGradient>
                      </defs>
                    </svg>

                    <p className="text-lg font-bold py-6 pb-2">Market Making</p>
                    <div className="flex flex-col">
                      <p className="text-md text-gray-500 pb-2">
                        Learn about market making on the mango protocol and earn
                        $MNGO in return for providing liquidaty and stability to
                        the mango markets.
                      </p>
                      <LinkLeft>Become a market maker</LinkLeft>
                    </div>
                  </div>
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <div className="flex flex-col bg-th-fgd-4 py-8 px-8 h-auto w-auto shadow-md rounded-xl">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18 2C18 0.895431 17.1046 0 16 0C14.8954 0 14 0.895431 14 2V4C14 5.10457 14.8954 6 16 6C17.1046 6 18 5.10457 18 4V2Z"
                        fill="url(#paint0_linear)"
                      />
                      <path
                        d="M27.3136 7.51461C28.0947 6.73356 28.0947 5.46723 27.3136 4.68619C26.5326 3.90514 25.2662 3.90514 24.4852 4.68619L23.071 6.1004C22.2899 6.88145 22.2899 8.14778 23.071 8.92883C23.852 9.70988 25.1184 9.70988 25.8994 8.92883L27.3136 7.51461Z"
                        fill="url(#paint1_linear)"
                      />
                      <path
                        d="M32 16C32 17.1046 31.1046 18 30 18H28C26.8954 18 26 17.1046 26 16C26 14.8954 26.8954 14 28 14H30C31.1046 14 32 14.8954 32 16Z"
                        fill="url(#paint2_linear)"
                      />
                      <path
                        d="M6.10038 8.92886C6.88143 9.70991 8.14776 9.70991 8.9288 8.92886C9.70985 8.14781 9.70985 6.88148 8.9288 6.10044L7.51459 4.68622C6.73354 3.90517 5.46721 3.90517 4.68616 4.68622C3.90511 5.46727 3.90512 6.7336 4.68616 7.51465L6.10038 8.92886Z"
                        fill="url(#paint3_linear)"
                      />
                      <path
                        d="M6 16C6 17.1046 5.10457 18 4 18H2C0.895431 18 -2.38419e-07 17.1046 0 16C0 14.8954 0.895431 14 2 14H4C5.10457 14 6 14.8954 6 16Z"
                        fill="url(#paint4_linear)"
                      />
                      <path
                        d="M12 28V26H20V28C20 30.2091 18.2091 32 16 32C13.7909 32 12 30.2091 12 28Z"
                        fill="url(#paint5_linear)"
                      />
                      <path
                        d="M20.0018 24C20.031 23.3193 20.4152 22.7074 20.9536 22.2823C22.8091 20.8172 24 18.5477 24 16C24 11.5817 20.4183 8 16 8C11.5817 8 8 11.5817 8 16C8 18.5477 9.1909 20.8172 11.0464 22.2823C11.5848 22.7074 11.969 23.3193 11.9982 24H20.0018Z"
                        fill="url(#paint6_linear)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear"
                          x1="-41"
                          y1="-41"
                          x2="29"
                          y2="32"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#E54033" />
                          <stop offset="0.583333" stopColor="#FECA1A" />
                          <stop offset="1" stopColor="#AFD803" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear"
                          x1="-41"
                          y1="-41"
                          x2="29"
                          y2="32"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#E54033" />
                          <stop offset="0.583333" stopColor="#FECA1A" />
                          <stop offset="1" stopColor="#AFD803" />
                        </linearGradient>
                        <linearGradient
                          id="paint2_linear"
                          x1="-41"
                          y1="-41"
                          x2="29"
                          y2="32"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#E54033" />
                          <stop offset="0.583333" stopColor="#FECA1A" />
                          <stop offset="1" stopColor="#AFD803" />
                        </linearGradient>
                        <linearGradient
                          id="paint3_linear"
                          x1="-41"
                          y1="-41"
                          x2="29"
                          y2="32"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#E54033" />
                          <stop offset="0.583333" stopColor="#FECA1A" />
                          <stop offset="1" stopColor="#AFD803" />
                        </linearGradient>
                        <linearGradient
                          id="paint4_linear"
                          x1="-41"
                          y1="-41"
                          x2="29"
                          y2="32"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#E54033" />
                          <stop offset="0.583333" stopColor="#FECA1A" />
                          <stop offset="1" stopColor="#AFD803" />
                        </linearGradient>
                        <linearGradient
                          id="paint5_linear"
                          x1="-41"
                          y1="-41"
                          x2="29"
                          y2="32"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#E54033" />
                          <stop offset="0.583333" stopColor="#FECA1A" />
                          <stop offset="1" stopColor="#AFD803" />
                        </linearGradient>
                        <linearGradient
                          id="paint6_linear"
                          x1="-41"
                          y1="-41"
                          x2="29"
                          y2="32"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#E54033" />
                          <stop offset="0.583333" stopColor="#FECA1A" />
                          <stop offset="1" stopColor="#AFD803" />
                        </linearGradient>
                      </defs>
                    </svg>

                    <p className="text-lg font-bold py-6 pb-2">
                      Want to help build?
                    </p>
                    <div className="flex flex-col">
                      <p className="text-md text-gray-500 pb-2">
                        We are happy to onboard new contributs! Mango is
                        community driven effort to build comercially viable
                        decentralized trading products.
                      </p>
                      <LinkLeft>Become a contributor</LinkLeft>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default CommunitySection
