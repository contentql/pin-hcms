import { Media, Tag, User } from '@payload-types'

import { listOfIcons } from '@/utils/getSocialMediaIcon'

function AuthorTagDetails({
  tagDetails,
  authorDetails,
}: {
  tagDetails: Tag
  authorDetails: User
}) {
  return (
    <div className='flex items-center justify-center gap-x-12 bg-[#26304e] pb-14 pt-40 text-white'>
      <div className='relative flex flex-col items-center justify-center space-y-4'>
        <div className='relative flex h-24 w-full cursor-pointer items-center justify-center'>
          {/* Tag image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt=''
            height={96}
            width={96}
            className='z-10 h-24 w-24 rounded-full  bg-cover bg-center transition-all duration-300 hover:z-30'
            src={(tagDetails?.tagImage as Media)?.url as string}
            style={{ marginRight: '-12px' }}
          />
          {/* Author image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt=''
            height={96}
            width={96}
            className='z-20 h-24 w-24 rounded-full bg-cover bg-center'
            src={authorDetails?.imageUrl as string}
            style={{ marginLeft: '-12px' }}
          />
        </div>

        <h1 className='underline-from-left mt-28 text-center text-lg font-bold leading-none md:text-3xl'>
          Exploring <span className='text-indigo-600'>{tagDetails?.title}</span>{' '}
          with <span className='text-indigo-600'>{authorDetails?.name}</span>
        </h1>
        <div className='flex flex-wrap gap-x-4'>
          {authorDetails?.socialMedia?.map((social, index) => (
            <a
              key={social?.id}
              href={social?.url}
              className='rounded-full p-2 text-white'>
              {listOfIcons[social?.icon!]}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AuthorTagDetails
