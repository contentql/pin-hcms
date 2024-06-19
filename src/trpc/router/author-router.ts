import configPromise from '@payload-config'
import { Tag, User } from '@payload-types'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import { z } from 'zod'

import { publicProcedure, router } from '@/trpc'

const payload = await getPayloadHMR({ config: configPromise })

export const authorRouter = router({
  getAllAuthorsWithCount: publicProcedure.query(async () => {
    try {
      const { docs: authors } = await payload.find({
        collection: 'users',
        where: {
          role: {
            equals: 'author',
          },
        },
      })

      //   const { docs: blogs } = await payload.find({
      //     collection: 'blogs',
      //   })

      const authorBlogCounts = await Promise.all(
        authors.map(async author => {
          const count = await payload.count({
            collection: 'blogs',
            where: {
              'author.value': {
                equals: author.id,
              },
            },
          })
          return { ...author, ...count }
        }),
      )

      return authorBlogCounts
    } catch (error: any) {
      console.error(error)
      throw new Error(error.message)
    }
  }),
  getBlogsByAuthorName: publicProcedure
    .input(
      z.object({
        author: z.string(),
      }),
    )
    .query(async ({ input }) => {
      const { author } = input
      try {
        const { docs: blogs } = await payload.find({
          collection: 'blogs',
          draft: false, // Optionally set draft filter
        })

        const blogsRelatedWithAuthor = blogs.filter(blog =>
          blog.author?.find(
            blogAuthor => (blogAuthor.value as User).name === author,
          ),
        )
        return blogsRelatedWithAuthor
      } catch (error: any) {
        console.log(error)
        throw new Error(error.message)
      }
    }),

  getAuthorByName: publicProcedure
    .input(
      z.object({
        author: z.string(),
      }),
    )
    .query(async ({ input }) => {
      const { author } = input
      try {
        const { docs: user } = await payload.find({
          collection: 'users',
          draft: false,
          where: {
            name: {
              equals: author,
            },
          },
        })

        return user?.at(0)
      } catch (error: any) {
        console.log(error)
        throw new Error(error.message)
      }
    }),
  getAllTagsByAuthorName: publicProcedure
    .input(
      z.object({
        author: z.string(),
      }),
    )
    .query(async ({ input }) => {
      const { author } = input
      try {
        const { docs: user } = await payload.find({
          collection: 'users',
          draft: false,
          where: {
            name: {
              equals: author,
            },
          },
        })

        const { docs: blogsByAuthor } = await payload.find({
          collection: 'blogs',
          where: {
            'author.value': {
              equals: user.at(0)?.id,
            },
          },
        })
        const temp = blogsByAuthor?.flatMap(blog =>
          blog?.tags?.map(tag => (tag?.value as Tag)?.title),
        )

        return [...new Set(temp)]
      } catch (error: any) {
        console.log(error)
        throw new Error(error.message)
      }
    }),
  getBlogsByAuthorNameAndTag: publicProcedure
    .input(
      z.object({
        authorName: z.string(),
        tagSlug: z.string(),
      }),
    )
    .query(async ({ input }) => {
      const { authorName, tagSlug } = input
      try {
        const { docs: user } = await payload.find({
          collection: 'users',
          draft: false,
          where: {
            name: {
              equals: authorName,
            },
          },
        })

        const { docs: blogsByAuthor } = await payload.find({
          collection: 'blogs',
          where: {
            'author.value': {
              equals: user.at(0)?.id,
            },
          },
        })
        //console.log(blogsByAuthor)
        return blogsByAuthor?.filter(blog =>
          blog?.tags?.some(tag => (tag?.value as Tag)?.slug === tagSlug),
        )
      } catch (error: any) {
        console.log(error)
        throw new Error(error.message)
      }
    }),
})
