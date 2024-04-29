import configPromise from '@payload-config'
import { getPayload } from 'payload'

export const getBlogBySlug = async (slug: string) => {
  const payload = await getPayload({
    config: configPromise,
  })

  try {
    const { docs } = await payload.find({
      collection: 'blogs',
      where: {
        slug: {
          equals: slug,
        },
      },
    })

    return docs.at(0)
  } catch (error: any) {
    console.log(error)
    throw new Error(error.message)
  }
}

export const getAllBlogs = async () => {
  const payload = await getPayload({
    config: configPromise,
  })

  try {
    const { docs } = await payload.find({
      collection: 'blogs',
    })

    return docs
  } catch (error: any) {
    console.log(error)
    throw new Error(error.message)
  }
}
