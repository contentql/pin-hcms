import { Block } from 'payload/types'

export const HeroParallax_Block: Block = {
  slug: 'HeroParallax',
  // imageURL: '',
  interfaceName: 'HeroParallaxTypes',
  labels: {
    singular: 'Hero Parallax Block',
    plural: 'Hero Parallax Blocks',
  },
  fields: [
    { name: 'hero_title', type: 'text', label: 'Hero Title' },
    { name: 'hero_description', type: 'text', label: 'Hero Description' },
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
