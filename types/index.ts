import type { Image } from 'sanity'

export type MediaType = 'Short-form/Reel' | 'Long-form' | 'Animation'

export interface PortfolioItem {
  _id: string
  title: string
  clientOrClub?: string
  mediaType: MediaType
  videoUrl: string
  instagramUrl?: string
  tiktokUrl?: string
  thumbnail?: Image
  sortOrder: number
  tags?: string[]
}

export interface SiteSettings {
  siteTitle: string
  tagline: string
  bookingUrl?: string
  contactEmail?: string
  socialLinks?: {
    instagram?: string
    youtube?: string
    tiktok?: string
    linkedin?: string
  }
}
