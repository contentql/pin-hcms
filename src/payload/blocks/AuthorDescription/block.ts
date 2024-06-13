import { Block } from 'payload/types'

export const AuthorDescription_Block: Block = {
  slug: 'AuthorDescription',
  // imageURL: '',
  interfaceName: 'AuthorDescription_Type',
  labels: {
    singular: 'AuthorDescription Block',
    plural: 'AuthorDescription Blocks',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      required: true,
      admin: {
        description: 'Please enter all authors title in lowercase',
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
        description: 'upload author image',
      },
    },
  ],
}
