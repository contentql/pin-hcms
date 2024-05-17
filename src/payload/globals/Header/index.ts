import { GlobalConfig } from 'payload/types'

export const Header: GlobalConfig = {
  slug: 'header',
  label: 'Header',
  access: {
    read: () => true,
  },
  versions: {
    drafts: {
      autosave: false,
    },
  },
  fields: [
    {
      name: 'nav_links',
      label: 'Nav Links',
      required: true,
      type: 'array',
      fields: [
        {
          name: 'title',
          label: 'Title',
          type: 'text',
          required: true,
        },
        {
          name: 'path',
          label: 'Path',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'button',
      label: 'Button',
      type: 'text',
    },
  ],
}
