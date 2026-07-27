'use client'

import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { Reveal } from '@/components/motion/reveal'
import { SectionHeading } from '@/components/section-heading'
import { timeline } from '@/lib/data'

export function Timeline() {
  return (
    <section id="education" className="relative px-4 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Education"
          title="My academic journey"
          description="A steady path of learning, growth and building strong computer science foundations."
        />

        <div className="relative ml-4 md:ml-0">
          {/* line */}
          <div className="absolute left-4 top-2 h-full w-px bg-border md:left-1/2" aria-hidden="true">
            <motion.div
              className="h-full w-px bg-gradient-to-b from-primary to-accent"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              style={{ transformOrigin: 'top' }}
            />
          </div>

          <div className="space-y-10">
            {timeline.map((item, i) => {
              const left = i % 2 === 0
              return (
                <div
                  key={item.title}
                  className={`relative flex flex-col md:flex-row md:items-center ${
                    left ? 'md:justify-start' : 'md:justify-end'
                  }`}
                >
                  <span className="absolute left-4 top-2 z-10 flex h-5 w-5 -translate-x-1/2 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent md:left-1/2">
                    <GraduationCap className="h-3 w-3 text-primary-foreground" />
                  </span>

                  <Reveal
                    direction={left ? 'right' : 'left'}
                    className={`ml-10 md:ml-0 md:w-[46%] ${left ? '' : 'md:text-right'}`}
                  >
                    <div className="glass rounded-2xl p-6 transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10">
                      <span className="font-mono text-xs text-accent">{item.period}</span>
                      <h3 className="mt-1 font-display text-lg font-semibold">{item.title}</h3>
                      <p className="text-sm font-medium text-secondary">{item.org}</p>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </Reveal>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
