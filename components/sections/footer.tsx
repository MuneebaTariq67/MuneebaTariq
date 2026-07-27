'use client'

import { Mail, Phone } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { contactInfo, navLinks } from '@/lib/data'

export function Footer() {
  const socials = [
    { icon: GithubIcon, href: contactInfo.github, label: 'GitHub', external: true },
    { icon: LinkedinIcon, href: contactInfo.linkedin, label: 'LinkedIn', external: true },
    { icon: Mail, href: `mailto:${contactInfo.email}`, label: 'Email', external: false },
    { icon: Phone, href: `tel:${contactInfo.phone.replace(/\s/g, '')}`, label: 'Phone', external: false },
  ]

  return (
    <footer className="relative border-t border-border px-4 py-12">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
        <div>
          <a href="#home" className="flex items-center gap-2" aria-label="Muneeba Tariq home">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent font-display text-lg font-bold text-primary-foreground">
              MT
            </span>
            <span className="font-display text-sm font-semibold">Muneeba Tariq</span>
          </a>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Computer Science undergraduate building scalable software and solving real-world
            problems. Open for internships and junior roles.
          </p>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold">Quick Links</h3>
          <ul className="mt-4 grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold">Connect</h3>
          <div className="mt-4 flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                target={s.external ? '_blank' : undefined}
                rel={s.external ? 'noopener noreferrer' : undefined}
                className="flex h-10 w-10 items-center justify-center rounded-xl glass text-muted-foreground transition-all hover:-translate-y-1 hover:text-foreground"
              >
                <s.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
          <p className="mt-4 text-sm text-muted-foreground">{contactInfo.email}</p>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-border pt-6 text-center">
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Muneeba Tariq. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
