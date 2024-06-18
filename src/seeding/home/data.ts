import { Page } from 'payload-types'

export const homePageData: Omit<Page, 'id' | 'createdAt' | 'updatedAt'> = {
  title: 'Home Page',
  isHome: true,
  _status: 'published',
  blocks: [
    {
      headline: 'Bring Your',
      subHeadline: 'Dream into Reality',
      sub_title:
        'We increase revenue and maintain sustainable growth of your business through powerful website of next js',
      tag_title: 'Popular Tags',
      buttons: [
        {
          button: 'Book a Meeting',
          link: '#',
        },
      ],
      tags: [
        { relationTo: 'tags', value: '${{tag_1_id}}' },
        { relationTo: 'tags', value: '${{tag_2_id}}' },
        { relationTo: 'tags', value: '${{tag_3_id}}' },
        { relationTo: 'tags', value: '${{tag_4_id}}' },
      ],
      blockType: 'Hero3',
    },
    {
      title: 'Popular Blogs',
      sub_title:
        'Discover the most influential blogs across various categories like technology, lifestyle, travel, food, fashion, and personal finance. ',
      popular_blogs: [
        {
          relationTo: 'blogs',
          value: '${{blog_1_id}}',
        },
        {
          relationTo: 'blogs',
          value: '${{blog_2_id}}',
        },
        {
          relationTo: 'blogs',
          value: '${{blog_3_id}}',
        },
        {
          relationTo: 'blogs',
          value: '${{blog_4_id}}',
        },
        {
          relationTo: 'blogs',
          value: '${{blog_5_id}}',
        },
        {
          relationTo: 'blogs',
          value: '${{blog_6_id}}',
        },
      ],
      blockType: 'PopularBlogs',
    },
    {
      title: 'Tags',
      sub_title: 'Bridging Content with Concise Labels',
      tags: [
        {
          relationTo: 'tags',
          value: '${{tag_1_id}}',
        },
        {
          relationTo: 'tags',
          value: '${{tag_2_id}}',
        },
        {
          relationTo: 'tags',
          value: '${{tag_3_id}}',
        },
        {
          relationTo: 'tags',
          value: '${{tag_4_id}}',
        },
      ],
      blockType: 'Tags',
    },
    {
      title: 'Top Picks',
      top_picks: [
        {
          relationTo: 'blogs',
          value: '${{blog_1_id}}',
        },
        {
          relationTo: 'blogs',
          value: '${{blog_2_id}}',
        },
        {
          relationTo: 'blogs',
          value: '${{blog_3_id}}',
        },
      ],
      blockType: 'TopPicks',
    },
  ],
}
