const STATS = [
  { value: '70+', label: 'Videos Produced' },
  { value: '1M+', label: 'Combined Views' },
  { value: '20+', label: 'Brands Served' },
  { value: '$200k+', label: 'Raised for Clients' },
]

export function StatsBar() {
  return (
    <section className="border-y border-surface-border bg-surface/50">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 py-10 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 text-center">
        {STATS.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center gap-1">
            <span className="text-3xl sm:text-4xl font-black tracking-tight text-gradient-gold">
              {stat.value}
            </span>
            <span className="text-xs sm:text-sm text-text-secondary tracking-wider uppercase">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
