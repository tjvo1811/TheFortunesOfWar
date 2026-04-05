import ChartReveal from './ChartReveal.jsx'
import USDesertionChart from './charts/USDesertionChart.jsx'
import RacialDraftChart from './charts/RacialDraftChart.jsx'
import ThreeArmiesComparisonChart from './charts/ThreeArmiesComparisonChart.jsx'
import LotteryFairnessChart from './charts/LotteryFairnessChart.jsx'
import VietCongRecruitmentChart from './charts/VietCongRecruitmentChart.jsx'
import ARVNContextChart from './charts/ARVNContextChart.jsx'

const panels = [
  {
    title: 'US desertion rate over time (1966–1973)',
    subtitle: 'Per 1,000 enlisted. Hover for year and rate.',
    Chart: USDesertionChart,
  },
  {
    title: 'Draft racial breakdown',
    subtitle: 'Toggle the proportional representation line (11%).',
    Chart: RacialDraftChart,
  },
  {
    title: 'Three armies: US vs ARVN rates',
    subtitle: 'Viet Cong / NVA: see tooltip for data limits.',
    Chart: ThreeArmiesComparisonChart,
  },
  {
    title: 'Draft lottery fairness by birth month (1969)',
    subtitle: 'Monthly average lottery number vs expected random mean.',
    Chart: LotteryFairnessChart,
  },
  {
    title: 'Viet Cong: recruitment vs desertion themes',
    subtitle: 'Approximate shares (Cooley 1963).',
    Chart: VietCongRecruitmentChart,
  },
  {
    title: 'ARVN desertion context',
    subtitle: 'National approximate rates; Long An note below chart.',
    Chart: ARVNContextChart,
  },
]

export default function Dashboard() {
  return (
    <section id="explore" className="px-4 py-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-3xl font-bold text-ink-dark dark:text-ink md:text-4xl">
          Explore the data
        </h2>
        <p className="mt-3 max-w-2xl text-ink-dark/75 dark:text-ink/70">
          All charts are interactive: hover for details; use toggles where noted.
        </p>

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          {panels.map(({ title, subtitle, Chart }, i) => (
            <div
              key={title}
              className="rounded-xl border border-ink-dark/10 bg-surface-light/40 p-5 dark:border-ink/10 dark:bg-ink-dark/20"
            >
              <h3 className="font-display text-xl font-semibold text-ink-dark dark:text-ink">{title}</h3>
              <p className="mt-1 text-xs text-ink-dark/65 dark:text-ink/60">{subtitle}</p>
              <div className="mt-4">
                <ChartReveal index={i}>
                  <Chart />
                </ChartReveal>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
