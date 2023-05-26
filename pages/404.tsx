import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
        'home',
        'footer',
        'navigation',
      ])),
      // Will be passed to the page component as props
    },
  }
}

export default function Custom404() {
  const { t } = useTranslation('common')
  return (
    <div className="bg-[url('/images/new/cube-bg.png')] bg-repeat">
      <div
        className="mx-auto flex max-w-xl flex-col items-center justify-center text-center px-6"
        style={{ height: 'calc(100vh - 80px)' }}
      >
        <h1 className="mt-1 text-3xl text-th-fgd-1 sm:text-4xl">
          404: {t('404-heading')}
        </h1>
        <Link
          className="text-th-fgd-4 md:hover:text-th-fgd-2 default-transition mt-3"
          href="/"
          shallow={true}
        >
          <span className="text-lg">{t('404-link')}</span>
        </Link>
      </div>
    </div>
  )
}
