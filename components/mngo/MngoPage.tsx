import { useTranslation } from 'next-i18next'
import dynamic from 'next/dynamic'
import Button from '../shared/Button'
import SectionWrapper from '../shared/SectionWrapper'
import TokenStats from './TokenStats'
const Distribution = dynamic(() => import('./Distribution'), {
  ssr: false,
})

const MngoPage = () => {
  const { t } = useTranslation(['common, mngo'])
  return (
    <>
      <SectionWrapper>
        <div className="w-full flex flex-col items-center text-center">
          <h1 className="mb-6">{t('mngo:powered-by-mngo')}</h1>
          <p className="text-base">{t('mngo:mngo-desc')}</p>
          <div className="mt-8">
            <a
              href="https://trade.mango.markets"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="large">{t('mngo:buy-mngo')}</Button>
            </a>
          </div>
        </div>
        <div className="absolute w-2/3 h-full top-40 -right-80 bg-th-down mix-blend-screen rounded-full filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute w-1/2 h-full top-60 left-0 bg-th-button mix-blend-screen rounded-full filter blur-3xl opacity-10 delay-1000 animate-blob" />
      </SectionWrapper>
      <TokenStats />
      <Distribution />
    </>
  )
}

export default MngoPage
