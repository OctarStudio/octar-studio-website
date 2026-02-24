"use client"

import { useState, useEffect, type RefObject } from "react"

export function useInView(
  ref: RefObject<HTMLElement | null>,
  options?: { threshold?: number; rootMargin?: string }
): boolean {
  const [isInView, setIsInView] = useState(false)
  const threshold = options?.threshold ?? 0.1
  const rootMargin = options?.rootMargin ?? "0px 0px -10% 0px"

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches

    if (prefersReducedMotion) {
      setIsInView(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.unobserve(element)
        }
      },
      {
        root: null,
        rootMargin,
        threshold,
      }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [ref, threshold, rootMargin])

  return isInView
}
