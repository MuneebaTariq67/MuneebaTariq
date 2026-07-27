'use client'

import { motion } from 'framer-motion'
import {
  Brain,
  Clock,
  Code2,
  MessageSquare,
  Puzzle,
  ScanSearch,
  Users,
} from 'lucide-react'
import { StaggerGroup, staggerItem } from '@/components/motion/reveal'
import { SectionHeading } from '@/components/section-heading'
import { whyHireMe } from '@/lib/data'

const icons = [Puzzle, Brain, MessageSquare, Users, Code2, ScanSearch, Clock]

export function WhyHireMe() {
  return (
    <section id="experience" className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Why Hire Me"
          title="What I bring to your team"
          description="Beyond code, I bring the mindset and soft skills that make a great engineering teammate."
        />

        <StaggerGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whyHireMe.map((item, i) => {
            const Icon = icons[i % icons.length]
            return (
              <motion.div
                key={item.title}
                variants={staggerItem}
                whileHover={{ y: -6 }}
                className="glass group relative overflow-hidden rounded-3xl p-6 transition-shadow hover:shadow-xl hover:shadow-primary/10"
              >
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/10 blur-2xl transition-opacity group-hover:opacity-100" />
                <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 text-accent transition-transform group-hover:scale-110">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="relative mt-4 font-display text-lg font-semibold">{item.title}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            )
          })}
        </StaggerGroup>
      </div>
    </section>
  )
}
