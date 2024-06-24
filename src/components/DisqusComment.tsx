'use client'

import { env } from '@env'
import { Blog } from '@payload-types'
import { DiscussionEmbed } from 'disqus-react'

const DisqusComments = ({ blog }: { blog: Blog }) => {
  const pageUrl = typeof window !== 'undefined' ? window.location.href : ''
  const disqusConfig = {
    url: pageUrl,
    identifier: blog?.slug as string,
    title: blog?.title as string,
  }
  return (
    <DiscussionEmbed
      shortname={env.NEXT_PUBLIC_DISQUS_SHORTNAME_ENV}
      config={disqusConfig}
    />
  )
}

export default DisqusComments
