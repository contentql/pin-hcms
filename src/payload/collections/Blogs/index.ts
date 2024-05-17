import {
  FixedToolbarFeature,
  HTMLConverterFeature,
  lexicalEditor,
  lexicalHTML,
} from '@payloadcms/richtext-lexical'
import { CollectionConfig } from 'payload/types'

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
    useAsTitle: 'title',
    // preview: doc => {
    //   return `${env.PAYLOAD_URL}/next/preview?url=${encodeURIComponent(
    //     `${env.PAYLOAD_URL}/blog/${doc.slug}`,
    //   )}&secret=${env.PAYLOAD_PUBLIC_DRAFT_SECRET}`
    // },
  },
  versions: {
    drafts: true,
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'sub_title',
      label: 'Sub Title',
      type: 'text',
      required: true,
    },
    {
      name: 'blog_image',
      label: 'Blog Image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        description: 'upload blog image',
      },
    },
    {
      name: 'description',
      type: 'richText',
      label: 'Content',
      required: true,
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          FixedToolbarFeature(),
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
    {
      name: 'author_name',
      label: 'Author Name',
      type: 'text',
      required: true,
    },
  ],
}
