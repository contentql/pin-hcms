import { SiteSetting } from 'payload-types'

export const siteSettings: Omit<SiteSetting, 'id' | 'createdAt' | 'updatedAt'> =
  {
    header: {
      logo_image: '',
      primary_button_text: 'signin',
      primary_button_path: '/sign-in',
      secondary_button_text: 'signup',
      secondary_button_path: '/sign-up',
      menuItems: [
        {
          page: {
            value: '',
            relationTo: 'pages',
          },
          subMenuItems: [],
        },
        {
          page: {
            value: '',
            relationTo: 'pages',
          },
          subMenuItems: [],
        },
      ],
    },
    footer: {
      logo_image: '',
      logo: 'ContentQL',
      copyright: '@Copyright ContentQL 2024',
      menuItems: [
        {
          page: {
            value: '',
            relationTo: 'pages',
          },
          subMenuItems: [],
        },
      ],
    },
  }
