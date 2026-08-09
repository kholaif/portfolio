import type { PortfolioItem } from '@/types'
import { PortfolioCard } from './PortfolioCard'

interface MasonryGridProps {
  items: PortfolioItem[]
  columns?: 3 | 4
}

/**
 * Responsive grid for 9:16 vertical video cards.
 *
 * Layout breakpoints:
 *   mobile  → 1 column (stacked, full-width)
 *   sm      → 2 columns
 *   lg      → 3 columns
 *   xl      → 3 or 4 columns (controlled by `columns` prop)
 *
 * Cards maintain a true 9:16 aspect ratio so every cell is identical
 * height — no JavaScript masonry library required.
 */
export function MasonryGrid({ items, columns = 3 }: MasonryGridProps) {
  const gridClass =
    columns === 4
      ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5'
      : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5'

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-text-muted">
        <svg
          className="w-12 h-12 mb-4 opacity-30"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
        <p className="text-sm">No items found.</p>
      </div>
    )
  }

  return (
    <div className={gridClass}>
      {items.map((item, i) => (
        <div
          key={item._id}
          className="animate-fade-up opacity-0"
          style={{ animationDelay: `${Math.min(i * 60, 480)}ms`, animationFillMode: 'forwards' }}
        >
          <PortfolioCard item={item} priority={i < 4} />
        </div>
      ))}
    </div>
  )
}
