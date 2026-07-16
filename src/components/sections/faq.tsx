import Section from "@/components/section"
import Container from "@/components/container"
import FaqAccordion from "@/components/faq-accordion"
import Reveal from "@/components/reveal"
import { Text } from "@/components/text"
import Eyebrow from "@/components/eyebrow"
import AnatomyDot from "@/components/anatomy/anatomy-dot"
import AnatomyPanel, {
  type AnatomyNote,
} from "@/components/anatomy/anatomy-panel"

// Dummy anatomy cards — placeholder copy, Rahul writes the real notes.
const ANATOMY: AnatomyNote[] = [
  {
    id: "faq-accordion",
    title: "Placeholder: the accordion",
    body: "Dummy copy about answering objections in an accordion instead of a wall of text. Real note comes later.",
  },
  {
    id: "faq-title",
    title: "Placeholder: the one word title",
    body: "Dummy copy about the short title treatment. Real note comes later.",
  },
  {
    id: "faq-heading",
    title: "Placeholder: the split layout",
    body: "Dummy copy about the heading column next to the questions. Real note comes later.",
  },
]

export default function Faq() {
  return (
    <Container>
      <Section id="faq" className="relative py-15 md:py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal anatomyId="faq-heading" className="flex flex-col gap-3">
            <div
              data-anatomy-id="faq-title"
              className="flex flex-col gap-[5px]"
            >
              <Eyebrow>FAQ</Eyebrow>
              <Text variant="title">Questions.</Text>
            </div>
            <Text muted className="max-w-xs">
              The things clients usually ask before starting.
            </Text>
          </Reveal>

          <Reveal anatomyId="faq-accordion" delay={0.1}>
            <FaqAccordion items={faqs} />
          </Reveal>
        </div>

        <AnatomyDot
          section="faq"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
        <AnatomyPanel
          section="faq"
          notes={ANATOMY}
          className="fixed inset-x-0 bottom-0 pb-4 md:absolute md:inset-x-auto md:top-1/2 md:right-0 md:bottom-auto md:pb-0 md:-translate-y-1/2"
        />
      </Section>
    </Container>
  )
}

const faqs = [
  {
    q: "What does the process look like?",
    a: "We start with a call to get clear on your goals, audience, and what the website needs to do. Then I move through strategy, design, and development with you involved at every key step.",
  },
  {
    q: "How long does a project take?",
    a: "Most landing pages take 1-2 weeks. Larger CMS websites and custom builds usually take 2-4 weeks, and I'll give you a clear timeline before we begin.",
  },
  {
    q: "What do you need from me to start?",
    a: "A clear idea of your goal, any brand assets you have, and whatever content is ready. If some pieces are still missing, that's okay. We'll work through them together.",
  },
  {
    q: "How do payments work?",
    a: "I take 40% upfront to book the project and begin work. The remaining 60% is due once the website is complete and ready to launch.",
  },
  {
    q: "What happens after launch?",
    a: "Launch is not the end of the project. I include a support window for any fixes or small tweaks, and you can always come back to me when the site needs to grow or change.",
  },
  {
    q: "Can I update the site myself after launch?",
    a: "If we build your site with a CMS, yes. I'll make it easy for you to update text, images, and pages, then show you how everything works.",
  },
]
