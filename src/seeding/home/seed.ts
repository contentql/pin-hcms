import { Blog, Page, Tag } from '@payload-types'
import { Payload } from 'payload'

export const seedHomePage = async ({
  payload,
  data,
  tagsData,
  blogsData,
}: {
  payload: Payload
  data: Omit<Page, 'id' | 'createdAt' | 'updatedAt'>
  tagsData: Tag[]
  blogsData: Blog[]
}) => {
  try {
    const replacedTagsData = tagsData.reduce(
      (acc, tag, index) =>
        acc.replace(
          new RegExp(`\\$\\{\\{tag_${index + 1}_id\\}\\}`, 'g'),
          tag.id || '',
        ),
      JSON.stringify(data),
    )

    const replacedBlogsData = blogsData.reduce(
      (acc, blog, index) =>
        acc.replace(
          new RegExp(`\\$\\{\\{blog_${index + 1}_id\\}\\}`, 'g'),
          blog.id || '',
        ),
      replacedTagsData,
    )

    const parsedData = JSON.parse(replacedBlogsData)

    const result = await payload.create({
      collection: 'pages',
      data: parsedData,
    })

    return result
  } catch (error) {
    throw error
  }
}
