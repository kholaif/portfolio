'use client'

/**
 * TeamPhoto
 *
 * Shows a team member's headshot if the image exists, or a styled placeholder if it doesn't.
 * Once you drop a photo into public/team/ with the right filename, it appears automatically.
 *
 * Usage: <TeamPhoto src="/team/kareem.jpg" name="Kareem" />
 */

import Image from 'next/image'
import { useState } from 'react'

interface TeamPhotoProps {
  src: string
  name: string
}

export function TeamPhoto({ src, name }: TeamPhotoProps) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div
      className="w-full bg-surface flex items-center justify-center border-b border-surface-border relative overflow-hidden"
      style={{ aspectRatio: '3/4' }}
    >
        <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/5 to-transparent" />
        <div className="text-center z-10">
          <div className="w-16 h-16 rounded-full border-2 border-surface-border mx-auto mb-2 flex items-center justify-center bg-surface-elevated">
            <svg className="w-7 h-7 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
          </div>
          <p className="text-text-muted text-xs px-4">
            Add photo to{' '}
            <code className="text-accent-silver">public/team/{name.toLowerCase()}.jpg</code>
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full relative border-b border-surface-border overflow-hidden bg-surface" style={{ aspectRatio: '3/4' }}>
      <Image
        src={src}
        alt={name}
        fill
        className="object-cover object-top"
        onError={() => setFailed(true)}
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  )
}
