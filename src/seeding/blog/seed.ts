import { HomePageData } from '../home/data'
import { Tag, User } from '@payload-types'
import { Payload } from 'payload'

import { BlogsData, BlogsImagesData } from './data'

export interface SeedBlogPage {
  payload: Payload
  pageData: HomePageData
  blogsImages: BlogsImagesData
  blogsData: BlogsData
  user: User
  tags: Tag[]
}

export const seedBlogPageAndBlogs = async ({
  payload,
  pageData,
  blogsImages,
  blogsData,
  user,
  tags,
}: SeedBlogPage) => {
  try {
    const pageResult = await payload.create({
      collection: 'pages',
      data: pageData,
    })

    const uploadedBlogsImages = await Promise.all(
      blogsImages.map(
        async blogImage =>
          await payload.create({
            collection: 'media',
            data: { ...blogImage.data },
            filePath: blogImage.filePath,
          }),
      ),
    )

    const blogsDataWithUserId = JSON.stringify(blogsData).replace(
      new RegExp(`\\$\\{\\{user_1_id\\}\\}`, 'g'),
      user.id || '',
    )

    const blogsDataWithImageIdsAndUserId = uploadedBlogsImages.reduce(
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
