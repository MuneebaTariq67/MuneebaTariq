'use client'

import { useState } from 'react'
import { Loader2, Mail, Phone, Send } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { Reveal } from '@/components/motion/reveal'
import { SectionHeading } from '@/components/section-heading'
import { contactInfo } from '@/lib/data'

type Status = 'idle' | 'loading' | 'success' | 'error'

export function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const [feedback, setFeedback] = useState('')

  const details = [
    { icon: Mail, label: 'Email', value: contactInfo.email, href: `mailto:${contactInfo.email}` },
    {
      icon: Phone,
      label: 'Phone',
      value: contactInfo.phone,
      href: `tel:${contactInfo.phone.replace(/\s/g, '')}`,
    },
    { icon: GithubIcon, label: 'GitHub', value: 'MuneebaTariq67', href: contactInfo.github, external: true },
    { icon: LinkedinIcon, label: 'LinkedIn', value: 'muneeba tariq', href: contactInfo.linkedin, external: true },
  ]

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const payload = {
      name: String(data.get('name') || ''),
      email: String(data.get('email') || ''),
      subject: String(data.get('subject') || ''),
      message: String(data.get('message') || ''),
    }

    setStatus('loading')
    setFeedback('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const result = await res.json()
      if (!res.ok) {
        setStatus('error')
        setFeedback(result.error || 'Failed to send message. Please try again.')
        return
      }
      setStatus('success')
      setFeedback("Thanks for reaching out! I'll get back to you soon.")
      form.reset()
    } catch {
      setStatus('error')
      setFeedback('Network error. Please try again.')
    }
  }

  const fieldClass =
    'w-full rounded-xl border border-border bg-input px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-accent'

  return (
    <section id="contact" className="relative px-4 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Build Something Amazing Together"
          description="Have an internship or project in mind? Send me a message using the form below and I'll get back to you."
        />

        <div className="grid gap-6 lg:grid-cols-5">
          {/* Contact details */}
          <Reveal direction="up" className="lg:col-span-2">
            <div className="glass gradient-border relative flex h-full flex-col overflow-hidden rounded-3xl p-6 sm:p-8">
              <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full bg-accent/10 px-3 py-1.5 text-xs font-medium text-accent">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                Open for Internship Opportunities
              </div>

              <div className="grid gap-3">
                {details.map((d) => (
                  <a
                    key={d.label}
                    href={d.href}
                    target={d.external ? '_blank' : undefined}
                    rel={d.external ? 'noopener noreferrer' : undefined}
                    className="group flex items-center gap-3 rounded-2xl border border-transparent p-3 transition-colors hover:border-border hover:bg-white/5"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-accent transition-transform group-hover:scale-110">
                      <d.icon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs text-muted-foreground">{d.label}</span>
                      <span className="block truncate text-sm font-medium">{d.value}</span>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Contact form */}
          <Reveal direction="up" className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="glass gradient-border relative overflow-hidden rounded-3xl p-6 sm:p-8"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-muted-foreground">
                    Name
                  </label>
                  <input id="name" name="name" required placeholder="Your name" className={fieldClass} />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-muted-foreground">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className={fieldClass}
                  />
                </div>
              </div>

              <div className="mt-4">
                <label htmlFor="subject" className="mb-1.5 block text-xs font-medium text-muted-foreground">
                  Subject
                </label>
                <input id="subject" name="subject" placeholder="What's this about?" className={fieldClass} />
              </div>

              <div className="mt-4">
                <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-muted-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me a bit about your project or opportunity..."
                  className={`${fieldClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" /> Send Message
                  </>
                )}
              </button>

              {feedback && (
                <p
                  aria-live="polite"
                  className={`mt-4 text-center text-sm ${
                    status === 'success' ? 'text-accent' : 'text-destructive'
                  }`}
                >
                  {feedback}
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
