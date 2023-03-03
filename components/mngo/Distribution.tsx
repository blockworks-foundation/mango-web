import { useTranslation } from 'next-i18next'
import { useTheme } from 'next-themes'
import { FunctionComponent, useState } from 'react'
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts'
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
    Mango: '#9971D6',
    Light: '#9971D6',
  },
  {
    Mango: '#8251CD',
    Light: '#8251CD',
  },
  {
    Mango: '#7139C4',
    Light: '#7139C4',
  },
  {
    Mango: '#52298E',
    Light: '#52298E',
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
      <h2 className="mb-10 lg:mb-16">{t('distribution')}</h2>
      <div className="flex flex-col-reverse md:flex-row items-center md:justify-between md:space-x-10 z-10 relative">
        <div className="w-1/2 h-[280px] lg:h-[440px] mb-8 md:mb-0">
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
                    // stroke={COLORS.BKG1[theme]}
                    // strokeWidth={4}
                    stroke="transparent"
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="w-full md:w-1/2 space-y-8">
          {CHART_DATA.map((data) => {
            const { label, desc, value } = data
            return (
              <div
                className={`${
                  label === mouseData ? '' : 'opacity-40'
                } default-transition cursor-pointer`}
                key={`item-${label}`}
                onMouseEnter={() => setMouseData(label)}
              >
                <h3 className="mb-3">{`${value}% ${t(label)}`}</h3>
                <p>{t(desc)}</p>
              </div>
            )
          })}
        </div>
      </div>
    </SectionWrapper>
  )
}

export default Distribution