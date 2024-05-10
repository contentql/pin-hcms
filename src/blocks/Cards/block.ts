import { Block } from 'payload/types'

export const Cards_Block: Block = {
  slug: 'Cards',
  // imageURL: '',
  interfaceName: 'CardsTypes',
  labels: {
    singular: 'Cards Block',
    plural: 'Cards Blocks',
  },
  fields: [
    {
      name: 'cards',
      type: 'array',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Title',
        },
        {
          name: 'description',
          type: 'text',
          label: 'Description',
        },
        {
          name: 'link',
          type: 'text',
          label: 'Link',
        },
      ],
    },
  ],
}
