import { Block } from 'payload/types'


//schema
export const Page1_Block: Block = {
  slug: 'page1',
   imageURL: './page.PNG',
  labels: {
    singular: 'Page1 Block',
    plural: 'Page1 Blocks',
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
  ],
}
