import configPromise from '@payload-config'
import { getPayload } from 'payload'

import { publicProcedure, router } from '@/trpc'

const payload = await getPayload({
  config: configPromise,
})

export const getSiteSettings = router({
  getSiteSettings: publicProcedure.query(async () => {
    try {
      const data = await payload.findGlobal({
        slug: 'site-settings',
        draft: false,
      })

      return data
    } catch (error: any) {
      console.log(error)
      throw new Error(error.message)
    }
  }),
})
