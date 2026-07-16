import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowUpRight } from "lucide-react"
import Container from "@/components/container"
import { Text } from "@/components/text"
import { PROJECTS, getProject } from "@/lib/projects"

// SKELETON — structure only. Real content sections and the page's design
// pass come later; every block below is a placeholder to be replaced.

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return PROJECTS.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject((await params).slug)
  if (!project) return {}
  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      type: "article",
      url: `/work/${project.slug}`,
      title: project.title,
      description: project.summary,
    },
  }
}

export default async function ProjectPage({ params }: Props) {
  const project = getProject((await params).slug)
  if (!project) notFound()

  const index = PROJECTS.indexOf(project)
  const next = PROJECTS[(index + 1) % PROJECTS.length]

  return (
    <main className="flex flex-1 flex-col">
      <Container divider={false}>
        <div className="flex w-full flex-col gap-10 pt-28 pb-15 md:gap-14 md:pb-20">
          {/* --- Case-study hero -------------------------------------- */}
          <header className="flex flex-col items-start gap-6">
            <Link
              href="/#work"
              className="flex items-center gap-2 text-foreground-muted transition-colors duration-150 hover:text-foreground"
            >
              <ArrowLeft className="size-4" />
              <Text as="span" variant="label">
                All work
              </Text>
            </Link>
            <div className="flex w-full flex-col gap-4">
              <Text as="h1" variant="display">
                {project.title}
              </Text>
              <Text muted className="max-w-[48ch]">
                {project.summary}
              </Text>
            </div>
            <div className="flex flex-wrap items-center gap-1.5">
              {[...project.tags, project.year].map((chip) => (
                <span
                  key={chip}
                  className="inline-flex items-center rounded-full bg-foreground px-2.5 py-1.5"
                >
                  <Text
                    as="span"
                    variant="label"
                    className="text-xs! leading-none text-background"
                  >
                    {chip}
                  </Text>
                </span>
              ))}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 rounded-full bg-gradient-to-b from-[#4d4dda] to-primary px-2.5 py-1.5 text-background shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]"
                >
                  <Text
                    as="span"
                    variant="label"
                    className="text-xs! leading-none text-background"
                  >
                    Visit live site
                  </Text>
                  <ArrowUpRight className="size-3" />
                </a>
              )}
            </div>
          </header>

          {/* --- Cover ------------------------------------------------- */}
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-[#eaeaea]">
            <Image
              src={project.cover}
              alt={project.title}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>

          {/* --- Body placeholders ------------------------------------ */}
          {/* TODO: real sections per project — brief/problem, approach,
              result, gallery. Designed in the project-pages design pass. */}
          <section className="flex flex-col gap-4">
            <Text as="h2" variant="subtitle">
              About the project
            </Text>
            <Text muted className="max-w-[64ch]">
              Placeholder body copy. What the client needed, what was built,
              and what changed for them. Rahul writes the real story here.
            </Text>
          </section>

          <section className="grid grid-cols-1 gap-2.5 md:grid-cols-2">
            <div className="aspect-[5/4] rounded-2xl bg-[#eaeaea]" />
            <div className="aspect-[5/4] rounded-2xl bg-[#eaeaea]" />
          </section>

          {/* --- Next project ----------------------------------------- */}
          <Link
            href={`/work/${next.slug}`}
            className="group flex items-center justify-between rounded-2xl bg-[#eaeaea] p-6 transition-transform duration-200 ease-out hover:-translate-y-0.5"
          >
            <div className="flex flex-col gap-1">
              <Text as="span" variant="label" muted>
                Next project
              </Text>
              <Text as="span" variant="subtitle">
                {next.title}
              </Text>
            </div>
            <span className="flex size-11 items-center justify-center rounded-full bg-background">
              <ArrowUpRight className="size-4 text-primary" />
            </span>
          </Link>
        </div>
      </Container>
    </main>
  )
}
