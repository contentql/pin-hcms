import { HomePageData } from '../home/data'
import { Tag, User } from '@payload-types'
import { Payload } from 'payload'

import { BlogsData, BlogsImagesData } from './data'

export interface SeedBlogPageAndBlogs {
  payload: Payload
  pageData: HomePageData
  blogsImagesData: BlogsImagesData
  blogsData: BlogsData
  user: User
  tags: Tag[]
}

export const seedBlogPageAndBlogs = async ({
  payload,
  pageData,
  blogsImagesData,
  blogsData,
  user,
  tags,
}: SeedBlogPageAndBlogs) => {
  try {
    const pageResult = await payload.create({
      collection: 'pages',
      data: pageData,
    })

    const blogsImagesResult = await Promise.all(
      blogsImagesData.map(
        async blogImageData =>
          await payload.create({
            collection: 'media',
            data: { ...blogImageData.data },
            filePath: blogImageData.filePath,
          }),
      ),
    )

    const blogsDataWithUserId = JSON.stringify(blogsData).replace(
      new RegExp(`\\$\\{\\{user_1_id\\}\\}`, 'g'),
      user.id || '',
    )

    const blogsDataWithImageIdsAndUserId = blogsImagesResult.reduce(
      (acc, blogImage, index) =>
        acc.replace(
          new RegExp(`\\$\\{\\{blog_image_${index + 1}_id\\}\\}`, 'g'),
          blogImage.id || '',
        ),
      blogsDataWithUserId,
    )

    const blogsDataWithTagsIdsAndImagesIdsAndUserId = tags.reduce(
      (acc, tag, index) =>
        acc.replace(
          new RegExp(`\\$\\{\\{tag_${index + 1}_id\\}\\}`, 'g'),
          tag.id || '',
        ),
      blogsDataWithImageIdsAndUserId,
    )

    const finalBlogsData: BlogsData = JSON.parse(
      blogsDataWithTagsIdsAndImagesIdsAndUserId,
    )

    const blogsResult = await Promise.all(
      finalBlogsData.map(
        async finalBlogData =>
          await payload.create({
            collection: 'blogs',
            data: finalBlogData,
          }),
      ),
    )

    return blogsResult
  } catch (error) {
    throw error
  }
}
