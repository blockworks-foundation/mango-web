/* eslint-disable @typescript-eslint/no-explicit-any */
import { FunctionComponent, useMemo, useState } from 'react'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
  ReferenceLine,
  BarChart,
  Bar,
  Cell,
  Label,
} from 'recharts'
import { ContentType } from 'recharts/types/src/component/Tooltip'
import { AxisDomain } from 'recharts/types/src/util/types'
import SheenLoader from './SheenLoader'
import { IconButton } from './Button'
import {
  ArrowLeftIcon,
  ArrowsRightLeftIcon,
  NoSymbolIcon,
} from '@heroicons/react/20/solid'
import ChartRangeButtons from './ChartRangeButtons'
import Change from './Change'
import FormatNumericValue from './FormatNumericValue'
import Tooltip from './Tooltip'
import { FadeInFadeOut } from './Transitions'
import { DAILY_MILLISECONDS } from '../../utils/constants'

dayjs.extend(relativeTime)

const titleClasses = 'mb-0.5 text-base'

interface DetailedAreaOrBarChartProps {
  changeAsPercent?: boolean
  chartType?: 'area' | 'bar'
  customTooltip?: ContentType<number, string>
  data: any[] | undefined
  daysToShow?: string
  domain?: AxisDomain
  heightClass?: string
  hideChange?: boolean
  hideChart?: () => void
  hideAxis?: boolean
  loaderHeightClass?: string
  loading?: boolean
  prefix?: string
  setDaysToShow?: (x: string) => void
  small?: boolean
  suffix?: string
  tickFormat?: (x: number) => string
  title?: string
  tooltipContent?: string
  xKey: string
  formatXKeyHeading?: (k: string | number) => string
  xAxisLabel?: string
  xAxisType?: 'number' | 'category' | undefined
  yDecimals?: number
  yKey: string
  showZeroLine?: boolean
  tooltipDateFormat?: string
}

export const formatDateAxis = (date: string, days: number) => {
  if (days === 1) {
    return dayjs(date).format('h:mma')
  } else {
    return dayjs(date).format('D MMM')
  }
}

const DetailedAreaOrBarChart: FunctionComponent<
  DetailedAreaOrBarChartProps
