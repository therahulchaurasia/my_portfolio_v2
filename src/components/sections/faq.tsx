import Section from "@/components/section"
import Container from "@/components/container"
import SectionHeading from "@/components/section-heading"

// FAQs — common questions.
export default function Faq() {
  return (
    <Container>
      <Section id="faq" className="py-15 md:py-20">
        <SectionHeading
          title="FAQs"
          subtext="Answers to the questions I get asked most before a project starts."
        />
      </Section>
    </Container>
  )
}
