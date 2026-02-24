"use client"

import { useRef } from "react"
import { ArrowUpRight } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

const CALENDLY_URL = "https://calendly.com/david-octarstudio/30min"

export function FinalCTA() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { threshold: 0.1 })

  const a = (delay: number) =>
    `transition-[opacity,transform] duration-500 ease-out ${
      isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
    }`

  return (
    <section
      ref={ref}
      className="bg-[var(--octar-bg-light)] text-foreground"
    >
      <div className="mx-auto w-full max-w-[1312px] px-6 md:px-8 py-36 md:py-48 lg:py-56">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-12 md:gap-8">
          {/* Left headline */}
          <div className="md:col-span-7">
            <span
              className={`mb-6 block font-mono text-[0.6rem] uppercase tracking-[0.14em] text-muted-foreground ${a(0)}`}
            >
              Next step
            </span>
            <h2
              className={`text-[clamp(2.5rem,5vw,4.5rem)] font-medium leading-[1.04] tracking-[-0.03em] text-balance ${a(120)}`}
              style={{ transitionDelay: "120ms" }}
            >
              Ready to build a website that actually works?
            </h2>
          </div>

          {/* Right body + CTA */}
          <div className="md:col-span-4 md:col-start-9 flex flex-col items-start justify-end gap-8">
            <p
              className={`text-xl md:text-2xl leading-[1.4] text-muted-foreground ${a(240)}`}
              style={{ transitionDelay: "240ms" }}
            >
              We{"'"}ll review your current site and advise you on your best
              options. No pressure, no fluff — just honest guidance.
            </p>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`group inline-flex items-center gap-3 bg-primary px-8 py-4 text-base font-medium text-primary-foreground hover:bg-[var(--octar-accent-hover)] transition-[opacity,transform,background-color] duration-500 ease-out ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
              }`}
              style={{ transitionDelay: "360ms" }}
            >
              Book a call
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
