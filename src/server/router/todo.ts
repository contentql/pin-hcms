import { publicProcedure, router } from '../trpc'

export const todoRouter = router({
  getTodos: publicProcedure.query(async () => {
    return {
      id: 1,
      task: 'finish trpc setup',
      completed: false,
    }
  }),
})
