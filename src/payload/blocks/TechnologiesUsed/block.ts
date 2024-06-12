import { Block } from 'payload/types'

import iconField from '@/payload/fields/icon'

export const Technologies_Used_Block: Block = {
  slug: 'TechnologiesUsed',
  interfaceName: 'TechnologiesTypes',
  labels: {
    singular: 'Technologies Used Block',
    plural: 'Technologies Used Blocks',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
    },
    {
      name: 'sub_title',
      type: 'text',
      label: 'Sub Title',
    },
    {
      name: 'technologies',
      type: 'array',
      fields: [
        {
          name: 'name',
          type: 'text',
          label: 'Technology Name',
        },
        iconField(),
      ],
    },
  ],
}
