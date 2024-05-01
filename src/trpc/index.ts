import { initTRPC } from '@trpc/server'
import { NextRequest } from 'next/server'

export const createTRPCContext = (req: NextRequest) => {
  return {
    req,
  }
}

const t = initTRPC
  .context<Awaited<ReturnType<typeof createTRPCContext>>>()
  .create({})

const isAuthenticated = t.middleware(async ({ ctx, next }) => {
  const { req } = ctx

  const token = req.cookies.get('payload-token')

  console.log(token)

  return next()
})

export const router = t.router
export const publicProcedure = t.procedure
export const userProcedure = t.procedure.use(isAuthenticated)

export const createCallerFactory = t.createCallerFactory // only for server side rendering
