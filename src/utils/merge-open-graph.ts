import { env } from '@env'
import type { Metadata } from 'next'

const defaultOpenGraph: Metadata['openGraph'] = {
  type: 'website',
  siteName: 'ContentQL',
  title: 'ContentQL',
  description: 'An blog site built with Payload and Next.js.',
  images: [
    {
      url: `${env.PAYLOAD_URL}/images/favicon.ico`,
    },
  ],
}

export const mergeOpenGraph = (
  og?: Metadata['openGraph'],
): Metadata['openGraph'] => {
  return {
    ...defaultOpenGraph,
    ...og,
    images: og?.images ? og.images : defaultOpenGraph.images,
  }
}
