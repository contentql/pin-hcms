'use client'

import { useRouter } from 'next/navigation'

import { trpc } from '@/trpc/client'

const DisplayAuthors = () => {
  const router = useRouter()
  const { data: authorsWithCount } =
    trpc.author.getAllAuthorsWithCount.useQuery()

  const { data } = trpc.author.getBlogsByAuthorName.useQuery({
    author: 'Rahaman123',
  })
  console.log('blog by authors', data)

  return (
    <div className='relative flex flex-wrap items-center justify-center gap-x-12 gap-y-6 px-20 py-20 md:px-2'>
      {authorsWithCount?.map((author, index) => (
        <div
          key={index}
          onClick={() => {
            router.push(`author/${author?.name}`)
          }}
          className=' relative flex w-full cursor-pointer flex-col items-center justify-center space-y-2 rounded-3xl py-10 transition-all duration-500 hover:scale-105 hover:bg-[#26304e] md:w-64'>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt=''
            height={96}
            width={96}
            className='h-24 w-24 flex-shrink-0 self-center rounded-full bg-cover bg-center duration-300 '
            src={author?.imageUrl || ''}
          />
          <h1 className='font-semibold'>{author?.name}</h1>
          <p className=' text-gray-500'>
            {author?.totalDocs} {author?.totalDocs === 1 ? 'Blog' : 'Blogs'}
          </p>
        </div>
      ))}
    </div>
  )
}

export default DisplayAuthors
