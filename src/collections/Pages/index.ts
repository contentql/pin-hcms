import { CollectionConfig } from 'payload/types'

import { blocks } from '@/blocks'

export const Pages: CollectionConfig = {
  slug: 'pages',
  labels: {
    singular: 'Page',
    plural: 'Pages',
  },
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'name',
    // preview: doc => {
    //   return `${env.PAYLOAD_URL}/next/preview?url=${encodeURIComponent(
    //     `${env.PAYLOAD_URL}/${doc.slug !== 'index' ? doc.slug : ''}`,
    //   )}&secret=${env.PAYLOAD_PUBLIC_DRAFT_SECRET}`
    // },
  },
  versions: {
    drafts: true,
  },
  fields: [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      label: 'Slug',
      type: 'text',
      required: true,
    },
    {
      name: 'layout',
      label: 'Layout',
      type: 'blocks',
      blocks: Object.values(blocks),
    },
  ],
}
