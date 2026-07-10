import { Folder } from "lucide-react"
import Section from "@/components/section"
import Container from "@/components/container"
import SectionHeading from "@/components/section-heading"
import { Text } from "@/components/text"

const FRONT_SHADOW =
  "rgba(0, 0, 0, 0.08) 0px 0.602187px 0.602187px -0.916667px, rgba(0, 0, 0, 0.08) 0px 2.28853px 2.28853px -1.83333px, rgba(0, 0, 0, 0.07) 0px 10px 10px -2.75px"

type Service = { title: string; desc: string }

const services: Service[] = [
  {
    title: "Brand Identity",
    desc: "Elevate your visual presence with standout branding.",
  },
  {
    title: "Logo Design",
    desc: "Logos built to be memorable and recognizable across every touchpoint.",
  },
  {
    title: "Brand Guidelines",
    desc: "Your brandbook to keep your brand consistent across platforms.",
  },
]

export default function Services() {
  return (
    <Container>
      <Section id="services" className="py-15 md:py-20">
        <div className="flex flex-col gap-8 md:gap-12">
          <SectionHeading
            title="Services"
            subtext="End-to-end design and development, tailored to what your business needs."
          />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {services.map(({ title, desc }) => (
              <div
                key={title}
                className="rounded-[20px] bg-[#e5e5e5] p-1.75"
              >
                <div
                  className="relative flex h-full flex-col rounded-2xl bg-background p-6 outline-1 outline-[#e2e2e2] [outline-offset:-3px]"
                  style={{ boxShadow: FRONT_SHADOW }}
                >
                  <Folder
                    className="size-9 fill-foreground text-foreground"
                    strokeWidth={1.5}
                  />
                  <Text as="h3" variant="subtitle" className="mt-6">
                    {title}
                  </Text>
                  <Text muted className="mt-2 max-w-[28ch]">
                    {desc}
                  </Text>
                  <button
                    type="button"
                    className="mt-8 w-full cursor-pointer rounded-full bg-gradient-to-b from-[#2f8bff] to-primary py-3.5 text-center font-semibold text-white shadow-[0_10px_24px_-8px_rgba(6,86,186,0.7)] transition-transform duration-200 hover:scale-[1.02] active:scale-[0.99]"
                  >
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </Container>
  )
}
