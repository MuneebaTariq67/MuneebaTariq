'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { StaggerGroup, staggerItem } from '@/components/motion/reveal'
import { motion } from 'framer-motion'
import { stats } from '@/lib/data'

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const duration = 1400
    const start = performance.now()
    let raf = 0
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.round(eased * value))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, value])

  return (
    <span ref={ref} className="text-gradient font-display text-4xl font-bold sm:text-5xl">
      {display}
      {suffix}
    </span>
  )
}

export function Stats() {
  return (
    <section className="relative px-4 py-12">
      <div className="mx-auto max-w-5xl">
        <StaggerGroup className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((s) => (
            <motion.div
              key={s.label}
              variants={staggerItem}
              className="glass gradient-border flex flex-col items-center rounded-3xl p-6 text-center"
            >
              <Counter value={s.value} suffix={s.suffix} />
              <span className="mt-2 text-sm text-muted-foreground">{s.label}</span>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
