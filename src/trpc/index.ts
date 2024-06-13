import configPromise from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import { TRPCError, initTRPC } from '@trpc/server'
import { NextRequest } from 'next/server'

export const createTRPCContext = (req: NextRequest) => {
  return {
    req,
  }
}

const payload = await getPayloadHMR({
  config: configPromise,
})

const t = initTRPC
  .context<Partial<Awaited<ReturnType<typeof createTRPCContext>>>>()
  .create({})

const isAuthenticated = t.middleware(async ({ ctx, next }) => {
  // ! isAuthenticated middleware should not be used in static generation related api calls
  const req = ctx.req as NextRequest

  // ? const token = req.cookies.get('payload-token')

  const { user, permissions } = await payload.auth({ headers: req.headers })

  if (!user) {
    throw new TRPCError({
      code: 'UNAUTHORIZED',
      message: 'you are not authenticated',
    })
  }

  return next({
    ctx: {
      user,
      permissions,
    },
  })
})

export const router = t.router
export const createCallerFactory = t.createCallerFactory // ! only for server side rendering

export const publicProcedure = t.procedure
export const userProcedure = t.procedure.use(isAuthenticated)
export const adminProcedure = t.procedure
  .use(isAuthenticated)
  .use(async ({ ctx, next }) => {
    if (ctx.user.role !== 'admin') {
      throw new TRPCError({
        code: 'UNAUTHORIZED',
        message: 'you are not an admin',
      })
    }
    return next({ ctx })
  })
