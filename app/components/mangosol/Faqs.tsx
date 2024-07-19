'use client'

import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const FAQS = [
  {
    q: 'What is liquid staking?',
    a: 'Liquid staking allows you to participate in staking without locking up your tokens. When you mint or buy a liquid staking token (LST) like mangoSOL it is representative of the underlying staked SOL. The price of the LST increases vs the underlying asset (SOL) as the staking rewards contribute to the value.',
  },
  {
    q: 'What is mangoSOL?',
    a: "mangoSOL is Mango's liquid staking token. The underlying SOL is staked to Mango's validator. Holding mangoSOL has exclusive benefits on Mango and helps to support the project.",
  },
  {
    q: 'Where does the yield come from?',
    a: 'Staking rewards. Validators earn SOL rewards for validating transactions. These rewards are passed on and accrue to the value of mangoSOL. This increases its value vs SOL over time.',
  },
  {
    q: 'Is mangoSOL safe?',
    a: 'mangoSOL was created via Sanctum. Sanctum LSTs use a version of the SPL stake pool program 4. Multiple security firms have audited this program. So far it controls $1B+ of value and has done so for more than two years, with no exploits. Of course, just because a contract has not been exploited in the past does not mean it will never ever be exploited in the future.',
  },
  {
    q: 'How can I get mangoSOL?',
    a: 'You can get mangoSOL on Mango, Jupiter or Sanctum.',
  },
]

const Faqs = () => {
  return (
    <div className="border-b border-th-bkg-4">
      {FAQS.map((faq, i) => (
        <Disclosure key={i}>
          {({ open }) => (
            <div>
              <Disclosure.Button
                className={`w-full rounded-lg border-t border-th-bkg-4 p-6 text-left focus:outline-none`}
              >
                <div className="flex items-center justify-between">
                  <p className="text-lg">{faq.q}</p>
                  <ChevronDownIcon
                    className={`${
                      open ? 'rotate-180' : 'rotate-360'
                    } h-6 w-6 flex-shrink-0 text-th-fgd-3`}
                  />
                </div>
              </Disclosure.Button>
              <Disclosure.Panel className="p-6">
                <p className="rewards-p">{faq.a}</p>
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
      ))}
    </div>
  )
}

export default Faqs
