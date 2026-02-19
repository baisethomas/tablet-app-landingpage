import Image from "next/image"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center pt-16 pb-0 md:pt-24 overflow-hidden selection:bg-[#2F4FA2] selection:text-foreground bg-[#1F1F23]">
      {/* Background Nib Watermark */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full pointer-events-none z-0 flex justify-center opacity-[0.03] nib-watermark">
        <Image
          src="/images/logomark-black.png"
          alt=""
          width={600}
          height={600}
          className="mt-[-100px] invert"
          aria-hidden="true"
        />
      </div>

      {/* Navigation / Logo */}
      <header className="relative z-10 w-full max-w-6xl mx-auto px-6 mb-16 md:mb-24 flex justify-center">
        <span className="uppercase tracking-[0.2em] text-sm font-medium text-foreground/90">
          Tablet Notes
        </span>
      </header>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-2xl px-6 text-center mx-auto">
        <h1 className="text-4xl md:text-6xl font-medium tracking-tight text-foreground mb-6 leading-[1.1] text-balance">
          Write it on the<br />tablet of your heart.
        </h1>

        <p className="text-base md:text-lg text-foreground/70 italic font-normal mb-8 max-w-xl mx-auto leading-relaxed">
          {'"Let love and faithfulness never leave you; bind them around your neck, write them on the tablet of your heart." \u2014 Proverbs 3:3'}
        </p>

        <h2 className="text-lg md:text-xl text-foreground/85 font-normal tracking-tight mb-2">
          A focused note-taking platform designed for sermon reflection and lasting retention.
        </h2>

        <p className="text-sm text-foreground/60 mb-10 tracking-wide uppercase">
          Coming to iPhone
        </p>

        {/* CTA Button */}
        <Link
          href="#waitlist"
          className="inline-block bg-[#2F4FA2] text-foreground text-sm font-medium tracking-wide uppercase px-8 py-4 rounded hover:bg-[#2F4FA2]/90 transition-colors"
        >
          Join the Waitlist
        </Link>
        <p className="text-xs text-foreground/40 mt-4 mb-20">No spam. One email at launch.</p>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-[50%] bg-gradient-to-t from-[#1F1F23] via-[#1F1F23]/60 to-transparent z-30 pointer-events-none" />

      {/* Device Mockups */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 mt-auto flex justify-center items-end h-[450px] md:h-[600px]">
        {/* Secondary Device (Dark Mode) - Offset Left/Back */}
        <div className="absolute bottom-[-50px] left-1/2 -translate-x-[75%] md:-translate-x-[70%] w-[240px] md:w-[300px] opacity-90 scale-90 origin-bottom-right z-10">
          <Image
            src="/images/hero-phone-dark.png"
            alt="Tablet Notes app in dark mode showing AI-generated sermon summary"
            width={300}
            height={620}
            className="w-full h-auto drop-shadow-2xl"
            priority
          />
        </div>

        {/* Primary Device (Light Mode) - Center/Front */}
        <div className="relative bottom-[-40px] w-[260px] md:w-[320px] z-20">
          <Image
            src="/images/hero-phone-light.png"
            alt="Tablet Notes app in light mode showing AI-generated sermon summary"
            width={320}
            height={660}
            className="w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            priority
          />
        </div>
      </div>
    </section>
  )
}
