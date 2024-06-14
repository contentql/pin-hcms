// import Image width={10} height={10} from 'next/image'
import { Media, Tag } from '@payload-types'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

interface Tags extends Tag {
  count: number
}
function TagsCard({ tags }: { tags: Tags[] }) {
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  }
  const router = useRouter()
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  return (
    <div className='sticky top-24 mt-24'>
      <h5 className='pb-8 text-xl font-bold leading-none text-gray-900 dark:text-white'>
        CATEGORIES
      </h5>
      <div className='flex flex-col gap-y-2'>
        {tags?.map((tag, index) => (
          <motion.div
            key={index}
            onClick={() => {
              router.push(`/tag/${tag?.slug}`)
            }}
            className='relative flex max-h-16 cursor-pointer items-center gap-2 pl-2'
            variants={fadeInAnimationVariants}
            initial='initial'
            whileInView='animate'
            viewport={{
              once: true,
            }}
            custom={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}>
            <AnimatePresence>
              {hoveredIndex === index && (
                <motion.span
                  className='absolute inset-0 block h-full w-full rounded-xl  bg-[#e779c11a]'
                  layoutId='hoverBackground'
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              width={12}
              height={12}
              className='h-12 w-12 rounded-full'
              src={(tag?.tagImage as Media)?.url || ''}
              alt='icon'
            />
            <p>{tag?.title}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default TagsCard
