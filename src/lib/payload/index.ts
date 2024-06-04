import configPromise from '@payload-config'
import type { User } from '@payload-types'
import { headers as getHeaders } from 'next/headers'
import { getPayload as getPayloadInstance } from 'payload'

import { getCurrentUser as edgeSafeGetCurrentUser } from '@/lib/auth/edge'

export async function getPayload(): ReturnType<typeof getPayloadInstance> {
  return getPayloadInstance({ config: await configPromise })
}

/**
 * Get the current user with out needing to import the payload instance & headers.
 *
 * @description The difference between this function and the one in the auth/edge.ts file is that here we get
 * payload instance, just to make other parts of you code cleaner. We can't get the payload instance in the
 * auth/edge.ts file because that could cause a import loop.
 */
export async function getCurrentUser(): Promise<User | null> {
  const headers = getHeaders()
  const payload = await getPayload()
  const user = await edgeSafeGetCurrentUser({ headers, payload, cache: true })
  return user
}
