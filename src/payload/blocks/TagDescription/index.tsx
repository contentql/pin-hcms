import { Media, TagDescription_Type } from '@payload-types'

import DisplayTags from './displayTags'

const TagDescription = (data: TagDescription_Type) => {
  return (
    <div className='w-full  text-white'>
      <div className='flex flex-col items-center justify-center space-y-8 bg-[#26304e] pb-14 pt-40'>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt=''
          height={96}
          width={96}
          className='mb-4 h-24 w-24 flex-shrink-0 self-center rounded-full bg-cover bg-center '
          src={(data?.image as Media)?.url as string}
        />
        <h1 className='text-center text-3xl font-bold leading-none sm:text-4xl'>
          {data?.title}
        </h1>
        <p className='max-w-2xl px-2 text-center md:px-0'>
          {data?.description}
        </p>
      </div>
      <DisplayTags />
    </div>
  )
}

export default TagDescription
