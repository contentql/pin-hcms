import { Block } from 'payload/types'

export const Blog1_1: Block = {
  slug: 'blog1_1',
  imageURL: '/Blog_1.PNG',
  labels: {
    singular: 'Blog1_1 Block',
    plural: 'Blog1_1 Blocks',
  },
  fields: [
    {
      name: 'profile_image',
      label: 'Profile Image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        description: 'Profile Image',
      },
    },
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
      name: 'button_text',
      label: 'Button Text',
      type: 'text',
      required: true,
    },

    {
      name: 'blog_articles',
      label: 'Blog Articles',
      type: 'array',
      fields: [
        {
          name: 'blog_title',
          label: 'Blog Title',
          type: 'text',
          required: true,
        },
        {
          name: 'author_name',
          label: 'Author Name',
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
            description: 'Blog Image',
          },
        },
        {
          name: 'user_image',
          label: 'User Image',
          type: 'upload',
          relationTo: 'media',
          required: true,
          admin: {
            description: 'User Image',
          },
        },
      ],
    },
  ],
}
