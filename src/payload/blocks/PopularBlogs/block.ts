import { Block } from 'payload/types'

export const Popular_Blogs_Block: Block = {
  slug: 'PopularBlogs',
  // imageURL: '',
  interfaceName: 'PopularBlogsTypes',
  labels: {
    singular: 'Popular Blogs Block',
    plural: 'Popular Blog Blocks',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      required: true,
    },
    {
      name: 'sub_title',
      type: 'textarea',
      label: 'Sub Title',
      required: true,
    },
    {
      name: 'popular_blogs',
      type: 'relationship',
      relationTo: ['blogs'],
      label: 'Popular Blogs',
      hasMany: true,
      required: true,
      maxRows: 6,
      admin: {
        description: 'select blogs to display in popular blogs section',
      },
    },
  ],
}
