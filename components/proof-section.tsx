"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"

export function ProofSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { threshold: 0.15 })

  return (
    <section
      ref={ref}
      className="bg-secondary border-b border-[var(--octar-border-dark)]"
    >
      <div className="mx-auto w-full max-w-[1312px] px-6 md:px-8 py-32 md:py-44 lg:py-52">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
          {/* Left label */}
          <div className="md:col-span-4 flex flex-col justify-start">
            <span
              className={`block font-mono text-[0.6rem] uppercase tracking-[0.14em] text-muted-foreground transition-[opacity,transform] duration-500 ease-out ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
              }`}
            >
              Client perspective
            </span>
          </div>

          {/* Right quote — single block, no stagger */}
          <div
            className={`md:col-span-7 md:col-start-6 flex flex-col gap-8 transition-[opacity,transform] duration-[600ms] ease-out ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
            style={{ transitionDelay: "120ms" }}
          >
            <div className="border-l-2 border-primary pl-8 md:pl-10">
              <p className="text-2xl md:text-3xl lg:text-[2.25rem] font-sans font-medium leading-[1.25] tracking-[-0.015em] text-foreground text-pretty">
                {'"'}They stripped away the noise and built a conversion system
                that actually works. Octar Studio understands that a service
                website is a commercial tool, not an art project.{'"'}
              </p>
              <span className="mt-8 block font-mono text-[0.65rem] uppercase tracking-[0.1em] text-muted-foreground">
                &mdash; Managing Director, Professional Services
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
