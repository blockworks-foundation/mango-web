import { CurrencyDollarIcon } from '@heroicons/react/20/solid'
import { useTranslation } from 'next-i18next'
import { ReactNode } from 'react'
import Button from '../shared/Button'
import SectionWrapper from '../shared/SectionWrapper'
import HomeTopSection from './HomeTopSection'

const HomePage = () => {
  const { t } = useTranslation('home')
  return (
    <>
      <HomeTopSection />
      <SectionWrapper>
        <div className="grid grid-cols-6 gap-x-8 gap-y-12">
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
      </SectionWrapper>
      <SectionWrapper>
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-6 h-96 flex justify-center relative">
            <img
              className="absolute z-10 w-full h-auto max-w-[440px]"
              src="/images/swap-mobile.png"
              alt=""
            />
          </div>
          <div className="col-span-6">
            <h2 className="mb-4">{t('swap-heading')}</h2>
            <p className="text-lg mb-6">{t('swap-desc')}</p>
            <h3 className="mb-3">{t('swap-highlight-1-heading')}</h3>
            <p className="mb-6">{t('swap-highlight-1-desc')}</p>
            <h3 className="mb-3">{t('swap-highlight-2-heading')}</h3>
            <p className="mb-6">{t('swap-highlight-2-desc')}</p>
            <h3 className="mb-3">{t('swap-highlight-3-heading')}</h3>
            <p className="mb-8">{t('swap-highlight-3-desc')}</p>
            <Button size="large">{t('swap-now')}</Button>
          </div>
        </div>
        <div className="absolute w-1/2 h-48 -top-20 left-0 bg-th-down mix-blend-screen rounded-full filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute w-2/3 h-48 -bottom-20 right-0 bg-th-button mix-blend-screen rounded-full filter blur-3xl opacity-10 animate-blob" />
      </SectionWrapper>
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
    <div className="col-span-6 sm:col-span-3 md:col-span-2">
      <div className="h-10 w-10 rounded-full border-2 border-th-fgd-2 flex items-center justify-center mb-2">
        {icon}
      </div>
      <h3 className="mb-3">{title}</h3>
      <p>{desc}</p>
    </div>
  )
}
