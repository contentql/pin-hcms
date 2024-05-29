import { FieldHook } from 'payload/types'

export const assignUserId: FieldHook = async ({ req, operation, data }) => {
  const { user } = req

  if (operation === 'create' && user && data && !data.author) {
    data.author = { relationTo: 'users', value: user.id }
  }
}
