"use client"

import { Accordion } from "@base-ui-components/react/accordion"
import { Minus, Plus } from "lucide-react"
import { Text } from "@/components/text"

type Faq = { q: string; a: string }

const FRONT_SHADOW =
  "rgba(0, 0, 0, 0.08) 0px 0.602187px 0.602187px -0.916667px, rgba(0, 0, 0, 0.08) 0px 2.28853px 2.28853px -1.83333px, rgba(0, 0, 0, 0.07) 0px 10px 10px -2.75px"

export default function FaqAccordion({ items }: { items: Faq[] }) {
  return (
    <Accordion.Root
      defaultValue={[0]}
      className="flex flex-col gap-[7px] rounded-[20px] bg-[#e5e5e5] p-[7px]"
    >
      {items.map((item, i) => (
        <Accordion.Item
          key={item.q}
          value={i}
          className="rounded-2xl bg-background px-6 py-5"
          style={{ boxShadow: FRONT_SHADOW }}
        >
          <Accordion.Header className="m-0">
            <Accordion.Trigger className="group/trigger flex w-full cursor-pointer items-center justify-between gap-4 text-left">
              <Text as="span" variant="subtitle-sm">
                {item.q}
              </Text>
              <span className="relative flex size-8 shrink-0 items-center justify-center rounded-full bg-black/5">
                <Plus className="size-4 transition-all duration-300 group-data-[panel-open]/trigger:rotate-90 group-data-[panel-open]/trigger:opacity-0" />
                <Minus className="absolute size-4 -rotate-90 opacity-0 transition-all duration-300 group-data-[panel-open]/trigger:rotate-0 group-data-[panel-open]/trigger:opacity-100" />
              </span>
            </Accordion.Trigger>
          </Accordion.Header>

          <Accordion.Panel className="h-[var(--accordion-panel-height)] overflow-hidden transition-[height] duration-300 ease-out data-[ending-style]:h-0 data-[starting-style]:h-0">
            <Text muted className="pt-4">
              {item.a}
            </Text>
          </Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  )
}
