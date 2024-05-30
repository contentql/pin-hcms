import configPromise from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import { z } from 'zod'

import { publicProcedure, router } from '@/trpc'

const payload = await getPayloadHMR({ config: configPromise })

export const tagRouter = router({
  getBlogs: publicProcedure
    .input(
      z.object({
        tag: z.string(),
      }),
    )
    .query(async ({ input }) => {
      try {
        const { tag } = input
        const {
          docs: [{ id }],
        } = await payload.find({
          collection: 'tags',
          where: {
            slug: {
              equals: tag,
            },
          },
        })

        const { docs } = await payload.find({
          collection: 'blogs',
          where: {
            'tags.value': {
              contains: id,
            },
          },
        })
        return docs
      } catch (error: any) {
        console.log(error)
        throw new Error(error.message)
      }
    }),
})
