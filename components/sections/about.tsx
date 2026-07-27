'use client'

import { CheckCircle2, GraduationCap, Rocket, Target } from 'lucide-react'
import { Reveal } from '@/components/motion/reveal'
import { SectionHeading } from '@/components/section-heading'
import { aboutPoints } from '@/lib/data'

const cards = [
  {
    icon: Target,
    title: 'Career Objective',
    text: 'To secure a software engineering internship where I can apply my problem-solving skills, grow as an engineer and contribute to impactful products.',
  },
  {
    icon: GraduationCap,
    title: 'Current Education',
    text: 'BS Computer Science at Fatima Jinnah Women University, building strong fundamentals in algorithms, systems and software design.',
  },
  {
    icon: Rocket,
    title: 'My Passion',
    text: 'I love turning complex problems into elegant, scalable solutions — especially in backend and distributed systems.',
  },
]

export function About() {
  return (
    <section id="about" className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About Me"
          title="Turning ideas into scalable software"
          description="A motivated Computer Science student who blends strong fundamentals with a genuine passion for building reliable, real-world software."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal direction="right">
            <div className="glass h-full rounded-3xl p-8">
              <h3 className="font-display text-2xl font-semibold">Who I am</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                I&apos;m Muneeba Tariq, a Computer Science undergraduate driven by curiosity and a
                love for engineering. I enjoy designing systems that scale, writing clean code and
                continuously learning modern technologies. Whether it&apos;s backend logic,
                distributed architectures or algorithmic challenges, I approach every problem with
                focus and craftsmanship.
              </p>

              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {aboutPoints.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <div className="grid gap-6">
            {cards.map((card, i) => (
              <Reveal key={card.title} direction="left" delay={i * 0.1}>
                <div className="glass group flex items-start gap-4 rounded-3xl p-6 transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 text-accent transition-transform group-hover:scale-110">
                    <card.icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h4 className="font-display text-lg font-semibold">{card.title}</h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {card.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
