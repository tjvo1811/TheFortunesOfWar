import { motion } from 'framer-motion'

const questions = [
  'What did the South Vietnamese Army do to combat North Vietnamese recruitment of their own troops?',
  'Has the United States made the draft fairer since the Vietnam era, and how?',
  "How did the domestic US protest movement influence the war's outcome?",
]

export default function FutureResearch() {
  return (
    <section id="future-research" className="px-4 py-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-3xl font-bold text-ink-dark dark:text-ink md:text-4xl">
          Future research
        </h2>
        <p className="mt-3 max-w-2xl text-ink-dark/75 dark:text-ink/70">
          Open questions this project leaves for the next pass through the archives and the data.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {questions.map((q, i) => (
            <motion.div
              key={q}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="cursor-default rounded-lg border border-ink-dark/15 bg-surface-light/40 p-6 transition-shadow duration-200 hover:border-arvn/50 hover:shadow-[0_0_24px_rgba(212,160,23,0.2)] dark:border-ink/15 dark:bg-ink-dark/25 dark:hover:border-arvn/45"
            >
              <p className="text-sm leading-relaxed text-ink-dark/90 dark:text-ink/85">{q}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
