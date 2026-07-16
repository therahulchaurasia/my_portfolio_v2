// Single source of truth for showcase projects: the Selected Work grid and
// the /work/[slug] case-study pages both read from here.
export type Project = {
  slug: string
  title: string
  // tags: [project type, scope/role] — max two, work-card chips get crowded
  // past that.
  tags: [string, string]
  cover: string
  year: string
  // One-liner used in the case-study hero and the page's meta description.
  summary: string
  liveUrl?: string
}

export const PROJECTS: Project[] = [
  {
    slug: "with-sam",
    title: "With Sam",
    tags: ["Portfolio + CMS", "Development"],
    cover: "/showcase/withsam.jpeg",
    year: "2026",
    summary:
      "Placeholder summary. One sentence on what the project was and what it did for the client.",
  },
  {
    slug: "asahi",
    title: "Asahi",
    tags: ["Landing page + CMS", "Development"],
    cover: "/showcase/asahi.jpeg",
    year: "2026",
    summary:
      "Placeholder summary. One sentence on what the project was and what it did for the client.",
  },
]

export function getProject(slug: string) {
  return PROJECTS.find((p) => p.slug === slug)
}
