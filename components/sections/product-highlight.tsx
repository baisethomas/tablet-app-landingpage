import Image from "next/image"

export function ProductHighlight() {
  return (
    <section className="bg-[#FFFFFF] py-24 md:py-32 overflow-hidden relative">
      <div className="flex items-center">
        {/* Text Content -- pushed left to make room for the phone */}
        <div className="max-w-4xl mx-auto text-center px-6 md:text-left md:pl-16 lg:pl-24 md:mx-0 md:max-w-xl lg:max-w-2xl">
          <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-[#1F1F23] mb-3">
            Built for focus.
          </h3>
          <p className="text-[#1F1F23]/60 text-base font-normal">
            Structured, calm, and designed for lasting reflection.
          </p>
        </div>

        {/* iPhone -- positioned right, cut off at the edge */}
        <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-[30%]">
          <Image
            src="/images/hero-phone-dark.png"
            alt="Tablet Notes app dark mode showing sermon summary"
            width={400}
            height={820}
            className="drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  )
}
