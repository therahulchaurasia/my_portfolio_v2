import Section from "@/components/section"
import Container from "@/components/container"
import FaqAccordion from "@/components/faq-accordion"
import { Text } from "@/components/text"

export default function Faq() {
  return (
    <Container>
      <Section id="faq" className="py-15 md:py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-3">
            <Text variant="title">Questions.</Text>
            <Text muted className="max-w-xs">
              Everything you need to know about my design service.
            </Text>
          </div>

          <FaqAccordion items={faqs} />
        </div>
      </Section>
    </Container>
  )
}

const faqs = [
  {
    q: "How long does a project take?",
    a: "Most projects fall between 1–2 weeks depending on complexity. A brand identity paired with a website usually lands closer to two weeks, while larger builds can take longer.",
  },
  {
    q: "What kind of design tasks can I request?",
    a: "Landing pages, full websites, brand identity, design systems, and the front-end build to ship them. If it lives on screen, it's fair game.",
  },
  {
    q: "How do we start the project?",
    a: "A short intro call to scope the work, then a proposal with timeline and price. Once that's approved, we kick off.",
  },
  {
    q: "What's your typical process?",
    a: "Discovery → direction → design → build → handoff. You get regular check-ins at each stage so there are no surprises.",
  },
  {
    q: "Do you work with existing teams?",
    a: "Yes — I slot into your workflow, whether that's design-only, dev-only, or end to end alongside your team.",
  },
]
