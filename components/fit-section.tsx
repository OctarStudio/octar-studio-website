"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import { Check, X } from "lucide-react"

const fitItems = [
  "You're getting traffic but not enquiries",
  "Your website exists but doesn't convert",
  "You want structure and clarity, not another redesign",
  "You need a site that works from day one",
]

const notFitItems = [
  "E-commerce or SaaS products",
  "Brand-first / trend-led projects",
  "\"Just make it look nice\"",
]

export function FitSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { threshold: 0.1 })

  const a = (delay: number) =>
    `transition-[opacity,transform] duration-500 ease-out ${
      isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
    }`

  return (
    <section
      ref={ref}
      className="bg-[var(--octar-bg-dark)] text-[var(--octar-bg-light)] border-b border-[var(--octar-border-light)]"
    >
      <div className="mx-auto w-full max-w-[1312px] px-6 md:px-8 py-32 md:py-44 lg:py-52">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12 md:gap-8">
          {/* Left headline */}
          <div className="md:col-span-5">
            <span
              className={`mb-6 block font-mono text-[0.6rem] uppercase tracking-[0.14em] text-[var(--octar-text-muted-light)] ${a(0)}`}
            >
              Is this right for you?
            </span>
            <h2
              className={`text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[1.08] tracking-[-0.025em] ${a(120)}`}
              style={{ transitionDelay: "120ms" }}
            >
              We{"'"}re selective about who we work with.
            </h2>
            <p
              className={`mt-6 md:mt-8 text-lg md:text-xl leading-[1.4] text-[var(--octar-text-muted-light)] ${a(240)}`}
              style={{ transitionDelay: "240ms" }}
            >
              This ensures every client gets our full attention and the best
              possible outcome.
            </p>
          </div>

          {/* Right cards — stagger left then right */}
          <div className="md:col-span-6 md:col-start-7 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {/* Good fit */}
            <div
              className={`border border-[var(--octar-border-light)] p-8 md:p-10 hover:border-[rgba(247,247,245,0.25)] transition-[opacity,transform,border-color] duration-500 ease-out ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
              }`}
              style={{ transitionDelay: "360ms" }}
            >
              <h3 className="mb-8 border-b border-[var(--octar-border-light)] pb-5 text-xl md:text-2xl font-medium leading-snug">
                Ideally
              </h3>
              <ul className="flex flex-col gap-5">
                {fitItems.map((item, j) => (
                  <li key={j} className="relative flex items-start gap-3 text-base md:text-lg leading-snug opacity-85">
                    <Check className="h-4 w-4 mt-1 shrink-0 text-primary" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Not a fit */}
            <div
              className={`border border-[var(--octar-border-light)] p-8 md:p-10 hover:border-[rgba(247,247,245,0.25)] transition-[opacity,transform,border-color] duration-500 ease-out ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
              }`}
              style={{ transitionDelay: "460ms" }}
            >
              <h3 className="mb-8 border-b border-[var(--octar-border-light)] pb-5 text-xl md:text-2xl font-medium leading-snug">
                Not a fit for
              </h3>
              <ul className="flex flex-col gap-5">
                {notFitItems.map((item, j) => (
                  <li key={j} className="relative flex items-start gap-3 text-base md:text-lg leading-snug opacity-60">
                    <X className="h-4 w-4 mt-1 shrink-0 text-[var(--octar-text-muted-light)]" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
