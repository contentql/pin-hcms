import { Block } from 'payload/types'

export const WobbleCard_Block: Block = {
  slug: 'WobbleCard',
  // imageURL: '',
  interfaceName: 'WobbleCardType',
  labels: {
    singular: 'WobbleCard Block',
    plural: 'WobbleCard Blocks',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Hero Title',
    },
  ],
}
