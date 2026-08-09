/**
 * LottiePlayer — Boxing-themed animation placeholder
 *
 * HOW TO ACTIVATE:
 * 1. Install the player:  npm install @lottiefiles/react-lottie-player
 * 2. Download a free boxing/knockout animation JSON from https://lottiefiles.com
 *    (search "boxing glove", "stars", "knockout", "punch" etc.)
 * 3. Place the JSON file in:  public/animations/your-animation.json
 * 4. Replace the placeholder below with the <Player> component shown in the comments.
 *
 * USAGE EXAMPLES in your pages/sections:
 *   <LottiePlayer src="/animations/boxing-glove.json" className="w-16 h-16" />
 *   <LottiePlayer src="/animations/dizzy-stars.json" className="w-24 h-24" loop={false} />
 */

import Image from 'next/image'

interface LottiePlayerProps {
  /** Path to your animation JSON in the /public folder, e.g. "/animations/boxing-glove.json" */
  src?: string
  className?: string
  loop?: boolean
  autoplay?: boolean
}

export function LottiePlayer({
  src: _src,
  className = 'w-16 h-16',
  loop: _loop = true,
  autoplay: _autoplay = true,
}: LottiePlayerProps) {
  // ─── PLACEHOLDER ──────────────────────────────────────────────────────
  // Once you install @lottiefiles/react-lottie-player, replace this entire
  // return block with:
  //
  //   import { Player } from '@lottiefiles/react-lottie-player'
  //
  //   return (
  //     <Player autoplay={autoplay} loop={loop} src={src} className={className} />
  //   )
  // ──────────────────────────────────────────────────────────────────────

  return (
    <div className={`${className} flex items-center justify-center`} aria-hidden="true">
      <Image
        src="/logo.png"
        alt="KO Media"
        width={80}
        height={80}
        className="w-full h-full object-contain opacity-70 drop-shadow-[0_0_12px_rgba(201,168,76,0.4)]"
      />
    </div>
  )
}
