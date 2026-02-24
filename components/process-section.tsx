"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"

const steps = [
  {
    num: "01",
    title: "Commercial Audit",
    description:
      "We assess your current position, audience, and conversion gaps to understand what your website actually needs to do.",
  },
  {
    num: "02",
    title: "Conversion Architecture",
    description:
      "We map the decision journey and architect every page to guide visitors toward a clear commercial outcome.",
  },
  {
    num: "03",
    title: "Utility-Driven Interface",
    description:
      "Every element serves a purpose. No decoration for decoration's sake — just structure that drives results.",
  },
  {
    num: "04",
    title: "Production & QA",
    description:
      "We build, test, and refine until every detail is precise. Then we hand you a website that works from day one.",
  },
]

export function ProcessSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { threshold: 0.08 })

  const a = (delay: number) =>
    `transition-[opacity,transform] duration-500 ease-out ${
      isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
    }`

  return (
    <section
      ref={ref}
      className="bg-[var(--octar-bg-light)] text-foreground border-b border-[var(--octar-border-dark)]"
    >
      <div className="mx-auto w-full max-w-[1312px] px-6 md:px-8 py-32 md:py-44 lg:py-52">
        {/* Header */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-8 mb-20 md:mb-28">
          <div className="md:col-span-5">
            <span
              className={`mb-6 block font-mono text-[0.6rem] uppercase tracking-[0.14em] text-muted-foreground ${a(0)}`}
            >
              How we work
            </span>
            <h2
              className={`text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[1.08] tracking-[-0.025em] ${a(120)}`}
              style={{ transitionDelay: "120ms" }}
            >
              How we get you there.
            </h2>
          </div>
          <div className="md:col-span-5 md:col-start-8 flex items-end">
            <p
              className={`text-lg md:text-xl leading-[1.4] text-muted-foreground ${a(240)}`}
              style={{ transitionDelay: "240ms" }}
            >
              Four phases. No ambiguity. Every step designed to get you from
              brief to a live, converting website.
            </p>
          </div>
        </div>

        {/* Steps grid — stagger left to right */}
        <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`group relative border-t border-[var(--octar-border-dark)] pt-10 pb-14 sm:pr-8 ${a(360 + i * 100)}`}
              style={{ transitionDelay: `${360 + i * 100}ms` }}
            >
              <span className="mb-6 block font-mono text-sm font-semibold text-primary">
                {step.num}
              </span>
              <h3 className="text-xl md:text-2xl font-medium leading-snug tracking-[-0.01em] mb-5">
                {step.title}
              </h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
