import type { CollectionConfig } from 'payload/types'
import { pathField, slugField } from '@/payload/fields'
import { blocksField } from '@/payload/fields/blocks'
import { blocks } from '@/payload/blocks'
import { COLLECTION_SLUG_PAGE } from '@/payload/collections/constants'

export const Pages: CollectionConfig = {
  slug: COLLECTION_SLUG_PAGE,
  labels: {
    singular: 'Page',
    plural: 'Pages',
  },
  access: {
    read: () => true,
  },
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
