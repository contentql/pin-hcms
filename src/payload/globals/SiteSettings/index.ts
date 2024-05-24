import { revalidateTag } from 'next/cache'
import type { Field, GlobalConfig } from 'payload/types'

import { COLLECTION_SLUG_PAGE } from '@/payload/collections/constants'
import iconField from '@/payload/fields/icon'

export const GLOBAL_SETTINGS_SLUG = 'site-settings'

const menuItemsField = (
  name: 'subMenuItems' | 'menuItems',
  depth: number = 2,
): Field => {
  const label = name === 'menuItems' ? 'Menu Items' : 'Sub Menu Items'
  const fields: Field[] = [
    {
      type: 'row',
      fields: [
        {
          type: 'relationship',
          name: 'page',
          relationTo: [COLLECTION_SLUG_PAGE],
        },
        iconField(),
        { type: 'text', name: 'description' },
      ],
    },
  ]

  if (depth > 0) {
    fields.push(menuItemsField('subMenuItems', depth - 1))
  }

  return {
    type: 'array',
    name,
    label,
    fields,
  }
}

export const siteSettings: GlobalConfig = {
  slug: GLOBAL_SETTINGS_SLUG,
  // access: {
  //   read: isAdminOrCurrentUser,
  //   update: isAdmin,
  // },
  hooks: {
    afterChange: [async () => revalidateTag('site-settings')],
  },
  fields: [
    {
      type: 'tabs',
      label: 'Settings',
      tabs: [
        {
          label: 'General',
          fields: [
            { type: 'text', name: 'appName' },
            { type: 'text', name: 'appDescription' },
          ],
        },
        {
          name: 'header',
          fields: [
            { type: 'upload', name: 'logo_image', relationTo: 'media' },
            { type: 'text', name: 'primary_button_text' },
            { type: 'text', name: 'primary_button_path' },
            { type: 'text', name: 'secondary_button_text' },
            { type: 'text', name: 'secondary_button_path' },
            menuItemsField('menuItems'),
          ],
        },
        {
          name: 'footer',
          fields: [
            { type: 'upload', name: 'logo_image', relationTo: 'media' },
            { type: 'text', name: 'logo' },
            { type: 'text', name: 'copyright' },
            menuItemsField('menuItems'),
          ],
        },
      ],
    },
  ],
}
