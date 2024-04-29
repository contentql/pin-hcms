import { Block } from 'payload/types'

const Hero1_1 = () => {
  return <div>index</div>
}

export default Hero1_1

export const Hero1_1_Block: Block = {
  slug: 'hero1_1',
  imageURL: '',
  labels: {
    singular: 'Hero1_1 Block',
    plural: 'Hero1_1 Blocks',
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
      name: 'button_text',
      label: 'Button Text',
      type: 'text',
      required: true,
    },
  ],
}
