import { env } from '@env'
import { APIError } from 'payload/errors'
import { CollectionBeforeChangeHook } from 'payload/types'

class CustomAdminError extends APIError {
  constructor(message: string, statusCode: number) {
    super(message, statusCode, undefined, true) // Inherit from Payload's APIError
  }
}

const getAuthorsCount = (role: string) => {
  switch (role) {
    case 'creator':
      return 2
    case 'team':
      return 10
    default:
      return 2
  }
}

export const authorAccessAfterUpdate: CollectionBeforeChangeHook = async ({
  operation,
  data,
  originalDoc,
  req,
}) => {
  const plan = env.SUBSCRIPTION_PLAN
  const { payload, context } = req
  const maxAuthors = getAuthorsCount(plan)
  if (operation === 'update') {
    if (data?.role === 'author') {
      if (originalDoc.role !== data.role) {
        const numberOfAuthors = await payload.count({
          collection: 'users',
          where: {
            role: {
              equals: 'author',
            },
          },
        })
        const { totalDocs: totalAuthorsCount } = numberOfAuthors
        if (totalAuthorsCount >= maxAuthors) {
          throw new CustomAdminError(
            'Author limit reached for your plan. Please remove authors or upgrade your plan.',
            400,
          )
        }
      }
    }
  }
  if (operation === 'create') {
    if (data?.role === 'author') {
      const numberOfAuthors = await payload.count({
        collection: 'users',
        where: {
          role: {
            equals: 'author',
          },
        },
      })
      const { totalDocs: totalAuthorsCount } = numberOfAuthors
      if (totalAuthorsCount >= maxAuthors) {
        throw new CustomAdminError(
          'Author limit reached for your plan. Please remove authors or upgrade your plan.',
          400,
        )
      }
    }
  }
}
