'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { StaggerGroup, staggerItem } from '@/components/motion/reveal'
import { SectionHeading } from '@/components/section-heading'
import { testimonials } from '@/lib/data'

export function Testimonials() {
  return (
    <section className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Testimonials"
          title="What people say"
          description="Kind words from professors, mentors and teammates I've worked with."
        />

        <StaggerGroup className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <motion.figure
              key={t.name}
              variants={staggerItem}
              className="glass gradient-border flex h-full flex-col rounded-3xl p-7"
            >
              <Quote className="h-8 w-8 text-primary/60" />
              <blockquote className="mt-4 flex-1 leading-relaxed text-muted-foreground">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent font-display text-sm font-semibold text-primary-foreground">
                  {t.name
                    .split(' ')
                    .map((n) => n[0])
                    .slice(0, 2)
                    .join('')}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-foreground">{t.name}</span>
                  <span className="block text-xs text-muted-foreground">{t.role}</span>
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
