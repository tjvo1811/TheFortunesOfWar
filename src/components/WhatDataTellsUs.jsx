import { motion } from 'framer-motion'

const cards = [
  {
    title: "The lottery wasn't random, and the courts knew it",
    stat: '1.2% probability of true randomness',
    body: [
      'Statistical analysis showed the 1969 draft lottery capsules were loaded month-by-month and never properly mixed, leaving only a vanishingly small chance the draw was fair.',
      'Courts ruled the process acceptable anyway, even as researchers flagged the bias in real time.',
    ],
    accent: 'border-t-us',
  },
  {
    title: "The ARVN's desertion was structural, not cowardly",
    stat: '10–15% annual desertion rate (approx.)',
    body: [
      'Loyalty ran to villages and families, not to a distant government in Saigon.',
      'High desertion reflected a legitimacy crisis, not a simple failure of courage.',
    ],
    accent: 'border-t-arvn',
  },
  {
    title: 'The North held its soldiers. That decided the war.',
    stat: 'Hundreds of thousands down the Ho Chi Minh Trail without systematic collapse',
    body: [
      'Ideological cohesion and coercive but consistent recruitment produced staying power the South could not match.',
      'All three armies bled, but the North bled least where it counted.',
    ],
    accent: 'border-t-vc',
  },
]

export default function WhatDataTellsUs() {
  return (
    <section id="conclusions" className="px-4 py-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-3xl font-bold text-ink-dark dark:text-ink md:text-4xl">
          What the data tells us
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {cards.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className={`rounded-lg border border-ink-dark/10 bg-surface-light/50 p-6 dark:border-ink/10 dark:bg-ink-dark/20 ${c.accent} border-t-4`}
            >
              <h3 className="font-display text-xl font-semibold text-ink-dark dark:text-ink">{c.title}</h3>
              <p className="mt-3 font-mono text-sm text-muted">{c.stat}</p>
              {c.body.map((p) => (
                <p key={p} className="mt-4 text-sm leading-relaxed text-ink-dark/85 dark:text-ink/80">
                  {p}
                </p>
              ))}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
