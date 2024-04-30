import { publicProcedure, router } from '@/trpc'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { z } from 'zod'

const payload = await getPayload({
    config: configPromise,
  })
export const getLayouts = router({
    getPageData: publicProcedure.input(z.object({slug:z.string()})).query(async ({input}) => {
  try {
    const { docs } = await payload.find({
      collection: 'pages',
      where: {
        slug: {
          equals: input.slug,
        },
      },
    })

    return docs.at(0)?.layout
  } catch (error: any) {
    console.log(error)
    throw new Error(error.message)
  }
    
  }),
})
