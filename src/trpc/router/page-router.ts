import configPromise from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import { notFound } from 'next/navigation'
import { z } from 'zod'

import { COLLECTION_SLUG_PAGE } from '@/payload/collections/constants'
import { publicProcedure, router } from '@/trpc'
import ensurePath from '@/utils/ensurePath'

const payload = await getPayloadHMR({
  config: configPromise,
})
export const getLayouts = router({
  getPageData: publicProcedure
    .input(
      z.object({
        path: z.any(),
      }),
    )

    .query(async ({ input }) => {
      try {
        let { path } = input
        if (!path) path = '/'
        if (Array.isArray(path)) path = path.join('/')
        if (path !== '/') path = ensurePath(path).replace(/\/$/, '')
        const { docs } = await payload.find({
          collection: COLLECTION_SLUG_PAGE,
          where: { path: { equals: path } },
          depth: 3,
        })
        if (docs?.length === 0) {
          notFound()
        }
        const page = docs?.at(0)

        return page || null
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
