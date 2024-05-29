import { BentoGridDemo } from '../../blog/_components/BentoGridDemo'
import configPromise from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'

import { Tag } from '~/payload-types'

const page = async ({ params: { tag } }: { params: { tag: string[] } }) => {
  const payload = await getPayloadHMR({ config: configPromise })
  const temp = tag?.at(0)

  try {
    const data = await payload.find({
      collection: 'blogs',
    })
    const blogs = data?.docs?.filter(blog =>
      blog?.tags?.some(
        tag =>
          (tag?.value as Tag)?.title?.toLowerCase() === temp?.toLowerCase(),
      ),
    )
    return blogs?.length !== 0 ? (
      <BentoGridDemo blogsData={blogs} />
    ) : (
      <p>such tag does not exist</p>
    )
  } catch (error) {
    console.error('Error fetching blogs:', error)
  }
}

export default page
