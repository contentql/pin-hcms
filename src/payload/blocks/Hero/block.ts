import { Block } from 'payload/types'

export const Hero_Block: Block = {
  slug: 'Hero',
  // imageURL: '',
  interfaceName: 'HeroType',
  labels: {
    singular: 'Hero Block',
    plural: 'Hero Blocks',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Hero Title',
    },
    {
      name: 'subtitle',
      type: 'text',
      label: 'Hero Subtitle',
    },
    {
      name: 'button_1_Text',
      type: 'text',
      label: 'Button 1 Text',
    },
    {
      name: 'button_1_path',
      type: 'text',
      label: 'Button 1 Path',
    },
    {
      name: 'button_2_Text',
      type: 'text',
      label: 'Button 2 Text',
    },
    {
      name: 'button_2_path',
      type: 'text',
      label: 'Button 2 Path',
    },
    {
      name: 'people',
      type: 'array',
      label: 'People',
      fields: [
        {
          name: 'name',
          type: 'text',
          label: 'Name',
        },
        {
          name: 'designation',
          type: 'text',
          label: 'Designation',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Image',
        },
      ],
    },
  ],
}
