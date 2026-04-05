import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import CustomTooltip from './charts/CustomTooltip.jsx'

const gridStroke = 'rgba(240, 237, 232, 0.08)'
const axisStroke = 'rgba(240, 237, 232, 0.35)'

const chapters = [
  {
    title: 'The draft that wasn’t fair',
    body: `The US introduced a lottery in 1969 to fix racial and class bias in the old draft board system. Statistical analysis found the lottery had only a 1.2% chance of being truly random; the capsules were loaded month-by-month and never properly mixed. Courts ruled it fair anyway. Meanwhile, 80% of the 2.5 million men who served came from poor or working-class backgrounds.`,
  },
  {
    title: 'Race and the front lines',
    body: `Though African Americans were 11% of the US population in 1967, they made up 16.3% of all draftees and 23% of combat troops. McNamara’s Project 100,000 lowered education standards for induction; 40% of those brought in were Black. In 1965 alone, Black soldiers were dying at twice their population rate. The draft didn’t create racial inequality. It weaponized it.`,
  },
  {
    title: 'Desertion as data',
    body: `US desertion rate jumped from 8.43 per thousand in 1966 to 33.9 per thousand in 1971. ARVN rates averaged 10–15% annually. Viet Cong deserters mostly left for physical, not ideological, reasons: prolonged family separation, harsh conditions, and in many cases blackmail into service. All three armies bled soldiers. The North bled least. That decided the war.`,
  },
  {
    title: 'The Mekong Delta: ground zero',
    body: `The Viet Cong placed primary recruitment emphasis on the Mekong Delta, targeting men aged 17–35. Long An province, one of the most heavily contested areas, saw ARVN soldiers desert at rates that nearly paralyzed unit deployment. The South Vietnamese government at one point decriminalized desertion entirely, letting men return to duty by signing a pledge. The North never did this. That asymmetry (one side that held its soldiers, one that couldn’t) is why South Vietnam fell.`,
  },
]

const draftFairnessData = [
  { name: 'Working / poor (served)', pct: 80 },
  { name: 'Middle / upper (served)', pct: 20 },
  { name: 'Black % of population', pct: 11 },
  { name: 'Black % of draftees', pct: 16.3 },
  { name: 'Black % combat troops', pct: 23 },
  { name: 'HS education or less (approx.)', pct: 75 },
]

const raceCompareData = [
  { label: 'Population', value: 11 },
  { label: 'Draftees', value: 16.3 },
  { label: 'Combat troops', value: 23 },
  { label: 'Combat deaths 1965 (approx.)', value: 25 },
]

const usDesertionData = [
  { year: 1966, rate: 8.43 },
  { year: 1967, rate: 14.7 },
  { year: 1968, rate: 29.1 },
  { year: 1969, rate: 42.4 },
  { year: 1970, rate: 33.9 },
  { year: 1971, rate: 33.9 },
  { year: 1972, rate: 25.0 },
  { year: 1973, rate: 12.0 },
]

