import { Blog } from '@payload-types'

import { BentoGridDemo } from './BentoGridDemo'

const AllBlogs = ({ blogsData }: { blogsData: Blog[] }) => {
  return (
    <>
      <BentoGridDemo blogsData={blogsData} />
    </>
  )
}

export default AllBlogs
