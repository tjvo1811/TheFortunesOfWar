import { motion } from 'framer-motion'

const armies = [
  {
    title: 'United States',
    accent: 'border-l-us',
    color: 'text-us',
    stats: [
      'Drafted 2.2 million men',
      'Desertion rate peaked at 33.9 per 1,000 in 1971',
      '503,926 total desertions (Jul 1966 – Dec 1973, DoD)',
    ],
    quote: 'Fairness failed in the draft room before it failed in the field.',
  },
  {
    title: 'Viet Cong / NVA',
    accent: 'border-l-vc',
    color: 'text-vc',
    stats: [
      'Coercive recruitment in the Mekong Delta',
      'Physical strain and family separation drove most desertion',
      'Ideological cohesion kept soldiers in the ranks longer',
    ],
    quote: 'Coercion brought them in; hardship and homesickness pulled them out.',
  },
  {
    title: 'ARVN (South Vietnam)',
    accent: 'border-l-arvn',
    color: 'text-arvn',
    stats: [
      'Desertion rose from 73,000 (1964) to 113,000 (1965)',
      'Averaged roughly 10–15% annually',
      'Primary loyalty to family and village, not Saigon',
    ],
    quote: 'Men left units that could not hold their trust.',
  },
]

export default function ThreeArmiesPanel() {
  return (
    <section id="armies" className="px-4 py-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-3xl font-bold text-ink-dark dark:text-ink md:text-4xl">
          The three armies
        </h2>
        <p className="mt-3 max-w-2xl text-ink-dark/75 dark:text-ink/70">
          Desertion looked different in each force, but every side lost soldiers the war could not afford
          to lose.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {armies.map((a, i) => (
            <motion.article
              key={a.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`rounded-lg border border-ink-dark/10 bg-surface-light/60 p-6 dark:border-ink/10 dark:bg-ink-dark/15 ${a.accent} border-l-4`}
            >
              <h3 className={`font-display text-2xl font-semibold ${a.color}`}>{a.title}</h3>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-ink-dark/85 dark:text-ink/80">
                {a.stats.map((s) => (
                  <li key={s}>• {s}</li>
                ))}
              </ul>
              <p className="mt-6 border-t border-ink-dark/10 pt-4 text-sm italic text-muted dark:border-ink/10">
                {a.quote}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
