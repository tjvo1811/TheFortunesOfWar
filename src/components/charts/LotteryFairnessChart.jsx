import {
  Bar,
  BarChart,
  CartesianGrid,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import CustomTooltip from './CustomTooltip.jsx'
import { rcAnim } from './chartAnim.js'

const data = [
  { month: 'Jan', avg: 201 },
  { month: 'Feb', avg: 203 },
  { month: 'Mar', avg: 226 },
  { month: 'Apr', avg: 195 },
  { month: 'May', avg: 208 },
  { month: 'Jun', avg: 195 },
  { month: 'Jul', avg: 181 },
  { month: 'Aug', avg: 173 },
  { month: 'Sep', avg: 157 },
  { month: 'Oct', avg: 182 },
  { month: 'Nov', avg: 149 },
  { month: 'Dec', avg: 122 },
]

const gridStroke = 'rgba(240, 237, 232, 0.08)'
const axisStroke = 'rgba(240, 237, 232, 0.35)'
const refStroke = 'rgba(240, 237, 232, 0.4)'

export default function LotteryFairnessChart() {
  return (
    <div>
      <div className="h-[320px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 24, right: 12, left: 4, bottom: 8 }}>
            <CartesianGrid strokeDasharray="3 3" stroke={gridStroke} vertical={false} />
            <XAxis dataKey="month" tick={{ fill: axisStroke, fontSize: 11 }} axisLine={{ stroke: axisStroke }} />
            <YAxis
              domain={[100, 240]}
              tick={{ fill: axisStroke, fontSize: 11 }}
              axisLine={{ stroke: axisStroke }}
              label={{ value: 'Avg. lottery number', angle: -90, position: 'insideLeft', fill: axisStroke, fontSize: 10 }}
            />
            <Tooltip
              content={<CustomTooltip accent="#7a9e7e" />}
              formatter={(v) => [v, 'Avg. number']}
              labelFormatter={(m) => `Birth month: ${m}`}
            />
            <ReferenceLine
              y={183.5}
              stroke={refStroke}
              strokeDasharray="6 4"
              strokeWidth={1.5}
              ifOverflow="extendDomain"
              label={{
                value: 'Expected if truly random',
                position: 'right',
                fill: 'rgba(240, 237, 232, 0.5)',
                fontSize: 11,
              }}
            />
            <Bar dataKey="avg" name="Monthly average" fill="#7a9e7e" radius={[2, 2, 0, 0]} {...rcAnim} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <p className="mt-3 text-[11px] leading-relaxed text-ink-dark/70 dark:text-ink/65">
        Statisticians estimated roughly a <span className="text-muted">1.2%</span> probability the 1969 draw was
        truly random; courts still upheld the lottery. November and December births systematically drew lower
        numbers; the bars tell that story only against the expected baseline.
      </p>
    </div>
  )
}
