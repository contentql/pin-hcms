import { User } from '@payload-types'
import Link from 'next/link'
import { MdOutlineEmail } from 'react-icons/md'

function AuthorDetails({ author }: { author: User }) {
  return (
    <div className=' flex flex-col items-center justify-center space-y-4 bg-[#26304e] pb-14 pt-40 text-white'>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        alt=''
        height={96}
        width={96}
        className='mb-4 h-24 w-24 flex-shrink-0 self-center rounded-full bg-cover bg-center '
        src={author?.imageUrl || ''}
      />
      <h1 className='text-center text-4xl font-bold leading-none sm:text-5xl'>
        {author?.name}
      </h1>
      <div className='flex items-center justify-center space-x-4 rounded-full p-2 text-gray-400 shadow-xl'>
        <MdOutlineEmail size={24} />
        <Link href={`mailto: ${author?.email}`}>{author?.email}</Link>
      </div>
    </div>
  )
}

export default AuthorDetails
