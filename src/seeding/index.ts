import configPromise from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'

import { sendMessageToClient } from '@/lib/clients'
import { seedBlogPageAndBlogs } from '@/seeding/blog/seed'
import { seedHomePage } from '@/seeding/home/seed'
import { seedTagPageAndTags } from '@/seeding/tag/seed'
import { seedUser } from '@/seeding/user/seed'

export const CLIENT_ID = 1

const notifyClient = (message: string) => {
  sendMessageToClient(CLIENT_ID, message)
}

export const seedAllPages = async () => {
  const payload = await getPayloadHMR({ config: configPromise })

  notifyClient('Starting the demo data loading process...')

  let user, tags, blogs

  try {
    user = await seedUser({ payload })
    notifyClient('Demo author has been successfully loaded.')
  } catch (error) {
    console.error('Error while seeding user:', error)
    notifyClient('Error occurred while loading demo author.')
  }

  try {
    tags = await seedTagPageAndTags({ payload })
    notifyClient('Demo tags and tag page have been successfully loaded.')
  } catch (error) {
    console.error('Error while seeding tags:', error)
    notifyClient('Error occurred while loading demo tags and tag page.')
  }

  if (tags && user) {
    try {
      blogs = await seedBlogPageAndBlogs({
        payload,
        tags,
        user,
      })
      notifyClient('Demo blogs and blog page have been successfully loaded.')
    } catch (error) {
      console.error('Error while seeding blogs:', error)
      notifyClient('Error occurred while loading demo blogs and blog page.')
    }
  }

  if (blogs && tags) {
    try {
      await seedHomePage({ payload, blogs, tags })
      notifyClient('Demo home page has been successfully loaded.')
    } catch (error) {
      console.error('Error while seeding home page:', error)
      notifyClient('Error occurred while loading demo home page.')
    }
  }

  setTimeout(() => {
    notifyClient(
      'The demo data loading process has been successfully completed.',
    )
  }, 3000)
}
