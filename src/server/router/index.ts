import { publicProcedure, router } from '../trpc'

import { todoRouter } from './todo'

export const appRouter = router({
  todo: todoRouter,
  test: publicProcedure.query(async () => {
    return {
      success: 'working',
    }
  }),
})

export type AppRouter = typeof appRouter
