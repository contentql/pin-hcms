import { Block } from 'payload/types'

export const Testimonials_Block: Block = {
  slug: 'Testimonials',
  // imageURL: '',
  interfaceName: 'TestimonialsTypes',
  labels: {
    singular: 'Testimonials Block',
    plural: 'Testimonials Blocks',
  },
  fields: [
    {
      name: 'testimonials',
      type: 'array',
      fields: [
        {
          name: 'quote',
          type: 'textarea',
          label: 'Quote',
        },
        {
          name: 'name',
          type: 'text',
          label: 'Name',
        },
        {
          name: 'title',
          type: 'text',
          label: 'Title',
        },
      ],
    },
  ],
}
