import { useTranslation } from 'next-i18next'
import dynamic from 'next/dynamic'
import Button from '../shared/Button'
import ColorBlur from '../shared/ColorBlur'
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
          <p className="text-lg">{t('mngo:mngo-desc')}</p>
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
        <ColorBlur
          className="top-40 -right-80 bg-th-down animate-blob"
          height="100%"
          width="66%"
        />
        <ColorBlur
          className="top-80 left-40 delay-500 animate-blob"
          height="100%"
          width="50%"
        />
      </SectionWrapper>
      <TokenStats />
      <Distribution />
    </>
  )
}

export default MngoPage
