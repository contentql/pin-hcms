import type { CollectionConfig } from 'payload/types'

import { isAdmin, isAdminOrCurrentUser } from '@/payload/access'
import {
  ADMIN_AUTH_GROUP,
  COLLECTION_SLUG_SESSIONS,
  COLLECTION_SLUG_USER,
} from '@/payload/collections/constants'

export const Sessions: CollectionConfig = {
  slug: COLLECTION_SLUG_SESSIONS,
  admin: {
    group: ADMIN_AUTH_GROUP,
  },
  access: {
    read: isAdminOrCurrentUser,
    create: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  fields: [
    {
      name: 'user',
      type: 'relationship',
      relationTo: COLLECTION_SLUG_USER,
      required: true,
      admin: { readOnly: false },
    },
    {
      name: 'sessionToken',
      type: 'text',
      required: true,
      index: true,
      admin: { readOnly: false },
    },
    {
      name: 'expires',
      type: 'date',
      admin: { readOnly: false, date: { pickerAppearance: 'dayAndTime' } },
      required: false,
    },
  ],
} as const
