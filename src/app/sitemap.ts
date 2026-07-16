import type { MetadataRoute } from "next"
import { SITE } from "@/lib/site"
import { PROJECTS } from "@/lib/projects"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE.url,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1,
    },
    ...PROJECTS.map(({ slug }) => ({
      url: `${SITE.url}/work/${slug}`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
  ]
}
