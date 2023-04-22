import { FunctionComponent } from 'react'

const MangoApp = () => {
  return (
    <>
      <div className="flex w-full sm:w-96 md:w-full mx-auto flex-wrap lg:flex-nowrap items-center lg:px-20 xs:px-6 pt-40 lg:pt-30">
        <div className="w-full md:w-7/12 mb-10 text-center md:text-left">
          <h1 className="mb-12 text-3xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl tracking-tight">
            Easy.
            <br />
            Safe.
            <br />
            Crypto.
          </h1>
          <p className="text-xl lg:text-2xl xl:text-3xl mb-6 max-w-xl text-th-fgd-1">
            A secure crypto wallet that&apos;s so simple, anyone can use it.
          </p>
          <div className="inline-flex w-full sm:w-auto flex-wrap sm:space-x-4">
            <ButtonLink
              className="w-full mt-4"
              linkText="App Store"
              path="https://app.mango.markets"
              size="large"
            />
            <ButtonLink
              className="w-full mt-4"
              linkText="Google Play"
              path="https://app.mango.markets"
              size="large"
            />
          </div>
        </div>
        <div className="flex w-full md:w-5/12 mx-auto mt-20 md:mt-0">
          <video loop autoPlay muted>
            <source
              src="../videos/mango-payments-hero.webm"
              type="video/webm"
            />
          </video>
        </div>
      </div>

      <div className="w-full sm:w-96 md:w-full mx-auto grid gap-20 grid-cols-1 md:grid-cols-3 lg:px-20 xs:px-6 py-20 text-center md:text-left">
        <div className="pt-10">
          <span className="inline-flex p-4 rounded-full border-2 border-th-fgd-1 mb-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.2"
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
          </span>
          <h3 className="relative text-base lg:text-xl xl:text-2xl font-display text-th-fgd-3 leading-snug max-w-xs md:ml-12">
            <span className="text-sm absolute -top-2 -left-12 text-th-primary hidden md:block">
              01
            </span>{' '}
            Non-custodial wallet without the risk of losing access to your
            crypto.
          </h3>
        </div>
        <div className="pt-10">
          <span className="inline-flex p-1 rounded-full border-2 border-th-fgd-1 mb-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="0.8"
              stroke="currentColor"
              className="w-16 h-16"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 7.5l3 4.5m0 0l3-4.5M12 12v5.25M15 12H9m6 3H9m12-3a9"
              />
            </svg>
          </span>
          <h3 className="relative text-base lg:text-xl xl:text-2xl font-display text-th-fgd-3 leading-snug max-w-xs md:ml-12">
            <span className="text-sm absolute -top-2 -left-12 text-th-primary hidden md:block">
              02
            </span>{' '}
            Send and request payments to anyone&apos;s mobile number.
          </h3>
        </div>
        <div className="pt-10">
          <span className="inline-flex p-4 rounded-full border-2 border-th-fgd-1 mb-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.2"
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
          <h3 className="relative text-base lg:text-xl xl:text-2xl font-display text-th-fgd-3 leading-snug max-w-xs md:ml-12">
            <span className="text-sm absolute -top-2 -left-12 text-th-primary hidden md:block">
              03
            </span>{' '}
            Build your crypto portfolio. Withdraw to your bank account.
            {/* <span className="text-th-fgd-1">Pay</span> or send a payment{' '}
            <span className="text-th-fgd-1">request</span> to get paid. */}
          </h3>
        </div>
      </div>

      <div className="lg:px-20 xs:px-6 py-20">
        <hr />
      </div>

      <div className="lg:px-20 xs:px-6 py-20 w-full sm:w-96 md:w-10/12 xl:w-9/12 mx-auto">
        <div className="w-full mx-auto text-center md:w-[28rem] lg:w-[42rem]">
          <span className="flex inline-flex uppercase tracking-widest text-base font-bold text-th-primary rounded-full border-2 border-th-primary px-4 py-2">
            Payments
          </span>
          <h2 className="mb-10 mt-12 text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl tracking-tight">
            Pay without limits
          </h2>
          <p className="text-2xl xl:text-3xl xl:leading-tight">
            Send and accept payments globally to anyone with a mobile phone.
          </p>
        </div>
        <div className="flex flex-wrap md:flex-nowrap w-full mx-auto items-center mt-20 text-center md:text-left">
          <div className="w-full md:w-1/2 md:mx-10">
            <video className="w-10/12" loop autoPlay muted>
              <source
                src="../videos/mango-payments-pay.webm"
                type="video/webm"
              />
            </video>
          </div>
          <div className="w-full md:w-1/2 py-10 md:px-10">
            <h3 className="mb-8 text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
              Anywhere
              <br />
              on earth
              <br />
              in a flash
            </h3>
            <p className="text-l leading-snug">
              International banking transactions are slow and expensive. Now you
              can send funds around the globe in a matter of seconds and for a
              fraction of a cent.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap md:flex-nowrap w-full mx-auto items-center mt-20 text-center md:text-left">
          <div className="w-full md:w-1/2 md:mx-10 md:order-2">
            <video className="w-10/12 ml-auto" loop autoPlay muted>
              <source
                src="../videos/mango-payments-request.webm"
                type="video/webm"
              />
            </video>
          </div>
          <div className="w-full md:w-1/2 py-10 md:px-10 md:order-1">
            <h3 className="mb-8 text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
              Split the bill with ease
            </h3>
            <p className="text-l leading-snug">
              Send payment requests to your friends when you front the bill. If
              they don&apos;t have the app, they&apos;ll get a message with the
              request. We&apos;ll ping you when payments hit your wallet.
            </p>
          </div>
        </div>
      </div>

      <div className="lg:px-20 xs:px-6 py-20">
        <hr />
      </div>

      <div className="lg:px-20 xs:px-6 py-20 w-full sm:w-96 md:w-full mx-auto">
        <div className="w-full mx-auto text-center md:w-[30rem] lg:w-[44rem]">
          <span className="flex inline-flex uppercase tracking-widest text-base font-bold text-th-primary rounded-full border-2 border-th-primary px-4 py-2">
            Wallet
          </span>
          <h2 className="mb-10 mt-12 text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl tracking-tight">
            Build your <br />
            crypto portfolio
          </h2>
          <p className="text-2xl xl:text-3xl xl:leading-tight">
            Everything you need to become a legendary crypto investor.
          </p>
        </div>
        <div className="grid gap-20 grid-cols-1 md:grid-cols-3 mt-20 w-full xl:w-10/12 mx-auto">
          <div className="text-base">
            <h3 className="py-2">Invest</h3>
            <p className="text-l leading-snug">
              Buy crypto with currency and swap between your favorite tokens.
            </p>
            <img
              className="mt-8"
              src="../img/mango-app-wallet-1.png"
              alt="Mobile App Mango"
            />
          </div>
          <div className="text-base">
            <h3 className="py-2">Earn</h3>
            <p className="text-l leading-snug">
              Deposit your long-term holds into your Earn Wallet to earn
              interest.
            </p>
            <img
              className="mt-8"
              src="../img/mango-app-wallet-2.png"
              alt="Mobile App Mango"
            />
          </div>
          <div className="text-base">
            <h3 className="py-2">Withdraw</h3>
            <p className="text-l leading-snug">
              Convert your crypto back to currency and withdraw to your bank
              account.
            </p>
            <img
              className="mt-8"
              src="../img/mango-app-wallet-3.png"
              alt="Mobile App Mango"
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
            <h2 className="mb-10 mt-12 text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl tracking-tight">
              Word on
              <br />
              the street
            </h2>
            <p className="text-2xl xl:text-3xl xl:leading-tight">
              See what the community is saying about us.
            </p>
          </div>
          <div className="flex flex-nowrap self-end space-x-4 hidden sm:flex">
            <a
              href=""
              className="inline-flex justify-center items-center w-12 h-12 bg-th-red-dark rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="white"
                className="w-6 h-6 pr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </a>
            <a
              href=""
              className="inline-flex justify-center items-center w-12 h-12 bg-th-red-dark rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="white"
                className="w-6 h-6 pl-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="mt-24 w-full grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex-col text-base rounded-3xl border-2 border-th-bkg-3 p-8">
            <div className="self-start">
              <img
                className="w-1/2 rounded-xl"
                src="../reviews/mango-user-review-1.png"
                alt="Mobile App Mango"
              />
              <p className="lg:text-l mt-10 mb-10 leading-normal">
                &quot;Mango app is a game changer for instant payments.
                It&apos;s crypto-powered, fast, efficient, easy to use, and has
                low fees.&quot;
              </p>
            </div>
            <span className="font-bold self-end">Ethan</span>
          </div>
          <div className="flex-col text-base rounded-3xl border-2 border-th-bkg-3 p-8">
            <div className="self-start">
              <img
                className="w-1/2 rounded-xl"
                src="../reviews/mango-user-review-2.png"
                alt="Mobile App Mango"
              />
              <p className="lg:text-l mt-10 mb-10 leading-normal">
                &quot;Mango app is a reliable and user-friendly platform for
                crypto payments. The instant payments feature is a huge plus,
                and the security measures ensure my funds are safe.&quot;
              </p>
            </div>
            <div className="font-bold self-end">Isabella</div>
          </div>
          <div className="flex-col text-base rounded-3xl border-2 border-th-bkg-3 p-8">
            <div className="self-start">
              <img
                className="w-1/2 rounded-xl"
                src="../reviews/mango-user-review-3.png"
                alt="Mobile App Mango"
              />
              <p className="lg:text-l mt-10 mb-10 leading-normal">
                &quot;Mango app is a great addition to my crypto transactions.
                It&apos;s user-friendly, powered by blockchain, and has instant
                payments for transferring funds quickly and easily.&quot;
              </p>
            </div>
            <div className="font-bold self-end">Liam</div>
          </div>
          <div className="flex-col text-base rounded-3xl border-2 border-th-bkg-3 p-8">
            <div className="self-start">
              <img
                className="w-1/2 rounded-xl"
                src="../reviews/mango-user-review-4.png"
                alt="Mobile App Mango"
              />
              <p className="lg:text-l mt-10 mb-10 leading-normal">
                &quot;Mango app is the best crypto-powered instant payments app
                out there. It&apos;s simple, low-cost, fast, and reliable.&quot;
              </p>
            </div>
            <div className="font-bold self-end">Ava</div>
          </div>
        </div>
      </div>

      <div className="lg:px-20 xs:px-6 py-20 mt-20">
        <div className="flex bg-th-bkg-3 rounded-3xl px-10 py-20">
          <div className="w-1/2 relative hidden md:block">
            <video
              loop
              autoPlay
              muted
              className="absolute lg:w-11/12 xl:w-10/12 2xl:w-10/12 xl:ml-10"
            >
              <source src="../videos/mango-download.webm" type="video/webm" />
              <source src="../videos/mango-download.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="w-full md:w-1/2 flex-wrap xl:py-5 2xl:py-10">
            <span className="flex inline-flex uppercase tracking-widest text-base font-bold text-th-primary rounded-full border-2 border-th-primary px-4 py-2">
              Get the app
            </span>
            <h2 className="mb-10 mt-12 text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl tracking-tight">
              Download now
              <br />
              to get started
            </h2>
            {/* <p className="text-xl lg:text-xl xl:text-2xl max-w-xl text-th-fgd-1">
              Start your jouney with us today.
            </p> */}
            <div className="inline-flex w-full flex-wrap sm:space-x-4 mt-6">
              <ButtonLink
                className="w-full mt-4"
                linkText="App Store"
                path="https://app.mango.markets"
                size="large"
              />
              <ButtonLink
                className="w-full mt-4"
                linkText="Google Play"
                path="https://app.mango.markets"
                size="large"
              />
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
  linkText: string
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
          ? 'border border-th-red-dark'
          : 'bg-th-red-dark md:hover:brightness-90'
      } ${
        size === 'medium'
          ? 'h-10 px-4 text-sm'
          : size === 'large'
          ? 'h-12 px-6'
          : 'h-8 px-3'
      } default-transition font-display focus:outline-none text-th-fgd-1 ${className}`}
      href={path}
      rel="noopener noreferrer"
      target="_blank"
    >
      {linkText}
    </a>
  )
}
