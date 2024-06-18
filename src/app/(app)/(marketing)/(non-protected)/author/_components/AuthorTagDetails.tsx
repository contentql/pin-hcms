import { Media, Tag } from '@payload-types'

function AuthorTagDetails({ data }: { data: Tag }) {
  return (
    <div className='flex flex-col items-center justify-center space-y-4 bg-[#26304e] pb-14 pt-40 text-white'>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        alt=''
        height={96}
        width={96}
        className='mb-4 h-36 w-36 flex-shrink-0 self-center rounded-full bg-cover bg-center '
        src={(data?.tagImage as Media)?.url as string}
      />
      <h1 className='underline-from-left text-center text-3xl font-bold leading-none sm:text-5xl'>
        {data?.title}
      </h1>
      <p className='text-md max-w-3xl text-center'>{data?.description}</p>
    </div>
  )
}

export default AuthorTagDetails
