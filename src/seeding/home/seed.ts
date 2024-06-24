import { Blog, Tag } from '@payload-types'
import { Payload } from 'payload'

import { generateRandomNumber } from '@/utils/generateRandomNumber'

import { HomePageData, homePageData } from './data'

export interface SeedHomePage {
  payload: Payload
  tags: Tag[]
  blogs: Blog[]
}

export const seedHomePage = async ({ payload, tags, blogs }: SeedHomePage) => {
  try {
    // const pageDataWithTagsIds = tags.reduce(
    //   (acc, tag, index) =>
    //     acc.replace(
    //       new RegExp(`\\$\\{\\{tag_${index + 1}_id\\}\\}`, 'g'),
    //       tag.id || '',
    //     ),
    //   JSON.stringify(homePageData),
    // )

    // const pageDataWithBlogsIdsAndTagsIds = blogs.reduce(
    //   (acc, blog, index) =>
    //     acc.replace(
    //       new RegExp(`\\$\\{\\{blog_${index + 1}_id\\}\\}`, 'g'),
    //       blog.id || '',
    //     ),
    //   pageDataWithTagsIds,
    // )

    // const finalPageData: HomePageData = JSON.parse(
    //   pageDataWithBlogsIdsAndTagsIds,
    // )

    const finalPageData: HomePageData = {
      ...homePageData,
      blocks: homePageData.blocks?.map(block => {
        if (block.blockType === 'Hero3' || block.blockType === 'Tags') {
          return {
            ...block,
            tags: block.tags?.map((tag, tagIndex) => {
              return {
                ...tag,
                value: tags?.at(tagIndex)?.id || '',
              }
            }),
          }
        }

        if (block.blockType === 'PopularBlogs') {
          return {
            ...block,
            popular_blogs: block.popular_blogs.map(popularBlog => {
              const randomBlogIndex = generateRandomNumber(0, 6)

              return {
                ...popularBlog,
                value: blogs?.at(randomBlogIndex)?.id || '',
              }
            }),
          }
        }

        if (block.blockType === 'BlogsCarousel') {
          return {
            ...block,
            latest_blogs: block.latest_blogs.map(latestBlog => {
              const randomBlogIndex = generateRandomNumber(0, 6)

              return {
                ...latestBlog,
                value: blogs?.at(randomBlogIndex)?.id || '',
              }
            }),
          }
        }

        if (block.blockType === 'TopPicks') {
          return {
            ...block,
            top_picks: block.top_picks.map(topPick => {
              const randomBlogIndex = generateRandomNumber(0, 6)

              return {
                ...topPick,
                value: blogs?.at(randomBlogIndex)?.id || '',
              }
            }),
          }
        }

        return block
      }),
    }

    const pageResult = await payload.create({
      collection: 'pages',
      data: finalPageData,
    })

    return pageResult
  } catch (error) {
    throw error
  }
}
