import { Block } from 'payload/types'

export const Globe_Block: Block = {
  slug: 'Globe',
  interfaceName: 'GlobeType',
  labels: {
    singular: 'Globe Block',
    plural: 'Globe Blocks',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
    },
  ],
}
