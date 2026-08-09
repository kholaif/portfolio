import { groq } from 'next-sanity'
import type { PortfolioItem } from '@/types'
import { client, isSanityConfigured } from './sanity'

export const portfolioItemsQuery = groq`
  *[_type == "portfolioItem"] | order(sortOrder asc) {
    _id,
    title,
    clientOrClub,
    mediaType,
    videoUrl,
    instagramUrl,
    tiktokUrl,
    thumbnail,
    sortOrder,
    tags
  }
`

export const portfolioItemsByTypeQuery = groq`
  *[_type == "portfolioItem" && mediaType == $mediaType] | order(sortOrder asc) {
    _id,
    title,
    clientOrClub,
    mediaType,
    videoUrl,
    instagramUrl,
    tiktokUrl,
    thumbnail,
    sortOrder,
    tags
  }
`

// Fallback sample data rendered when Sanity is not yet configured.
export const SAMPLE_PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    _id: 'sample-1',
    title: 'Summer Drop Campaign',
    clientOrClub: 'FreshTide Apparel',
    mediaType: 'Short-form/Reel',
    videoUrl: '',
    sortOrder: 1,
    tags: ['Fashion', 'Promo', 'Reel'],
  },
  {
    _id: 'sample-2',
    title: 'Grand Opening Highlight',
    clientOrClub: 'Ember Coffee Co.',
    mediaType: 'Short-form/Reel',
    videoUrl: '',
    sortOrder: 2,
    tags: ['Event', 'Food & Bev', 'Reel'],
  },
  {
    _id: 'sample-3',
    title: 'Brand Identity Reveal',
    clientOrClub: 'Apex Fitness',
    mediaType: 'Animation',
    videoUrl: '',
    sortOrder: 3,
    tags: ['Animation', '2D Motion', 'Branding'],
  },
  {
    _id: 'sample-4',
    title: 'End-of-Year Recap',
    clientOrClub: 'Rutgers APSA',
    mediaType: 'Long-form',
    videoUrl: '',
    sortOrder: 4,
    tags: ['Event', 'Documentary', 'Campus'],
  },
  {
    _id: 'sample-5',
    title: 'Product Launch Teaser',
    clientOrClub: 'Nova Skincare',
    mediaType: 'Short-form/Reel',
    videoUrl: '',
    sortOrder: 5,
    tags: ['Beauty', 'Teaser', 'Reel'],
  },
  {
    _id: 'sample-6',
    title: 'Spring Collection Lookbook',
    clientOrClub: 'Aura Boutique',
    mediaType: 'Short-form/Reel',
    videoUrl: '',
    sortOrder: 6,
    tags: ['Fashion', 'Lookbook', 'Reel'],
  },
]

export async function fetchPortfolioItems(): Promise<PortfolioItem[]> {
  if (!isSanityConfigured()) {
    return SAMPLE_PORTFOLIO_ITEMS
  }
  try {
    return await client.fetch<PortfolioItem[]>(
      portfolioItemsQuery,
      {},
      { next: { revalidate: 60 } }
    )
  } catch {
    return SAMPLE_PORTFOLIO_ITEMS
  }
}
