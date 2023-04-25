import { FunctionComponent } from 'react'
const MangoApp = () => {
  return (
    <>
      <div className="flex w-full sm:w-96 md:w-full mx-auto flex-wrap lg:flex-nowrap items-center lg:px-20 xs:px-6 pt-40 lg:pt-30">
        <div className="w-full md:w-7/12 mb-10 text-center md:text-left">
          <h1 className="text-xs uppercase tracking-widest text-base font-thin ml-1 mb-10">
            <span>Crypto payments app</span>
          </h1>
          <h2 className="mb-10 text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl tracking-tight">
            Pay with crypto <br className="hidden md:block" />
            to friends &amp; family <br className="hidden md:block" />
            worldwide.
          </h2>
          <p className="text-xl lg:text-2xl">
            Send and request crypto payments to anyone's mobile number.
            <br className="hidden xl:block" /> Build crypto portfolio, withdraw
            to your bank account.
          </p>
          <div className="flex w-full items-center sm:w-auto flex-wrap">
            <ButtonLink
              className="w-full mx-auto md:mx-0 my-8"
              linkText={
                <>
                  <span>Get the App</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="-10 -6 34 34"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                  </svg>
                </>
              }
              path="https://usemango.app/get"
              size="large"
            />
            <div className="m-auto md:ml-6 text-th-fgd-3">
              Available on:
              <br className="hidden md:block" />
              <span className="text-th-fgd-1 font-bold">iOS</span> and
              <span className="text-th-fgd-1 font-bold">Android</span>
            </div>
          </div>
        </div>
        <div className="flex w-full md:w-5/12 mx-auto mt-20 md:mt-0">
          <video
            loop
            autoPlay
            muted
            playsInline
            poster="../videos/mango-payments-hero.png"
            itemType="http://schema.org/VideoObject"
          >
            <source
              src="../videos/mango-payments-hero.webm"
              type="video/webm"
            />
            <source src="../videos/mango-payments-hero.mp4" type="video/mp4" />
            <meta itemProp="name" content="Crypto payments - Mango app" />
            <meta
              itemProp="description"
              content="Mango app allows user to pay with crypto easily and securly"
            />
          </video>
        </div>
      </div>

      <div className="w-full sm:w-96 md:w-full mx-auto grid gap-20 grid-cols-1 md:grid-cols-3 lg:px-20 xs:px-6 py-20 text-center md:text-left">
        <div className="pt-10">
          <span className="inline-flex p-4 rounded-full border-2 mb-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="1 1 22 22"
              strokeWidth="1.1"
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </span>
          <p className="lg:text-xl xl:text-2xl font-display text-th-fgd-1 mb-4 tracking-normal">
            Easy transactions
          </p>
          <p className="max-w-xs mx-auto md:mx-0">
            Simply pay and request payments with your phone contacts.
          </p>
        </div>
        <div className="pt-10">
          <span className="inline-flex p-1 rounded-full border-2 mb-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="-6 -5 36 36"
              strokeWidth="1.2"
              stroke="currentColor"
              className="w-16 h-16"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802"
              />
            </svg>
          </span>
          <p className="lg:text-xl xl:text-2xl font-display text-th-fgd-1 mb-4 tracking-normal">
            Global payments
          </p>
          <p className="max-w-xs mx-auto md:mx-0">
            Pay internationally without worrying about currency conversions.
          </p>
        </div>
        <div className="pt-10">
          <span className="inline-flex p-4 rounded-full border-2 mb-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="2 2 20 20"
              strokeWidth="1.1"
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z"
              />
            </svg>
          </span>
          <p className="lg:text-xl xl:text-2xl font-display text-th-fgd-1 mb-4 tracking-normal">
            Powered by crypto
          </p>
          <p className="max-w-xs mx-auto md:mx-0">
            State-of-the-art security and light-speed transactions.
          </p>
        </div>
      </div>

      <div className="lg:px-20 xs:px-6 py-20">
        <hr />
      </div>

      <div className="lg:px-20 xs:px-6 py-20 w-full sm:w-96 md:w-10/12 xl:w-9/12 mx-auto">
        <div className="w-full mx-auto text-center md:w-[34rem] lg:w-[42rem]">
          <span className="flex inline-flex uppercase tracking-widest text-base font-bold text-th-primary rounded-full border-2 border-th-primary px-4 py-2">
            Payments
          </span>
          <h2 className="mb-10 mt-12 text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl tracking-tight">
            Send &amp; accept <br /> crypto payments
          </h2>
          <p className="text-xl lg:text-2xl">
            Securely pay or get paid with a phone number or QR code.
            <span className="text-th-fgd-1">Guaranteed and immediate.</span>
          </p>
        </div>
        <div className="flex flex-wrap md:flex-nowrap w-full mx-auto items-center mt-20 text-center md:text-left">
          <div className="w-full md:w-1/2 md:mx-10">
            <video
              className="md:w-10/12"
              loop
              autoPlay
              muted
              playsInline
              poster="../videos/mango-payments-pay.png"
              itemType="http://schema.org/VideoObject"
            >
              <source
                src="../videos/mango-payments-pay.webm"
                type="video/webm"
              />
              <source src="../videos/mango-payments-pay.mp4" type="video/mp4" />
              <meta itemProp="name" content="Pay with crypto - Mango app" />
              <meta
                itemProp="description"
                content="An app enabling the user to easily pay anyone using their phone number"
              />
            </video>
          </div>
          <div className="w-full md:w-1/2 py-10 md:px-10">
            <h3 className="mb-8 text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
              Pay friends <br /> instantly
            </h3>
            <p className="text-l leading-snug">
              Pay with crypto with phone number or a QR code to instantly
              transfer payments. Say goodbye to the hassle with wallet addresses
              or traditional banking methods.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap md:flex-nowrap w-full mx-auto items-center mt-20 text-center md:text-left">
          <div className="w-full md:w-1/2 md:mx-10 md:order-2">
            <video
              className="md:w-10/12 ml-auto"
              loop
              autoPlay
              muted
              playsInline
              poster="../videos/mango-payments-request.png"
              itemType="http://schema.org/VideoObject"
            >
              <source
                src="../videos/mango-payments-request.webm"
                type="video/webm"
              />
              <source
                src="../videos/mango-payments-request.mp4"
                type="video/mp4"
              />
              <meta
                itemProp="name"
                content="Request payments with crypto - Mango app"
              />
              <meta
                itemProp="description"
                content="Mango app allows the user to request crypto payments using their phone number"
              />
            </video>
          </div>
          <div className="w-full md:w-1/2 py-10 md:px-10 md:order-1">
            <h3 className="mb-8 text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
              Request <br /> a payment
            </h3>
            <p className="text-l leading-snug">
              Send payment request to the people on your contact list even those
              who do not have the app. Submit the request, and we will notify
              you when it is done.
            </p>
          </div>
        </div>
      </div>

      <div className="lg:px-20 xs:px-6 py-20">
        <hr />
      </div>

      <div className="lg:px-20 xs:px-6 py-20 w-full sm:w-96 md:w-10/12 xl:w-9/12 mx-auto text-center">
        <div className="w-full mx-auto md:w-[30rem] lg:w-[38rem]">
          <span className="flex inline-flex uppercase tracking-widest text-base font-bold text-th-primary rounded-full border-2 border-th-primary px-4 py-2">
            Wallet
          </span>
          <h2 className="mb-10 mt-12 text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl tracking-tight">
            Build your <br />
            crypto portfolio
          </h2>
          <p className="text-xl lg:text-2xl">
            Buy crypto with cash and convert it into popular coins.
            <span className="text-th-fgd-1">
              Earn interest up to 45% per year.
            </span>
          </p>
        </div>
        <div className="grid gap-20 grid-cols-1 md:grid-cols-3 mt-20 w-full mx-auto px-10">
          <div className="text-base">
            <h4 className="pb-4">Convert coins</h4>
            <p className="text-l leading-snug">
              Buy crypto with cash and convert swap your favorite coins.
            </p>
            <img
              className="mt-12"
              src="../img/mango-app-wallet-1.png"
              alt="Swap once cryptocurrency to another"
            />
          </div>
          <div className="text-base">
            <h4 className="pb-4">Earn interest</h4>
            <p className="text-l leading-snug">
              Deposit your long-term holds into your Earn Wallet to earn
              interest.
            </p>
            <img
              className="mt-12"
              src="../img/mango-app-wallet-2.png"
              alt="Earn interest with your long-tern cryptocurrency holds"
            />
          </div>
          <div className="text-base">
            <h4 className="pb-4">Withdraw</h4>
            <p className="text-l leading-snug">
              Convert your crypto back to currency and withdraw to your bank
              account.
            </p>
            <img
              className="mt-12"
              src="../img/mango-app-wallet-3.png"
              alt="Withdraw crypto to the bank account"
            />
          </div>
        </div>
      </div>

      <div className="lg:px-20 xs:px-6 py-20">
        <hr />
      </div>

      <div className="lg:px-20 xs:px-6 py-20">
        <div className="flex justify-between">
          <div className="w-full">
            <span className="flex inline-flex uppercase tracking-widest text-base font-bold text-th-primary rounded-full border-2 border-th-primary px-4 py-2">
              In Action
            </span>
            <h2 className="mb-10 mt-12 text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl tracking-tight">
              Community <br /> driven features
            </h2>
            <p className="text-xl lg:text-2xl">
              <span className="text-th-fgd-1">People love Mango.</span> See what
              <br />
              the community is saying about us.
            </p>
          </div>
        </div>
        <div className="mt-24 w-full grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex-col text-base rounded-3xl border-2 border-th-bkg-3 p-8">
            <div className="self-start">
              <img
                className="w-1/4 rounded-xl"
                src="../reviews/crypto-payments-app-user-1.png"
                alt="A user that pay friends with crypyo in their local currency"
              />
              <p className="lg:text-l mt-10 mb-10 leading-snug">
                Being constantly on the move, I have been using the Mango app to
                pay my friends in various countries with their respective local
                currencies, which has saved me the hassle of dealing with
                currency exchange rates.
              </p>
            </div>
            <span className="font-bold self-end">
              Luc <br />
              <span className="text-sm font-normal">
                Entrepreneur, Digital Nomad
              </span>
            </span>
          </div>
          <div className="flex-col text-base rounded-3xl border-2 border-th-bkg-3 p-8">
            <div className="self-start">
              <img
                className="w-1/4 rounded-xl"
                src="../reviews/crypto-payments-app-user-2.png"
                alt="A user that pay with crypyo using only a phone number"
              />
              <p className="lg:text-l mt-10 mb-10 leading-snug">
                What I like most about the app is the ability to make payments
                to anyone on my contact list using just their phone number.
                It&apos;s simple to split costs for things like restaurant
                bills, concert tickets, or hotels.
              </p>
            </div>
            <span className="font-bold self-end">
              Maya <br />
              <span className="text-sm font-normal">Photographer, Berlin</span>
            </span>
          </div>
          <div className="flex-col text-base rounded-3xl border-2 border-th-bkg-3 p-8">
            <div className="self-start">
              <img
                className="w-1/4 rounded-xl"
                src="../reviews/crypto-payments-app-user-3.png"
                alt="A user that invest in crypto"
              />
              <p className="lg:text-l mt-10 mb-10 leading-snug">
                It&apos;s a simple, beautiful, yet incredibly powerful wallet.
                Not only can I pay with crypto, but I can also invest in top
                tokens and earn additional interest on all the funds I receive.
              </p>
            </div>
            <span className="font-bold self-end">
              Lars <br />
              <span className="text-sm font-normal">Youtuber, Stockholm</span>
            </span>
          </div>
          <div className="flex-col text-base rounded-3xl border-2 border-th-bkg-3 p-8">
            <div className="self-start">
              <img
                className="w-1/4 rounded-xl"
                src="../reviews/crypto-payments-app-user-4.png"
                alt="A user that apriciate high security standards"
              />
              <p className="lg:text-l mt-10 mb-10 leading-snug">
                Although the app has state-of-the-art security and runs on
                blockchain technology, it is easy to access your funds using
                just your phone number and email, without any hassle.
              </p>
            </div>
            <span className="font-bold self-end">
              Mario <br />
              <span className="text-sm font-normal">
                Developer, Buenos Aires
              </span>
            </span>
          </div>
        </div>
      </div>

      <div className="lg:px-20 xs:px-6 py-20 mt-20">
        <div className="flex bg-th-bkg-3 rounded-3xl px-10 py-20">
          <div className="w-1/2 relative hidden md:block">
            <video
              loop
              autoPlay
              playsInline
              muted
              className="absolute w-10/12 xl:w-10/12 2xl:w-10/12"
              poster="../videos/mango-download.png"
              itemType="http://schema.org/VideoObject"
            >
              <source src="../videos/mango-download.webm" type="video/webm" />
              <source src="../videos/mango-download.mp4" type="video/mp4" />
              <meta
                itemProp="name"
                content="Download crypto payments app - Mango"
              />
              <meta
                itemProp="description"
                content="Download the app and enjoy free, worldwide crypto payments with friends."
              />
            </video>
          </div>
          <div className="w-full sm:w-80 md:w-1/2 mx-auto flex-wrap lg:flex-nowrap xl:py-5 2xl:py-10 text-center md:text-left">
            <span className="flex inline-flex uppercase tracking-widest text-base font-bold text-th-primary rounded-full border-2 border-th-primary px-4 py-2">
              Crypto payments
            </span>
            <h2 className="mb-10 mt-12 text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl tracking-tight">
              Download Mango
            </h2>
            <p className="text-xl lg:text-xl xl:text-2xl max-w-xl text-th-fgd-1">
              Get started with the most powerful wallet supporting crypto
              payments and easy crypto investments.
            </p>
            <div className="flex w-full items-center sm:w-auto flex-wrap">
              <ButtonLink
                className="w-full mx-auto md:mx-0 my-8"
                linkText={
                  <>
                    <span>Get the App</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="-10 -6 34 34"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                      />
                    </svg>
                  </>
                }
                path="https://usemango.app/get"
                size="large"
              />
              <div className="m-auto md:ml-6 text-th-fgd-3">
                Available on: <br className="hidden md:block" />
                <span className="text-th-fgd-1 font-bold">iOS</span> and
                <span className="text-th-fgd-1 font-bold">Android</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MangoApp

interface ButtonLinkProps {
  path: string
  className?: string
  secondary?: boolean
  linkText: string | JSX.Element
  size?: 'large' | 'medium' | 'small'
}

const ButtonLink: FunctionComponent<ButtonLinkProps> = ({
  linkText,
  path,
  className,
  secondary,
  size = 'medium',
}) => {
  return (
    <a
      className={`flex sm:w-max items-center justify-center rounded-xl ${
        secondary
          ? 'border border-mango-light'
          : 'bg-mango-light md:hover:brightness-90'
      } ${
        size === 'medium'
          ? 'h-10 px-4 text-sm'
          : size === 'large'
          ? 'h-12 px-6'
          : 'h-8 px-3'
      } default-transition font-display focus:outline-none text-black ${className}`}
      href={path}
      rel="noopener noreferrer"
      target="_blank"
    >
      {linkText}
    </a>
  )
}
