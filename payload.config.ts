// import { payloadCloud } from '@payloadcms/plugin-cloud'
import { env } from '@env'
import { seo } from '@payload-enchants/seo'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { resendAdapter } from '@payloadcms/email-resend'
import { nestedDocsPlugin } from '@payloadcms/plugin-nested-docs'
// import { seoPlugin } from '@payloadcms/plugin-seo'
import {
  FixedToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
import { s3Storage } from '@payloadcms/storage-s3'
import path from 'path'
import { buildConfig } from 'payload/config'
import sharp from 'sharp'
import { fileURLToPath } from 'url'

import Icon from '@/components/payload-icons/Icon'
import Logo from '@/components/payload-icons/Logo'
import { Blogs } from '@/payload/collections/Blogs'
import { Media } from '@/payload/collections/Media'
import { Pages } from '@/payload/collections/Pages'
import { Sessions } from '@/payload/collections/Sessions'
import { Users } from '@/payload/collections/Users'
import { COLLECTION_SLUG_PAGE } from '@/payload/collections/constants'
import { siteSettings } from '@/payload/globals/SiteSettings'
import { seed } from '@/payload/seed'
import generateBreadcrumbsUrl from '@/utils/generateBreadcrumbsUrl'
import {
  generateDescriptionPrompt,
  generateImage,
  generateTitlePrompt,
  generateURL,
} from '@/utils/seo'

// import {
//   generateDescription,
//   generateImage,
//   generateTitle,
//   generateURL,
// } from '@/utils/seo'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: '- ContentQL',
      favicon: '/images/favicon.ico',
      ogImage: '/images/favicon.ico',
    },
    components: {
      graphics: {
        Logo,
        Icon,
      },
    },
    livePreview: {
      url: ({ data, collectionConfig, locale }) => {
        const baseUrl = env.NEXT_PUBLIC_PUBLIC_URL

        if (collectionConfig?.slug === 'blogs') {
          return `${baseUrl}/blog/${data.slug}`
        } else {
          return `${baseUrl}/${data.slug}${locale ? `?locale=${locale.code}` : ''}`
        }
      },

      collections: ['pages', 'blogs'],

      breakpoints: [
        {
          label: 'Mobile',
          name: 'mobile',
          width: 375,
          height: 667,
        },
        {
          label: 'Tablet',
          name: 'tablet',
          width: 768,
          height: 1024,
        },
        {
          label: 'Desktop',
          name: 'desktop',
          width: 1440,
          height: 900,
        },
      ],
    },
  },
  cors: [env.NEXT_PUBLIC_PUBLIC_URL],
  csrf: [env.NEXT_PUBLIC_PUBLIC_URL],
  collections: [Users, Media, Blogs, Pages, Sessions],
  globals: [siteSettings],
  async onInit(payload) {
    await seed({
      payload,
      seedingCollections: [
        {
          collectionSlug: 'users',
          seedData: [
            {
              name: 'ContentQL Admin',
              email: 'admin@contentql.io',
              password: 'Welcome@123',
              role: 'admin',
              imageUrl: 'https://picsum.photos/150',
            },
          ],
        },
        {
          collectionSlug: 'pages',
          seedData: [
            {
              title: 'Seed Testing Page',
              isHome: false,
              blocks: [
                {
                  blockType: 'Cards',
                  cards: [
                    {
                      title: 'seed test',
                      description: 'I am just testing seeding',
                      link: 'seed-test',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
      seedingGlobals: [
        {
          globalSlug: 'site-settings',
          seedData: {
            header: {
              logo_image: 'https://picsum.photos/150',
              primary_button_text: 'login',
              primary_button_path: '/login',
              secondary_button_text: 'signup',
              secondary_button_path: '/sign-up',
              menuItems: [
                {
                  page: {
                    value: '664b2e20bae4e87589ede018',
                    relationTo: 'pages',
                  },
                  subMenuItems: [],
                  id: '664acf6cd367661d102c427c',
                },
                {
                  page: {
                    value: '664acf0b304f0f2a45ac4b0a',
                    relationTo: 'pages',
                  },
                  subMenuItems: [],
                  id: '664acf63d367661d102c427b',
                },
                {
                  page: {
                    value: '664acf40304f0f2a45ac4b9a',
                    relationTo: 'pages',
                  },
                  subMenuItems: [],
                  id: '664acf72d367661d102c427d',
                },
              ],
            },
            footer: {
              logo_image: 'https://picsum.photos/150',
              logo: 'ContentQL',
              copyright: '© 2024 ContentQL™. All Rights Reserved.',
              menuItems: [
                {
                  page: {
                    value: '664b2e20bae4e87589ede018',
                    relationTo: 'pages',
                  },
                  subMenuItems: [],
                  id: '665021db87a9ec39bc24f4e8',
                },
                {
                  page: {
                    value: '664acf0b304f0f2a45ac4b0a',
                    relationTo: 'pages',
                  },
                  subMenuItems: [],
                  id: '665021e487a9ec39bc24f4e9',
                },
                {
                  page: {
                    value: '664acf40304f0f2a45ac4b9a',
                    relationTo: 'pages',
                  },
                  subMenuItems: [],
                  id: '665021e987a9ec39bc24f4ea',
                },
              ],
            },
          },
        },
      ],
    })
  },
  plugins: [
    nestedDocsPlugin({
      collections: [COLLECTION_SLUG_PAGE],
      generateURL: generateBreadcrumbsUrl,
    }),
    s3Storage({
      collections: {
        ['media']: true,
      },
      bucket: env.S3_BUCKET,
      config: {
        endpoint: env.S3_ENDPOINT,
        credentials: {
          accessKeyId: env.S3_ACCESS_KEY_ID,
          secretAccessKey: env.S3_SECRET_ACCESS_KEY,
        },
        region: env.S3_REGION,
      },
    }),
    // seoPlugin({
    //   collections: ['blogs'],
    //   uploadsCollection: 'media',
    //   tabbedUI: true,
    //   generateTitle,
    //   generateDescription,
    //   generateImage,
    //   generateURL,
    // }),
    seo({
      collections: ['blogs'],
      uploadsCollection: 'media',
      tabbedUI: true,
      generateTitleAi: generateTitlePrompt,
      generateDescriptionAi: generateDescriptionPrompt,
      generateImage,
      generateURL,
      openaiApiKey: env.OPENAPI_KEY,
    }),
  ],

  email: resendAdapter({
    defaultFromAddress: env.RESEND_SENDER_EMAIL,
    defaultFromName: env.RESEND_SENDER_NAME,
    apiKey: env.RESEND_API_KEY,
  }),

  sharp,
  editor: lexicalEditor({
    features: ({ defaultFeatures }) => [
      ...defaultFeatures,
      FixedToolbarFeature(),
    ],
  }),

  secret: env.PAYLOAD_SECRET,
  db: mongooseAdapter({
    url: env.DATABASE_URI,
  }),
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
})
