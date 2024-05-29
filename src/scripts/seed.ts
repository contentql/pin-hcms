import { blogPost } from '../payload/seed/data/blog'
import configPromise from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'

import { seed } from '@/payload/seed'

const seeding = async () => {
  const payload = await getPayloadHMR({ config: configPromise })

  const demoUserImage: any = await seed({
    payload,
    collectionsToSeed: [
      {
        collectionSlug: 'media',
        seed: [
          {
            data: {
              alt: 'Demo User',
            },
            options: {
              filePath: './media/seed/admin.jpg',
            },
          },
        ],
      },
    ],
  })

  const demoUserImageData = demoUserImage?.at(0)?.value?.result?.at(0)

  const userData = await seed({
    payload,
    collectionsToSeed: [
      {
        collectionSlug: 'users',
        seed: [
          {
            data: {
              name: 'cql',
              email: 'demo@contentql.io',
              password: 'password',
              role: 'author',
              imageUrl:
                demoUserImageData?.status === 'fulfilled'
                  ? demoUserImageData?.value?.id
                  : '',
            },
          },
        ],
      },
    ],
  })

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
      data: { alt: 'blog image-7' },
      options: {
        filePath: './media/seed/blog-7.jpg',
      },
    },
    {
      data: { alt: 'blog image-8' },
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
      data: { alt: 'author image-7' },
      options: {
        filePath: './media/seed/blogAuthor-7.jpg',
      },
    },
    {
      data: { alt: 'author image-8' },
      options: {
        filePath: './media/seed/blogAuthor-8.jpeg',
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
}

export default seeding
