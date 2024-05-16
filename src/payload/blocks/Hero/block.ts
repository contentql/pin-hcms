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
      name: 'buttonText',
      type: 'text',
      label: 'Hero Button',
    },
  ],
}
