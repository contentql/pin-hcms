'use client'

import { env } from '@env'
import { Blog } from '@payload-types'
import { useLivePreview } from '@payloadcms/live-preview-react'

import { trpc } from '@/trpc/client'

const BlogView = ({ slug, data }: { slug: string; data: Blog }) => {
  const { data: blog } = trpc.blog.getBlogBySlug.useQuery(
    { slug },
    { initialData: data },
  )

  // Fetch blog data for live preview
  const { data: livePreviewData } = useLivePreview<Blog | undefined>({
    initialData: undefined,
    serverURL: env.NEXT_PUBLIC_PUBLIC_URL,
    depth: 2,
  })

  // Determine which data to use based on whether live preview data is available
  const dataToUse = livePreviewData || blog

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: dataToUse?.description_html!,
      }}
    ></div>
  )
}

export default BlogView
