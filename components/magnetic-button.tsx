'use client'

import { motion } from 'framer-motion'
import { useRef, useState, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

type Props = {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'outline' | 'ghost'
  className?: string
  download?: boolean
  external?: boolean
  type?: 'button' | 'submit'
  ariaLabel?: string
}

export function MagneticButton({
  children,
  href,
  onClick,
  variant = 'primary',
  className,
  download,
  external,
  type = 'button',
  ariaLabel,
}: Props) {
  const ref = useRef<HTMLElement>(null)
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - (rect.left + rect.width / 2)
    const y = e.clientY - (rect.top + rect.height / 2)
    setOffset({ x: x * 0.25, y: y * 0.25 })
  }

  const reset = () => setOffset({ x: 0, y: 0 })

  const base =
    'relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background'
  const variants = {
    primary:
      'bg-gradient-to-r from-primary to-secondary text-primary-foreground glow-primary hover:brightness-110',
    outline:
      'gradient-border text-foreground hover:bg-white/5',
    ghost: 'text-foreground hover:bg-white/5',
  }

  const content = (
    <motion.span
      className="pointer-events-none flex items-center gap-2"
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
    >
      {children}
    </motion.span>
  )

  const cls = cn(base, variants[variant], className)

  if (href) {
    return (
      <motion.a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        aria-label={ariaLabel}
        download={download}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={cls}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        animate={{ x: offset.x * 0.4, y: offset.y * 0.4 }}
        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
      >
        {content}
      </motion.a>
    )
  }

  return (
    <motion.button
      ref={ref as React.RefObject<HTMLButtonElement>}
      type={type}
      aria-label={ariaLabel}
      onClick={onClick}
      className={cls}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      animate={{ x: offset.x * 0.4, y: offset.y * 0.4 }}
      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
    >
      {content}
    </motion.button>
  )
}
