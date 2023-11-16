import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { NextPage } from 'next'
import HomePage from '../components/home/HomePage'
import type { InferGetStaticPropsType } from 'next'
import { MANGO_DATA_API_URL } from '../utils/constants'

export async function getStaticProps({ locale }: { locale: string }) {
  const promises = [
    fetch(`${MANGO_DATA_API_URL}/stats/perp-market-summary`),
    fetch(`${MANGO_DATA_API_URL}/stats/spot-market-summary`),
  ]

  try {
    const data = await Promise.all(promises)
    const perpData = await data[0].json()
    const spotData = await data[1].json()

    return {
      props: {
        perpData,
        spotData,
        ...(await serverSideTranslations(locale, [
          'common',
          'home',
          'footer',
          'navigation',
        ])),
      },
    }
  } catch (e) {
    console.error('Failed to fetch market data', e)
    return {
      props: {
        perpData: null, // or an empty array []
        spotData: null, // or an empty array []
        ...(await serverSideTranslations(locale, [
          'common',
          'home',
          'footer',
          'navigation',
        ])),
      },
    }
  }
}

const Index: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  perpData,
  spotData,
}) => {
  return <HomePage perpData={perpData} spotData={spotData} />
}

export default Index
