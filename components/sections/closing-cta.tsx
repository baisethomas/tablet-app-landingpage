import { SignupForm } from "@/components/signup-form"

export function ClosingCta() {
  return (
    <section className="bg-[#2F4FA2] text-[#FFFFFF] py-24 px-6 cta-section">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-4 text-balance">
          Be notified when Tablet Notes launches.
        </h2>
        <p className="text-[#FFFFFF]/80 text-base font-normal mb-10">
          Built for permanence. Designed for focus.
        </p>

        <SignupForm variant="blue" />
      </div>
    </section>
  )
}
