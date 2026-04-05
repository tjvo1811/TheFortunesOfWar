import {
  CartesianGrid,
  Line,
  LineChart,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import CustomTooltip from './CustomTooltip.jsx'
import { rcAnim } from './chartAnim.js'

const data = [
  { year: 1966, rate: 8.43 },
  { year: 1967, rate: 14.7 },
  { year: 1968, rate: 29.1 },
  { year: 1969, rate: 42.4 },
  { year: 1970, rate: 33.9 },
  { year: 1971, rate: 33.9 },
  { year: 1972, rate: 25.0 },
  { year: 1973, rate: 12.0 },
]

const gridStroke = 'rgba(240, 237, 232, 0.08)'
const axisStroke = 'rgba(240, 237, 232, 0.35)'

export default function USDesertionChart() {
  return (
    <div className="h-[320px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 8, right: 12, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke={gridStroke} vertical={false} />
          <XAxis dataKey="year" tick={{ fill: axisStroke, fontSize: 11 }} axisLine={{ stroke: axisStroke }} />
          <YAxis
            tick={{ fill: axisStroke, fontSize: 11 }}
            axisLine={{ stroke: axisStroke }}
            label={{ value: 'Per 1,000 enlisted', angle: -90, position: 'insideLeft', fill: axisStroke, fontSize: 10 }}
          />
          <Tooltip content={<CustomTooltip accent="#4a7fb5" />} />
          <ReferenceLine x={1968} stroke="#7a9e7e" strokeDasharray="4 4" label={{ value: 'Tet Offensive', fill: '#7a9e7e', fontSize: 10 }} />
          <ReferenceLine x={1969} stroke="#7a9e7e" strokeDasharray="4 4" label={{ value: 'Nixon withdrawal begins', fill: '#7a9e7e', fontSize: 10, position: 'top' }} />
          <ReferenceLine x={1973} stroke="#7a9e7e" strokeDasharray="4 4" label={{ value: 'Paris Peace Accords', fill: '#7a9e7e', fontSize: 10 }} />
          <Line
            type="monotone"
            dataKey="rate"
            name="US desertion rate"
            stroke="#4a7fb5"
            strokeWidth={2}
            dot={{ r: 3, fill: '#4a7fb5' }}
            activeDot={{ r: 5 }}
            {...rcAnim}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
