import { Text } from "@/components/text"

export default function SectionHeading({
  title,
  subtext,
}: {
  title: string
  subtext: string
}) {
  return (
    <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between lg:gap-8">
      <Text variant="title">{title}</Text>
      <Text muted className="max-w-xs">
        {subtext}
      </Text>
    </div>
  )
}
