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
    const pageDataWithTagIds = tags.reduce(
      (acc, tag, index) =>
        acc.replace(
          new RegExp(`\\$\\{\\{tag_${index + 1}_id\\}\\}`, 'g'),
          tag.id || '',
        ),
      JSON.stringify(pageData),
    )

    const pageDataWithBlogIdsAndTagIds = blogs.reduce(
      (acc, blog, index) =>
        acc.replace(
          new RegExp(`\\$\\{\\{blog_${index + 1}_id\\}\\}`, 'g'),
          blog.id || '',
        ),
      pageDataWithTagIds,
    )

    const finalPageData: HomePageData = JSON.parse(pageDataWithBlogIdsAndTagIds)

    const pageResult = await payload.create({
      collection: 'pages',
      data: finalPageData,
    })

    return pageResult
  } catch (error) {
    throw error
  }
}
