"use client"

import { useRef, useState, useEffect } from "react"
import { ArrowUpRight } from "lucide-react"

const CALENDLY_URL = "https://calendly.com/david-octarstudio/30min"

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const [loaded, setLoaded] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (mq.matches) {
      setReducedMotion(true)
      setLoaded(true)
      return
    }
    const t = setTimeout(() => setLoaded(true), 80)
    return () => clearTimeout(t)
  }, [])

  const anim = (delay: number) =>
    reducedMotion
      ? "opacity-100 translate-y-0"
      : `transition-[opacity,transform] duration-[600ms] ease-out ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
        }`

  const style = (delay: number) =>
    reducedMotion ? undefined : { transitionDelay: `${delay}ms` }

  return (
    <header
      ref={sectionRef}
      className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden bg-[var(--octar-bg-light)] border-b border-[var(--octar-border-dark)]"
    >
      {/* Architectural SVG background — hidden on mobile */}
      <svg
        className="pointer-events-none absolute inset-0 hidden h-full w-full select-none md:block"
        aria-hidden="true"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 1440 900"
      >
        {/* Diagonal structural grid lines — bottom-left to top-right */}
        <g stroke="currentColor" fill="none" className="text-foreground" opacity="0.07" strokeWidth="0.6">
          {/* Primary diagonal strokes */}
          <line x1="0" y1="900" x2="720" y2="0" />
          <line x1="120" y1="900" x2="840" y2="0" />
          <line x1="280" y1="900" x2="1000" y2="0" />
          <line x1="440" y1="900" x2="1160" y2="0" />
        </g>

        {/* Lighter secondary diagonals */}
        <g stroke="currentColor" fill="none" className="text-foreground" opacity="0.04" strokeWidth="0.4">
          <line x1="60" y1="900" x2="780" y2="0" />
          <line x1="200" y1="900" x2="920" y2="0" />
          <line x1="360" y1="900" x2="1080" y2="0" />
          <line x1="540" y1="900" x2="1260" y2="0" />
        </g>

        {/* Horizontal structural datums */}
        <g stroke="currentColor" fill="none" className="text-foreground" opacity="0.045" strokeWidth="0.4">
          <line x1="0" y1="320" x2="650" y2="320" />
          <line x1="0" y1="580" x2="480" y2="580" />
          <line x1="80" y1="450" x2="550" y2="450" />
        </g>

        {/* Abstract wireframe nodes — small open rectangles/shapes at intersections */}
        <g stroke="currentColor" fill="none" className="text-foreground" opacity="0.06" strokeWidth="0.5">
          {/* Node cluster bottom-left */}
          <rect x="140" y="620" width="40" height="40" />
          <rect x="148" y="628" width="24" height="24" />
          <line x1="180" y1="640" x2="240" y2="600" />

          {/* Mid-structure node */}
          <rect x="360" y="380" width="55" height="32" />
          <line x1="415" y1="396" x2="470" y2="360" />
          <circle cx="470" cy="360" r="3" />

          {/* Upper connector structure */}
          <polyline points="240,500 280,460 340,460" />
          <rect x="340" y="448" width="28" height="24" />

          {/* Top-right sparse structure */}
          <line x1="580" y1="280" x2="680" y2="220" />
          <rect x="680" y="208" width="36" height="28" />
          <line x1="716" y1="222" x2="780" y2="190" />
          <circle cx="780" cy="190" r="2.5" />
        </g>

        {/* Subtle vertical reference lines */}
        <g stroke="currentColor" fill="none" className="text-foreground" opacity="0.035" strokeWidth="0.3">
          <line x1="200" y1="900" x2="200" y2="500" />
          <line x1="420" y1="750" x2="420" y2="300" />
        </g>

        {/* Fade mask — stronger on right side where text sits */}
        <defs>
          <linearGradient id="hero-fade" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--octar-bg-light)" stopOpacity="0.1" />
            <stop offset="35%" stopColor="var(--octar-bg-light)" stopOpacity="0.4" />
            <stop offset="60%" stopColor="var(--octar-bg-light)" stopOpacity="0.85" />
            <stop offset="100%" stopColor="var(--octar-bg-light)" stopOpacity="1" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-fade)" />
      </svg>

      <div className="relative z-10 mx-auto w-full max-w-[1312px] px-6 md:px-8 py-32 md:py-0">
        {/* Two-column grid: 55% left / 45% right */}
        <div className="grid grid-cols-1 md:grid-cols-12 md:items-center gap-12 md:gap-8">
          {/* Left column — label + headline */}
          <div className="md:col-span-7">
            {/* Eyebrow */}
            <div className={anim(0)} style={style(0)}>
              <span className="mb-8 md:mb-10 inline-block font-mono text-[0.65rem] uppercase tracking-[0.14em] text-[var(--octar-text-muted-dark)] border-b border-[var(--octar-border-dark)] pb-2">
                Strategy-led website studio
              </span>
            </div>

            {/* Headline */}
            <div className={anim(150)} style={style(150)}>
              <h1 className="text-[clamp(2.5rem,6vw,5.5rem)] font-medium leading-[1.04] tracking-[-0.035em] text-foreground text-balance">
                Conversion-focused websites for service businesses.
              </h1>
            </div>
          </div>

          {/* Right column — subline + CTA + attributes */}
          <div className="md:col-span-5 flex flex-col items-start gap-10">
            <div className={anim(300)} style={style(300)}>
              <p className="text-xl md:text-2xl leading-[1.4] text-[var(--octar-text-muted-dark)]">
                We design and deliver structured websites that help service
                businesses turn attention into enquiries.
              </p>
            </div>

            <div className={anim(450)} style={style(450)}>
              <div className="flex flex-col items-start gap-5">
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 bg-primary px-8 py-4 text-base font-medium text-primary-foreground transition-colors duration-200 hover:bg-[var(--octar-accent-hover)]"
                >
                  Book a call
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
                <span className="text-[0.65rem] uppercase tracking-[0.1em] text-[var(--octar-text-muted-dark)] font-mono">
                  Strategy-led &middot; Utility-focused &middot; Built for
                  conversion
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
