import { useState } from 'react'
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import CustomTooltip from './CustomTooltip.jsx'
import { rcAnim } from './chartAnim.js'

const data = [
  { name: '% US population (Black)', value: 11, type: 'baseline' },
  { name: '% of all draftees (Black)', value: 16.3, type: 'actual' },
  { name: '% of combat troops (Black)', value: 23, type: 'actual' },
  { name: '% combat deaths in 1965 (Black, approx.)', value: 25, type: 'actual' },
]

const gridStroke = 'rgba(240, 237, 232, 0.08)'
const axisStroke = 'rgba(240, 237, 232, 0.35)'

export default function RacialDraftChart() {
  const [showLine, setShowLine] = useState(true)
  const [active, setActive] = useState(null)

  return (
    <div>
      <div className="mb-2 flex justify-end">
        <button
          type="button"
          onClick={() => setShowLine((s) => !s)}
          className="rounded border border-ink-dark/20 px-2 py-1 text-[10px] uppercase tracking-wide text-ink-dark dark:border-ink/25 dark:text-ink"
        >
          {showLine ? 'Hide' : 'Show'} proportional line (11%)
        </button>
      </div>
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 48 }}>
            <CartesianGrid strokeDasharray="3 3" stroke={gridStroke} vertical={false} />
            <XAxis dataKey="name" tick={{ fill: axisStroke, fontSize: 9 }} interval={0} angle={-18} textAnchor="end" height={70} axisLine={{ stroke: axisStroke }} />
            <YAxis domain={[0, 30]} tick={{ fill: axisStroke, fontSize: 11 }} axisLine={{ stroke: axisStroke }} unit="%" />
            <Tooltip content={<CustomTooltip accent="#4a7fb5" />} />
            {showLine && (
              <ReferenceLine
                y={11}
                stroke="rgba(240, 237, 232, 0.35)"
                strokeDasharray="5 5"
                label={{ value: 'Proportional representation (11%)', fill: 'rgba(240, 237, 232, 0.45)', fontSize: 10 }}
              />
            )}
            <Bar
              dataKey="value"
              name="Share"
              radius={[2, 2, 0, 0]}
              onMouseEnter={(_, i) => setActive(i)}
              onMouseLeave={() => setActive(null)}
              {...rcAnim}
            >
              {data.map((entry, i) => (
                <Cell
                  key={entry.name}
                  fill={entry.type === 'baseline' ? 'rgba(240, 237, 232, 0.35)' : '#4a7fb5'}
                  fillOpacity={active === null || active === i ? 1 : 0.35}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
