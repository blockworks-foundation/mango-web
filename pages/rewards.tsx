import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { NextPage } from 'next'
import RewardsPage from '../components/rewards/RewardsPage'

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

const Rewards: NextPage = () => {
  return <RewardsPage />
}

export default Rewards
