import { Blog, Media } from '@payload-types'

import { BentoGridItem } from '@/app/(app)/(marketing)/(non-protected)/blog/_components/Bento-grid'

function MobileCard({
  blogs,
}: {
  blogs: { relationTo: 'blogs'; value: string | Blog }[]
}) {
  return (
    <div className='mx-auto grid w-full grid-flow-row-dense grid-cols-1 gap-y-8'>
      {blogs?.map((blog, index) => (
        <BentoGridItem
          key={index}
          blog={blog?.value as Blog}
          header={Skeleton({
            image: (blog?.value as Blog)?.blog_image as Media,
          })}
        />
      ))}
    </div>
  )
}
const Skeleton = ({ image }: { image: Media }) => (
  <div className='flex h-full min-h-[10rem] w-full flex-1 overflow-hidden rounded-t-xl bg-white dark:bg-black'>
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img
      className='w-full rounded-t-xl object-cover transition-all duration-300'
      src={image?.url || ''}
      alt={image?.alt || ''}
    />
  </div>
)

export default MobileCard
