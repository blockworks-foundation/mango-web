import Button from "./Button"

const FeatureSection = () => {
  return (
    <div className="bg-th-bkg-3 transform -skew-y-3 pt-12 md:pt-48 pb-32 lg:pb-48 mb-48 lg:mb-48 -mt-64">
      <div className="max-w-7xl mx-auto px-4 transform skew-y-3">
        <section className="py-12 px-3">
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
        <section className="py-28 px-4">
          <div className="flex flex-wrap -mx-4 mb-6">
            <div className="lg:w-1/3 px-4 mb-6">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.8668 10.8357C13.1764 10.6293 13.5588 10.4448 14 10.302L14 13.698C13.5588 13.5552 13.1764 13.3707 12.8668 13.1643C12.1385 12.6788 12 12.2278 12 12C12 11.7722 12.1385 11.3212 12.8668 10.8357Z"
                  fill="url(#paint0_linear)"
                />
                <path
                  d="M18 21.698L18 18.302C18.4412 18.4448 18.8237 18.6293 19.1333 18.8357C19.8615 19.3212 20 19.7722 20 20C20 20.2278 19.8615 20.6788 19.1333 21.1643C18.8237 21.3707 18.4413 21.5552 18 21.698Z"
                  fill="url(#paint1_linear)"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM18 6C18 4.89543 17.1046 4 16 4C14.8954 4 14 4.89543 14 6V6.18399C12.7568 6.41745 11.607 6.86814 10.648 7.50747C9.20461 8.46971 8 10.0187 8 12C8 13.9813 9.20461 15.5303 10.648 16.4925C11.607 17.1319 12.7568 17.5826 14 17.816L14 21.6985C13.218 21.4446 12.6383 21.0638 12.3133 20.6892C11.5894 19.855 10.3263 19.7655 9.49198 20.4894C8.6577 21.2133 8.56822 22.4765 9.29213 23.3108C10.4171 24.6073 12.1191 25.4617 14 25.8153L14 26C14 27.1045 14.8954 28 16 28C17.1045 28 18 27.1046 18 26L18 25.816C19.2432 25.5826 20.3931 25.1319 21.3521 24.4925C22.7954 23.5303 24 21.9813 24 20C24 18.0187 22.7954 16.4697 21.3521 15.5075C20.3931 14.8681 19.2432 14.4175 18 14.184L18 10.3015C18.782 10.5554 19.3617 10.9362 19.6867 11.3108C20.4106 12.145 21.6738 12.2345 22.5081 11.5106C23.3423 10.7867 23.4318 9.52353 22.7079 8.68925C21.5829 7.39273 19.8809 6.5383 18 6.18472V6Z"
                  fill="url(#paint2_linear)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="-15"
                    y1="-31.5"
                    x2="41.5"
                    y2="25.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#E54033" />
                    <stop offset="0.536458" stopColor="#FECA1A" />
                    <stop offset="1" stopColor="#AFD803" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear"
                    x1="-15"
                    y1="-31.5"
                    x2="41.5"
                    y2="25.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#E54033" />
                    <stop offset="0.536458" stopColor="#FECA1A" />
                    <stop offset="1" stopColor="#AFD803" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear"
                    x1="-15"
                    y1="-31.5"
                    x2="41.5"
                    y2="25.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#E54033" />
                    <stop offset="0.536458" stopColor="#FECA1A" />
                    <stop offset="1" stopColor="#AFD803" />
                  </linearGradient>
                </defs>
              </svg>

              <h3 className="text-xl my-3 font-semibold font-heading">
                Maximum capital efficiency
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Utilize all your assets as collateral to trade any other asset
                with up to 5x leverage.{' '}
              </p>
            </div>

            <div className="lg:w-1/3 px-4 mb-6">
              <svg
                width="26"
                height="33"
                viewBox="0 0 26 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.4155 0.0849461C16.1886 0.325514 16.7143 1.03326 16.7143 1.83345V11L24.1429 11C24.8353 11 25.4703 11.3804 25.7901 11.9867C26.1099 12.5931 26.0614 13.3247 25.6643 13.8847L12.6643 32.2179C12.1994 32.8734 11.3576 33.1556 10.5845 32.9151C9.81144 32.6745 9.28572 31.9667 9.28572 31.1665L9.28572 22H1.85715C1.16466 22 0.529698 21.6196 0.209902 21.0133C-0.109894 20.4069 -0.0613954 19.6753 0.335717 19.1153L13.3357 0.782112C13.8006 0.126572 14.6424 -0.155622 15.4155 0.0849461Z"
                  fill="url(#paint0_linear)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="-23.5"
                    y1="-35.5"
                    x2="26"
                    y2="44.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#E54033" />
                    <stop offset="0.5" stopColor="#FECA1A" />
                    <stop offset="1" stopColor="#AFD803" />
                  </linearGradient>
                </defs>
              </svg>

              <h3 className="text-xl my-3 font-semibold font-heading">
                Sub-second latency
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Low latency allows market makers to post tight spreads on the
                books. That means Instant order execution at the price of less
                than a cent.
              </p>
            </div>
            <div className="lg:w-1/3 px-4 mb-6">
              <svg
                width="29"
                height="33"
                viewBox="0 0 29 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.14286 0C1.85482 0 0 1.84683 0 4.125V33L7.25 28.875L14.5 33L21.75 28.875L29 33V4.125C29 1.84683 27.1452 0 24.8571 0H4.14286ZM9.32143 6.1875C7.6054 6.1875 6.21429 7.57262 6.21429 9.28125C6.21429 10.9899 7.6054 12.375 9.32143 12.375C11.0375 12.375 12.4286 10.9899 12.4286 9.28125C12.4286 7.57262 11.0375 6.1875 9.32143 6.1875ZM22.179 6.79159C21.3701 5.98614 20.0585 5.98614 19.2496 6.79159L6.82099 19.1666C6.01205 19.972 6.01205 21.278 6.82099 22.0834C7.62994 22.8889 8.94149 22.8889 9.75043 22.0834L22.179 9.70841C22.988 8.90295 22.988 7.59705 22.179 6.79159ZM19.6786 16.5C17.9625 16.5 16.5714 17.8851 16.5714 19.5938C16.5714 21.3024 17.9625 22.6875 19.6786 22.6875C21.3946 22.6875 22.7857 21.3024 22.7857 19.5938C22.7857 17.8851 21.3946 16.5 19.6786 16.5Z"
                  fill="url(#paint0_linear)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="-32.0208"
                    y1="-20.1667"
                    x2="59.8765"
                    y2="42.4076"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#E54033" />
                    <stop offset="0.520833" stopColor="#FECA1A" />
                    <stop offset="1" stopColor="#AFD803" />
                  </linearGradient>
                </defs>
              </svg>

              <h3 className="text-xl my-3 font-semibold font-heading">
                The lowest fees
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Trade with the lowest fee possible. SRM deposits are pooled for
                a collective discount. Mango is the first protocol to charge
                zero fees on margin borrowing & lending.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap -mx-4 -mb-6">
            <div className="lg:w-1/3 px-4 mb-6">
              <svg
                width="31"
                height="31"
                viewBox="0 0 31 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.5 31C24.0604 31 31 24.0604 31 15.5C31 6.93959 24.0604 0 15.5 0C6.93959 0 0 6.93959 0 15.5C0 24.0604 6.93959 31 15.5 31ZM4.51784 11.6781C5.24176 9.59761 6.54018 7.78612 8.22315 6.43358C8.74218 7.22622 9.63808 7.74983 10.6563 7.74983C12.2614 7.74983 13.5625 9.051 13.5625 10.6561V11.6248C13.5625 13.7649 15.2974 15.4998 17.4375 15.4998C19.5776 15.4998 21.3125 13.7649 21.3125 11.6248C21.3125 9.80335 22.5693 8.2754 24.263 7.86081C26.0454 9.90374 27.125 12.5757 27.125 15.4999C27.125 16.1601 27.07 16.8075 26.9642 17.4377H25.1875C23.0473 17.4377 21.3125 19.1726 21.3125 21.3127V25.5697C19.6026 26.5588 17.6172 27.1249 15.4998 27.1249V23.25C15.4998 21.1099 13.7649 19.375 11.6248 19.375C9.48473 19.375 7.74984 17.6401 7.74984 15.5C7.74984 13.579 6.35192 11.9844 4.51784 11.6781Z"
                  fill="url(#paint0_linear)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="-29.0625"
                    y1="-7.75"
                    x2="31"
                    y2="31"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#E54033" />
                    <stop offset="0.520833" stopColor="#FECA1A" />
                    <stop offset="1" stopColor="#AFD803" />
                  </linearGradient>
                </defs>
              </svg>

              <h3 className="text-xl my-3 font-semibold font-heading">
                Fully decentralized
              </h3>
              <p className="text-gray-400 leading-relaxed">
                No more centralized counter party risk to deal with. Non
                custodial means you control your funds. Every bid & ask is
                on-chain.
              </p>
            </div>
            <div className="lg:w-1/3 px-4 mb-6">
            <svg 
                width="33" 
                height="31" 
                viewBox="0 0 33 31" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
            >
            <path fillRule="evenodd" clipRule="evenodd" d="M17.5233 0.272298C16.8892 -0.0907658 16.1108 -0.0907658 15.4767 0.272298L1.03954 8.53896C0.0505606 9.10525 -0.293038 10.3677 0.272096 11.3587C0.652378 12.0255 1.34724 12.3996 2.06246 12.4004V26.8667C0.923393 26.8667 0 27.7919 0 28.9333C0 30.0747 0.923393 31 2.06246 31H30.9368C32.0759 31 32.9993 30.0747 32.9993 28.9333C32.9993 27.7919 32.0759 26.8667 30.9368 26.8667V12.4004C31.6523 12.3998 32.3475 12.0258 32.7279 11.3587C33.293 10.3677 32.9494 9.10525 31.9605 8.53896L17.5233 0.272298ZM8.24982 14.4667C7.11076 14.4667 6.18737 15.3919 6.18737 16.5333V22.7333C6.18737 23.8747 7.11076 24.8 8.24982 24.8C9.38889 24.8 10.3123 23.8747 10.3123 22.7333V16.5333C10.3123 15.3919 9.38889 14.4667 8.24982 14.4667ZM14.4372 16.5333C14.4372 15.3919 15.3606 14.4667 16.4996 14.4667C17.6387 14.4667 18.5621 15.3919 18.5621 16.5333V22.7333C18.5621 23.8747 17.6387 24.8 16.4996 24.8C15.3606 24.8 14.4372 23.8747 14.4372 22.7333V16.5333ZM24.7495 14.4667C23.6104 14.4667 22.687 15.3919 22.687 16.5333V22.7333C22.687 23.8747 23.6104 24.8 24.7495 24.8C25.8885 24.8 26.8119 23.8747 26.8119 22.7333V16.5333C26.8119 15.3919 25.8885 14.4667 24.7495 14.4667Z" fill="url(#paint0_linear)"/>
              <defs>
                <linearGradient id="paint0_linear" x1="-85.5" y1="-53.5" x2="37.5" y2="44.5" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#E54033"/>
                  <stop offset="0.494792" stopColor="#FECA1A"/>
                  <stop offset="1" stopColor="#AFD803"/>
                </linearGradient>
              </defs>
            </svg>

              <h3 className="text-xl my-3 font-semibold font-heading">
                Spot & perpetual markets.
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Trade spot markest and derivitive assets all in one unified interface. Spot with up to 5x leverage, perpetuals with up to 10x. 
              </p>
            </div>

            <div className="lg:w-1/3 px-4 mb-6">
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

              <h3 className="text-xl my-3 font-semibold font-heading">
                Want to help build Mango?
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Mango is a fully open-source project built by a global team of
                contributors. Help build the world’s best exchange, period.
              </p>
              <a className="text-indigo-600 hover:underline" href="#">
                Join the discord &raquo;
              </a>
            </div>
          </div>
        </section>

        <section className="">
          <div className="grid grid-cols-3 gap-6 mb-6">
            <div>
              <div className="bg-th-fgd-4 bg-product-one bg-cover bg-no-repeat h-650 w-full shadow-md rounded-xl overflow-hidden mx-auto">
                <div className="py-4 px-8 mt-3">
                  <div className="flex flex-col mb-8">
                    <h2 className="text-yellow-300 font-semibold text-xl tracking-wide mb-2">
                      Simply connect your wallet.
                    </h2>
                    <p className="text-gray-500 text-base">
                      Trade knowing you control your funds, no more centralized
                      counter-party risk.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-2">
              <div className="bg-th-fgd-4 bg-product-two bg-cover bg-no-repeat h-650 w-full shadow-md rounded-xl overflow-hidden mx-auto">
                <div className="py-4 px-8 mt-3">
                  <div className="flex flex-col mb-8">
                    <h2 className="text-yellow-300 font-semibold text-xl tracking-wide mb-2">
                      Customize your experience.
                    </h2>
                    <p className="text-gray-500 text-base">
                      Complete control over layout, theme, and your trading
                      view.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-2">
              <div className="bg-th-fgd-4 bg-product-three bg-cover bg-no-repeat h-650 w-full shadow-md rounded-xl overflow-hidden mx-auto">
                <div className="py-4 px-8 mt-3">
                  <div className="flex flex-col mb-8">
                    <h2 className="text-yellow-300 font-semibold text-xl tracking-wide mb-2">
                      Measure your results.
                    </h2>
                    <p className="text-gray-500 text-base">
                      Full overview over trading history and PNL is always
                      tracked.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-th-fgd-4 bg-product-four bg-cover bg-no-repeat h-650 w-full shadow-md rounded-xl overflow-hidden mx-auto">
                <div className="py-4 px-8 mt-3">
                  <div className="flex flex-col mb-8">
                    <h2 className="text-yellow-300 font-semibold text-xl tracking-wide mb-2">
                      Liquidation alerts
                    </h2>
                    <p className="text-gray-500 text-base">
                      Sleep knowing you’ll be ready when the market starts
                      moving.{' '}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default FeatureSection
