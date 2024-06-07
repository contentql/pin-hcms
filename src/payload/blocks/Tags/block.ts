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
      label: 'Tags',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'image',
          label: 'Image',
          type: 'upload',
          relationTo: 'media',
          required: true,
          admin: {
            description: 'upload image',
          },
        },
        {
          name: 'name',
          label: 'Name',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          label: 'Description',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}
