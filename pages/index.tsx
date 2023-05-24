import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { NextPage } from 'next'
import HomePage from '../components/home/HomePage'

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

const Index: NextPage = () => {
  return <HomePage />
}

export default Index
