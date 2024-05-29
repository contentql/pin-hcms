import { blogPosts } from '../payload/seed/data/blog'
import configPromise from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'

import { seed } from '@/payload/seed'

const seeding = async () => {
  const payload = await getPayloadHMR({ config: configPromise })

  const demoUserImage = await seed({
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
              filePath: './media/seed/demo-user-logo.png',
            },
          },
        ],
      },
    ],
  })

  const demoUserImageUrl =
    demoUserImage.collectionsSeedingResult.at(0)?.status !== 'skipped' &&
    demoUserImage.collectionsSeedingResult.at(0)?.results.at(0).status ===
      'fulfilled'
      ? demoUserImage.collectionsSeedingResult.at(0)?.results.at(0).data.url
      : ''

  const demoUserData = await seed({
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
              imageUrl: demoUserImageUrl,
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

  const blogImages = await seed({
    payload,
    collectionsToSeed: [
      {
        collectionSlug: 'media',
        seed: [...blogImagePath],
      },
    ],
    skipSeeding: false,
  })

  const authorImages = await seed({
    payload,
    collectionsToSeed: [
      {
        collectionSlug: 'media',
        seed: [...authorImagePath],
      },
    ],
    skipSeeding: false,
  })

  const tags = await seed({
    payload,
    collectionsToSeed: [
      {
        collectionSlug: 'tags',
        seed: [
          {
            data: {
              title: 'nextjs',
              color: 'blue',
              _status: 'published',
            },
          },
        ],
      },
    ],
  })

  const demoUserId =
    demoUserData.collectionsSeedingResult.at(0)?.status !== 'skipped' &&
    demoUserData.collectionsSeedingResult.at(0)?.results.at(0).status ===
      'fulfilled'
      ? demoUserData.collectionsSeedingResult.at(0)?.results.at(0).data.id
      : ''

  const formattedBlogPosts: any = blogPosts.map((blogPost, index) => {
    const blogImageId =
      blogImages.collectionsSeedingResult.at(0)?.status !== 'skipped' &&
      blogImages.collectionsSeedingResult.at(0)?.results.at(index).status ===
        'fulfilled'
        ? blogImages.collectionsSeedingResult.at(0)?.results.at(index).data.id
        : ''
    console.log(blogImageId)

    const authorImageId =
      authorImages.collectionsSeedingResult.at(0)?.status !== 'skipped' &&
      authorImages.collectionsSeedingResult.at(0)?.results.at(index).status ===
        'fulfilled'
        ? authorImages.collectionsSeedingResult.at(0)?.results.at(index).data.id
        : ''

    const tagId =
      tags.collectionsSeedingResult.at(0)?.status !== 'skipped' &&
      tags.collectionsSeedingResult.at(0)?.results.at(0).status === 'fulfilled'
        ? tags.collectionsSeedingResult.at(0)?.results.at(0).data.id
        : ''

    return {
      data: {
        ...blogPost,
        blog_image: blogImageId,
        authorImage: authorImageId,
        author: {
          relationTo: 'users',
          value: demoUserId,
        },
        tags: [
          {
            relationTo: 'tags',
            value: tagId,
          },
        ],
      },
    }
  })

  const result = await seed({
    payload,
    collectionsToSeed: [
      {
        collectionSlug: 'blogs',
        seed: [...formattedBlogPosts],
      },
    ],
  })
}

export default seeding
