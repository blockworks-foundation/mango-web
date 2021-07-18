import PercentPill from './PercentPill'

interface BankCardProps {
  name: string
  icon: string
  interest: { deposit: number; borrow: number }
  liquidity: { native: number; usd: number }
}

const BankCard = (props: BankCardProps) => {
  const format = (val: number, digits: number) => {
    return new Intl.NumberFormat('en-US', {
      maximumFractionDigits: digits,
    }).format(val)
  }

  return (
    <div className="flex flex-col py-4 px-6 h-auto w-auto">
      <div className="flex flex-row gap-x-2">
        <img className="w-5 h-5 mt-1" src={props.icon} alt={props.name} />
        <p className="text-xl">{props.name}</p>
      </div>
      <div className="flex flex-row gap-x-2">
          <PercentPill value={props.interest.deposit} />
          <PercentPill value={props.interest.borrow} bg="bg-mango-red" />
      </div> 
      <div className="flex-row">
        <p className="">
          {format(props.liquidity.native, 0)} {props.name}
        </p>
      </div>
      <div className="flex-row">
        <p className="">${format(props.liquidity.usd, 0)}</p>
      </div>
    </div>
  )
}

export default BankCard
