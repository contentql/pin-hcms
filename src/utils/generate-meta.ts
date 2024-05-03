import { env } from '@env'
import type { Blog } from '@payload-types'
import type { Metadata } from 'next'

import { mergeOpenGraph } from './merge-open-graph'

export const generateMeta = async (args: { doc: Blog }): Promise<Metadata> => {
  const { doc } = args || {}

  const ogImage =
    typeof doc?.meta?.image === 'object' &&
    doc?.meta?.image !== null &&
    'url' in doc?.meta?.image &&
    doc.meta.image.url

  const url = `${env.NEXT_PUBLIC_PUBLIC_URL}/${doc?.title}/${doc?.id}`

  return {
    title: doc?.meta?.title || 'ContentQL',
    description: doc?.meta?.description || 'ContentQL - Description',
    openGraph: mergeOpenGraph({
      title: doc?.meta?.title!,
      description: doc?.meta?.description!,
      url,
      images: ogImage
        ? [
            {
              url: ogImage,
            },
          ]
        : undefined,
    }),
  }
}
