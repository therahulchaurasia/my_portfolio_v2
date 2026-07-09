import Section from "@/components/section"
import Container from "@/components/container"
import SectionHeading from "@/components/section-heading"

export default function Work() {
  return (
    <Container>
      <Section id="work" className="py-15 md:py-20">
        <div className="flex flex-col gap-[15px] md:gap-[25px] xl:gap-[50px]">
          <SectionHeading
            title="Selected work"
            subtext="See how I've transformed brands and delivered real, measurable results."
          />
          <div className="grid grid-cols-1 gap-[10px] md:grid-cols-2">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="aspect-[16/9] rounded-2xl bg-foreground/5"
              />
            ))}
          </div>
        </div>
      </Section>
    </Container>
  )
}
