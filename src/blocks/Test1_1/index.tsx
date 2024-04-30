import { Block } from 'payload/types'

const Test1_1 = ({ title, sub_title, button_text }: any) => {
  return (
    <div>
      <div className='text-red-400'>{title}</div>
      <div className='text-blue-400'>{sub_title}</div>
      <button className='border'>{button_text}</button>
    </div>
  )
}

export default Test1_1

export const Test1_1_Block: Block = {
  slug: 'Test1_1',
  // imageURL: '',
  labels: {
    singular: 'Test1_1 Block',
    plural: 'Test1_1 Blocks',
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
