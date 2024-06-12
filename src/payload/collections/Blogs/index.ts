import {
  FixedToolbarFeature,
  HTMLConverterFeature,
  lexicalEditor,
  lexicalHTML,
} from '@payloadcms/richtext-lexical'
import { CollectionConfig } from 'payload/types'

import { slugField } from '@/payload/fields'

import { assignUserId } from './field-level-hooks/assignUserId'

// import { CustomSlugComponent } from '@/payload/fields/custom-slug-component'

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
      name: 'author',
      type: 'relationship',
      label: 'Author',
      relationTo: ['users'],
      hasMany: true,
      // defaultValue: ({ user }: { user: User }) => {
      //   if (!user) return undefined

      //   return { relationTo: 'users', value: user?.id }
      // },
      hooks: {
        beforeChange: [assignUserId],
      },
      filterOptions: ({ relationTo, data }) => {
        if (relationTo === 'users') {
          return {
            role: {
              equals: 'author',
            },
          }
        } else {
          return false
        }
      },
    },
    {
      name: 'select_blog_size',
      type: 'select',
      admin: {
        isClearable: true,
        isSortable: true, // use mouse to drag and drop different values, and sort them according to your choice
      },
      defaultValue: '1',
      options: [
        {
          label: 'One',
          value: '1',
        },
        {
          label: 'Two',
          value: '2',
        },
        // {
        //   label: 'Three',
        //   value: '3',
        // },
      ],
    },

    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    slugField(),
    // It will directly use title field to add slug
    // {
    //   name: 'slug',
    //   label: 'Slug',
    //   type: 'text',
    //   index: true,
    //   required: false, // Need to be false so that we can use beforeValidate hook to set slug.
    //   admin: {
    //     position: 'sidebar',
    //     description: 'keep slug empty if you want this page as homepage',
    //     condition: data => {
    //       return !data?.isHome
    //     },
    //     components: {
    //       Field: CustomSlugComponent,
    //     },
    //   },
    // },
    {
      name: 'tags',
      label: 'Tags',
      type: 'relationship',
      relationTo: ['tags'],
      hasMany: true,
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

    // slugField(),
  ],
}
