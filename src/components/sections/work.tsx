import Section from "@/components/section"
import Container from "@/components/container"
import SectionHeading from "@/components/section-heading"

// Selected work — featured projects.
export default function Work() {
  return (
    <Container>
      <Section id="work" className="py-15 md:py-20">
        <SectionHeading
          title="Selected work"
          subtext="See how I've transformed brands and delivered real, measurable results."
        />
      </Section>
    </Container>
  )
}
