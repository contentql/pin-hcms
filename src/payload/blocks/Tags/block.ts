import { Block } from 'payload/types'

export const Tags_Block: Block = {
  slug: 'Tags',
  interfaceName: 'TagsType',
  labels: {
    singular: 'Tags Block',
    plural: 'Tags Blocks',
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
      name: 'tags',
      type: 'relationship',
      relationTo: ['tags'],
      label: 'Tags',
      hasMany: true,
    },
  ],
}
