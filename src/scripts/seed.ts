import configPromise from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'

import { seed } from '@/payload/seed'
import { blogPosts } from '@/payload/seed/data/blog'
import { homePageData } from '@/payload/seed/data/home'
import { siteSettings } from '@/payload/seed/data/site-settings'

import { SiteSetting } from '~/payload-types'

const seeding = async () => {
  const payload = await getPayloadHMR({ config: configPromise })

  const demoUserImageSeedResult = await seed({
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

  const demoUserImageSeedResultData =
    demoUserImageSeedResult.collectionsSeedingResult.at(0)?.status !==
      'skipped' &&
    demoUserImageSeedResult.collectionsSeedingResult.at(0)?.results.at(0)
      .status === 'fulfilled'
      ? demoUserImageSeedResult.collectionsSeedingResult.at(0)?.results.at(0)
          .data
      : {
          id: '',
          url: '',
        }

  const demoUserSeedingResult = await seed({
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
              imageUrl: demoUserImageSeedResultData.url,
            },
          },
        ],
      },
    ],
  })

  const blogsImagesFormattedData = [
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

  // ? If you are seeding a collection/global that is already seeded, then need to add option skipSeeding as false.
  // ? Make sure while using skipSeeding because it will directly depend on the seeding data.
  const blogsImagesSeedResult = await seed({
    payload,
    collectionsToSeed: [
      {
        collectionSlug: 'media',
        seed: [...blogsImagesFormattedData],
      },
    ],
    skipSeeding: false,
  })

  const tagsSeedResult = await seed({
    payload,
    collectionsToSeed: [
      {
        collectionSlug: 'tags',
        seed: [
          {
            data: {
              title: 'welcome',
              color: 'blue',
              _status: 'published',
            },
          },
        ],
      },
    ],
  })

  const demoUserId =
    demoUserSeedingResult.collectionsSeedingResult.at(0)?.status !==
      'skipped' &&
    demoUserSeedingResult.collectionsSeedingResult.at(0)?.results.at(0)
      .status === 'fulfilled'
      ? demoUserSeedingResult.collectionsSeedingResult.at(0)?.results.at(0).data
          .id
      : ''

  const formattedBlogPostsData: any = blogPosts.map((blogPost, index) => {
    const blogImageId =
      blogsImagesSeedResult.collectionsSeedingResult.at(0)?.status !==
        'skipped' &&
      blogsImagesSeedResult.collectionsSeedingResult.at(0)?.results.at(index)
        .status === 'fulfilled'
        ? blogsImagesSeedResult.collectionsSeedingResult
            .at(0)
            ?.results.at(index).data.id
        : ''
    const tagId =
      tagsSeedResult.collectionsSeedingResult.at(0)?.status !== 'skipped' &&
      tagsSeedResult.collectionsSeedingResult.at(0)?.results.at(0).status ===
        'fulfilled'
        ? tagsSeedResult.collectionsSeedingResult.at(0)?.results.at(0).data.id
        : ''

    return {
      data: {
        ...blogPost,
        blog_image: blogImageId,
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

  const formattedHomePageData = {
    ...homePageData,
    blocks: homePageData?.blocks?.map(block =>
      block.blockType === 'StickyScrollReveal'
        ? {
            ...block,
            features: block.features?.map((feature, index) => {
              const blogImageId =
                blogsImagesSeedResult.collectionsSeedingResult.at(0)?.status !==
                  'skipped' &&
                blogsImagesSeedResult.collectionsSeedingResult
                  .at(0)
                  ?.results.at(index).status === 'fulfilled'
                  ? blogsImagesSeedResult.collectionsSeedingResult
                      .at(0)
                      ?.results.at(index).data.id
                  : ''

              return { ...feature, image: blogImageId }
            }),
          }
        : block,
    ),
  }

  const blogsAndHomePageSeedResult = await seed({
    payload,
    collectionsToSeed: [
      {
        collectionSlug: 'blogs',
        seed: [...formattedBlogPostsData],
      },
      {
        collectionSlug: 'pages',
        seed: [
          {
            data: { ...formattedHomePageData },
          },
        ],
      },
    ],
  })

  const blogPageSeedResult = await seed({
    payload,
    collectionsToSeed: [
      {
        collectionSlug: 'pages',
        seed: [
          {
            data: {
              title: 'Blog',
              isHome: false,
              _status: 'published',
            },
          },
        ],
      },
    ],
    skipSeeding: false,
  })

  const blogPageId =
    blogPageSeedResult.collectionsSeedingResult.at(0)?.status !== 'skipped' &&
    blogPageSeedResult.collectionsSeedingResult.at(0)?.results.at(0).status ===
      'fulfilled'
      ? blogPageSeedResult.collectionsSeedingResult.at(0)?.results.at(0).data.id
      : ''

  console.log(blogPageId)

  const formattedSiteSettingsData: Omit<
    SiteSetting,
    'id' | 'createdAt' | 'updatedAt'
  > = {
    ...siteSettings,
    header: {
      ...siteSettings.header,
      logo_image: demoUserImageSeedResultData.id,
      menuItems: siteSettings.header.menuItems?.map((menuItem, index) =>
        index === 0
          ? { ...menuItem, page: { relationTo: 'pages', value: blogPageId } }
          : menuItem,
      ),
    },
    footer: {
      ...siteSettings.footer,
      logo_image: demoUserImageSeedResultData.id,
      menuItems: siteSettings.footer.menuItems?.map((menuItem, index) =>
        index === 0
          ? { ...menuItem, page: { relationTo: 'pages', value: blogPageId } }
          : menuItem,
      ),
    },
  }

  const siteSettingsSeedResult = await seed({
    payload,
    globalsToSeed: [
      {
        globalSlug: 'site-settings',
        seed: {
          data: {
            ...formattedSiteSettingsData,
          },
        },
      },
    ],
  })
}

export default seeding
