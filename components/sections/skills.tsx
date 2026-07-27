'use client'

import Image from 'next/image'
import { Boxes, Code2, Database, Smartphone } from 'lucide-react'
import { Reveal } from '@/components/motion/reveal'
import { SectionHeading } from '@/components/section-heading'
import { skillCategories } from '@/lib/data'

const categoryIcons = [Code2, Smartphone, Boxes, Database]

export function Skills() {
  return (
    <section id="skills" className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Skills"
          title="Technical Toolkit"
          description="A categorized overview of the languages, frameworks and tools I use to build reliable software."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((category, ci) => {
            const Icon = categoryIcons[ci % categoryIcons.length]
            return (
              <Reveal key={category.title} delay={ci * 0.08} direction="up">
                <div className="glass group h-full rounded-3xl p-7 transition-all hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10">
                  <div className="mb-6 flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 text-accent transition-transform group-hover:scale-110">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="font-display text-xl font-semibold">{category.title}</h3>
                  </div>

                  <ul className="flex flex-wrap gap-3">
                    {category.skills.map((skill) => (
                      <li key={skill.name}>
                        <div className="flex items-center gap-2.5 rounded-2xl border border-border bg-white/5 py-2 pl-2 pr-4 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-white/10">
                          <span
                            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl"
                            style={{ backgroundColor: `${skill.color}22` }}
                          >
                            <Image
                              src={skill.icon || '/placeholder.svg'}
                              alt={`${skill.name} logo`}
                              width={20}
                              height={20}
                              className="h-5 w-5 object-contain"
                            />
                          </span>
                          <span className="text-sm font-medium">{skill.name}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
