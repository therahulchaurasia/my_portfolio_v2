import Hero from "@/components/sections/hero"
import Work from "@/components/sections/work"
import Services from "@/components/sections/services"
import WhyMe from "@/components/sections/why-me"
import Faq from "@/components/sections/faq"
import Contact from "@/components/sections/contact"
import ProgressiveBlur from "@/components/progressive-blur"

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <Work />
      <Services />
      <WhyMe />
      <Faq />
      <Contact />

      {/* z-40 keeps the blur under the anatomy layer (z-45) so the sheet and
          dots stay crisp; backdrop-filter only blurs what paints below it. */}
      <ProgressiveBlur
        tint={false}
        className="sticky bottom-0 z-40 -mt-[10svh] h-[10svh]"
      />
    </main>
  )
}