> = ({
  changeAsPercent,
  chartType = 'area',
  customTooltip,
  data,
  daysToShow = '1',
  // domain,
  heightClass,
  hideChange,
  hideChart,
  hideAxis,
  loaderHeightClass,
  loading,
  prefix = '',
  setDaysToShow,
  showZeroLine,
  small,
  suffix = '',
  tickFormat,
  title,
  tooltipContent,
  tooltipDateFormat,
  xKey,
  formatXKeyHeading,
  xAxisLabel,
  xAxisType,
  yDecimals,
  yKey,
}) => {
  const [mouseData, setMouseData] = useState<any>(null)
  const [showChangePercentage, setShowChangePercentage] = useState(
    changeAsPercent || false,
  )

  const handleMouseMove = (coords: any) => {
    if (coords.activePayload) {
      setMouseData(coords.activePayload[0].payload)
    }
  }

  const handleMouseLeave = () => {
    setMouseData(null)
  }

  const flipGradientCoords = useMemo(() => {
    if (!data || !data.length) return
    return data[0][yKey] <= 0 && data[data.length - 1][yKey] < 0
  }, [data])

  const filteredData = useMemo(() => {
    if (!data || !data.length) return []
    if (xAxisType === 'number') return data
    const start = Number(daysToShow) * DAILY_MILLISECONDS
    const filtered = data.filter((d: any) => {
      const dataTime = new Date(d[xKey]).getTime()
      const now = new Date().getTime()
      const limit = now - start
      return dataTime >= limit
    })
    return filtered
  }, [data, daysToShow, xAxisType])

  const calculateChartChange = () => {
    if (filteredData.length) {
      let firstValue = filteredData[0][yKey]
      if (xAxisType === 'number') {
        const minValue = filteredData.reduce(
          (min, current) => (current[xKey] < min[xKey] ? current : min),
          filteredData[0],
        )
        firstValue = minValue[yKey]
      }
      if (mouseData) {
        const index = filteredData.findIndex(
          (d: any) => d[xKey] === mouseData[xKey],
        )
        const currentValue = filteredData[index]?.[yKey]

        const change =
          index >= 0
            ? showChangePercentage
              ? ((currentValue - firstValue) / Math.abs(firstValue)) * 100
              : currentValue - firstValue
            : 0
        return isNaN(change) ? 0 : change
      } else {
        const currentValue = filteredData[filteredData.length - 1][yKey]
        return showChangePercentage
          ? ((currentValue - firstValue) / Math.abs(firstValue)) * 100
          : currentValue - firstValue
      }
    }
    return 0
  }

  return (
    <FadeInFadeOut show={true}>
      <div>
        {loading ? (
          <SheenLoader className="flex flex-1">
            <div
              className={`${
                loaderHeightClass ? loaderHeightClass : 'h-96'
              } w-full rounded-lg bg-th-bkg-2`}
            />
          </SheenLoader>
        ) : filteredData.length ? (
          <div className="relative">
            {setDaysToShow ? (
              <div className="mb-4 sm:absolute sm:-top-1 sm:right-0 sm:mb-0 sm:flex sm:justify-end">
                <ChartRangeButtons
                  activeValue={daysToShow}
                  names={['24H', '7D', '30D']}
                  values={['1', '7', '30']}
                  onChange={(v) => setDaysToShow(v)}
                />
              </div>
            ) : null}
            <div className="flex items-start justify-between">
              <div className="flex flex-col md:flex-row md:items-start md:space-x-6">
                {hideChart ? (
                  <IconButton
                    className="mb-6"
                    onClick={hideChart}
                    size="medium"
                  >
                    <ArrowLeftIcon className="h-5 w-5" />
                  </IconButton>
                ) : null}
                <div>
                  {title ? (
                    tooltipContent ? (
                      <Tooltip content={tooltipContent}>
                        <p
                          className={`${titleClasses}
                      tooltip-underline`}
                        >
                          {title}
                        </p>
                      </Tooltip>
                    ) : (
                      <p className={titleClasses}>{title}</p>
                    )
                  ) : null}
                  {mouseData ? (
                    <div>
                      <div
                        className={`flex items-end ${
                          small ? 'h-8 text-2xl' : 'mb-1 text-4xl'
                        } font-display text-th-fgd-1`}
                      >
                        <span className="tabular-nums">
                          {mouseData[yKey] < 0 ? '-' : ''}
                          {prefix}
                          <FormatNumericValue
                            value={Math.abs(mouseData[yKey])}
                            decimals={yDecimals}
                          />
                          {suffix}
                        </span>
                        {!hideChange ? (
                          <div
                            className={`ml-3 flex items-center ${
                              small ? 'mb-[3px]' : 'mb-0.5'
                            }`}
                          >
                            <Change
                              change={calculateChartChange()}
                              decimals={!showChangePercentage ? yDecimals : 2}
                              prefix={!showChangePercentage ? prefix : ''}
                              suffix={!showChangePercentage ? suffix : '%'}
                            />
                            {changeAsPercent ? (
                              <ToggleChangeTypeButton
                                changeType={showChangePercentage}
                                setChangeType={setShowChangePercentage}
                              />
                            ) : null}
                          </div>
                        ) : null}
                      </div>
                      <p
                        className={`${
                          small ? 'text-xs' : 'text-sm'
                        } text-th-fgd-4`}
                      >
                        {formatXKeyHeading
                          ? formatXKeyHeading(mouseData[xKey])
                          : dayjs(mouseData[xKey]).format(
                              tooltipDateFormat
                                ? tooltipDateFormat
                                : 'DD MMM YY, h:mma',
                            )}
                      </p>
                    </div>
                  ) : (
                    <div>
                      <div
                        className={`flex items-end ${
                          small ? 'h-8 text-2xl' : 'mb-1 text-4xl'
                        } font-display text-th-fgd-1`}
                      >
                        <span>
                          {filteredData[filteredData.length - 1][yKey] < 0
                            ? '-'
                            : ''}
                          {prefix}
                          <span className="tabular-nums">
                            <FormatNumericValue
                              value={
                                data ? Math.abs(data[data.length - 1][yKey]) : 0
                              }
                              decimals={yDecimals}
                            />
                          </span>
                          {suffix}
                        </span>
                        {!hideChange ? (
                          <div
                            className={`ml-3 flex items-center ${
                              small ? 'mb-[3px]' : 'mb-0.5'
                            }`}
                          >
                            <Change
                              change={calculateChartChange()}
                              decimals={!showChangePercentage ? yDecimals : 2}
                              prefix={!showChangePercentage ? prefix : ''}
                              suffix={!showChangePercentage ? suffix : '%'}
                            />
                            {changeAsPercent ? (
                              <ToggleChangeTypeButton
                                changeType={showChangePercentage}
                                setChangeType={setShowChangePercentage}
                              />
                            ) : null}
                          </div>
                        ) : null}
                      </div>
                      <p
                        className={`${
                          small ? 'text-xs' : 'text-sm'
                        } text-th-fgd-4`}
                      >
                        {formatXKeyHeading
                          ? formatXKeyHeading(
                              filteredData[filteredData.length - 1][xKey],
                            )
                          : dayjs(
                              filteredData[filteredData.length - 1][xKey],
                            ).format(
                              tooltipDateFormat
                                ? tooltipDateFormat
                                : 'DD MMM YY, h:mma',
                            )}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div
              className={`-mt-1 ${heightClass ? heightClass : 'h-96'} w-auto`}
            >
              <div className="-mx-6 mt-6 h-full">
                <ResponsiveContainer width="100%" height="100%">
                  {chartType === 'area' ? (
                    <AreaChart
                      data={filteredData}
                      onMouseMove={handleMouseMove}
                      onMouseLeave={handleMouseLeave}
                    >
                      <RechartsTooltip
                        cursor={{
                          strokeOpacity: 0.09,
                        }}
                        content={customTooltip ? customTooltip : <></>}
                      />
                      <defs>
                        <linearGradient
                          id={`gradientArea-${title?.replace(
                            /[^a-zA-Z]/g,
                            '',
                          )}`}
                          x1="0"
                          y1={flipGradientCoords ? '1' : '0'}
                          x2="0"
                          y2={flipGradientCoords ? '0' : '1'}
                        >
                          <stop
                            offset="0%"
                            stopColor={
                              calculateChartChange() >= 0
                                ? 'var(--up)'
                                : 'var(--down)'
                            }
                            stopOpacity={0.15}
                          />
                          <stop
                            offset="99%"
                            stopColor={
                              calculateChartChange() >= 0
                                ? 'var(--up)'
                                : 'var(--down)'
                            }
                            stopOpacity={0}
                          />
                        </linearGradient>
                      </defs>
                      <Area
                        isAnimationActive={false}
                        type="monotone"
                        dataKey={yKey}
                        stroke={
                          isNaN(calculateChartChange())
                            ? 'var(--fgd-4)'
                            : calculateChartChange() >= 0
                              ? 'var(--up)'
                              : 'var(--down)'
                        }
                        strokeWidth={1.5}
                        fill={`url(#gradientArea-${title?.replace(
                          /[^a-zA-Z]/g,
                          '',
                        )})`}
                      />
                      <XAxis
                        axisLine={false}
                        dataKey={xKey}
                        hide={hideAxis}
                        minTickGap={20}
                        padding={{ left: 20, right: 20 }}
                        tick={{
                          fill: 'var(--fgd-4)',
                          fontSize: 10,
                        }}
                        tickLine={false}
                        tickFormatter={
                          xAxisType !== 'number'
                            ? (d) => formatDateAxis(d, parseInt(daysToShow))
                            : undefined
                        }
                        type={xAxisType}
                      >
                        {xAxisLabel ? (
                          <Label
                            value={xAxisLabel}
                            offset={-2}
                            position="insideBottom"
                            fontSize={10}
                            fill="var(--fgd-3)"
                          />
                        ) : null}
                      </XAxis>
                      <YAxis
                        axisLine={false}
                        dataKey={yKey}
                        hide={hideAxis}
                        minTickGap={20}
                        type="number"
                        domain={['dataMin', 'dataMax']}
                        padding={{ top: 20, bottom: 20 }}
                        tick={{
                          fill: 'var(--fgd-4)',
                          fontSize: 10,
                        }}
                        tickFormatter={
                          tickFormat ? (v) => tickFormat(v) : undefined
                        }
                        tickLine={false}
                      />
                      {showZeroLine ? (
                        <ReferenceLine
                          y={0}
                          stroke="var(--fgd-4)"
                          strokeDasharray="2 2"
                        />
                      ) : null}
                    </AreaChart>
                  ) : (
                    <BarChart
                      data={filteredData}
                      onMouseMove={handleMouseMove}
                      onMouseLeave={handleMouseLeave}
                    >
                      <RechartsTooltip
                        cursor={{
                          fill: 'var(--bkg-2)',
                          opacity: 0.5,
                        }}
                        content={customTooltip ? customTooltip : <></>}
                      />
                      <defs>
                        <linearGradient
                          id="greenGradientBar"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="0%"
                            stopColor="var(--up)"
                            stopOpacity={1}
                          />
                          <stop
                            offset="100%"
                            stopColor="var(--up)"
                            stopOpacity={0.7}
                          />
                        </linearGradient>
                        <linearGradient
                          id="redGradientBar"
                          x1="0"
                          y1="1"
                          x2="0"
                          y2="0"
                        >
                          <stop
                            offset="0%"
                            stopColor="var(--down)"
                            stopOpacity={1}
                          />
                          <stop
                            offset="100%"
                            stopColor="var(--down)"
                            stopOpacity={0.7}
                          />
                        </linearGradient>
                      </defs>
                      <Bar dataKey={yKey}>
                        {filteredData.map((entry, index) => {
                          return (
                            <Cell
                              key={`cell-${index}`}
                              fill={
                                entry[yKey] > 0
                                  ? 'url(#greenGradientBar)'
                                  : 'url(#redGradientBar)'
                              }
                            />
                          )
                        })}
                      </Bar>
                      <XAxis
                        dataKey={xKey}
                        axisLine={false}
                        dy={10}
                        minTickGap={20}
                        padding={{ left: 20, right: 20 }}
                        tick={{
                          fill: 'var(--fgd-4)',
                          fontSize: 10,
                        }}
                        tickLine={false}
                        tickFormatter={(v) =>
                          formatDateAxis(v, parseInt(daysToShow))
                        }
                      />
                      <YAxis
                        dataKey={yKey}
                        interval="preserveStartEnd"
                        axisLine={false}
                        dx={-10}
                        padding={{ top: 20, bottom: 20 }}
                        tick={{
                          fill: 'var(--fgd-4)',
                          fontSize: 10,
                        }}
                        tickLine={false}
                        tickFormatter={
                          tickFormat ? (v) => tickFormat(v) : undefined
                        }
                        type="number"
                      />
                      <ReferenceLine y={0} stroke="var(--bkg-4)" />
                    </BarChart>
                  )}
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        ) : (
          <div
            className={`flex ${
              heightClass ? heightClass : 'h-96'
            } items-center justify-center p-4 text-th-fgd-3`}
          >
            <div>
              <NoSymbolIcon className="mx-auto mb-1 h-6 w-6 text-th-fgd-4" />
              <p className="text-th-fgd-4">Chart Unavailable</p>
            </div>
          </div>
        )}
      </div>
    </FadeInFadeOut>
  )
}

export default DetailedAreaOrBarChart

const ToggleChangeTypeButton = ({
  changeType,
  setChangeType,
}: {
  changeType: boolean
  setChangeType: (isPercent: boolean) => void
}) => {
  return (
    <button
      className="ml-2 flex h-4 w-4 items-center justify-center text-th-fgd-3 focus:outline-none md:hover:text-th-active"
      onClick={() => setChangeType(!changeType)}
    >
      <ArrowsRightLeftIcon className="h-3.5 w-3.5" />
    </button>
  )
}
