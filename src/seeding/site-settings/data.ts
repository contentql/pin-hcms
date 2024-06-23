import path from 'path'
import { SiteSetting } from 'payload-types'

export type SiteSettingsImageData = { data: { alt: string }; filePath: string }

export type SiteSettingsData = Omit<
  SiteSetting,
  'id' | 'createdAt' | 'updatedAt'
>

export const siteSettingsImageData: SiteSettingsImageData = {
  data: {
    alt: 'Demo User',
  },
  filePath: path.join(process.cwd(), '/public/images/seed/contentql-logo.png'),
}

export const siteSettingsData: SiteSettingsData = {
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
