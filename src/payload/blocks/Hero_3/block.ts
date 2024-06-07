import { Block } from 'payload/types'

import iconField from '@/payload/fields/icon'

export const Hero_3_Block: Block = {
  slug: 'Hero3',
  interfaceName: 'Hero_3Type',
  labels: {
    singular: 'Hero_3 Block',
    plural: 'Hero_3 Blocks',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      required: true,
    },
    {
      name: 'sub_title',
      type: 'text',
      label: 'Sub Title',
      required: true,
    },
    {
      name: 'buttons',
      label: 'Buttons',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'button',
          label: 'Button Label',
          type: 'text',
          required: true,
        },
        {
          name: 'link',
          label: 'Link',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'brand_title',
      type: 'text',
      label: 'Brands Title',
    },
    {
      name: 'brands',
      label: 'Brands',
      type: 'array',
      fields: [
        {
          name: 'brand_name',
          type: 'text',
          label: 'Brand Name',
          required: true,
        },
        iconField(),
      ],
    },
  ],
}
