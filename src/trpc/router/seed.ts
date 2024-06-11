import seeding from '@/scripts/seed'
import { publicProcedure, router } from '@/trpc'

export const seedRouter = router({
  startSeeding: publicProcedure.mutation(async () => {
    try {
      await seeding()

      return { status: 'success' }
    } catch (error: any) {
      console.log(error)
      throw new Error(error.message)
    }
  }),
})
