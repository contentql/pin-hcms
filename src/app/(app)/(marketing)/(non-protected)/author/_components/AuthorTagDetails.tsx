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
    <div className='flex items-center justify-center gap-x-10 bg-[#26304e] pb-14 pt-40 text-white'>
      <div className='flex flex-col items-center justify-center space-y-4 '>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt=''
          height={96}
          width={96}
          className='mb-4 h-32 w-32 flex-shrink-0 self-center rounded-full bg-cover bg-center '
          src={authorDetails?.imageUrl as string}
        />
        <h1 className='underline-from-left text-center text-3xl font-bold leading-none sm:text-5xl'>
          {authorDetails?.name}
        </h1>
        <div>
          <div className='flex flex-wrap gap-x-4'>
            {authorDetails?.socialMedia?.map((social, index) => (
              <a
                key={social?.id}
                href={social?.url}
                className='rounded-full p-2 text-white '>
                {listOfIcons[social?.icon!]}
              </a>
            ))}
          </div>
        </div>
      </div>
      {/* <div className=''>
        <CiCirclePlus size={32} style={{ color: 'white', font: 'blog' }} />
      </div> */}
      <div className='flex flex-col items-center justify-center space-y-4 '>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt=''
          height={96}
          width={96}
          className='mb-4 h-32 w-32 flex-shrink-0 self-center rounded-full bg-cover bg-center '
          src={(tagDetails?.tagImage as Media)?.url as string}
        />
        <h1 className='underline-from-left text-center text-3xl font-bold leading-none sm:text-5xl'>
          {tagDetails?.title}
        </h1>
        <p className='text-md max-w-3xl text-center'>
          {tagDetails?.description}
        </p>
      </div>
    </div>
  )
}

export default AuthorTagDetails
