import configPromise from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'

import { publicProcedure, router } from '@/trpc'

const payload = await getPayloadHMR({
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
