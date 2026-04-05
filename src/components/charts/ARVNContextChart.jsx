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

/* National ARVN desertion rate per 1,000 (approx.); Long An contextual note in caption */
const data = [
  { year: 1964, rate: 8 },
  { year: 1965, rate: 12 },
  { year: 1966, rate: 10 },
  { year: 1967, rate: 10.5 },
  { year: 1968, rate: 17.2 },
  { year: 1969, rate: 12 },
  { year: 1970, rate: 11 },
  { year: 1971, rate: 10 },
  { year: 1972, rate: 9 },
]

const gridStroke = 'rgba(240, 237, 232, 0.08)'
const axisStroke = 'rgba(240, 237, 232, 0.35)'

export default function ARVNContextChart() {
  return (
    <div>
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 28, right: 8, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke={gridStroke} vertical={false} />
            <XAxis dataKey="year" tick={{ fill: axisStroke, fontSize: 11 }} axisLine={{ stroke: axisStroke }} />
            <YAxis
              tick={{ fill: axisStroke, fontSize: 11 }}
              axisLine={{ stroke: axisStroke }}
              label={{ value: 'Per 1,000 (approx.)', angle: -90, position: 'insideLeft', fill: axisStroke, fontSize: 10 }}
            />
            <Tooltip content={<CustomTooltip accent="#d4a017" />} formatter={(v) => [`${v}`, 'ARVN rate']} />
            <ReferenceLine
              x={1965}
              stroke="#d4a017"
              strokeDasharray="4 4"
              label={{ value: 'Decriminalization policy (approx.)', fill: '#d4a017', fontSize: 9, position: 'top' }}
            />
            <ReferenceLine
              x={1968}
              stroke="#c0392b"
              strokeDasharray="4 4"
              label={{ value: 'Tet: spike', fill: '#c0392b', fontSize: 9 }}
            />
            <ReferenceLine
              x={1972}
              stroke="rgba(240, 237, 232, 0.35)"
              strokeDasharray="4 4"
              label={{ value: 'Pre-1975 erosion', fill: 'rgba(240,237,232,0.45)', fontSize: 9, position: 'insideTopRight' }}
            />
            <Bar dataKey="rate" name="ARVN desertion (national, approx.)" fill="#d4a017" radius={[2, 2, 0, 0]} {...rcAnim} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <p className="mt-3 text-[11px] leading-relaxed text-ink-dark/70 dark:text-ink/65">
        <span className="font-medium text-arvn">Long An province</span>, Mekong Delta; primary Viet Cong
        recruitment zone. Provincial desertion pressure exceeded national averages in many accounts; bars show{' '}
        <span className="italic">national</span> approximate rates where province-level series are unavailable.
        Fall of Saigon (1975) marked collapse of the Republic, not captured as a single annual rate here.
      </p>
    </div>
  )
}
