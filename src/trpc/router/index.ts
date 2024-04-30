import { publicProcedure, router } from '@/trpc'
import { getLayouts } from '@/trpc/router/page-router'
import { todoRouter } from '@/trpc/router/todo'

export const appRouter = router({
  todo: todoRouter,
  page:getLayouts,
  test: publicProcedure.query(async () => {
    return {
      success: 'working',
    }
  }),
})

export type AppRouter = typeof appRouter
