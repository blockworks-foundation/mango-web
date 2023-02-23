import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { NextPage } from 'next'
import MngoPage from '../components/mngo/MngoPage'

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
        'mngo',
        'footer',
        'navigation',
      ])),
      // Will be passed to the page component as props
    },
  }
}

const Mngo: NextPage = () => {
  return <MngoPage />
}

export default Mngo
