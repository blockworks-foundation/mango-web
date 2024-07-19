'use client'
import { useQuery } from '@tanstack/react-query'
import store from '../../store/store'
import { useEffect, useMemo } from 'react'
import { floorToDecimal, numberCompacter } from '../../utils/numbers'
import SectionWrapper from '../shared/SectionWrapper'
import { Connection, PublicKey } from '@solana/web3.js'
import { getStakePoolAccount } from '@solana/spl-stake-pool'

const actions = store.getState().actions

const MANGOSOL_STAKE_POOL = '9jWbABPXfc75wseAbLEkBCb1NRaX9EbJZJTDQnbtpzc1'
const MANGOSOL_DECIMALS = 9
const MANGOSOL_MINT = 'MangmsBgFqJhW4cLUR9LxfVgMboY1xAoP8UUBiWwwuY'
const fetchStakePool = async (conn: Connection) => {
  try {
    const stakePool = await getStakePoolAccount(
      conn,
      new PublicKey(MANGOSOL_STAKE_POOL),
    )
    const nativeSupply = stakePool?.account?.data?.poolTokenSupply
    if (nativeSupply) {
      return nativeSupply.toNumber() / Math.pow(10, MANGOSOL_DECIMALS)
    }

    return 0
  } catch (e) {
    console.log('failed to fetch mangoSOL stake pool', e)
    return 0
  }
}

async function fetchApyToSol() {
  const resp = await fetch(
    'https://api.mngo.cloud/data/boost/stats/monthly-sol-price',
  )
  const json: { data: { mint: string; monthly_price_change: number }[] } =
    await resp.json()
  const tokenToApy: { [key: string]: number } = {}
  const record = json.data.find((x) => x.mint === MANGOSOL_MINT)
  const apy = (1 + (record?.monthly_price_change || 0)) ** 12 - 1
  tokenToApy['mangosol'] = apy
  return tokenToApy?.mangosol ? tokenToApy.mangosol * 100 : 0
}

const Stats = () => {
  const group = store((s) => s.group)
  const connection = store((s) => s.connection)
  const { data: mangoSolSupply } = useQuery({
    queryKey: ['mangosol-supply-data'],
    queryFn: () => fetchStakePool(connection),
    enabled: !!connection,
  })
  const { data: mangoSolApy } = useQuery({
    queryKey: ['mangosol-apy'],
    queryFn: () => fetchApyToSol(),
  })

  useEffect(() => {
    actions.fetchGroup()
  }, [])

  const leverage = useMemo(() => {
    if (!group) return 0
    const bank = group.banksMapByName.get('mangoSOL')?.[0]
    if (!bank) return 0
    const weight = bank.scaledInitAssetWeight(bank.price)
    const leverageFactor = 1 / (1 - weight.toNumber())
    return floorToDecimal(leverageFactor, 1).toNumber()
  }, [group])

  const solPrice = useMemo(() => {
    if (!group) return 0
    const bank = group.banksMapByName.get('SOL')?.[0]
    if (!bank) return 0
    return bank?.uiPrice
  }, [group])

  return (
    <SectionWrapper noPaddingY>
      <div className="grid grid-cols-3 gap-6 py-12">
        <div className="col-span-3 sm:col-span-1">
          <p>APY</p>
          <GradientText>
            {mangoSolApy ? `${mangoSolApy.toFixed(1)}%` : '–'}
          </GradientText>
        </div>
        <div className="col-span-3 sm:col-span-1">
          <p>Total stake</p>
          <GradientText>
            {mangoSolSupply && solPrice
              ? `$${numberCompacter.format(mangoSolSupply * solPrice)}`
              : '–'}
          </GradientText>
        </div>
        <div className="col-span-3 sm:col-span-1">
          <p>Leverage</p>
          <GradientText>
            {leverage ? `${leverage.toFixed(0)}x` : '–'}
          </GradientText>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default Stats

const GradientText = (props) => (
  <span className="bg-gradient-to-bl from-yellow-500 via-orange-500 to-red-500 bg-clip-text text-transparent font-display text-5xl">
    {props.children}
  </span>
)
