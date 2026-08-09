/**
 * /tech — Reserved for a future engineering/coding portfolio.
 *
 * When you're ready to build out this route, replace this placeholder
 * with a full layout: GitHub repos, open-source projects, case studies, etc.
 *
 * Suggested structure when you expand this route:
 *   /tech                 → Overview + featured projects
 *   /tech/[slug]          → Individual project deep-dives
 *   /tech/open-source     → Open-source contributions
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import { Navigation } from '@/components/ui/Navigation'
import { Footer } from '@/components/sections/Footer'

export const metadata: Metadata = {
  title: 'Tech Portfolio',
  description: 'Engineering projects and open-source work. Coming soon.',
  robots: { index: false, follow: false },
}

export default function TechPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen flex flex-col items-center justify-center px-5 pt-[68px]">
        <div className="text-center max-w-lg">
          {/* Code bracket icon */}
          <div className="w-16 h-16 rounded-2xl bg-surface border border-surface-border flex items-center justify-center mx-auto mb-8">
            <svg
              className="w-8 h-8 text-accent-gold"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
              />
            </svg>
          </div>

          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent-gold mb-3">
            Coming Soon
          </p>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-text-primary mb-4">
            Engineering Portfolio
          </h1>
          <p className="text-text-secondary leading-relaxed mb-8">
            This route is reserved for a future technical portfolio — featuring software projects,
            open-source contributions, and engineering case studies.
          </p>

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent-gold hover:text-accent-gold-hover transition-colors"
          >
            ← Back to main portfolio
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
