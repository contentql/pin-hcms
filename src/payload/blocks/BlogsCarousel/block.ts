import { Block } from 'payload/types'

export const Blogs_Carousel_Block: Block = {
  slug: 'BlogsCarousel',
  interfaceName: 'BlogsCarouselTypes',
  labels: {
    singular: 'Blog Carousel Block',
    plural: 'Blogs Carousel Blocks',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      required: true,
    },
    {
      name: 'latest_blogs',
      type: 'relationship',
      relationTo: ['blogs'],
      label: 'Latest Blogs',
      hasMany: true,
      required: true,
      minRows: 5,
      maxRows: 7,
    },
  ],
}
