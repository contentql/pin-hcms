import { Media, Tag } from '@payload-types'
import { useRouter } from 'next/navigation'

import { cn } from '@/utils/cn'

// const firstRow = reviews.slice(0, reviews.length / 2)
// const secondRow = reviews.slice(reviews.length / 2)

interface TagsDetails extends Tag {
  count: number
}

const ReviewCard = ({ tag }: { tag: TagsDetails }) => {
  const router = useRouter()
  return (
    <figure
      onClick={() => {
        router.push(`/tag/${tag?.slug}`)
      }}
      className={cn(
        'relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4',
        'border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]',
        'dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]',
      )}>
      <div className='flex flex-row items-center justify-between'>
        <div className='flex flex-row items-center gap-2 pb-2'>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className='rounded-full'
            width='32'
            height='32'
            alt=''
            src={(tag?.tagImage as Media)?.url || ''}
          />
          <figcaption className='text-md font-medium dark:text-white'>
            {tag?.title}
          </figcaption>
        </div>
        <p className='text-xs font-medium dark:text-white/40'>
          {tag?.count} posts
        </p>
      </div>
      <blockquote className='mt-2 text-sm dark:text-gray-300'>
        {tag?.description}
      </blockquote>
    </figure>
  )
}

export const TagsMarquee = ({
  tagsDetails,
}: {
  tagsDetails: TagsDetails[]
}) => {
  return (
    <div className=' relative mx-auto flex w-full flex-col items-center justify-center overflow-hidden rounded-lg pt-20 md:w-[90%]'>
      <Marquee pauseOnHover className='[--duration:20s]'>
        {tagsDetails?.map(tag => <ReviewCard key={tag?.slug} tag={tag} />)}
      </Marquee>
      <Marquee reverse pauseOnHover className='[--duration:20s]'>
        {tagsDetails?.map(tag => <ReviewCard key={tag?.slug} tag={tag} />)}
      </Marquee>
    </div>
  )
}

interface MarqueeProps {
  className?: string
  reverse?: boolean
  pauseOnHover?: boolean
  children?: React.ReactNode
  vertical?: boolean
  repeat?: number
  [key: string]: any
}

function Marquee({
  className,
  reverse,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={cn(
        'group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]',
        {
          'flex-row': !vertical,
          'flex-col': vertical,
        },
        className,
      )}>
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn('flex shrink-0 justify-around [gap:var(--gap)]', {
              'animate-marquee flex-row': !vertical,
              'animate-marquee-vertical flex-col': vertical,
              'group-hover:[animation-play-state:paused]': pauseOnHover,
              '[animation-direction:reverse]': reverse,
            })}>
            {children}
          </div>
        ))}
    </div>
  )
}
