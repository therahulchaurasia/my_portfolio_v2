import type { ElementType, ReactNode } from "react"

type Variant = "display" | "title" | "subtitle" | "subtitle-sm" | "body" | "label"

const variants: Record<Variant, { tag: ElementType; className: string }> = {
  display: {
    tag: "h1",
    className: "text-[48px] font-bold leading-[1.04em] tracking-[-0.055em] xl:text-[68px]",
  },
  title: {
    tag: "h2",
    className: "text-[40px] font-bold leading-[1.04em] tracking-[-0.055em] md:text-[56px] lg:text-[64px]",
  },
  subtitle: {
    tag: "h3",
    className: "text-xl font-semibold tracking-[-0.02em] lg:text-2xl",
  },
  "subtitle-sm": {
    tag: "h3",
    className: "text-lg font-semibold tracking-[-0.02em] lg:text-xl",
  },
  body: {
    tag: "p",
    className: "text-base font-medium leading-[1.27em] tracking-[-0.042em]",
  },
  label: {
    tag: "span",
    className: "text-sm font-medium",
  },
}

export function Text({
  as,
  variant = "body",
  muted = false,
  className,
  children,
}: {
  as?: ElementType
  variant?: Variant
  muted?: boolean
  className?: string
  children: ReactNode
}) {
  const { tag: DefaultTag, className: base } = variants[variant]
  const Tag = as ?? DefaultTag
  return (
    <Tag
      className={`${base} ${muted ? "text-foreground-muted" : ""} ${className ?? ""}`}
    >
      {children}
    </Tag>
  )
}
