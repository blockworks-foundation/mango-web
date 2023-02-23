import { useTranslation } from 'next-i18next'
import { useTheme } from 'next-themes'
import { FunctionComponent, useState } from 'react'
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts'
import { COLORS } from '../../styles/colors'
import SectionWrapper from '../shared/SectionWrapper'

const CHART_DATA = [
  { label: 'mango-dao', desc: 'mango-dao-desc', value: 50 },
  { label: 'team', desc: 'team-desc', value: 22 },
  { label: 'public-sale', desc: 'public-sale-desc', value: 10 },
  {
    label: 'liquidity-incentives',
    desc: 'liquidity-incentives-desc',
    value: 18,
  },
]

const CHART_COLORS = [
  {
    Mango: '#89B92A',
    Light: '#60bf4f',
  },
  {
    Mango: '#f1c84b',
    Light: '#141414',
  },
  {
    Mango: '#F84638',
    Light: '#BE6A6A',
  },
  {
    Mango: '#9189ae',
    Light: '#878787',
  },
]

const Distribution: FunctionComponent = () => {
  const { t } = useTranslation('mngo')
  const [mouseData, setMouseData] = useState(CHART_DATA[0].label)
  const { theme } = useTheme()

  const handleMouseMove = (coords: any) => {
    if (coords) {
      setMouseData(coords.label)
    }
  }

  return (
    <SectionWrapper>
      <h2 className="mb-6">{t('distribution')}</h2>
      <div className="flex flex-col-reverse md:flex-row items-center md:justify-between">
        <div className="grid grid-cols-4 gap-6 w-full md:w-1/2">
          {CHART_DATA.map((data) => {
            const { label, desc, value } = data
            return (
              <div
                className={`${
                  label === mouseData ? '' : 'opacity-40'
                } col-span-4 sm:col-span-2 md:col-span-4 default-transition cursor-pointer w-max`}
                key={`item-${label}`}
                onMouseEnter={() => setMouseData(label)}
              >
                <h3>{`${value}% ${label}`}</h3>
                <p>{desc}</p>
              </div>
            )
          })}
        </div>
        <div className="w-1/2 h-[280px] lg:h-[360px] mb-8 md:mb-0">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                cursor="pointer"
                data={CHART_DATA}
                dataKey="value"
                cx="50%"
                cy="50%"
                outerRadius={'100%'}
                innerRadius={'70%'}
                minAngle={2}
                startAngle={90}
                endAngle={450}
                onMouseMove={handleMouseMove}
              >
                {CHART_DATA.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={CHART_COLORS[index][theme]}
                    fillOpacity={mouseData === entry.label ? 1 : 0.4}
                    stroke={COLORS.BKG1[theme]}
                    strokeWidth={4}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default Distribution
