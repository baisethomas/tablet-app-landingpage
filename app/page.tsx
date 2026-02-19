import { Hero } from "@/components/sections/hero"
import { Philosophy } from "@/components/sections/philosophy"
import { Experience } from "@/components/sections/experience"
import { ProductHighlight } from "@/components/sections/product-highlight"
import { ClosingCta } from "@/components/sections/closing-cta"
import { Footer } from "@/components/sections/footer"

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Philosophy />
      <Experience />
      <ProductHighlight />
      <ClosingCta />
      <Footer />
    </main>
  )
}
