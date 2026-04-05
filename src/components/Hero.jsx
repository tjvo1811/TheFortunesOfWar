import { motion, useMotionValue, useSpring, useTransform, useMotionValueEvent } from 'framer-motion'
import { useEffect, useState } from 'react'

function useCountUp(target, duration = 2, start = false) {
  const mv = useMotionValue(0)
  const spring = useSpring(mv, { stiffness: 50, damping: 30 })
  const rounded = useTransform(spring, (v) => Math.round(v))

  useEffect(() => {
    if (!start) return
    mv.set(0)
    const controls = { cancelled: false }
    const t0 = performance.now()
    const tick = (now) => {
      if (controls.cancelled) return
      const p = Math.min(1, (now - t0) / (duration * 1000))
      mv.set(target * (0.5 - Math.cos(p * Math.PI) / 2))
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
    return () => {
      controls.cancelled = true
    }
  }, [start, target, duration, mv])

  return rounded
}

function CountDisplay({ motionValue }) {
  const [text, setText] = useState('0')
  useMotionValueEvent(motionValue, 'change', (v) => setText(String(v)))
  return <>{text}</>
}

function CounterBlock({ label, value, suffix = '', prefix = '', delay = 0 }) {
  const [start, setStart] = useState(false)
  const numericTarget =
    typeof value === 'number' ? value : parseInt(String(value).replace(/\D/g, ''), 10) || 0
  const isApprox = String(value).includes('+')

  useEffect(() => {
    const t = setTimeout(() => setStart(true), delay)
    return () => clearTimeout(t)
  }, [delay])

  const display = useCountUp(numericTarget, 2.2, start)

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: delay / 1000 }}
      className="border-l-2 border-muted/60 pl-4 dark:border-muted/50"
    >
      <p className="text-xs uppercase tracking-widest text-ink-dark/60 dark:text-ink/55">{label}</p>
      <p className="font-display text-2xl font-semibold text-us md:text-3xl">
        {prefix}
        <CountDisplay motionValue={display} />
        {isApprox ? '+' : ''}
        {suffix}
      </p>
    </motion.div>
  )
}

function RateCounter({ label, delay = 0 }) {
  const [start, setStart] = useState(false)
  const mv = useMotionValue(0)
  const spring = useSpring(mv, { stiffness: 45, damping: 28 })
  const formatted = useTransform(spring, (v) => v.toFixed(1))

  useEffect(() => {
    const t = setTimeout(() => setStart(true), delay)
    return () => clearTimeout(t)
  }, [delay])

  useEffect(() => {
    if (!start) return
    mv.set(0)
    const controls = { cancelled: false }
    const t0 = performance.now()
    const target = 33.9
    const tick = (now) => {
      if (controls.cancelled) return
      const p = Math.min(1, (now - t0) / 2200)
      mv.set(target * (0.5 - Math.cos(p * Math.PI) / 2))
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
    return () => {
      controls.cancelled = true
    }
  }, [start, mv])

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: delay / 1000 }}
      className="border-l-2 border-muted/60 pl-4 dark:border-muted/50"
    >
      <p className="text-xs uppercase tracking-widest text-ink-dark/60 dark:text-ink/55">{label}</p>
      <p className="font-display text-2xl font-semibold text-us md:text-3xl">
        <CountDisplay motionValue={formatted} />
        {' / 1,000 troops'}
      </p>
    </motion.div>
  )
}

function VietnamMapBg() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.12] dark:opacity-[0.14]"
      aria-hidden
    >
      <svg
        className="absolute -right-[10%] top-1/2 h-[min(85vh,720px)] w-auto -translate-y-1/2 text-ink-dark/40 dark:text-ink/35"
        viewBox="0 0 200 240"
        fill="currentColor"
      >
        <path
          opacity="0.35"
          d="M95 20 L130 35 L145 55 L150 85 L165 110 L175 140 L170 175 L155 200 L120 215 L85 210 L55 195 L40 165 L35 130 L45 95 L60 65 L75 40 Z"
        />
        <path
          d="M92 22 L128 38 L142 58 L148 88 L162 112 L172 142 L168 178 L152 202 L118 218 L82 212 L52 198 L38 168 L33 132 L42 98 L58 68 L78 42 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.8"
        />
        <ellipse cx="78" cy="175" rx="12" ry="10" opacity="0.5" />
        <text x="62" y="178" className="fill-current font-sans text-[6px] opacity-70">
          Long An
        </text>
      </svg>
    </div>
  )
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100dvh] flex-col justify-center px-4 pb-16 pt-24 md:px-8"
    >
      <VietnamMapBg />
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-display text-4xl font-bold leading-tight tracking-tight text-ink-dark dark:text-ink md:text-6xl lg:text-7xl"
        >
          The Fortunes of War
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ink-dark/85 dark:text-ink/85 md:text-lg"
        >
          How military recruitment tactics shaped desertion rates across three armies and one family
          during the Vietnam War
        </motion.p>
      </div>

      <div className="relative z-10 mx-auto mt-16 grid max-w-4xl gap-8 sm:grid-cols-3">
        <CounterBlock label="US desertions (Jul 1966 – Dec 1973, DoD)" value={503926} delay={400} />
        <CounterBlock
          label="ARVN desertions in 1965 alone"
          value={113000}
          suffix="+ (approx.)"
          delay={650}
        />
        <RateCounter label="US desertion rate peak (1971)" delay={900} />
      </div>

      <motion.a
        href="#armies"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 text-xs uppercase tracking-widest text-ink-dark/50 dark:text-ink/45"
      >
        Scroll
        <span className="block h-6 w-px animate-pulse bg-muted" />
      </motion.a>
    </section>
  )
}
