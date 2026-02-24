import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { ProblemSection } from "@/components/problem-section"
import { ProofSection } from "@/components/proof-section"
import { ServicesSection } from "@/components/services-section"
import { ProcessSection } from "@/components/process-section"
import { FitSection } from "@/components/fit-section"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-0 focus:left-0 focus:z-[9999] focus:bg-[var(--octar-bg-dark)] focus:text-[var(--octar-bg-light)] focus:px-8 focus:py-4 focus:font-sans focus:font-medium focus:outline-2 focus:outline-primary focus:outline-offset-[-2px]"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <ProblemSection />
        <ProofSection />
        <ServicesSection />
        <ProcessSection />
        <FitSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
