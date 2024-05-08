import { Block } from 'payload/types'

export const HeroParallax_Block: Block = {
  slug: 'HeroParallax',
  // imageURL: '',
  labels: {
    singular: 'HeroParallax Block',
    plural: 'HeroParallax Blocks',
  },
  fields: [
    {
      name: 'hero',
      type: 'array',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Title',
        },
        {
          name: 'link',
          type: 'text',
          label: 'Link',
        },
        {
          name: 'thumbnail',
          type: 'upload',
          relationTo: 'media',
          label: 'Thumbnail Image',
        },
      ],
    },
  ],
}
