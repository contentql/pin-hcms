import { Block } from 'payload/types'

export const Faqs_Block: Block = {
  slug: 'Faqs',
  //   imageURL: '',
  interfaceName: 'FaqsType',
  labels: {
    singular: 'Faqs Block',
    plural: 'Faqs Blocks',
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
      name: 'questions',
      label: 'Questions',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'question',
          label: 'Question',
          type: 'text',
          required: true,
        },
        {
          name: 'answer',
          label: 'Answer',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}
