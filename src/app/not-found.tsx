import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Container from "@/components/container"
import { Text } from "@/components/text"

export const metadata = { title: "Page not found" }

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col">
      <Container divider={false}>
        <div className="flex min-h-[100svh] w-full flex-col items-center justify-center gap-[30px] text-center">
          <div className="flex flex-col items-center gap-[15px]">
            <Text variant="display">This page got lost.</Text>
            <Text muted className="max-w-md">
              The link is broken or the page moved. Either way, there is nothing
              to convert here.
            </Text>
          </div>
          <Link
            href="/"
            className="flex items-center gap-3 rounded-full bg-gradient-to-b from-[#4d4dda] to-primary p-2 pl-6 text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_10px_24px_-8px_rgba(51,51,204,0.6)] transition-transform duration-200 ease-out hover:-translate-y-0.5"
          >
            <Text as="span" variant="label" className="font-semibold">
              Back to home
            </Text>
            <span className="flex size-9 items-center justify-center rounded-full bg-white">
              <ArrowRight className="size-4 text-primary" strokeWidth={2.5} />
            </span>
          </Link>
        </div>
      </Container>
    </main>
  )
}
