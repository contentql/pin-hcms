import { Block } from 'payload/types'

export const Test1_1_Block: Block = {
  slug: 'Test1_1',
  // imageURL: '',
  labels: {
    singular: 'Test1_1 Block',
    plural: 'Test1_1 Blocks',
  },
  fields: [
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
  ],
}
