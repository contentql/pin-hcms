import { FieldHook } from 'payload/types'

export const assignUserId: FieldHook = async ({ req, operation, data }) => {
  const { user, context } = req

  if (context?.seeding) return data

  if (operation === 'create' && user && data && !data.author) {
    data.author = { relationTo: 'users', value: user.id }
  }
}
