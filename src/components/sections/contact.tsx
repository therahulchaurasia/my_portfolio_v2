import Section from "@/components/section"
import Container from "@/components/container"
import SectionHeading from "@/components/section-heading"

// Contact — final form + contact details (the last conversion push).
export default function Contact() {
  return (
    <Container divider={false}>
      <Section id="contact" className="py-15 md:py-20">
        <SectionHeading
          title="Let's work together"
          subtext="Have a project in mind? Tell me about it and I'll get back to you."
        />
      </Section>
    </Container>
  )
}
