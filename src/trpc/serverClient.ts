import { appRouter } from '@/server/router'
import { createCallerFactory } from '@/server/trpc'

const createCaller = createCallerFactory(appRouter)

export const serverClient = createCaller({})

/* 
This is old, getting deprecated from v11

export const serverClient = appRouter.createCaller({
  links: [
    httpBatchLink({
      url: 'http://localhost:3000/api/trpc',
    }),
  ],
})
*/
