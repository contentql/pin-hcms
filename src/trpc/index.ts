import configPromise from '@payload-config'
import { TRPCError, initTRPC } from '@trpc/server'
import { NextRequest } from 'next/server'
import { getPayload } from 'payload'

export const createTRPCContext = (req: NextRequest) => {
  return {
    req,
  }
}

const payload = await getPayload({
  config: configPromise,
})

const t = initTRPC
  .context<Awaited<ReturnType<typeof createTRPCContext>>>()
  .create({})

const isAuthenticated = t.middleware(async ({ ctx, next }) => {
  const { req } = ctx
  // const token = req.cookies.get('payload-token')

  const { user, permissions } = await payload.auth({ headers: req.headers })

  if (!user) {
    throw new TRPCError({ code: 'UNAUTHORIZED' })
  }

  return next({
    ctx: {
      user,
      permissions,
    },
  })
})

export const router = t.router
export const createCallerFactory = t.createCallerFactory // only for server side rendering

export const publicProcedure = t.procedure
export const userProcedure = t.procedure.use(isAuthenticated)
