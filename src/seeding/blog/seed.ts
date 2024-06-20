import { HomePageData } from '../home/data'
import { Blog } from '@payload-types'
import { Payload } from 'payload'

import { BlogsData, BlogsImagesData } from './data'

export interface SeedBlogPage {
  payload: Payload
  pageData: HomePageData
  blogsImages: BlogsImagesData
  blogsData: BlogsData
}

export const seedBlogPage = async ({
  payload,
  pageData,
  blogsImages,
  blogsData,
}: SeedBlogPage) => {
  try {
    const pageResult = await payload.create({
      collection: 'pages',
      data: {
        title: 'Blog',
        isHome: false,
        _status: 'published',
      },
    })

    const uploadedImages = await Promise.all(
      blogsImages.map(
        async blogImage =>
          await payload.create({
            collection: 'media',
            data: { ...blogImage.data },
            filePath: blogImage.filePath,
          }),
      ),
    )

    const blogsDataWithImageIds = uploadedImages.reduce(
      (acc, image, index) =>
        acc.replace(
          new RegExp(`\\$\\{\\{image_${index + 1}_id\\}\\}`, 'g'),
          image.id || '',
        ),
      JSON.stringify(blogsData),
    )

    const finalBlogsData: Omit<Blog, 'id' | 'createdAt' | 'updatedAt'>[] =
      JSON.parse(blogsDataWithImageIds)

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
