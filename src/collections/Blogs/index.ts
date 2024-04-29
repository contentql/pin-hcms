import { CollectionConfig } from 'payload/types'

import { Blog1_1 } from '@/blocks/Blog1_1'
import { Hero2_1 } from '@/blocks/Hero2_1'
import { Review_1 } from '@/blocks/Review_1'

export const Blogs: CollectionConfig = {
  slug: 'blogs',
  labels: {
    singular: 'Blog',
    plural: 'Blogs',
  },
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'name',
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
      blocks: [Blog1_1, Hero2_1, Review_1],
    },
  ],
}
