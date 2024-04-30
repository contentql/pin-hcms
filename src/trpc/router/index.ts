import { publicProcedure, router } from '@/trpc'
import { getLayouts } from '@/trpc/router/page-router'
import { todoRouter } from '@/trpc/router/todo'

import { getBlogs } from './blog-router'

export const appRouter = router({
  todo: todoRouter,
  page: getLayouts,
  blog: getBlogs,
  test: publicProcedure.query(async () => {
    return {
      success: 'working',
    }
  }),
})

export type AppRouter = typeof appRouter
