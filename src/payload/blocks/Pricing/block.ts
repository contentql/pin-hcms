import { Block } from 'payload/types'

export const Pricing_Block: Block = {
  slug: 'Pricing',
  // imageURL: '',
  interfaceName: 'PricingType',
  labels: {
    singular: 'Pricing Block',
    plural: 'Pricing Blocks',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
    },
    {
      name: 'subtitle',
      type: 'text',
      label: 'Subtitle',
    },
    {
      name: 'pricingCards',
      type: 'array',
      label: 'Pricing Cards',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Title',
        },
        {
          name: 'price',
          type: 'text',
          label: 'Price',
        },
        {
          name: 'description',
          type: 'text',
          label: 'Description',
        },
        {
          name: 'features',
          type: 'array',
          label: 'Features',
          fields: [
            {
              name: 'feature',
              type: 'text',
              label: 'Feature',
            },
          ],
        },
        {
          name: 'buttonText',
          type: 'text',
          label: 'Button Text',
        },
        {
          name: 'highlight',
          type: 'checkbox',
          label: 'Highlight',
        },
      ],
    },
  ],
}
