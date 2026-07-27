import { Reveal } from '@/components/motion/reveal'

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description?: string
}) {
  return (
    <div className="mx-auto mb-14 max-w-2xl text-center">
      <Reveal>
        <span className="inline-block rounded-full glass px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-accent">
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="mt-5 font-display text-3xl font-bold text-balance sm:text-4xl">{title}</h2>
      </Reveal>
      {description && (
        <Reveal delay={0.15}>
          <p className="mt-4 leading-relaxed text-muted-foreground text-pretty">{description}</p>
        </Reveal>
      )}
    </div>
  )
}
