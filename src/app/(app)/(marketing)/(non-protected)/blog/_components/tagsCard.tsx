// import Image width={10} height={10} from 'next/image'
import { Media, Tag } from '@payload-types'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
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
    <div className='sticky top-24 mt-14 w-full py-4 '>
      <div className='mb-4 flex items-center justify-between'>
        <h5 className='text-center text-xl font-bold leading-none text-gray-900 dark:text-white'>
          CATEGORIES
        </h5>
      </div>
      <div className='flow-root'>
        <ul role='list'>
          {tags?.map((tag, index) => (
            <li
              key={index}
              className='relative list-none'
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => router.push(`/tag/${tag?.slug}`)}>
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.span
                    className={`absolute inset-0 block cursor-pointer rounded-md bg-[#e779c11a] px-2`}
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
              <motion.div
                className='flex cursor-pointer items-center'
                variants={fadeInAnimationVariants}
                initial='initial'
                whileInView='animate'
                viewport={{
                  once: true,
                }}
                custom={index}>
                <div className='flex-shrink-0 cursor-pointer'>
                  <Image
                    width={10}
                    height={10}
                    className='h-12 w-12 rounded-full'
                    src={(tag?.tagImage as Media)?.url || ''}
                    alt='tag'
                  />
                </div>
                <div className='ms-4 min-w-0 flex-1'>
                  <p className='truncate text-lg font-medium text-gray-900 dark:text-white'>
                    {tag?.title}
                  </p>
                </div>
              </motion.div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default TagsCard
