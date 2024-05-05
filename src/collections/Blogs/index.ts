import {
  HTMLConverterFeature,
  lexicalEditor,
  lexicalHTML,
} from '@payloadcms/richtext-lexical'
import { CollectionConfig } from 'payload/types'

import { SlugField } from '@/plugins/enhanced-fields'

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
    // {
    //   name: 'slug',
    //   label: 'Slug',
    //   type: 'text',
    //   required: true,
    // },
    ...SlugField(
      {
        name: 'slug',
        admin: {
          position: 'sidebar',
        },
      },
      {
        useFields: ['name'],
      },
    ),
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
        description:
          'Main content of the blog post. Use the rich text editor for formatting.',
      },
    },
    lexicalHTML('description', {
      name: 'description_html',
    }),
  ],
}
