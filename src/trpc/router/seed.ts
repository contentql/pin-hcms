import { publicProcedure, router } from '@/trpc'

import seeding from '~/src/scripts/seed'

export const seed = router({
  startSeeding: publicProcedure.query(async () => {
    try {
      await seeding()

      return { status: 'success' }
    } catch (error: any) {
      console.log(error)
      throw new Error(error.message)
    }
  }),
})
