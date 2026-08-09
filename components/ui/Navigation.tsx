'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const navLinks = [
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change / resize
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // TODO: Replace '#' with your booking/calendar URL (e.g. Calendly link) when ready
  const bookingUrl = 'tel:+17163986362'

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-background/85 backdrop-blur-xl border-b border-surface-border shadow-[0_1px_0_rgba(255,255,255,0.04)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 h-[68px] flex items-center">

        {/* ── Left: Logo ── */}
        <div className="flex-1 flex items-center">
          <Link href="/" className="hover:opacity-80 transition-opacity select-none flex items-center">
            <Image
              src="/logo.png"
              alt="KO Media"
              width={160}
              height={54}
              className="h-11 w-auto object-contain"
              priority
            />
          </Link>
        </div>

        {/* ── Center: Desktop Nav ── */}
        <div className="hidden md:flex items-center gap-7 flex-1 justify-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors duration-200 tracking-wide"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* ── Right: CTA + Mobile Trigger ── */}
        <div className="flex-1 flex items-center justify-end gap-4">
          <a
            href={bookingUrl}
            target={bookingUrl.startsWith('http') ? '_blank' : undefined}
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 text-sm font-semibold px-5 py-2 rounded-full border border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-background transition-all duration-200 tracking-wide btn-jab"
          >
            📞 Book a Call
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-2 -mr-1 group"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            <span
              className={`block h-[1.5px] w-5 bg-text-primary rounded-full transition-all duration-300 origin-center ${
                mobileOpen ? 'rotate-45 translate-y-[6.5px]' : ''
              }`}
            />
            <span
              className={`block h-[1.5px] w-5 bg-text-primary rounded-full transition-all duration-200 ${
                mobileOpen ? 'opacity-0 scale-x-0' : ''
              }`}
            />
            <span
              className={`block h-[1.5px] w-5 bg-text-primary rounded-full transition-all duration-300 origin-center ${
                mobileOpen ? '-rotate-45 -translate-y-[6.5px]' : ''
              }`}
            />
          </button>
        </div>
      </nav>

      {/* ── Mobile Dropdown ── */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'
        } bg-background/95 backdrop-blur-xl border-b border-surface-border`}
      >
        <div className="px-5 pt-2 pb-6 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="py-3 text-base font-medium text-text-secondary hover:text-text-primary border-b border-surface-border last:border-none transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={bookingUrl}
            onClick={() => setMobileOpen(false)}
            className="mt-4 inline-flex items-center justify-center text-sm font-semibold px-5 py-3 rounded-full border border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-background transition-all duration-200 btn-jab"
          >
            📞 Book a Call
          </a>
        </div>
      </div>
    </header>
  )
}
