import {
  Bars2Icon,
  CubeIcon,
  HandThumbDownIcon,
} from '@heroicons/react/20/solid'
import { useTranslation } from 'next-i18next'
import dynamic from 'next/dynamic'
import ChildPageTopSection from '../shared/ChildPageTopSection'
import ColorBlur from '../shared/ColorBlur'
import HeadingTagline from '../shared/HeadingTagline'
import IconWithText from '../shared/IconWithText'
import InlineImageWithText from '../shared/InlineImageWithText'
import SectionWrapper from '../shared/SectionWrapper'
import TokenStats from './TokenStats'
const Distribution = dynamic(() => import('./Distribution'), {
  ssr: false,
})

const MngoPage = () => {
  const { t } = useTranslation(['common', 'mngo'])
  return (
    <>
      <ChildPageTopSection
        heading={t('mngo:powered-by-mngo')}
        intro={t('mngo:mngo-desc')}
        linkPath="https://trade.mango.markets"
        buttonText={t('mngo:buy-mngo')}
      />
      <TokenStats />
      <SectionWrapper>
        <div className="grid grid-cols-12 gap-8 md:gap-12 flex flex-col sm:flex-row items-end mb-8 md:mb-16">
          <div className="col-span-12 sm:col-span-6">
            <HeadingTagline text={t('mngo:ido-price')} />
          </div>
          <div className="col-span-12 sm:col-span-6">
            <h2>{t('mngo:fair-launch-ido')}</h2>
          </div>
        </div>
        <div className="grid grid-cols-6 gap-x-8 gap-y-12 mt-12">
          <IconWithText
            desc={t('mngo:no-insider-deals-desc')}
            icon={<HandThumbDownIcon className="h-5 w-5 text-th-fgd-2" />}
            title={t('mngo:no-insider-deals')}
          />
          <IconWithText
            desc={t('mngo:equal-price-desc')}
            icon={<Bars2Icon className="h-5 w-5 text-th-fgd-2" />}
            title={t('mngo:equal-price')}
          />
          <IconWithText
            desc={t('mngo:dao-controlled-supply-desc')}
            icon={<CubeIcon className="h-5 w-5 text-th-fgd-2" />}
            title={t('mngo:dao-controlled-supply')}
          />
        </div>
        <ColorBlur
          className="bottom-0 left-0 opacity-10"
          height="360px"
          width="50%"
        />
      </SectionWrapper>
      <Distribution />
      <SectionWrapper>
        <h2 className="mb-12">{t('mngo:token-emissions')}</h2>
        <InlineImageWithText
          desc={t('mngo:vested-grants-desc')}
          title={t('mngo:vested-grants')}
          imageSrc="/images/img-placeholder.png"
          linkPath="https://dao.mango.markets/dao/MNGO/token-stats"
          linkText={t('mngo:view-emissions')}
          reverse
        />
      </SectionWrapper>
    </>
  )
}

export default MngoPage
