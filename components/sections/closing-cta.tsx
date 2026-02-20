"use client"

import Link from "next/link"
import { FadeUp } from "@/components/motion"

export function ClosingCta() {
  return (
    <section id="waitlist" className="bg-[#2F4FA2] text-[#FFFFFF] py-24 px-6 cta-section">
      <div className="max-w-2xl mx-auto text-center">
        <FadeUp>
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-4 text-balance">
            Be notified when Tablet Notes launches.
          </h2>
        </FadeUp>
        <FadeUp delay={0.1}>
          <p className="text-[#FFFFFF]/80 text-base font-normal mb-10">
            Built for permanence. Designed for focus.
          </p>
        </FadeUp>

        <FadeUp delay={0.2}>
          <Link
            href="#waitlist"
            className="inline-block bg-[#FFFFFF] text-[#2F4FA2] text-sm font-medium tracking-wide uppercase px-8 py-4 rounded hover:bg-[#FFFFFF]/90 transition-colors"
          >
            Join the Waitlist
          </Link>
          <p className="text-xs text-[#FFFFFF]/60 mt-4">No spam. One email at launch.</p>
        </FadeUp>
      </div>
    </section>
  )
}
