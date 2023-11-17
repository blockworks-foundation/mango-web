import Tooltip from '../shared/Tooltip'

const HeroStat = ({
  title,
  tooltipContent,
  value,
}: {
  title: string
  tooltipContent?: string
  value: string
}) => {
  return (
    <div className="col-span-4 sm:col-span-2 lg:col-span-1">
      <Tooltip
        content={tooltipContent ? tooltipContent : ''}
        placement="top-start"
      >
        <p className="lg:text-lg mb-1">{title}</p>
      </Tooltip>
      <p className="text-4xl md:text-5xl font-display tracking-tight text-th-fgd-1">
        {value}
      </p>
    </div>
  )
}

export default HeroStat
