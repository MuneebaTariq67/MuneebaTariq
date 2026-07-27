import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = 'https://muneeba-tariq.vercel.app'
  const sections = ['', '#about', '#skills', '#projects', '#education', '#experience', '#contact']
  return sections.map((section) => ({
    url: `${siteUrl}/${section}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: section === '' ? 1 : 0.7,
  }))
}
