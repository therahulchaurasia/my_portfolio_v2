import type { ReactNode } from "react"

type SectionProps = {
  id?: string
  className?: string
  children: ReactNode
  /** Marks the whole section as an anatomy spotlight target. */
  anatomyId?: string
}

export default function Section({
  id,
  className,
  children,
  anatomyId,
}: SectionProps) {
  return (
    <section
      id={id}
      data-anatomy-id={anatomyId}
      className={`w-full ${className ?? ""}`}
    >
      {children}
    </section>
  )
}
