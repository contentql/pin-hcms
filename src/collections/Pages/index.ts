import {
  HTMLConverterFeature,
  lexicalEditor,
  lexicalHTML,
} from '@payloadcms/richtext-lexical'
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
      name: 'description',
      type: 'richText',
      label: 'Content',
      required: true,
      editor: lexicalEditor({
        features: ({ defaultFeatures }: any) => [
          ...defaultFeatures,
          HTMLConverterFeature({}),
        ],
      }),
      admin: {
        description: 'Main page content.',
      },
    },
    {
      name: 'layout',
      label: 'Layout',
      type: 'blocks',
      blocks: Object.values(blocks),
    },
    lexicalHTML('description', {
      name: 'description_html',
    }),
  ],
}
