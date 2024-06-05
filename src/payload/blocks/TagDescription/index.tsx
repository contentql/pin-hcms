import { Media, TagDescription_Type } from '@payload-types'
import Image from 'next/image'

import DisplayTags from './displayTags'

const TagDescription = (data: TagDescription_Type) => {
  return (
    <div>
      {' '}
      <section className='py-6 dark:bg-gray-100 dark:text-gray-800 '>
        <div className='container mx-auto flex flex-col items-center justify-center space-y-8 pt-20 sm:pt-28'>
          <h1 className='text-center text-4xl font-bold leading-none sm:text-5xl'>
            {data?.title}
          </h1>
          <Image
            alt=''
            height={96}
            width={96}
            className='mb-4 h-24 w-24 flex-shrink-0 self-center rounded-full bg-cover bg-center '
            src={(data?.image as Media)?.url as string}
          />
          <p className='max-w-2xl text-center dark:text-gray-600'>
            {data?.description}
          </p>
        </div>
        <DisplayTags />
      </section>
    </div>
  )
}

export default TagDescription
