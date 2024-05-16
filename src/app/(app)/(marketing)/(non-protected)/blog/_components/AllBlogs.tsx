import { Blog } from '@payload-types'

import { BentoGridDemo } from './BentoGridDemo'
import { ImagesSliderDemo } from './ImagesSliderDemo'

const AllBlogs = ({ blogsData }: { blogsData: Blog[] }) => {
  return (
    <>
      <ImagesSliderDemo blogsData={blogsData} />
      <BentoGridDemo blogsData={blogsData} />
    </>
  )
}

export default AllBlogs
