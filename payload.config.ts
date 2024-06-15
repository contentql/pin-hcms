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
import generateBreadcrumbsUrl from '@/utils/generateBreadcrumbsUrl'
import {
  generateDescriptionPrompt,
  generateImage,
  generateTitlePrompt,
  generateURL,
} from '@/utils/seo'

import { Tags } from './src/payload/collections/Tags'

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
      // favicon: '/images/favicon.ico',
      // defaultOGImage: '/images/favicon.ico',
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
  cors: [env.PAYLOAD_URL],
  csrf: [env.PAYLOAD_URL],
  collections: [Users, Media, Tags, Blogs, Pages, Sessions],
  globals: [siteSettings],
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
