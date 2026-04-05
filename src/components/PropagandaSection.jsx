import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

const cards = [
  {
    id: 'us',
    accent: 'border-l-us',
    image: '/posters/poster-1.png',
    imageAlt:
      'Anti-communist comic-book style cover: burning American flag and chaos scene, title “Is This Tomorrow: America Under Communism!”',
    captionTitle: 'Is This Tomorrow?',
    captionSub: 'America under communism',
    sources: 'Is This Tomorrow: America Under Communism! (Catechetical Guild, 1947); USIA poster “Anywhere there is communism, there is terrorism and assassination” (National Archives, RG 306, 1954).',
    caption:
      'Fear of communism was the engine. The US didn’t recruit men to fight for Vietnam; it recruited them to fight against the spread of Soviet ideology.',
    expanded:
      'Domestic anti-communist education and USIA messaging framed intervention as containment. The panel shows the 1947 Catechetical Guild cover; the companion USIA “terror and assassination” line appears on the allied / Republic of Vietnam card.',
  },
  {
    id: 'vc',
    accent: 'border-l-vc',
    image: '/posters/poster-3.png',
    imageAlt:
      'Red-and-black Vietnamese poster: soldiers charging forward with tanks behind; text in Vietnamese meaning “Rush forward to overwhelm the enemy.”',
    captionTitle: 'Rush forward to overwhelm the enemy',
    captionSub: 'Vietnamese: Xốc tới áp đảo quân thù',
    sources:
      'Vietnamese propaganda posters: “Rush to Overwhelm the Enemy” and “Ready to Protect Our Country” (representative wartime print campaigns).',
    caption:
      'Patriotism and national unification were the message. Artists were encouraged to keep drawing through war as an act of defiance. The North made the war feel like it belonged to the people.',
    expanded:
      'Mass-produced images linked everyday sacrifice to national liberation. This print is the “rush to overwhelm the foe” campaign; the companion “ready to defend the Fatherland” poster sits beside it.',
  },
  {
    id: 'vc-defend',
    accent: 'border-l-vc',
    image: '/posters/poster-4.png',
    imageAlt:
      'Soldier in pith helmet with rifle and bayonet against red field and yellow hammer and sickle; Vietnamese text meaning “Ready to defend the Fatherland.”',
    captionTitle: 'Ready to defend the Fatherland',
    captionSub: 'Vietnamese: Sẵn sàng bảo vệ tổ quốc',
    sources:
      'Representative DRV / Liberation Forces mobilization poster (wartime mass print campaign).',
    caption:
      'Alongside offensive imagery, the North circulated portraits of calm, prepared soldiers, linking everyday readiness to party and nation.',
    expanded:
      'These posters paired heroic individuals with clear symbols (hammer and sickle, red field) so viewers could see themselves in the same role.',
  },
  {
    id: 'arvn',
    accent: 'border-l-arvn',
    image: '/posters/poster-2.png',
    imageAlt:
      'Anti-communist poster: vulture in cap, skull and blood; Vietnamese text meaning “Where there is communism, there is terrorism and assassination.”',
    captionTitle: 'Communism and terror',
    captionSub: 'Where there is communism, there is terrorism and assassination',
    sources:
      'USIA poster “Anywhere there is communism, there is terrorism and assassination” (National Archives, RG 306, 1954); context: 1964 ARVN recruitment poster “The Army is Your Future” (US Information Agency).',
    caption:
      'The South Vietnamese government struggled to compete. Its recruitment messaging promised skills and opportunity, but couldn’t match the North’s ideological cohesion or the Viet Cong’s community-level pressure.',
    expanded:
      'USIA-assisted graphics in the South included stark anti-communist campaigns like the one shown: a different moral frame than the North’s heroic soldier prints, and parallel to domestic US fear messaging.',
  },
]

export default function PropagandaSection() {
  const [openId, setOpenId] = useState(null)

  return (
    <section id="propaganda" className="px-4 py-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-3xl font-bold text-ink-dark dark:text-ink md:text-4xl">
          How they recruited
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-ink-dark/75 dark:text-ink/70">
          US fear messaging, allied anti-communist graphics in the South, and two faces of Northern mobilization:
          one full poster per panel (English captions where the originals are in Vietnamese).
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {cards.map((c, i) => {
            const open = openId === c.id
            return (
              <motion.article
                key={c.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className={`flex flex-col overflow-hidden rounded-xl border border-ink-dark/15 bg-[#2c2a22]/50 dark:border-ink/15 dark:bg-[#222118]/90 ${c.accent} border-l-4`}
              >
                <button
                  type="button"
                  onClick={() => setOpenId(open ? null : c.id)}
                  className="text-left"
                  aria-expanded={open}
                >
                  <div
                    className="relative aspect-[2/3] cursor-pointer overflow-hidden border-b border-ink-dark/10 bg-[#1a1814] dark:border-ink/10"
                    style={{
                      boxShadow: 'inset 0 0 40px rgba(0,0,0,0.25)',
                      filter: 'sepia(0.2) contrast(1.02)',
                    }}
                  >
                    <img
                      src={c.image}
                      alt={c.imageAlt}
                      className="h-full w-full object-cover object-center"
                      loading="lazy"
                    />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent px-3 pb-3 pt-12 text-left">
                      <span className="font-display text-sm font-semibold leading-snug text-[#f5ebe0] md:text-base">
                        {c.captionTitle}
                      </span>
                      {c.captionSub ? (
                        <span className="mt-1 block font-display text-xs italic text-[#d4c4b0]/95">
                          {c.captionSub}
                        </span>
                      ) : null}
                    </div>
                  </div>
                </button>

                <div className="flex flex-1 flex-col p-5">
                  <p className="text-xs leading-relaxed text-ink-dark/70 dark:text-ink/65">{c.sources}</p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-dark/88 dark:text-ink/85">{c.caption}</p>
                  <button
                    type="button"
                    onClick={() => setOpenId(open ? null : c.id)}
                    className="mt-4 text-left text-xs font-medium text-us hover:underline"
                  >
                    {open ? 'Collapse' : 'Expand full description'}
                  </button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <p className="mt-3 border-t border-ink-dark/10 pt-3 text-xs leading-relaxed text-muted dark:border-ink/10">
                          {c.expanded}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
