import PercentPill from './PercentPill'

interface LendCardProps {
  name: string
  icon: string
  bg: string
  interest: { deposit: number; borrow: number }
  liquidity: { native: number; usd: number }
}

const LendCard = (props: LendCardProps) => {
  const format = (val: number, digits: number) => {
    return new Intl.NumberFormat('en-US', {
      maximumFractionDigits: digits,
    }).format(val)
  }

  return (
    <div
      className="flex-1 bg-th-fgd-4 shadow-md rounded-xl py-4 px-4 h-auto w-auto m-2"
      style={{
        backgroundBlendMode: 'overlay',
        backgroundImage: `url(${props.bg})`,
        backgroundPosition: '115% 115%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
      }}
    >
      <div className="flex flex-row justify-center">
        <div className="pr-4">
          <div className="flex flex-row gap-x-2">
            {/* <img className="w-5 h-5 mt-1" src={props.icon} alt={props.name} /> */}
            <p className="text-xl font-bold">{props.name}</p>
          </div>
          <div>
            <p className="text-xs text-white text-opacity-50 text-bold">
              Deposit / Borrow
            </p>
          </div>
          <div className="flex flex-row gap-x-2">
            <PercentPill value={props.interest.deposit} />
            <PercentPill value={props.interest.borrow} bg="bg-mango-red" />
          </div>
          <div className="flex flex-row gap-x-2">{/* Chart goes here */}</div>
        </div>
        <div className="py-3 px-2">
          <div className="flex-row">
            <p className="text-white text-opacity-50 text-xs font-bold">
              Total Deposits
            </p>
          </div>
          <div className="flex-row">
            <p className="font-bold text-xl">
              ${format(props.liquidity.usd, 0)}
            </p>
          </div>

          {/* 
          <div className="flex-row mt-2">
            <p className="text-white text-opacity-50 text-xs">Total Borrows</p>
          </div>
          <div className="flex-row">
            <p className="">${format(props.liquidity.usd, 0)}</p>
          </div>
          <div className="flex-row mt-2">
            <p className="text-white text-opacity-50 text-xs">
              Remaining Liquidity
            </p>
          </div>
          <div className="flex-row">
            <p className="">${format(props.liquidity.usd, 0)}</p>
          </div>
          */}
        </div>
      </div>
    </div>
  )
}

export default LendCard
