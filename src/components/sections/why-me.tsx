import Section from "@/components/section"
import Container from "@/components/container"
import SectionHeading from "@/components/section-heading"

// Why work with me — value proposition / trust builders.
export default function WhyMe() {
  return (
    <Container>
      <Section id="why-me" className="py-15 md:py-20">
        <SectionHeading
          title="Why work with me"
          subtext="A partner who cares about your results as much as the craft."
        />
      </Section>
    </Container>
  )
}
