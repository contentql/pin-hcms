import { router, userProcedure } from '..'
import configPromise from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import { TRPCError } from '@trpc/server'
import { z } from 'zod'

import { getCurrentUser } from '@/lib/payload'

const payload = await getPayloadHMR({ config: configPromise })

export const userRouter = router({
  getUser: userProcedure.query(async ({ ctx }) => {
    const { user } = ctx

    try {
      const userData = await getCurrentUser()

      return userData
    } catch (error) {
      console.log('Error during', error)
      return null
    }
  }),

  updateProfileImage: userProcedure
    .input(
      z.object({
        imageUrl: z.string(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      const { imageUrl } = input
      const { user } = ctx

      try {
        await payload.update({
          collection: 'users',
          id: user.id,
          data: {
            imageUrl: imageUrl,
          },
        })

        return { success: true }
      } catch (error: any) {
        console.error('Error update imageUrl:', error)
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: error?.message,
        })
      }
    }),
})
