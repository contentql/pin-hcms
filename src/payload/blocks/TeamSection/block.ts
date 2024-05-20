import { Block } from 'payload/types'

export const TeamSection_Block: Block = {
  slug: 'TeamSection',
  //   imageURL: '',
  interfaceName: 'TeamSectionType',
  labels: {
    singular: 'TeamSection Block',
    plural: 'TeamSection Blocks',
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
      name: 'teamDetails',
      label: 'Team Details',
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
          name: 'designation',
          label: 'Designation',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}
