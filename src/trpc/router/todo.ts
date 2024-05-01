import { router, userProcedure } from '@/trpc'

export const todoRouter = router({
  getTodos: userProcedure.query(async () => {
    return {
      id: 1,
      task: 'finish trpc setup',
      completed: false,
    }
  }),
})
