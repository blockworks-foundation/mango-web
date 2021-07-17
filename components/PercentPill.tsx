interface PercentPillProps {
  value: number
  className?: string
  bg?: string
}

const PercentPill = (props: PercentPillProps) => {
  const bg = props.bg || (props.value > 0 ? 'bg-green-500' : 'bg-mango-red')
  const displayValue = props.value.toFixed(props.value > 10 ? 0 : 1)

  return (
    <div
      className={`${props.className} ${bg} inline-flex text-xs h-6 mt-1 items-center px-2 py-1 uppercase font-bold rounded-full`}
    >
      <p>{displayValue}%</p>
    </div>
  )
}

export default PercentPill
