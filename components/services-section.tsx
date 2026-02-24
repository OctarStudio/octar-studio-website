"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"

const services = [
  {
    label: "01",
    title: "1-3 Page Website Architecture",
    description:
      "Focused, intentional page structures designed around your commercial goals. No bloat, no filler pages.",
  },
  {
    label: "02",
    title: "Strategy-Led Foundation",
    description:
      "Every decision is rooted in conversion strategy. We eliminate guesswork before a single pixel is placed.",
  },
  {
    label: "03",
    title: "Engineered for Purpose",
    description:
      "Design and code that serves function. Every element exists to move visitors closer to action.",
  },
]

export function ServicesSection() {
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
        {/* Section header */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-8 mb-20 md:mb-28">
          <div className="md:col-span-7">
            <span
              className={`mb-6 block font-mono text-[0.6rem] uppercase tracking-[0.14em] text-[var(--octar-text-muted-light)] ${a(0)}`}
            >
              What you get
            </span>
            <h2
              className={`text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[1.08] tracking-[-0.025em] ${a(120)}`}
              style={{ transitionDelay: "120ms" }}
            >
              Structured. Clear. Commercial.
            </h2>
            <p
              className={`mt-5 text-lg md:text-xl leading-[1.4] text-[var(--octar-text-muted-light)] ${a(240)}`}
              style={{ transitionDelay: "240ms" }}
            >
              Websites built around one thing — getting you enquiries.
            </p>
          </div>
        </div>

        {/* Service cards — stagger left to right */}
        <div className="grid grid-cols-1 gap-0 md:grid-cols-3">
          {services.map((service, i) => (
            <div
              key={service.label}
              className={`border-t border-[var(--octar-border-light)] pt-8 pb-12 md:pr-10 md:pb-0 ${a(360 + i * 100)}`}
              style={{ transitionDelay: `${360 + i * 100}ms` }}
            >
              <span className="mb-5 block font-mono text-sm font-semibold text-primary">
                {service.label}
              </span>
              <h3 className="text-xl md:text-2xl font-medium leading-snug tracking-[-0.01em] mb-4">
                {service.title}
              </h3>
              <p className="text-base md:text-lg leading-relaxed text-[var(--octar-text-muted-light)]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
