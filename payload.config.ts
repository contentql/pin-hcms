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

import { seed } from './src/payload/seed'
import { blogPost } from './src/payload/seed/data/blog'

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
    const blogImagePath = [
      {
        data: { alt: 'blog image-1' },
        options: {
          filePath: './media/seed/blog-1.jpg',
        },
      },
      {
        data: { alt: 'blog image-2' },
        options: {
          filePath: './media/seed/blog-2.jpg',
        },
      },
      {
        data: { alt: 'blog image-3' },
        options: {
          filePath: './media/seed/blog-3.jpg',
        },
      },
      {
        data: { alt: 'blog image-4' },
        options: {
          filePath: './media/seed/blog-4.jpg',
        },
      },
      {
        data: { alt: 'blog image-5' },
        options: {
          filePath: './media/seed/blog-5.jpg',
        },
      },
      {
        data: { alt: 'blog image-6' },
        options: {
          filePath: './media/seed/blog-6.jpg',
        },
      },
      {
        data: { alt: 'blog image-6' },
        options: {
          filePath: './media/seed/blog-7.jpg',
        },
      },
      {
        data: { alt: 'blog image-7' },
        options: {
          filePath: './media/seed/blog-8.jpg',
        },
      },
    ]

    const authorImagePath = [
      {
        data: { alt: 'author image-1' },
        options: {
          filePath: './media/seed/blogAuthor-1.jpg',
        },
      },
      {
        data: { alt: 'author image-2' },
        options: {
          filePath: './media/seed/blogAuthor-2.jpg',
        },
      },
      {
        data: { alt: 'author image-3' },
        options: {
          filePath: './media/seed/blogAuthor-3.jpg',
        },
      },
      {
        data: { alt: 'author image-4' },
        options: {
          filePath: './media/seed/blogAuthor-4.jpg',
        },
      },
      {
        data: { alt: 'author image-5' },
        options: {
          filePath: './media/seed/blogAuthor-5.jpg',
        },
      },
      {
        data: { alt: 'author image-6' },
        options: {
          filePath: './media/seed/blogAuthor-6.jpg',
        },
      },
      {
        data: { alt: 'author image-6' },
        options: {
          filePath: './media/seed/blogAuthor-7.jpg',
        },
      },
      {
        data: { alt: 'author image-7' },
        options: {
          filePath: './media/seed/blogAuthor-8.jpg',
        },
      },
    ]

    const blogImages: any = await seed({
      payload,
      collectionsToSeed: [
        {
          collectionSlug: 'media',
          seed: [...blogImagePath],
        },
      ],
    })

    if (
      blogImages?.at(0)?.status === 'fulfilled' &&
      !blogImages?.at(0)?.value?.result?.message
    ) {
      const authorImages: any = await seed({
        payload,
        collectionsToSeed: [
          {
            collectionSlug: 'media',
            seed: [...authorImagePath],
          },
        ],
        skipSeeding: false,
      })
    }

    if (
      blogImages?.at(0)?.status === 'fulfilled' &&
      !blogImages?.at(0)?.value?.result?.message &&
      Array.isArray(blogImages?.at(0)?.value?.result) &&
      authorImages?.at(0)?.status === 'fulfilled' &&
      !authorImages?.at(0)?.value?.result?.message &&
      Array.isArray(authorImages?.at(0)?.value?.result)
    ) {
      const seedData = blogPost.map((blogPost, index) => {
        const blogImage = blogImages?.at(0)?.value?.result.at(index)
        const authorImage = authorImages?.at(0)?.value?.result.at(index)

        return {
          data: {
            ...blogPost,
            blog_image:
              blogImage.status === 'fulfilled' ? blogImage?.value?.id : '',
            authorImage:
              authorImage.status === 'fulfilled' ? authorImage?.value?.id : '',
          },
        }
      })

      const result = await seed({
        payload,
        collectionsToSeed: [
          {
            collectionSlug: 'blogs',
            seed: [...seedData],
          },
        ],
      })
    }
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
