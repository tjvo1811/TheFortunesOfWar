import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import CustomTooltip from './CustomTooltip.jsx'
import { rcAnim } from './chartAnim.js'

/* Approximate proportions from Cooley (1963) thesis; labeled in UI */
const data = [
  { category: 'Propaganda / patriotism', side: 'recruit', pct: 25 },
  { category: 'Promise of food / shelter', side: 'recruit', pct: 20 },
  { category: 'Coercion / blackmail', side: 'recruit', pct: 30 },
  { category: 'Family / community pressure', side: 'recruit', pct: 25 },
  { category: 'Family separation', side: 'desert', pct: 35 },
  { category: 'Harsh living conditions', side: 'desert', pct: 30 },
  { category: 'Inability to adapt', side: 'desert', pct: 20 },
  { category: 'Ideological disagreement', side: 'desert', pct: 15 },
]

const gridStroke = 'rgba(240, 237, 232, 0.08)'
const axisStroke = 'rgba(240, 237, 232, 0.35)'

export default function VietCongRecruitmentChart() {
  return (
    <div>
      <div className="h-[380px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart layout="vertical" data={data} margin={{ top: 8, right: 24, left: 8, bottom: 8 }}>
            <CartesianGrid strokeDasharray="3 3" stroke={gridStroke} horizontal={false} />
            <XAxis type="number" domain={[0, 45]} tick={{ fill: axisStroke, fontSize: 11 }} unit="%" />
            <YAxis type="category" dataKey="category" width={150} tick={{ fill: axisStroke, fontSize: 10 }} axisLine={{ stroke: axisStroke }} />
            <Tooltip content={<CustomTooltip accent="#c0392b" />} formatter={(v) => [`${v}% (approx.)`, 'Share']} />
            <Bar dataKey="pct" name="Approx. %" radius={[0, 2, 2, 0]} {...rcAnim}>
              {data.map((e) => (
                <Cell key={e.category} fill={e.side === 'recruit' ? '#c0392b' : '#7a9e7e'} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <p className="mt-2 text-[10px] text-ink-dark/65 dark:text-ink/60">
        Based on Cooley (1963) thesis data; precise figures approximate. Physical reasons (family, hardship)
        dominate desertion accounts (~85% in some samples); chart shows thematic breakdown.
      </p>
    </div>
  )
}
