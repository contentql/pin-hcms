import { Block } from 'payload/types'

export const TypewriterEffectSmooth_Block: Block = {
  slug: 'TypewriterEffectSmooth',
  //   imageURL: '',
  interfaceName: 'TypewriterEffectSmoothType',
  labels: {
    singular: 'TypewriterEffectSmooth Block',
    plural: 'TypewriterEffectSmooth Blocks',
  },
  fields: [
    {
      name: 'sub_title',
      label: 'Sub Title',
      type: 'text',
      required: true,
    },
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'button_1',
      label: 'Button 1',
      type: 'text',
      required: true,
    },
    {
      name: 'button_2',
      label: 'Button 2',
      type: 'text',
      required: true,
    },
  ],
}
