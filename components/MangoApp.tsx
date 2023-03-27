import { FunctionComponent } from 'react'

const MangoApp = () => {
  return (
    <>
      <div className="flex lg:flex-row items-center lg:px-20 xs:px-6 pt-40">
        <div className="pr-20 w-5/12">
          <h1 className="mb-10">
            The future <br /> of payments.
          </h1>
          <p className="text-base lg:text-2xl text-th-fgd-3 mb-12">
            Seamlessly send and accept cross-border payments in your native
            currency. Witdraw to your bank account. Get started in less than a
            minute.
          </p>
          <div className="flex">
            <ButtonLink
              className="mr-4"
              linkText="App Store"
              path="https://app.mango.markets"
              size="large"
            />
            <ButtonLink
              linkText="Google Play"
              path="https://app.mango.markets"
              size="large"
            />
          </div>
        </div>
        <div className="relative flex w-7/12 space-x-20">
          <div className="w-full">
            <img src="../img/@1x-app-hero-1.png" alt="Mobile App Mango" />
          </div>
          <div className="w-full mt-40">
            <img src="../img/@1x-app-hero-2.png" alt="Mobile App Mango" />
          </div>
        </div>
      </div>

      <div className="flex lg:flex-row lg:px-20 xs:px-6 py-20 mt-20">
        <div className="w-10/12 mx-auto">
          <div className="flex">
            <p className="text-base lg:text-5xl text-th-fgd-1 lg:leading-tight">
              Mango is the cutting-edge crypto-powered wallet that enables you
              to instantly send and receive payments with anyone on your phone
              contact list using top 20 currencies and do conversion on the fly.
            </p>
          </div>
          <div className="flex mt-20 space-x-20">
            <div className="text-base w-4/12">
              01
              <h3 className="py-6">Fast</h3>
              <p className="lg:text-xl">
                Pay within seconds using a QR code or phone number. Withdraw
                directly to your bank account.
              </p>
            </div>
            <div className="text-base w-4/12">
              02
              <h3 className="py-6">Secure</h3>
              <p className="lg:text-xl">
                Transactions are secured through cryptographic algorithms,
                making them difficult to manipulate.
              </p>
            </div>
            <div className="text-base w-4/12">
              03
              <h3 className="py-6">Accessible</h3>
              <p className="lg:text-xl">
                Pay anyone, including people who may not have access to
                traditional financial systems.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:px-20 xs:px-6 py-20">
        <hr />
      </div>

      <div className="lg:px-20 xs:px-6 py-20">
        <div className="w-8/12 mx-auto text-center">
          <span className="flex inline-flex uppercase font-bold text-th-primary rounded-full border-2 border-th-primary px-4 py-2">
            Payments
          </span>
          <h1 className="mb-10 mt-10">
            Send and accept <br /> payments
          </h1>
          <p className="text-base lg:text-4xl text-th-fgd-1 lg:leading-tight">
            P2P transactions – no need for a central authority <br /> or
            intermediary to facilitate transactions.
          </p>
        </div>
        <div className="flex w-10/12 mx-auto lg:flex-row items-center my-20 space-x-40">
          <div className="w-8/12">
            <img
              className=""
              src="../img/mango-app-payments-1.png"
              alt="Mobile App Mango"
            />
          </div>
          <div className="w-4/12">
            <span className="inline-flex p-4 rounded-full border-2 border-th-primary mb-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.2"
                stroke="currentColor"
                class="w-10 h-10 stroke-cyan-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </span>
            <h2 className="mb-8">
              Send <br /> payments
            </h2>
            <p className="lg:text-xl">
              Pay in the local currency by using your contact's phone number.
              The payment process utilizes crypto technology, which means you
              will be sending the USDC equivalent to the selected currency's
              value.
            </p>
          </div>
        </div>
        <div className="flex w-10/12 mx-auto lg:flex-row items-center my-20 space-x-40">
          <div className="w-4/12">
            <span className="inline-flex p-4 rounded-full border-2 border-th-primary mb-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.2"
                stroke="currentColor"
                class="w-10 h-10 stroke-cyan-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </span>
            <h2 className="mb-8">
              Accept <br /> payments
            </h2>
            <p className="lg:text-xl">
              Accept payments by showing your QR code or sending a payment
              request to anyone on your contact list. In case your friend
              doesn't have the application installed, we will notify them of
              your request via SMS.
            </p>
          </div>
          <div className="w-8/12">
            <img
              className=""
              src="../img/mango-app-payments-2.png"
              alt="Mobile App Mango"
            />
          </div>
        </div>
        <div className="flex w-10/12 mx-auto lg:flex-row items-center my-20 space-x-40">
          <div className="w-8/12">
            <img
              className=""
              src="../img/mango-app-payments-3.png"
              alt="Mobile App Mango"
            />
          </div>
          <div className="w-4/12">
            <span className="inline-flex p-4 rounded-full border-2 border-th-primary mb-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.2"
                stroke="currentColor"
                class="w-10 h-10 stroke-cyan-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </span>
            <h2 className="mb-8">
              Make <br />
              it personal
            </h2>
            <p className="lg:text-xl">
              Add some joy to each transaction with a note, or photo. It's a fun
              way to make splitting bills or sharing taxis more enjoyable for
              everyone involved!
            </p>
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
