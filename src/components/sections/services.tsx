import Section from "@/components/section"
import Container from "@/components/container"
import SectionHeading from "@/components/section-heading"

// Services — what I offer.
export default function Services() {
  return (
    <Container>
      <Section id="services" className="py-15 md:py-20">
        <SectionHeading
          title="Services"
          subtext="End-to-end design and development, tailored to what your business needs."
        />
      </Section>
    </Container>
  )
}
