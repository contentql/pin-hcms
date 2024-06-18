import Blogs from '@/payload/blocks/new-home/Blogs'
import BlogsSlider from '@/payload/blocks/new-home/BlogsSlider'
import Hero from '@/payload/blocks/new-home/Hero'
import Nav_3 from '@/payload/blocks/new-home/Nav_3'
import Tags from '@/payload/blocks/new-home/Tags'
import { TopPicks } from '@/payload/blocks/new-home/TopPicks'

const Test = () => {
  return (
    <>
      <Nav_3 />
      <Hero />
      <Blogs />
      <Tags />
      <TopPicks />
      <BlogsSlider />
    </>
  )
}

export default Test
