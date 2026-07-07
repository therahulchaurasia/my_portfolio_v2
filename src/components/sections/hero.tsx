import Section from "@/components/section"
import Container from "../container"
import WorkCarousel from "../work-carousel"

// Hero — headline left, work carousel (card wall) right; stacks on mobile.
export default function Hero() {
  return (
    <Container>
      <Section
        id="hero"
        className="grid min-h-[90dvh] items-center gap-10 lg:grid-cols-2 lg:gap-16"
      >
        <h2 className="text-[48px] font-bold tracking-[-0.06em] xl:text-[68px]">
          Hero with its own carousel
        </h2>
        <WorkCarousel className="h-[60dvh] lg:h-[90dvh]" />
      </Section>
    </Container>
  )
}
