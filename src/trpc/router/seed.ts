import configPromise from '@payload-config'
import { User } from '@payload-types'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import { User2 } from 'lucide-react'

import { sendMessageToClient } from '@/lib/clients'
import seeding from '@/scripts/seed'
import { seedBlogPageAndBlogs } from '@/seeding/blog/seed'
import { seedHomePage } from '@/seeding/home/seed'
import { seedTagPageAndTags } from '@/seeding/tag/seed'
import { seedUser } from '@/seeding/user/seed'
import { publicProcedure, router } from '@/trpc'

export const CLIENT_ID = '1'

const notifyClient = (message: string) => {
  sendMessageToClient(CLIENT_ID, message)
}

const payload = await getPayloadHMR({ config: configPromise })

export const seedRouter = router({
  startSeeding: publicProcedure.mutation(async () => {
    try {
      await seeding()

      return { status: 'success' }
    } catch (error: any) {
      console.log(error)
      throw new Error(error.message)
    }
  }),

  user: publicProcedure.mutation(async () => {
    try {
      const user = await seedUser({ payload })

      const message = {
        message: 'Demo author has been successfully loaded.',
      }
      notifyClient(JSON.stringify({ message }))

      return User2
    } catch (error) {
      console.error('Error while seeding user:', error)

      const message = {
        message: 'Error occurred while loading demo author.',
      }
      notifyClient(JSON.stringify({ message }))
    }
  }),

  tagPageAndTags: publicProcedure.mutation(async () => {
    try {
      const tags = await seedTagPageAndTags({ payload })

      const message = {
        message: 'Demo tags and tag page have been successfully loaded.',
      }
      notifyClient(JSON.stringify({ message }))

      return tags
    } catch (error) {
      console.error('Error while seeding tags:', error)

      const message = {
        message: 'Error occurred while loading demo tags and tag page.',
      }
      notifyClient(JSON.stringify({ message }))
    }
  }),

  blogPageAndBlogs: publicProcedure.mutation(async () => {
    try {
      const { docs: users } = await payload.find({
        collection: 'users',
      })

      const user = users.at(0) as User

      const { docs: tags } = await payload.find({
        collection: 'tags',
      })

      const blogs = await seedBlogPageAndBlogs({
        payload,
        tags,
        user,
      })

      const message = {
        message: 'Demo blogs and blog page have been successfully loaded.',
      }
      notifyClient(JSON.stringify({ message }))

      return blogs
    } catch (error) {
      console.error('Error while seeding blogs:', error)

      const message = {
        message: 'Error occurred while loading demo blogs and blog page.',
      }
      notifyClient(JSON.stringify({ message }))
    }
  }),

  homePage: publicProcedure.mutation(async () => {
    try {
      const { docs: blogs } = await payload.find({
        collection: 'blogs',
      })

      const { docs: tags } = await payload.find({
        collection: 'tags',
      })

      const homePage = await seedHomePage({ payload, blogs, tags })

      const message = {
        message: 'Demo home page has been successfully loaded.',
      }
      notifyClient(JSON.stringify({ message }))

      return homePage
    } catch (error) {
      console.error('Error while seeding home page:', error)

      const message = {
        message: 'Error occurred while loading demo home page.',
      }
      notifyClient(JSON.stringify({ message }))
    }
  }),
})
