import { Block } from 'payload/types'

export const Feature_Sticky_Scroll_Block: Block = {
  slug: 'FeatureStickyScroll',
  // imageURL: '',
  interfaceName: 'FeatureStickyScrollType',
  labels: {
    singular: 'Feature Sticky Block',
    plural: 'Feature Sticky Blocks',
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
          type: 'upload',
          relationTo: 'media',
          label: 'Featured Image',
        },
      ],
    },
  ],
}
