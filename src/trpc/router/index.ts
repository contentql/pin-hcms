import { publicProcedure, router } from '@/trpc'
import { getBlogs } from '@/trpc/router/blog-router'
import { getLayouts } from '@/trpc/router/page-router'
import { getSiteSettings } from '@/trpc/router/site-settings-router'
import { todoRouter } from '@/trpc/router/todo'

export const appRouter = router({
  todo: todoRouter,
  page: getLayouts,
  blog: getBlogs,
  SiteSettings: getSiteSettings,
  test: publicProcedure.query(async () => {
    return {
      success: 'working',
    }
  }),
})

export type AppRouter = typeof appRouter
