import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const PANEL_DURATION = 1.25
const CHART_MOUNT_BASE_MS = 700
const STAGGER_MS = 100

export default function ChartReveal({ children, index = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.22 })
  const [showChart, setShowChart] = useState(false)

  useEffect(() => {
    if (!inView) return
    const delay = CHART_MOUNT_BASE_MS + index * STAGGER_MS
    const t = window.setTimeout(() => setShowChart(true), delay)
    return () => window.clearTimeout(t)
  }, [inView, index])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : false}
      transition={{ duration: PANEL_DURATION, ease: [0.16, 1, 0.3, 1] }}
    >
      {showChart ? (
        children
      ) : (
        <div className="min-h-[320px] w-full rounded-md bg-ink-dark/[0.06] dark:bg-ink/[0.06]" aria-hidden />
      )}
    </motion.div>
  )
}
