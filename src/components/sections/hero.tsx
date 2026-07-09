import Section from "@/components/section"
import Container from "../container"
import WorkCarousel from "../work-carousel"
import { Text } from "@/components/text"

export default function Hero() {
  return (
    <Container>
      <Section
        id="hero"
        className="grid gap-10 lg:grid-cols-2 lg:gap-16"
      >
        <div className="flex flex-col gap-[30px] pt-28 lg:pt-[150px] lg:pb-16">
          <div className="flex flex-col gap-[15px]">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-foreground/15 px-3 py-1">
              <span className="size-1.5 animate-pulse rounded-full bg-green-500" />
              <Text as="span" variant="label" className="text-foreground-muted">
                Open to work
              </Text>
            </span>
            <Text variant="display">Hero with its own carousel</Text>
            <Text muted className="max-w-md">
              Placeholder subtext — a line or two that frames the pitch and tells
              prospects exactly what you do and who it&apos;s for.
            </Text>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="rounded-full bg-primary px-6 py-3 text-white transition-opacity hover:opacity-90"
            >
              <Text as="span" variant="label">
                Start a project
              </Text>
            </a>
            <a
              href="#work"
              className="rounded-full border border-foreground/20 px-6 py-3 transition-colors hover:border-foreground/40"
            >
              <Text as="span" variant="label">
                View work
              </Text>
            </a>
          </div>
        </div>
        <WorkCarousel className="h-[400px] md:h-[600px] lg:h-full" />
      </Section>
    </Container>
  )
}
