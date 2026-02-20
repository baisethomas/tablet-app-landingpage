"use client"

import Link from "next/link"
import { FadeUp } from "@/components/motion"

export function ClosingCta() {
  return (
    <section id="waitlist" className="bg-[#2F4FA2] text-[#FFFFFF] py-24 px-6 cta-section">
      <div className="max-w-2xl mx-auto text-center">
        <FadeUp>
          <p className="text-3xl md:text-5xl font-medium tracking-tight mb-6 text-balance">
            Built for permanence. Designed for focus.
          </p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-4 text-balance">
            Be notified when Tablet Notes launches.
          </h2>
        </FadeUp>
        <FadeUp delay={0.2}>
          <p className="text-[#FFFFFF]/80 text-base font-normal mb-10">
            For those who believe what they hear is worth holding onto.
          </p>
        </FadeUp>

        <FadeUp delay={0.3}>
          <Link
            href="#waitlist"
            className="inline-block bg-[#FFFFFF] text-[#2F4FA2] text-sm font-medium tracking-wide uppercase px-8 py-4 rounded hover:bg-[#FFFFFF]/90 transition-colors"
          >
            Notify me at launch
          </Link>
        </FadeUp>
      </div>
    </section>
  )
}
