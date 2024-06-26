'use client'

import { User } from '@payload-types'
import { AnimatePresence, motion } from 'framer-motion'

import { listOfIcons } from '@/utils/getSocialMediaIcon'

function AuthorDetails({ author }: { author: User }) {
  return (
    <>
      <div className=' space-y-4 bg-[#26304e] pb-14 pt-40 text-white'>
        <AnimatePresence>
          <motion.div
            initial={{ scale: 0 }}
            animate={{
              scale: 1,
              transition: { delay: 0.5, type: 'spring' },
            }}
            exit={{
              opacity: 0,
              transition: { delay: 0.5 },
            }}
            layout
            className='flex flex-col items-center justify-center'>
            {author?.imageUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                alt=''
                height={96}
                width={96}
                className='mb-4 h-24 w-24 flex-shrink-0 self-center rounded-full bg-cover bg-center '
                src={author?.imageUrl || ''}
                // eslint-disable-next-line @next/next/no-img-element
              />
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src='/images/author.png'
                height={96}
                width={96}
                alt='author'
                className='mb-4 h-24 w-24 flex-shrink-0 self-center rounded-full bg-cover bg-center '
              />
            )}
            <h1 className='text-center text-3xl font-bold capitalize leading-none sm:text-4xl'>
              {author?.name}
            </h1>
            <div className='flex flex-wrap gap-x-4'>
              {author?.socialMedia?.map((social, index) => (
                <a
                  key={social?.id}
                  href={social?.url}
                  className='rounded-full p-2 text-white '>
                  {listOfIcons[social?.icon!]}
                </a>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  )
}

export default AuthorDetails
