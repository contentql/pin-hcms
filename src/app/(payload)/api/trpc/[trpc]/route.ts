import { fetchRequestHandler } from '@trpc/server/adapters/fetch'
import { type NextRequest } from 'next/server'

import { createTRPCContext } from '@/trpc'
import { appRouter } from '@/trpc/router'

export const maxDuration = 200

const handler = (req: NextRequest) => {
  return fetchRequestHandler({
    endpoint: '/api/trpc',
    req,
    router: appRouter,
    createContext: () => createTRPCContext(req),
  })
}

export { handler as GET, handler as POST }
