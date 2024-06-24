import path from 'path'
import { Page, Tag } from 'payload-types'

export type TagPageImageData = { data: { alt: string }; filePath: string }

export type TagPageData = Omit<Page, 'id' | 'createdAt' | 'updatedAt'>

export type TagsImagesData = { data: { alt: string }; filePath: string }[]

export type TagsData = Omit<Tag, 'id' | 'createdAt' | 'updatedAt'>[]

export const tagPageImageData: TagPageImageData = {
  data: { alt: 'tag page image' },
  filePath: path.join(process.cwd(), '/public/images/seed/contentql-logo.png'),
}

export const tagPageData: TagPageData = {
  title: 'Tags',
  isHome: false,
  _status: 'published',
  blocks: [
    {
      blockType: 'TagDescription',
      title: 'Tag',
      description:
        'On this page, you will find a comprehensive list of tags used across various blogs. Tags serve as a crucial organizational tool, helping to categorize and filter content based on specific topics or themes. Each tag represents a particular subject, making it easier for readers to locate articles of interest.',
      image: '${{tag_page_image_1_id}}',
    },
  ],
}

export const tagsImagesData: TagsImagesData = [
  {
    data: { alt: 'tag image-1' },
    filePath: path.join(
      process.cwd(),
      '/public/images/seed/contentql-logo.png',
    ),
  },
  {
    data: { alt: 'tag image-2' },
    filePath: path.join(process.cwd(), '/public/images/seed/tag-ai.png'),
  },
  {
    data: { alt: 'tag image-3' },
    filePath: path.join(
      process.cwd(),
      '/public/images/seed/tag-Entrepreneurship.webp',
    ),
  },
  {
    data: { alt: 'tag image-4' },
    filePath: path.join(
      process.cwd(),
      '/public/images/seed/tag-projectmanagement.webp',
    ),
  },
]

export const tagsData: TagsData = [
  {
    title: 'welcome',
    color: 'blue',
    description: 'This is a welcome tag',
    tagImage: '${{tag_image_1_id}}',
    _status: 'published',
  },
  {
    title: 'Management',
    color: 'purple',
    description: 'This is a Project Management tag',
    tagImage: '${{tag_image_1_id}}',
    _status: 'published',
  },
  {
    title: 'AI Insights',
    color: 'indigo',
    description: 'This is a AI Insights tag',
    tagImage: '${{tag_image_1_id}}',
    _status: 'published',
  },
  {
    title: 'Enterprise',
    color: 'green',
    description: 'This is a Enterprise tag',
    tagImage: '${{tag_image_1_id}}',
    _status: 'published',
  },
]