const arvnDeltaData = [
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

function Chapter1Chart() {
  const [active, setActive] = useState(null)
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20%' }}
      transition={{ duration: 0.55 }}
      className="h-[min(420px,55vh)] w-full"
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={draftFairnessData} margin={{ top: 8, right: 8, left: 0, bottom: 56 }}>
          <CartesianGrid strokeDasharray="3 3" stroke={gridStroke} vertical={false} />
          <XAxis dataKey="name" tick={{ fill: axisStroke, fontSize: 9 }} interval={0} angle={-20} textAnchor="end" height={72} axisLine={{ stroke: axisStroke }} />
          <YAxis domain={[0, 100]} tick={{ fill: axisStroke, fontSize: 11 }} axisLine={{ stroke: axisStroke }} unit="%" />
          <Tooltip content={<CustomTooltip accent="#4a7fb5" />} />
          <Bar dataKey="pct" name="Share" radius={[2, 2, 0, 0]} onMouseEnter={(_, i) => setActive(i)} onMouseLeave={() => setActive(null)}>
            {draftFairnessData.map((_, i) => (
              <Cell key={i} fill="#4a7fb5" fillOpacity={active === null || active === i ? 1 : 0.3} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  )
}

function Chapter2Chart() {
  const [active, setActive] = useState(null)
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20%' }}
      transition={{ duration: 0.55 }}
      className="h-[min(360px,50vh)] w-full"
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={raceCompareData} margin={{ top: 8, right: 8, left: 0, bottom: 8 }}>
          <CartesianGrid strokeDasharray="3 3" stroke={gridStroke} vertical={false} />
          <XAxis dataKey="label" tick={{ fill: axisStroke, fontSize: 10 }} axisLine={{ stroke: axisStroke }} />
          <YAxis domain={[0, 30]} tick={{ fill: axisStroke, fontSize: 11 }} axisLine={{ stroke: axisStroke }} unit="%" />
          <Tooltip content={<CustomTooltip accent="#4a7fb5" />} />
          <ReferenceLine y={11} stroke="rgba(240,237,232,0.35)" strokeDasharray="5 5" label={{ value: '11% population', fill: axisStroke, fontSize: 10 }} />
          <Bar dataKey="value" name="Percent" radius={[2, 2, 0, 0]} onMouseEnter={(_, i) => setActive(i)} onMouseLeave={() => setActive(null)}>
            {raceCompareData.map((_, i) => (
              <Cell key={i} fill="#4a7fb5" fillOpacity={active === null || active === i ? 1 : 0.35} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  )
}

function Chapter3Chart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20%' }}
      transition={{ duration: 0.55 }}
      className="h-[min(400px,52vh)] w-full"
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={usDesertionData} margin={{ top: 24, right: 12, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke={gridStroke} vertical={false} />
          <XAxis
            type="number"
            dataKey="year"
            domain={[1964, 1973]}
            ticks={[1964, 1966, 1968, 1970, 1972]}
            tick={{ fill: axisStroke, fontSize: 11 }}
            axisLine={{ stroke: axisStroke }}
          />
          <YAxis tick={{ fill: axisStroke, fontSize: 11 }} axisLine={{ stroke: axisStroke }} label={{ value: 'Per 1,000', angle: -90, position: 'insideLeft', fill: axisStroke, fontSize: 10 }} />
          <Tooltip content={<CustomTooltip accent="#4a7fb5" />} />
          <ReferenceLine x={1964} stroke="#7a9e7e" strokeDasharray="3 3" label={{ value: 'Gulf of Tonkin era', fill: '#7a9e7e', fontSize: 9 }} />
          <ReferenceLine x={1968} stroke="#d4a017" strokeDasharray="4 4" label={{ value: 'Tet / MLK 1968', fill: '#d4a017', fontSize: 9 }} />
          <ReferenceLine x={1969} stroke="#7a9e7e" strokeDasharray="4 4" label={{ value: 'Nixon withdrawals', fill: '#7a9e7e', fontSize: 9, position: 'top' }} />
          <ReferenceLine x={1973} stroke="#c0392b" strokeDasharray="4 4" label={{ value: 'Paris / exit', fill: '#c0392b', fontSize: 9 }} />
          <Line type="monotone" dataKey="rate" name="US rate" stroke="#4a7fb5" strokeWidth={2} dot={{ r: 3 }} />
        </LineChart>
      </ResponsiveContainer>
      <p className="mt-2 text-[10px] text-ink-dark/60 dark:text-ink/55">
        Saigon fell in 1975, outside this annual US rate series; shown as contextual endpoint in narrative.
      </p>
    </motion.div>
  )
}

function Chapter4Chart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20%' }}
      transition={{ duration: 0.55 }}
      className="h-[min(380px,50vh)] w-full"
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={arvnDeltaData} margin={{ top: 20, right: 8, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke={gridStroke} vertical={false} />
          <XAxis dataKey="year" tick={{ fill: axisStroke, fontSize: 11 }} axisLine={{ stroke: axisStroke }} />
          <YAxis tick={{ fill: axisStroke, fontSize: 11 }} axisLine={{ stroke: axisStroke }} label={{ value: 'ARVN per 1,000 (approx.)', angle: -90, position: 'insideLeft', fill: axisStroke, fontSize: 9 }} />
          <Tooltip content={<CustomTooltip accent="#d4a017" />} />
          <ReferenceLine x={1968} stroke="#c0392b" label={{ value: 'Tet peak', fill: '#c0392b', fontSize: 10 }} strokeDasharray="4 4" />
          <ReferenceLine x={1970} stroke="#7a9e7e" label={{ value: 'Partial post-1968 recovery', fill: '#7a9e7e', fontSize: 9 }} strokeDasharray="4 4" />
          <Bar dataKey="rate" name="ARVN rate" fill="#d4a017" radius={[2, 2, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  )
}

const charts = [Chapter1Chart, Chapter2Chart, Chapter3Chart, Chapter4Chart]

export default function ScrollyTelling() {
  const [active, setActive] = useState(0)
  const stepRefs = useRef([])

  useEffect(() => {
    const els = stepRefs.current.filter(Boolean)
    if (!els.length) return undefined
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (!en.isIntersecting) return
          const idx = els.indexOf(en.target)
          if (idx >= 0) setActive(idx)
        })
      },
      { threshold: 0.35, rootMargin: '-20% 0px -35% 0px' },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <section id="why-they-left" className="px-4 py-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-3xl font-bold text-ink-dark dark:text-ink md:text-4xl">Why did they leave?</h2>
        <p className="mt-3 max-w-2xl text-sm text-ink-dark/75 dark:text-ink/70">
          Four chapters: scroll the right column; the narrative stays pinned on wide screens.
        </p>

        <div className="mt-16 lg:grid lg:grid-cols-2 lg:gap-12">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-xs font-medium uppercase tracking-widest text-muted">
              Chapter {active + 1} of 4
            </p>
            <h3 className="mt-2 font-display text-2xl font-semibold text-ink-dark dark:text-ink md:text-3xl">
              {chapters[active].title}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-ink-dark/88 dark:text-ink/85 md:text-base">
              {chapters[active].body}
            </p>
          </div>

          <div className="mt-10 space-y-6 lg:mt-0">
            {chapters.map((ch, i) => {
              const C = charts[i]
              return (
                <div
                  key={ch.title}
                  ref={(el) => {
                    stepRefs.current[i] = el
                  }}
                  className="flex min-h-[85vh] flex-col justify-center border-b border-ink-dark/10 pb-12 pt-4 last:border-0 dark:border-ink/10"
                >
                  <div className="rounded-lg border border-ink-dark/10 bg-surface-light/30 p-4 dark:border-ink/10 dark:bg-ink-dark/20 lg:hidden">
                    <p className="text-xs uppercase tracking-widest text-muted">Chapter {i + 1}</p>
                    <h4 className="font-display text-xl font-semibold text-ink-dark dark:text-ink">{ch.title}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-ink-dark/85 dark:text-ink/80">{ch.body}</p>
                  </div>
                  <div className="mt-6 lg:mt-0">
                    <C />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
