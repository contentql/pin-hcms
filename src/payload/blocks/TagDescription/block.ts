import { Block } from 'payload/types'

export const TagDescription_Block: Block = {
  slug: 'TagDescription',
  // imageURL: '',
  interfaceName: 'TagDescription_Type',
  labels: {
    singular: 'TagDescription Block',
    plural: 'TagDescription Blocks',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      required: true,
      admin: {
        description: 'Please enter tag title in lowercase',
      },
    },
    {
      name: 'description',
      type: 'text',
      label: 'Description',
      required: true,
    },
    {
      name: 'image',
      label: 'Image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        description: 'upload tag image',
      },
    },
  ],
}
