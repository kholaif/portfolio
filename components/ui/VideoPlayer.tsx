'use client'

import { useState } from 'react'
import Image from 'next/image'

interface VideoPlayerProps {
  videoUrl: string
  /** Pre-resolved CDN thumbnail URL (from Sanity or auto-pulled from YouTube). */
  thumbnailUrl?: string
  title: string
  className?: string
}

type ParsedVideo =
  | { type: 'youtube'; id: string }
  | { type: 'vimeo'; id: string }
  | null

function parseVideo(url: string): ParsedVideo {
  if (!url) return null

  // YouTube: youtube.com/watch?v=ID | youtu.be/ID | youtube.com/shorts/ID | youtube.com/embed/ID
  const ytMatch = url.match(
    /(?:youtube\.com\/(?:watch\?v=|shorts\/|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  )
  if (ytMatch) return { type: 'youtube', id: ytMatch[1] }

  // Vimeo: vimeo.com/ID | vimeo.com/channels/.../ID | player.vimeo.com/video/ID
  const vimeoMatch = url.match(/(?:vimeo\.com\/(?:video\/|channels\/\S+\/|)?)(\d+)/)
  if (vimeoMatch) return { type: 'vimeo', id: vimeoMatch[1] }

  return null
}

function getAutoThumbnail(parsed: ParsedVideo): string | null {
  if (parsed?.type === 'youtube') {
    return `https://img.youtube.com/vi/${parsed.id}/maxresdefault.jpg`
  }
  // Vimeo has no public thumbnail API — use the Sanity thumbnail field
  return null
}

function getEmbedUrl(parsed: ParsedVideo): string {
  if (parsed?.type === 'youtube') {
    return `https://www.youtube-nocookie.com/embed/${parsed.id}?autoplay=1&rel=0&modestbranding=1&playsinline=1`
  }
  if (parsed?.type === 'vimeo') {
    return `https://player.vimeo.com/video/${parsed.id}?autoplay=1&title=0&byline=0&portrait=0`
  }
  return ''
}

export function VideoPlayer({
  videoUrl,
  thumbnailUrl,
  title,
  className = '',
}: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  const parsed = parseVideo(videoUrl)
  const thumb = thumbnailUrl ?? getAutoThumbnail(parsed)
  const embedUrl = getEmbedUrl(parsed)
  const hasVideo = !!parsed && !!embedUrl

  // ── Active embed state ────────────────────────────────────────────
  if (isPlaying && embedUrl) {
    return (
      <div className={`absolute inset-0 bg-black ${className}`}>
        <iframe
          src={embedUrl}
          title={title}
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
          allowFullScreen
          className="w-full h-full border-0"
          loading="lazy"
        />
      </div>
    )
  }

  // ── Thumbnail / poster state ──────────────────────────────────────
  return (
    <div
      className={`absolute inset-0 group bg-surface ${hasVideo ? 'cursor-pointer' : 'cursor-default'} ${className}`}
      onClick={() => hasVideo && setIsPlaying(true)}
      role={hasVideo ? 'button' : undefined}
      aria-label={hasVideo ? `Play ${title}` : undefined}
      tabIndex={hasVideo ? 0 : undefined}
      onKeyDown={(e) => {
        if (hasVideo && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault()
          setIsPlaying(true)
        }
      }}
    >
      {/* Thumbnail image */}
      {thumb ? (
        <Image
          src={thumb}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          unoptimized
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-surface to-surface-elevated">
          <div className="text-center opacity-30">
            <svg className="w-12 h-12 mx-auto mb-2 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.069A1 1 0 0121 8.882v6.236a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
            </svg>
            <span className="text-xs text-text-muted">No thumbnail</span>
          </div>
        </div>
      )}

      {/* Gradient vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 pointer-events-none" />

      {/* Hover darkening */}
      {hasVideo && (
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 pointer-events-none" />
      )}

      {/* Play button */}
      {hasVideo && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[60px] h-[60px] rounded-full bg-black/50 border-2 border-accent-gold flex items-center justify-center backdrop-blur-sm transform transition-all duration-300 group-hover:scale-110 group-hover:bg-accent-gold/20 group-hover:shadow-glow-gold opacity-90 group-hover:opacity-100">
            <svg className="w-5 h-5 text-accent-gold ml-0.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      )}
    </div>
  )
}
