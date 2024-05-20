import { Block } from 'payload/types'

export const Feature_Sticky_Scroll_Block: Block = {
  slug: 'FeatureStickyScroll',
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
          name: 'subTitle',
          type: 'text',
          label: 'Subtitle',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Tab Image',
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Heading',
        },
        {
          name: 'description',
          type: 'text',
          label: 'Description',
        },
        {
          name: 'buttonText',
          type: 'text',
          label: 'Button Name',
        },
      ],
    },
  ],
}
