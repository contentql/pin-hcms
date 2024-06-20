import { Blog, Page, Tag } from '@payload-types'
import { Payload } from 'payload'

import { HomePageData } from './data'

export interface SeedHomePage {
  payload: Payload
  pageData: Omit<Page, 'id' | 'createdAt' | 'updatedAt'>
  tags: Tag[]
  blogs: Blog[]
}

export const seedHomePage = async ({
  payload,
  pageData,
  tags,
  blogs,
}: SeedHomePage) => {
  try {
    const pageDataWithTagsIds = tags.reduce(
      (acc, tag, index) =>
        acc.replace(
          new RegExp(`\\$\\{\\{tag_${index + 1}_id\\}\\}`, 'g'),
          tag.id || '',
        ),
      JSON.stringify(pageData),
    )

    const pageDataWithBlogsIdsAndTagsIds = blogs.reduce(
      (acc, blog, index) =>
        acc.replace(
          new RegExp(`\\$\\{\\{blog_${index + 1}_id\\}\\}`, 'g'),
          blog.id || '',
        ),
      pageDataWithTagsIds,
    )

    const finalPageData: HomePageData = JSON.parse(
      pageDataWithBlogsIdsAndTagsIds,
    )

    const pageResult = await payload.create({
      collection: 'pages',
      data: finalPageData,
    })

    return pageResult
  } catch (error) {
    throw error
  }
}
