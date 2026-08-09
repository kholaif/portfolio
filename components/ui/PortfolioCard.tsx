import { VideoPlayer } from './VideoPlayer'
import type { PortfolioItem } from '@/types'
import { urlFor } from '@/lib/sanity'

interface PortfolioCardProps {
  item: PortfolioItem
  priority?: boolean
}

const MEDIA_TYPE_COLORS: Record<string, string> = {
  'Short-form/Reel': 'bg-purple-500/20 text-purple-300 border-purple-500/20',
  'Long-form': 'bg-blue-500/20 text-blue-300 border-blue-500/20',
  Animation: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/20',
}

export function PortfolioCard({ item }: PortfolioCardProps) {
  const thumbnailUrl = item.thumbnail
    ? urlFor(item.thumbnail).width(480).height(854).fit('crop').auto('format').url()
    : undefined

  const mediaBadgeClass =
    MEDIA_TYPE_COLORS[item.mediaType] ??
    'bg-white/10 text-text-secondary border-white/10'

  return (
    <article
      className="
        group relative overflow-hidden rounded-2xl
        bg-surface border border-surface-border
        shadow-card hover:shadow-card-hover
        transition-all duration-400 ease-out
        hover:-translate-y-1
      "
    >
      {/* ── 9:16 video container ── */}
      <div className="relative aspect-[9/16] overflow-hidden rounded-2xl">
        <VideoPlayer
          videoUrl={item.videoUrl}
          thumbnailUrl={thumbnailUrl}
          title={item.title}
        />

        {/* Media type badge — top-left */}
        <div className="absolute top-3 left-3 z-10 pointer-events-none">
          <span
            className={`text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full border backdrop-blur-sm ${mediaBadgeClass}`}
          >
            {item.mediaType}
          </span>
        </div>

        {/* Social icon badges — top-right corner, stacked vertically */}
        {(item.instagramUrl || item.tiktokUrl) && (
          <div className="absolute top-3 right-3 z-20 flex flex-col gap-1.5">
            {item.instagramUrl && (
              <a
                href={item.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View on Instagram"
                onClick={(e) => e.stopPropagation()}
                className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm border border-white/15 flex items-center justify-center text-white/70 hover:text-white hover:border-[#E1306C]/60 hover:bg-[#E1306C]/20 transition-all duration-200"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465.668.25 1.272.644 1.772 1.153.509.5.902 1.104 1.153 1.772.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
            )}
            {item.tiktokUrl && (
              <a
                href={item.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View on TikTok"
                onClick={(e) => e.stopPropagation()}
                className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm border border-white/15 flex items-center justify-center text-white/70 hover:text-white hover:border-white/40 hover:bg-white/10 transition-all duration-200"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z" />
                </svg>
              </a>
            )}
          </div>
        )}
      </div>

      {/* ── Info overlay — slides up on hover ── */}
      <div
        className="
          absolute bottom-0 left-0 right-0 p-4
          bg-gradient-to-t from-black/95 via-black/70 to-transparent
          translate-y-1 opacity-0 group-hover:opacity-100 group-hover:translate-y-0
          transition-all duration-300 ease-out
          pointer-events-none
        "
      >
        {item.clientOrClub && (
          <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-accent-gold mb-1 truncate">
            {item.clientOrClub}
          </p>
        )}
        <h3 className="text-sm font-semibold text-white leading-snug truncate">
          {item.title}
        </h3>

        {item.tags && item.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-2">
            {item.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-[9px] uppercase tracking-wider bg-white/10 text-gray-300 px-2 py-0.5 rounded-full border border-white/10"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  )
}
