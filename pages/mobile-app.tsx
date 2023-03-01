import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { NextPage } from 'next'
import MobileAppPage from '../components/mobile-app/MobileAppPage'

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
        'mobile-app',
        'footer',
        'navigation',
      ])),
      // Will be passed to the page component as props
    },
  }
}

const MobileApp: NextPage = () => {
  return <MobileAppPage />
}

export default MobileApp
