import { env } from '@env'
import { MetadataRoute } from 'next'

// @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${env.NEXT_PUBLIC_PUBLIC_URL}/sitemap.xml`,
  }
}
