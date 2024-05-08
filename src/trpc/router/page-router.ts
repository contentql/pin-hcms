import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { z } from 'zod'

import { publicProcedure, router } from '@/trpc'

const payload = await getPayload({
  config: configPromise,
})
export const getLayouts = router({
  getPageData: publicProcedure
    .input(
      z.object({
        slug: z.string(),
      }),
    )
    .query(async ({ input }) => {
      try {
        const { docs } = await payload.find({
          collection: 'pages',
          draft: false,
          where: {
            slug: {
              equals: input.slug,
            },
          },
        })

        // if (!docs.at(0)) {
        //   throw new TRPCError({ code: 'NOT_FOUND' })
        // }

        return docs.at(0)
      } catch (error: any) {
        console.log(error)
      }
    }),
  getAllPages: publicProcedure.query(async () => {
    try {
      const { docs } = await payload.find({
        collection: 'pages',
        draft: false,
      })

      return docs
    } catch (error: any) {
      console.log(error)
      throw new Error(error.message)
    }
  }),
})
