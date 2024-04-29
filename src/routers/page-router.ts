import configPromise from '@payload-config'
import { getPayload } from 'payload'

export const getLayouts = async (slug: string) => {
  const payload = await getPayload({
    config: configPromise,
  })

  try {
    const { docs } = await payload.find({
      collection: 'pages',
      where: {
        slug: {
          equals: slug,
        },
      },
    })

    return docs.at(0)?.layout
  } catch (error: any) {
    console.log(error)
    throw new Error(error.message)
  }
}
