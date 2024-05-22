import { Block } from 'payload/types'

export const Hero_2_Block: Block = {
  slug: 'Hero2',
  // imageURL: '',
  interfaceName: 'Hero_2Type',
  labels: {
    singular: 'Hero_2 Block',
    plural: 'Hero_2 Blocks',
  },
  fields: [
    {
      name: 'caption',
      type: 'text',
      label: 'Caption',
      required: true,
    },
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
      name: 'button_text',
      type: 'text',
      label: 'Button Text',
      required: true,
    },
  ],
}
