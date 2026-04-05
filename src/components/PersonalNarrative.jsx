import { motion } from 'framer-motion'

export default function PersonalNarrative() {
  return (
    <section id="family" className="px-4 py-20 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-3xl rounded-xl border border-stone-400/40 bg-[#ebe6dc] px-8 py-12 text-center shadow-sm dark:border-ink/20 dark:bg-[#2c2b24] dark:shadow-[inset_0_1px_0_rgba(240,237,232,0.08)]"
      >
        <h2 className="font-display text-3xl font-bold text-ink-dark md:text-4xl dark:text-ink">
          One family, three stories
        </h2>
        <div className="mt-8 space-y-6 font-display text-lg italic leading-relaxed text-ink-dark md:text-xl dark:text-ink">
          <p>
            Long An province sits in the Mekong Delta, one of the most contested recruitment zones of the
            entire war. The Viet Cong specifically targeted men in the Delta aged 17–35.
          </p>
          <p>
            A grandfather fought for the ARVN from Long An. He stayed when research suggests most ARVN soldiers
            in high-desertion provinces did not. That made him an outlier.
          </p>
          <p>
            The father&apos;s family did not desert; they survived the losing side. After the fall of Saigon
            in 1975, families like theirs fled by boat. That was not desertion. It was displacement after the
            Republic of Vietnam ceased to exist.
          </p>
        </div>
        <p className="mt-10 font-display text-xl font-semibold not-italic text-[#8a6800] md:text-2xl dark:text-arvn">
          The split wasn&apos;t a contradiction. It was two chapters of the same story.
        </p>
      </motion.div>
    </section>
  )
}
