"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"

const bulletItems = [
  "Traffic bounces without converting.",
  "Leads are low-quality or completely unqualified.",
  "The brand looks smaller than the reality of the business.",
]

export function ProblemSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { threshold: 0.15 })

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
          <div className="md:col-span-7">
            <span
              className={`mb-6 block font-mono text-[0.6rem] uppercase tracking-[0.14em] text-[var(--octar-text-muted-light)] ${a(0)}`}
            >
              The problem
            </span>
            <h2
              className={`text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[1.08] tracking-[-0.025em] ${a(120)}`}
              style={{ transitionDelay: "120ms" }}
            >
              Most service websites look fine — and still don{"'"}t work.
            </h2>
            <p
              className={`mt-6 md:mt-8 max-w-lg text-xl md:text-2xl leading-[1.4] text-[var(--octar-text-muted-light)] ${a(240)}`}
              style={{ transitionDelay: "240ms" }}
            >
              If your website doesn{"'"}t guide decisions, it creates friction.
            </p>
          </div>

          {/* Right bullets */}
          <div className="md:col-span-4 md:col-start-9 flex flex-col justify-end">
            <div className="border-t border-[var(--octar-border-light)] pt-10">
              <ul className="flex flex-col gap-7">
                {bulletItems.map((item, i) => (
                  <li
                    key={i}
                    className={`relative pl-6 text-lg md:text-xl leading-snug ${a(360 + i * 100)}`}
                    style={{ transitionDelay: `${360 + i * 100}ms` }}
                  >
                    <span
                      className="absolute left-0 top-[0.55em] h-2 w-2 bg-primary"
                      aria-hidden="true"
                    />
                    <span className={isInView ? "opacity-80" : "opacity-0"}>{item}</span>
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
