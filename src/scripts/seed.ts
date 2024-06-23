import configPromise from '@payload-config'
import { Page, SiteSetting } from '@payload-types'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import path from 'path'

import { seed } from '@/payload/seed'
import { authorPageData } from '@/payload/seed/data/author'
import { blogPosts } from '@/payload/seed/data/blog'
import { homePageData } from '@/payload/seed/data/home'
import { siteSettings } from '@/payload/seed/data/site-settings'
import { Tags } from '@/payload/seed/data/tags'

const seeding = async () => {
  const payload = await getPayloadHMR({ config: configPromise })

  console.log('Starting the seeding process...')

  const contentqlImageSeedResult = await seed({
    payload,
    collectionsToSeed: [
      {
        collectionSlug: 'media',
        seed: [
          {
            data: {
              alt: 'Contentql Logo',
            },
            options: {
              filePath: path.join(
                process.cwd(),
                '/public/images/seed/contentql-logo.png',
              ),
            },
          },
        ],
      },
    ],
  })

  const contentqlImageSeedResultData =
    contentqlImageSeedResult.collectionsSeedingResult.at(0)?.status !==
      'skipped' &&
    contentqlImageSeedResult.collectionsSeedingResult.at(0)?.results.at(0)
      .status === 'fulfilled'
      ? contentqlImageSeedResult.collectionsSeedingResult.at(0)?.results.at(0)
          .data
      : {
          id: '',
          url: '',
        }

  const demoUserImageSeedResult = await seed({
    payload,
    collectionsToSeed: [
      {
        collectionSlug: 'media',
        seed: [
          {
            data: {
              alt: 'Demo Author',
            },
            options: {
              filePath: path.join(
                process.cwd(),
                '/public/images/seed/demo-user.webp',
              ),
            },
          },
        ],
      },
    ],
    skipSeeding: false,
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
              name: 'DemoAuthor',
              email: 'demo.author@contentql.io',
              password: 'password',
              role: 'author',
              imageUrl: demoUserImageSeedResultData.url,
            },
            options: {
              context: {
                preventRoleOverride: true,
              },
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
        filePath: path.join(process.cwd(), '/public/images/seed/blog-1.jpg'),
      },
    },
    {
      data: { alt: 'blog image-2' },
      options: {
        filePath: path.join(process.cwd(), '/public/images/seed/blog-2.jpg'),
      },
    },
    {
      data: { alt: 'blog image-3' },
      options: {
        filePath: path.join(process.cwd(), '/public/images/seed/blog-3.jpg'),
      },
    },
    {
      data: { alt: 'blog image-4' },
      options: {
        filePath: path.join(process.cwd(), '/public/images/seed/blog-4.jpg'),
      },
    },
    {
      data: { alt: 'blog image-5' },
      options: {
        filePath: path.join(process.cwd(), '/public/images/seed/blog-5.jpg'),
      },
    },
    {
      data: { alt: 'blog image-6' },
      options: {
        filePath: path.join(process.cwd(), '/public/images/seed/blog-6.jpg'),
      },
    },
    {
      data: { alt: 'blog image-7' },
      options: {
        filePath: path.join(process.cwd(), '/public/images/seed/blog-7.jpg'),
      },
    },
    {
      data: { alt: 'blog image-8' },
      options: {
        filePath: path.join(process.cwd(), '/public/images/seed/blog-8.jpg'),
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

  const TagsImagesFormattedData = [
    {
      data: { alt: 'tag image-1' },
      options: {
        filePath: path.join(
          process.cwd(),
          '/public/images/seed/contentql-logo.png',
        ),
      },
    },
    {
      data: { alt: 'tag image-2' },
      options: {
        filePath: path.join(process.cwd(), '/public/images/seed/tag-ai.png'),
      },
    },
    {
      data: { alt: 'tag image-3' },
      options: {
        filePath: path.join(
          process.cwd(),
          '/public/images/seed/tag-Entrepreneurship.webp',
        ),
      },
    },
    {
      data: { alt: 'tag image-4' },
      options: {
        filePath: path.join(
          process.cwd(),
          '/public/images/seed/tag-projectmanagement.webp',
        ),
      },
    },
  ]

  const TagsImagesSeedResult = await seed({
    payload,
    collectionsToSeed: [
      {
        collectionSlug: 'media',
        seed: [...TagsImagesFormattedData],
      },
    ],
    skipSeeding: false,
  })

  const formattedTagsData = Tags.map((tag, index) => {
    const tagImageId =
      TagsImagesSeedResult.collectionsSeedingResult.at(0)?.status !==
        'skipped' &&
      TagsImagesSeedResult.collectionsSeedingResult.at(0)?.results.at(index)
        .status === 'fulfilled'
        ? TagsImagesSeedResult.collectionsSeedingResult.at(0)?.results.at(index)
            .data.id
        : ''
    return {
      data: {
        ...tag,
        tagImage: tagImageId,
      },
    }
  })

  const tagsSeedResult = await seed({
    payload,
    collectionsToSeed: [
      {
        collectionSlug: 'tags',
        seed: [...formattedTagsData],
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
  })

  const formattedBlogPostsData: any = blogPosts.map((blogPost, index) => {
    const blogImageId =
      blogsImagesSeedResult.collectionsSeedingResult.at(0)?.status !==
        'skipped' &&
      blogsImagesSeedResult.collectionsSeedingResult.at(0)?.results.at(index)
        ?.status === 'fulfilled'
        ? blogsImagesSeedResult.collectionsSeedingResult
            .at(0)
            ?.results.at(index).data.id
        : ''

    const tagId =
      tagsSeedResult.collectionsSeedingResult.at(0)?.status !== 'skipped' &&
      tagsSeedResult.collectionsSeedingResult.at(0)?.results.at(index % 4)
        ?.status === 'fulfilled'
        ? tagsSeedResult.collectionsSeedingResult.at(0)?.results.at(index % 4)
            .data.id
        : ''

    return {
      data: {
        ...blogPost,
        blog_image: blogImageId,
        author: [
          {
            relationTo: 'users',
            value: demoUserId,
          },
        ],
        tags: [
          {
            relationTo: 'tags',
            value: tagId,
          },
        ],
      },
    }
  })

  const blogsSeedResult = await seed({
    payload,
    collectionsToSeed: [
      {
        collectionSlug: 'blogs',
        seed: [...formattedBlogPostsData],
      },
    ],
  })

  const formattedHomePageData = {
    ...homePageData,
    blocks: homePageData?.blocks?.map(block => {
      if (block.blockType === 'PopularBlogs') {
        return {
          ...block,
          popular_blogs: block.popular_blogs?.map((popularBlog, index) => {
            const blogId =
              blogsSeedResult.collectionsSeedingResult.at(0)?.status !==
                'skipped' &&
              blogsSeedResult.collectionsSeedingResult.at(0)?.results.at(index)
                .status === 'fulfilled'
                ? blogsSeedResult.collectionsSeedingResult
                    .at(0)
                    ?.results.at(index).data.id
                : ''

            return { ...popularBlog, value: blogId }
          }),
        }
      }

      if (block.blockType === 'Hero3' || block.blockType === 'Tags') {
        return {
          ...block,
          tags: block.tags?.map((tag, index) => {
            const tagId =
              tagsSeedResult.collectionsSeedingResult.at(0)?.status !==
                'skipped' &&
              tagsSeedResult.collectionsSeedingResult.at(0)?.results.at(index)
                .status === 'fulfilled'
                ? tagsSeedResult.collectionsSeedingResult
                    .at(0)
                    ?.results.at(index).data.id
                : ''

            return { ...tag, value: tagId }
          }),
        }
      }
      if (block.blockType === 'TopPicks') {
        return {
          ...block,
          top_picks: block.top_picks?.map((topPickBlog, index) => {
            const blogId =
              blogsSeedResult.collectionsSeedingResult.at(0)?.status !==
                'skipped' &&
              blogsSeedResult.collectionsSeedingResult.at(0)?.results.at(index)
                .status === 'fulfilled'
                ? blogsSeedResult.collectionsSeedingResult
                    .at(0)
                    ?.results.at(index).data.id
                : ''

            return { ...topPickBlog, value: blogId }
          }),
        }
      }
      if (block.blockType === 'BlogsCarousel') {
        return {
          ...block,
          latest_blogs: block.latest_blogs?.map((blog, index) => {
            const blogId =
              blogsSeedResult.collectionsSeedingResult.at(0)?.status !==
                'skipped' &&
              blogsSeedResult.collectionsSeedingResult.at(0)?.results.at(index)
                .status === 'fulfilled'
                ? blogsSeedResult.collectionsSeedingResult
                    .at(0)
                    ?.results.at(index).data.id
                : ''

            return { ...blog, value: blogId }
          }),
        }
      }

      return block
    }),
  }

  const homePageSeedResult = await seed({
    payload,
    collectionsToSeed: [
      {
        collectionSlug: 'pages',
        seed: [
          {
            data: { ...formattedHomePageData },
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

  const tagPageSeedResult = await seed({
    payload,
    collectionsToSeed: [
      {
        collectionSlug: 'pages',
        seed: [
          {
            data: {
              title: 'tag',
              isHome: false,
              _status: 'published',
              blocks: [
                {
                  blockType: 'TagDescription',
                  title: 'tag',
                  description:
                    'On this page, you will find a comprehensive list of tags used across various blogs. Tags serve as a crucial organizational tool, helping to categorize and filter content based on specific topics or themes. Each tag represents a particular subject, making it easier for readers to locate articles of interest.',
                  image: contentqlImageSeedResultData.id,
                },
              ],
            },
          },
        ],
      },
    ],
    skipSeeding: false,
  })

  const tagPageId =
    tagPageSeedResult.collectionsSeedingResult.at(0)?.status !== 'skipped' &&
    tagPageSeedResult.collectionsSeedingResult.at(0)?.results.at(0).status ===
      'fulfilled'
      ? tagPageSeedResult.collectionsSeedingResult.at(0)?.results.at(0).data.id
      : ''

  const authorPageImageSeedResult = await seed({
    payload,
    collectionsToSeed: [
      {
        collectionSlug: 'media',
        seed: [
          {
            data: {
              alt: 'Author image',
            },
            options: {
              filePath: path.join(
                process.cwd(),
                '/public/images/seed/author_1.svg',
              ),
            },
          },
        ],
      },
    ],
    skipSeeding: false,
  })

  const authorPageImageSeedResultId =
    authorPageImageSeedResult.collectionsSeedingResult.at(0)?.status !==
      'skipped' &&
    authorPageImageSeedResult.collectionsSeedingResult.at(0)?.results.at(0)
      .status === 'fulfilled'
      ? authorPageImageSeedResult.collectionsSeedingResult.at(0)?.results.at(0)
          .data.id
      : ''

  const formattedAuthorPageData: Omit<Page, 'id' | 'createdAt' | 'updatedAt'> =
    {
      ...authorPageData,
      blocks: authorPageData?.blocks?.map(block => {
        if (block.blockType === 'AuthorDescription') {
          return {
            ...block,
            image: authorPageImageSeedResultId,
          }
        }

        return block
      }),
    }

  const authorPageSeedResult = await seed({
    payload,
    collectionsToSeed: [
      {
        collectionSlug: 'pages',
        seed: [
          {
            data: formattedAuthorPageData,
          },
        ],
      },
    ],
    skipSeeding: false,
  })

  const authorPageId =
    authorPageSeedResult.collectionsSeedingResult.at(0)?.status !== 'skipped' &&
    authorPageSeedResult.collectionsSeedingResult.at(0)?.results.at(0)
      .status === 'fulfilled'
      ? authorPageSeedResult.collectionsSeedingResult.at(0)?.results.at(0).data
          .id
      : ''

  const formattedSiteSettingsData: Omit<
    SiteSetting,
    'id' | 'createdAt' | 'updatedAt'
  > = {
    ...siteSettings,
    header: {
      ...siteSettings.header,
      logo_image: contentqlImageSeedResultData.id,
      menuItems: siteSettings?.header?.menuItems?.map((menuItem, index) => {
        if (index === 0)
          return {
            ...menuItem,
            page: { relationTo: 'pages', value: blogPageId },
          }

        if (index === 1)
          return {
            ...menuItem,
            page: { relationTo: 'pages', value: tagPageId },
          }

        if (index === 2)
          return {
            ...menuItem,
            page: { relationTo: 'pages', value: authorPageId },
          }
        return menuItem
      }),
    },
    footer: {
      ...siteSettings.footer,
      logo_image: contentqlImageSeedResultData.id,
      menuItems: siteSettings?.footer?.menuItems?.map((menuItem, index) =>
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

  console.log('Seeding process completed.')
}

export default seeding
