import { CurrencyDollarIcon } from '@heroicons/react/20/solid'
import { useTranslation } from 'next-i18next'
import { ReactNode } from 'react'
import HomeTopSection from './HomeTopSection'

const HomePage = () => {
  const { t } = useTranslation('home')
  return (
    <>
      {/* <div className="w-screen h-2 bg-gradient-to-r from-mango-red via-mango-yellow to-mango-green"></div> */}
      <HomeTopSection />
      <div className="bg-th-bkg-1 py-16 relative z-10">
        <div className="px-6 lg:px-12 grid grid-cols-3 gap-x-8 gap-y-12">
          <IconWithText
            desc={t('competitive-fees-desc')}
            icon={<CurrencyDollarIcon className="h-6 w-6 text-th-fgd-2" />}
            title={t('competitive-fees')}
          />
          <IconWithText
            desc={t('lightning-execution-desc')}
            icon={<CurrencyDollarIcon className="h-6 w-6 text-th-fgd-2" />}
            title={t('lightning-execution')}
          />
          <IconWithText
            desc={t('deeply-liquid-desc')}
            icon={<CurrencyDollarIcon className="h-6 w-6 text-th-fgd-2" />}
            title={t('deeply-liquid')}
          />
          <IconWithText
            desc={t('competitive-fees-desc')}
            icon={<CurrencyDollarIcon className="h-6 w-6 text-th-fgd-2" />}
            title={t('competitive-fees')}
          />
          <IconWithText
            desc={t('competitive-fees-desc')}
            icon={<CurrencyDollarIcon className="h-6 w-6 text-th-fgd-2" />}
            title={t('competitive-fees')}
          />
          <IconWithText
            desc={t('competitive-fees-desc')}
            icon={<CurrencyDollarIcon className="h-6 w-6 text-th-fgd-2" />}
            title={t('competitive-fees')}
          />
        </div>
      </div>
    </>
  )
}

export default HomePage

const IconWithText = ({
  desc,
  icon,
  title,
}: {
  desc: string
  icon: ReactNode
  title: string
}) => {
  return (
    <div className="col-span-1">
      <div className="h-10 w-10 rounded-full border-2 border-th-fgd-2 flex items-center justify-center mb-2">
        {icon}
      </div>
      <h3 className="mb-2">{title}</h3>
      <p>{desc}</p>
    </div>
  )
}
