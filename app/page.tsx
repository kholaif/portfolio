import { Navigation } from '@/components/ui/Navigation'
import { Hero } from '@/components/sections/Hero'
import { StatsBar } from '@/components/sections/StatsBar'
import { PortfolioShowcase } from '@/components/sections/PortfolioShowcase'
import { AboutSection } from '@/components/sections/AboutSection'
import { CTASection } from '@/components/sections/CTASection'
import { Footer } from '@/components/sections/Footer'
import { fetchPortfolioItems } from '@/lib/queries'

// ISR: re-validate portfolio data every 60 seconds on the server.
// Remove this line to make the page fully static.
export const revalidate = 60

export default async function HomePage() {
  const portfolioItems = await fetchPortfolioItems()

  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <StatsBar />
        <PortfolioShowcase items={portfolioItems} preview previewCount={6} />
        <AboutSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
