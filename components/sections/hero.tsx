'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { ArrowRight, Download, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { MagneticButton } from '@/components/magnetic-button'
import { contactInfo, typingRoles } from '@/lib/data'

function useTyping(words: string[]) {
  const [text, setText] = useState('')
  const [index, setIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[index % words.length]
    let timeout: ReturnType<typeof setTimeout>

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), 1400)
    } else if (deleting && text === '') {
      setDeleting(false)
      setIndex((i) => i + 1)
    } else {
      timeout = setTimeout(
        () => {
          setText((prev) =>
            deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1),
          )
        },
        deleting ? 45 : 90,
      )
    }
    return () => clearTimeout(timeout)
  }, [text, deleting, index, words])

  return text
}

const floatingIcons = [
  { logo: '/tech/python.svg', label: 'Python', className: 'left-[6%] top-[12%]', delay: 0 },
  { logo: '/tech/java.svg', label: 'Java', className: 'right-[8%] top-[6%]', delay: 0.6 },
  { logo: '/tech/react.svg', label: 'React.js', className: 'left-[0%] top-[52%]', delay: 1.2 },
  { logo: '/tech/mysql.svg', label: 'MySQL', className: 'right-[2%] top-[40%]', delay: 0.3 },
  { logo: '/tech/cplusplus.svg', label: 'C++', className: 'left-[10%] bottom-[8%]', delay: 0.9 },
  { logo: '/tech/javascript.svg', label: 'JavaScript', className: 'right-[10%] bottom-[12%]', delay: 1.5 },
]

export function Hero() {
  const role = useTyping(typingRoles)
  const [parallax, setParallax] = useState({ x: 0, y: 0 })
  const wrapRef = useRef<HTMLDivElement>(null)

  const handleMouse = (e: React.MouseEvent) => {
    const rect = wrapRef.current?.getBoundingClientRect()
    if (!rect) return
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height
    setParallax({ x, y })
  }

  const socials = [
    { icon: GithubIcon, label: 'GitHub', href: contactInfo.github, external: true },
    { icon: LinkedinIcon, label: 'LinkedIn', href: contactInfo.linkedin, external: true },
  ]

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-4 pt-28 pb-16 md:pt-24"
      onMouseMove={handleMouse}
      ref={wrapRef}
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-2">
        {/* Left */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-muted-foreground"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Open for Internship Opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="font-display text-4xl font-bold leading-tight text-balance sm:text-5xl lg:text-6xl"
          >
            Hi, I&apos;m <span className="text-gradient animate-gradient">Muneeba Tariq</span>
          </motion.h1>

          <div className="mt-4 flex h-9 items-center font-mono text-lg text-accent sm:text-xl">
            <span aria-live="polite">{role}</span>
            <span className="ml-1 inline-block h-6 w-0.5 animate-pulse bg-accent" aria-hidden="true" />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-xl leading-relaxed text-muted-foreground text-pretty"
          >
            I build scalable software, solve real-world problems and love learning modern
            technologies. As a Computer Science undergraduate, I focus on backend development,
            distributed systems and writing clean, maintainable code.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <MagneticButton href="https://drive.google.com/file/d/1--gW7gzK_izcOGCyXCktKapNlgBash6F/view?usp=sharing" download variant="primary">
              <Download className="h-4 w-4" /> Download Resume
            </MagneticButton>
            <MagneticButton href="#contact" variant="outline">
              <Mail className="h-4 w-4" /> Contact Me
            </MagneticButton>
            <MagneticButton href="#projects" variant="ghost">
              View Projects <ArrowRight className="h-4 w-4" />
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-10 flex items-center gap-3"
          >
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                target={s.external ? '_blank' : undefined}
                rel={s.external ? 'noopener noreferrer' : undefined}
                className="group flex h-11 w-11 items-center justify-center rounded-xl glass text-muted-foreground transition-all hover:-translate-y-1 hover:text-foreground hover:shadow-lg hover:shadow-primary/20"
              >
                <s.icon className="h-5 w-5 transition-transform group-hover:scale-110" />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto aspect-square w-full max-w-md"
          style={{
            transform: `perspective(1000px) rotateY(${parallax.x * 6}deg) rotateX(${-parallax.y * 6}deg)`,
          }}
        >
          <div className="absolute inset-6 rounded-[2rem] bg-gradient-to-br from-primary/30 to-accent/20 blur-2xl" />
          <div className="gradient-border relative h-full w-full overflow-hidden rounded-[2rem]">
            <Image
              src="/images/hero-dev.png"
              alt="Illustration of Muneeba Tariq, a software developer, at a futuristic workstation"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 448px"
              className="object-cover"
            />
          </div>

          {floatingIcons.map((f) => (
            <motion.div
              key={f.label}
              className={`absolute ${f.className} flex items-center gap-2 rounded-xl glass px-2.5 py-1.5 text-[10px] font-medium text-foreground shadow-lg sm:px-3 sm:py-2 sm:text-xs`}
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: f.delay }}
              style={{
                transform: `translate(${parallax.x * 18}px, ${parallax.y * 18}px)`,
              }}
            >
              <Image
                src={f.logo || '/placeholder.svg'}
                alt={`${f.label} logo`}
                width={16}
                height={16}
                className="h-4 w-4 object-contain"
              />
              {f.label}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
