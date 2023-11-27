import SheenLoader from '../shared/SheenLoader'
import Tooltip from '../shared/Tooltip'

const HeroStat = ({
  title,
  tooltipContent,
  value,
  loading,
}: {
  title: string
  tooltipContent?: string
  value: string
  loading: boolean
}) => {
  return (
    <div className="col-span-4 sm:col-span-2 lg:col-span-1">
      <Tooltip
        content={tooltipContent ? tooltipContent : ''}
        placement="top-start"
      >
        <p className="lg:text-lg mb-1">{title}</p>
      </Tooltip>
      {!loading ? (
        <p className="text-4xl md:text-5xl font-display tracking-tight text-th-fgd-1">
          {value}
        </p>
      ) : (
        <SheenLoader className="mt-1">
          <div className="h-12 w-32 bg-th-bkg-3" />
        </SheenLoader>
      )}
    </div>
  )
}

export default HeroStat
