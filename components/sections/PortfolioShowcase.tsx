'use client'

import { useState, useMemo } from 'react'
import { MasonryGrid } from '@/components/ui/MasonryGrid'
import type { PortfolioItem, MediaType } from '@/types'

const FILTER_OPTIONS: { label: string; value: MediaType | 'All' }[] = [
  { label: 'All Work', value: 'All' },
  { label: 'Reels', value: 'Short-form/Reel' },
  { label: 'Long-form', value: 'Long-form' },
  { label: 'Animation', value: 'Animation' },
]

interface PortfolioShowcaseProps {
  items: PortfolioItem[]
  /** If true, caps the displayed count and shows a "View All" link */
  preview?: boolean
  previewCount?: number
}

export function PortfolioShowcase({
  items,
  preview = false,
  previewCount = 6,
}: PortfolioShowcaseProps) {
  const [activeFilter, setActiveFilter] = useState<MediaType | 'All'>('All')

  const filtered = useMemo(() => {
    const base =
      activeFilter === 'All'
        ? items
        : items.filter((item) => item.mediaType === activeFilter)
    return preview ? base.slice(0, previewCount) : base
  }, [items, activeFilter, preview, previewCount])

  return (
    <section id="portfolio" className="py-24 px-5 sm:px-8 lg:px-10 max-w-7xl mx-auto">
      {/* ── Section header ── */}
      <div className="mb-12 text-center">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent-gold mb-3">
          Selected Work
        </p>
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-text-primary mb-4">
          Content That Packs a Punch.
        </h2>
        <p className="max-w-xl mx-auto text-text-secondary text-base leading-relaxed">
          Every frame is intentional. Every cut is deliberate. Here&apos;s what we&apos;ve built for brands
          ready to step into the ring and win.
        </p>
      </div>

      {/* ── Filter tabs ── */}
      <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
        {FILTER_OPTIONS.map((opt) => {
          const isActive = activeFilter === opt.value
          // Only show tabs that have matching items (or "All")
          const hasItems =
            opt.value === 'All' || items.some((i) => i.mediaType === opt.value)
          if (!hasItems) return null

          return (
            <button
              key={opt.value}
              onClick={() => setActiveFilter(opt.value)}
              className={`
                px-5 py-2 rounded-full text-sm font-semibold tracking-wide border transition-all duration-200
                ${
                  isActive
                    ? 'bg-accent-gold text-background border-accent-gold shadow-glow-gold'
                    : 'bg-transparent text-text-secondary border-surface-border hover:border-accent-gold/40 hover:text-text-primary'
                }
              `}
            >
              {opt.label}
            </button>
          )
        })}
      </div>

      {/* ── Grid ── */}
      <MasonryGrid items={filtered} />

      {/* ── "View all" link shown in preview mode ── */}
      {preview && items.length > previewCount && (
        <div className="mt-14 text-center">
          <a
            href="/portfolio"
            className="
              inline-flex items-center gap-2.5
              px-8 py-4 rounded-full
              bg-surface-elevated border border-accent-silver/30 text-text-primary text-sm font-bold tracking-wide
              hover:border-accent-gold hover:bg-accent-gold hover:text-background
              shadow-[0_0_0_1px_rgba(192,192,192,0.1)] hover:shadow-glow-gold
              transition-all duration-300
            "
          >
            View All Work
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      )}
    </section>
  )
}
