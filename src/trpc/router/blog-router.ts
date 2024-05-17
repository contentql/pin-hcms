import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { z } from 'zod'

import { publicProcedure, router } from '@/trpc'

const payload = await getPayload({
  config: configPromise,
})

export const getBlogs = router({
  getAllBlogs: publicProcedure.query(async () => {
    try {
      const { docs } = await payload.find({
        collection: 'blogs',
        draft: false,
      })

      return docs
    } catch (error: any) {
      console.log(error)
      throw new Error(error.message)
    }
  }),

  getBlogBySlug: publicProcedure
    .input(
      z.object({
        slug: z.string(),
      }),
    )
    .query(async ({ input }) => {
      try {
        const { docs } = await payload.find({
          collection: 'blogs',
          draft: false,
          where: {
            // slug: {
            //   equals: input.slug,
            // },
            id: {
              equals: input.slug,
            },
          },
        })

        return docs.at(0)
      } catch (error: any) {
        console.log(error)
        throw new Error(error.message)
      }
    }),
})
