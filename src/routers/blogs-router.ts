import { getPayload } from 'payload'
import configPromise from '../../payload.config'

export const getLayouts = async ({ slug }: { slug: string }) => {
  const payload = await getPayload({
    config: configPromise,
  })

  try {
    const layoutData = await payload.find({
      collection: 'blogs',
      where: {
        slug: {
          equals: slug,
        },
      },
    })
    console.log('layoutData', layoutData)

    return layoutData.docs.at(0)?.description_html
  } catch (error: any) {
    console.log(error)
    throw new Error(error.message)
  }
}

export const getBlogs = async () => {
  const payload = await getPayload({
    config: configPromise,
  })

  try {
    const blogs = await payload.find({
      collection: 'blogs',
      
    })
    

    return blogs.docs
  } catch (error: any) {
    console.log(error)
    throw new Error(error.message)
  }
}
