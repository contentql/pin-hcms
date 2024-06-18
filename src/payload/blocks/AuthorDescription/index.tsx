import { AuthorDescription_Type, Media } from '@payload-types'

import DisplayAuthors from './displayAuthors'

const Author = (data: AuthorDescription_Type) => {
  return (
    <div className='text-white'>
      <div className='mx-auto flex flex-col items-center justify-center space-y-4 bg-[#26304e] pb-14 pt-40'>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt=''
          height={96}
          width={96}
          className='mb-4 h-24 w-24 flex-shrink-0 self-center rounded-full bg-cover bg-center '
          src={(data?.image as Media)?.url as string}
        />
        <h1 className='text-center text-4xl font-bold leading-none sm:text-5xl'>
          {data?.title}
        </h1>
        <p className='max-w-lg text-center'>{data?.description}</p>
      </div>
      <DisplayAuthors />
    </div>
  )
}

export default Author
