import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { rcAnim } from './chartAnim.js'

const merged = [
  { year: 1964, usRate: null, arvnRate: 8 },
  { year: 1965, usRate: null, arvnRate: 12 },
  { year: 1966, usRate: 8.43, arvnRate: 10 },
  { year: 1967, usRate: 14.7, arvnRate: 10.5 },
  { year: 1968, usRate: 29.1, arvnRate: 17.2 },
  { year: 1969, usRate: 42.4, arvnRate: 12 },
  { year: 1970, usRate: 33.9, arvnRate: 11 },
  { year: 1971, usRate: 33.9, arvnRate: 10 },
  { year: 1972, usRate: 25.0, arvnRate: 9 },
  { year: 1973, usRate: 12.0, arvnRate: null },
]

const gridStroke = 'rgba(240, 237, 232, 0.08)'
const axisStroke = 'rgba(240, 237, 232, 0.35)'

function ThreeArmiesTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null
  return (
    <div
      className="max-w-xs rounded-md border px-3 py-2 text-xs shadow-lg"
      style={{
        backgroundColor: '#1a1a14',
        borderColor: 'rgba(240, 237, 232, 0.15)',
        color: '#f0ede8',
        fontFamily: '"IBM Plex Sans", system-ui, sans-serif',
      }}
    >
      <p className="mb-1 font-medium">{label}</p>
      {payload.map((e) => (
        <p key={e.dataKey} style={{ color: e.color }}>
          {e.name}: {e.value != null ? `${e.value} per 1,000` : 'N/A'}
        </p>
      ))}
      <p className="mt-2 border-t border-white/10 pt-2 text-[10px] leading-snug opacity-80">
        Viet Cong / NVA: desertion was primarily physical and family-driven; no systematic comparable rate
        series is available. US and ARVN figures are approximate where noted.
      </p>
    </div>
  )
}

export default function ThreeArmiesComparisonChart() {
  return (
    <div className="h-[340px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={merged} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke={gridStroke} vertical={false} />
          <XAxis dataKey="year" tick={{ fill: axisStroke, fontSize: 11 }} axisLine={{ stroke: axisStroke }} />
          <YAxis
            tick={{ fill: axisStroke, fontSize: 11 }}
            axisLine={{ stroke: axisStroke }}
            label={{ value: 'Per 1,000 (approx.)', angle: -90, position: 'insideLeft', fill: axisStroke, fontSize: 10 }}
          />
          <Tooltip content={<ThreeArmiesTooltip />} />
          <Legend wrapperStyle={{ fontSize: 11 }} />
          <Bar dataKey="usRate" name="US desertion rate" fill="#4a7fb5" radius={[2, 2, 0, 0]} {...rcAnim} />
          <Bar
            dataKey="arvnRate"
            name="ARVN desertion rate (approx.)"
            fill="#d4a017"
            radius={[2, 2, 0, 0]}
            {...rcAnim}
            animationBegin={rcAnim.animationBegin + 450}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
