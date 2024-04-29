import { Block } from 'payload/types'

const Page1 = () => {
  return <div>This is Home page</div>
}

export default Page1

//schema
export const Page1_Block: Block = {
  slug: 'page1',
  // imageURL: '',
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
