import { Block } from 'payload/types'

export const StickyScrollReveal_Block: Block = {
  slug: 'StickyScrollReveal',
  // imageURL: '',
  interfaceName: 'StickyScrollRevealType',
  labels: {
    singular: 'StickyScrollReveal Block',
    plural: 'StickyScrollReveal Blocks',
  },
  fields: [
    {
      name: 'features',
      type: 'array',
      label: 'Features',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Title',
        },
        {
          name: 'description',
          type: 'text',
          label: 'Description',
        },
        {
          name: 'image',
          label: 'Image',
          type: 'upload',
          relationTo: 'media',
          required: true,
          admin: {
            description: 'upload image',
          },
        },
      ],
    },
  ],
}
