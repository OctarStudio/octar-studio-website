"use client"

import { useState, useEffect } from "react"
import { ArrowUpRight } from "lucide-react"

const CALENDLY_URL = "https://calendly.com/david-octarstudio/30min"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [pastHero, setPastHero] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8)
      // Show CTA after scrolling past hero (approx viewport height)
      setPastHero(window.scrollY > window.innerHeight * 0.85)
    }
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-500 ease-out ${
        scrolled
          ? "bg-[var(--octar-bg-light)]/95 backdrop-blur-xl border-b border-[var(--octar-border-dark)]"
          : "bg-transparent border-b border-transparent"
      }`}
      aria-label="Main Navigation"
    >
      <div className="mx-auto w-full max-w-[1312px] px-6 md:px-8 py-5 flex items-center justify-between">
        <a
          href="#main"
          className="font-sans text-[1.1rem] font-semibold tracking-[-0.02em] text-foreground"
        >
          Octar Studio
        </a>
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`group inline-flex items-center gap-2 bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all duration-500 hover:bg-[var(--octar-accent-hover)] ${
            pastHero
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
        >
          Book a call
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </div>
    </nav>
  )
}
