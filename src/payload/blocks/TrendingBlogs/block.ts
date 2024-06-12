import { Block } from 'payload/types'

export const Trending_Blogs_Block: Block = {
  slug: 'TrendingBlogs',
  interfaceName: 'TrendingBlogsTypes',
  labels: {
    singular: 'Trending Blogs Block',
    plural: 'Trending Blogs Blocks',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
    },
    {
      name: 'sub_title',
      type: 'text',
      label: 'Sub Title',
    },
  ],
}
