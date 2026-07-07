// Section heading — big title left, muted subtext right; stacks on mobile.
export default function SectionHeading({
  title,
  subtext,
}: {
  title: string
  subtext: string
}) {
  return (
    <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between lg:gap-8">
      <h2 className="text-[40px] font-bold tracking-[-0.06em] md:text-[56px] lg:text-[64px]">
        {title}
      </h2>
      <p className="max-w-xs text-lg text-foreground/50">
        {subtext}
      </p>
    </div>
  )
}
