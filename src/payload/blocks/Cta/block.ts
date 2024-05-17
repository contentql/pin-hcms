import { Block } from 'payload/types'

export const Cta_Block: Block = {
  slug: 'Cta',
  // imageURL: '',
  interfaceName: 'CtaType',
  labels: {
    singular: 'Cta Block',
    plural: 'Cta Blocks',
  },
  fields: [
    {
      name: 'title',
      type: 'textarea',
      label: 'Cta Title',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
    },
    {
      name: 'button',
      type: 'text',
      label: 'Button Text',
    },
    {
      name: 'buttonTwo',
      type: 'text',
      label: 'Button 2',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Image',
    },
  ],
}
