import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { NextPage } from 'next'
import DaoPage from '../components/dao/DaoPage'

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
        'dao',
        'footer',
        'navigation',
      ])),
      // Will be passed to the page component as props
    },
  }
}

const MangoDao: NextPage = () => {
  return <DaoPage />
}

export default MangoDao
