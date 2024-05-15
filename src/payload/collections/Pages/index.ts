import type { CollectionConfig } from 'payload/types'

import { pathField, slugField } from '@/payload/fields'
import { blocksField } from '@/payload/fields/blocks'

export const COLLECTION_SLUG_PAGE = 'pages'

export const Pages: CollectionConfig = {
  slug: COLLECTION_SLUG_PAGE,
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'path', 'updatedAt', 'createdAt'],
  },
  versions: {
    drafts: {
      autosave: false,
    },
    maxPerDoc: 10,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'enter "/" if you want homepage',
      },
    },
    blocksField(),
    slugField(),
    pathField(),
  ],
}
