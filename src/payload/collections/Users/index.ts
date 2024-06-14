import type { CollectionConfig } from 'payload/types'

import { ADMIN_ACCESS_ROLES, DEFAULT_USER_ROLE } from '@/lib/auth/config'
import { getAuthJsCookieName, getCurrentUser } from '@/lib/auth/edge'
import { revalidateUser } from '@/lib/payload/actions'
import { isAdmin, isAdminOrCurrentUser } from '@/payload/access'
import {
  ADMIN_AUTH_GROUP,
  COLLECTION_SLUG_USER,
} from '@/payload/collections/constants'
import parseCookieString from '@/utils/parseCookieString'

import { authorAccessAfterUpdate } from './hooks/authorAccessAfterUpdate'

export const Users: CollectionConfig = {
  slug: COLLECTION_SLUG_USER,
  admin: {
    group: ADMIN_AUTH_GROUP,
    useAsTitle: 'email',
  },

  endpoints: [
    {
      path: '/refresh-token',
      method: 'post',
      async handler(request) {
        if (!request?.url)
          return new Response('No request URL provided', { status: 400 })

        const requestUrl = new URL(request.url)
        requestUrl.pathname = '/api/auth/session'

        const newRequest = new Request(requestUrl.toString(), {
          method: 'GET',
          headers: new Headers(request.headers),
        })

        try {
          const response = await fetch(newRequest)
          const data = await response.json()

          if (!response.ok) {
            throw new Error('Failed to refresh token')
          }

          const responseCookies = parseCookieString(
            String(response.headers.get('Set-Cookie') || ''),
          )
          const authCooke = responseCookies?.[getAuthJsCookieName()] ?? null

          const responseBody = JSON.stringify({
            message: 'Token refresh successful',
            refreshToken: authCooke?.value,
            exp:
              authCooke && authCooke?.expires
                ? Math.floor(authCooke.expires.getTime() / 1000)
                : null,
            user: data.user,
          })

          return new Response(responseBody, {
            status: response.status,
            headers: response.headers,
          })
        } catch (error) {
          console.log(error)
          return new Response(
            JSON.stringify({ message: 'Token refresh failed' }),
            { status: 401 },
          )
        }
      },
    },
  ],

  auth: {
    cookies: {
      secure: true,
    },
    strategies: [
      {
        name: 'next-auth',
        authenticate: async ({ headers, payload }) => {
          const currentUser = await getCurrentUser({
            headers,
            payload,
            cache: true,
          })
          if (!currentUser) return null
          return {
            ...currentUser,
            collection: COLLECTION_SLUG_USER,
          }
        },
      },
    ],
  },
  hooks: {
    // beforeLogin: [
    //   async ({ req, user }: any) => {
    //     const { email, password } = req.data
    //     const res = await signIn('credentials', {
    //       email,
    //       password,
    //       redirect: false,
    //     })

    //     return user
    //   },
    // ],
    beforeChange: [
      authorAccessAfterUpdate,
      async ({ data, req, operation, originalDoc }) => {
        if (operation === 'create') {
          const { payload, context } = req

          // this is an aggregation background

          const { totalDocs: totalUsers } = await payload.count({
            collection: 'users',
            where: {
              role: {
                equals: 'admin',
              },
            },
          })

          if (context.preventRoleOverride) {
            return data
          }

          if (totalUsers === 0) {
            return { ...data, role: 'admin' }
          }

          return data
        }

        return data
      },
    ],
    afterChange: [
      async ({ doc, req }) => {
        const payload = req.payload
        await revalidateUser(doc, payload)
      },
    ],
  },
  access: {
    admin: async ({ req }) => {
      return ADMIN_ACCESS_ROLES.includes(req?.user?.role || DEFAULT_USER_ROLE)
    },
    read: isAdminOrCurrentUser,
    create: () => true,
    update: isAdmin,
    delete: isAdminOrCurrentUser,
  },
  fields: [
    { name: 'name', type: 'text', saveToJWT: true, unique: true },
    { name: 'imageUrl', type: 'text', saveToJWT: true },
    {
      name: 'role',
      type: 'select',
      options: ['admin', 'user', 'author'],
      saveToJWT: true,
    },
    { name: 'emailVerified', type: 'date' },
    {
      name: 'accounts',
      type: 'array',
      saveToJWT: false,
      fields: [
        {
          type: 'row',
          fields: [
            { name: 'provider', type: 'text', admin: { readOnly: true } },
            {
              name: 'providerAccountId',
              type: 'text',
              admin: { readOnly: true },
            },
          ],
        },
      ],
    },
    {
      name: 'verificationTokens',
      type: 'array',
      saveToJWT: false,
      fields: [
        {
          type: 'row',
          fields: [
            { name: 'identifier', type: 'text', admin: { readOnly: true } },
            { name: 'token', type: 'text', admin: { readOnly: true } },
            { name: 'expires', type: 'date', admin: { readOnly: true } },
          ],
        },
      ],
    },
  ],
} as const
