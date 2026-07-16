import Section from "@/components/section";
import Container from "@/components/container";
import ContactForm from "@/components/contact-form";
import Reveal from "@/components/reveal";
import { Text } from "@/components/text";
import Eyebrow from "@/components/eyebrow";
import AnatomyDot from "@/components/anatomy/anatomy-dot";
import AnatomyPanel, {
  type AnatomyNote,
} from "@/components/anatomy/anatomy-panel";

// Design-commentary cards for this section; ids must match the
// data-anatomy-id attributes below.
const ANATOMY: AnatomyNote[] = [
  {
    id: "contact-form",
    title: "The form is the whole point",
    body: "Everything above exists to earn this form. It only asks what I need to reply: who you are, where to answer, what you want built. Short forms get sent, long ones get abandoned. When you hit send, watch the button.",
    // Contact's two-column grid collapses below lg (the default switchAt),
    // and the stacked order puts the form second, so the note mentions it.
    bodyMobile:
      "Everything above exists to earn this form, so on a phone it cuts the line: heading first, form second, the steps card after. It only asks what I need to reply. When you hit send, watch the button.",
  },
  {
    id: "contact-steps",
    title: "What happens next, spelled out",
    body: "Sending a form usually feels like posting into a void. These three lines say exactly what happens after, so there is no black hole. Once your message goes through, step one crosses itself off the list.",
  },
  {
    id: "contact-heading",
    title: "No new pitch",
    body: "Ready to start? is a yes or no question on purpose. You have seen the work, the services, and the answers by now. This corner does not sell anything new, it just holds the door open.",
  },
];

// Single-line steps — each line carries the whole point, no subtext.
const steps: string[] = [
  "You send a few lines about the project",
  "I reply within a day with a direction",
  "Short call, then a fixed price and timeline",
];

// Step one dims once the form is sent — the number and text fade under the
// full-strength ink strike, so the done state reads at a glance. The 550ms
// delay (shared with the strike wipe) holds until the send button's success
// choreography is ~150ms from settling, so the two moments overlap just
// enough to hand the eye over without fighting.
const DIM_ON_SENT =
  "transition-opacity duration-500 delay-[550ms] [#contact:has(form.is-sent)_&]:opacity-40";

// Shared card elevation — same light shadow as the services / why-me cards.
const FRONT_SHADOW =
  "rgba(0, 0, 0, 0.08) 0px 0.602187px 0.602187px -0.916667px, rgba(0, 0, 0, 0.08) 0px 2.28853px 2.28853px -1.83333px, rgba(0, 0, 0, 0.07) 0px 10px 10px -2.75px";

// Contact — final form + contact details (the last conversion push).
export default function Contact() {
  return (
    <Container divider={false}>
      <Section id="contact" className="relative py-15 md:py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left — heading + contact channels. `contents` on mobile so its
              children (heading, steps) flatten into the grid and can be ordered
              around the form (heading -> form -> steps); at lg it is the flex
              column again, keeping the desktop top/bottom spread. */}
          <div className="contents lg:flex lg:flex-col lg:justify-between lg:gap-10">
            <Reveal
              anatomyId="contact-heading"
              className="order-1 flex flex-col gap-4"
            >
              <div className="flex flex-col gap-[5px]">
                <Eyebrow>Contact</Eyebrow>
                <Text variant="title">Ready to start?</Text>
              </div>
              <Text muted className="max-w-sm">
                Let&apos;s build something people will remember.
              </Text>
            </Reveal>

            <Reveal
              delay={0.05}
              className="order-3 rounded-[20px] bg-[#e5e5e5] p-1.75"
            >
              {/* Default framed card (same recipe as services / why-me): grey
                  frame + inset inner surface. */}
              <div
                data-anatomy-id="contact-steps"
                className="relative flex flex-col rounded-2xl bg-background p-6 outline-1 outline-[#e2e2e2] [outline-offset:-3px]"
                style={{ boxShadow: FRONT_SHADOW }}
              >
                <Text as="span" variant="subtitle-sm">
                  What happens next
                </Text>
                <ol className="mt-4 flex flex-col">
                  {steps.map((step, i) => (
                    <li
                      key={step}
                      className="border-t border-[#e2e2e2] py-4 last:pb-0"
                    >
                      {/* Number + text share one relative w-fit box so the
                          strike (step one only) can span both — starting at the
                          "01" and ending at the last word. */}
                      <span className="relative flex w-fit items-baseline gap-4">
                        <Text
                          as="span"
                          variant="label"
                          muted
                          className={i === 0 ? DIM_ON_SENT : undefined}
                        >
                          0{i + 1}
                        </Text>
                        <Text
                          as="span"
                          variant="body"
                          muted
                          className={i === 0 ? DIM_ON_SENT : undefined}
                        >
                          {step}
                        </Text>
                        {i === 0 && (
                          /* Hand-drawn scribble strike. A 60px tile of humps
                             with varied width/height (data-URI SVG) repeated
                             across x. Both ends sit at mid-height and share the
                             same slope, so tile meets tile with no kink and no
                             seam gap; the long, uneven unit keeps the repeat
                             from reading as regular. Density is fixed in px, so
                             it never flattens at any width. Reveals left ->
                             right by animating width 0 -> full once the form is
                             sent (form.is-sent), wiping in like a pen stroke. */
                          <span
                            aria-hidden
                            className="pointer-events-none absolute top-1/2 left-0 h-[8px] w-0 -translate-y-1/2 bg-repeat-x transition-[width] duration-500 delay-[550ms] ease-out [#contact:has(form.is-sent)_&]:w-full"
                            style={{
                              backgroundImage:
                                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='8' viewBox='0 0 60 8'%3E%3Cpath d='M0 4 C 3 2 6 2 9 4 C 12 6.5 15 6.5 18 4 C 22 1.6 26 1.6 30 4 C 32.7 5.8 35.3 5.8 38 4 C 42 2.4 46 2.4 50 4 C 53.3 6.2 56.7 6.2 60 4' fill='none' stroke='%234f4f4f' stroke-width='1.6' stroke-linecap='round'/%3E%3C/svg%3E\")",
                              backgroundSize: "60px 8px",
                            }}
                          />
                        )}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>
          </div>

          {/* Right — form. order-2 puts it between heading and steps on
              mobile; on desktop it is simply the second grid column. */}
          <Reveal anatomyId="contact-form" delay={0.1} className="order-2">
            <ContactForm />
          </Reveal>
        </div>

        <AnatomyDot
          section="contact"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
        <AnatomyPanel
          section="contact"
          notes={ANATOMY}
          className="fixed inset-x-0 bottom-0 pb-4 md:absolute md:inset-x-auto md:top-1/2 md:right-0 md:bottom-auto md:pb-0 md:-translate-y-1/2"
        />
      </Section>
    </Container>
  );
}
