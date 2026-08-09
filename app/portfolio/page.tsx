import type { Metadata } from 'next'
import { Navigation } from '@/components/ui/Navigation'
import { PortfolioShowcase } from '@/components/sections/PortfolioShowcase'
import { Footer } from '@/components/sections/Footer'
import { fetchPortfolioItems } from '@/lib/queries'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    'Browse the full catalog — short-form reels, long-form documentaries, and motion animations for brands that mean business.',
}

export default async function PortfolioPage() {
  const portfolioItems = await fetchPortfolioItems()

  return (
    <>
      <Navigation />
      <main className="pt-[68px]">
        {/* Page hero header */}
        <div className="relative py-20 px-5 sm:px-8 text-center border-b border-surface-border overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse 80% 60% at 50% -20%, rgba(201,168,76,0.08) 0%, transparent 70%)',
            }}
            aria-hidden="true"
          />
          <p className="relative text-xs font-semibold tracking-[0.2em] uppercase text-accent-gold mb-3">
            Full Archive
          </p>
          <h1 className="relative text-4xl sm:text-5xl font-black tracking-tight text-text-primary">
            All Work
          </h1>
        </div>

        {/* Full portfolio grid — no preview limit */}
        <PortfolioShowcase items={portfolioItems} />
      </main>
      <Footer />
    </>
  )
}
