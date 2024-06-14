import TrendingBlogs from '@/payload/blocks/ui/blogs'
import { serverClient } from '@/trpc/serverClient'

const Author = async ({
  params: {
    author: [authorName],
  },
}: {
  params: { author: string[] }
}) => {
  try {
    const blogs = await serverClient.author.getBlogsByAuthorName({
      author: authorName,
    })
    const author = await serverClient.author.getAuthorByName({
      author: authorName,
    })
    return blogs?.length !== 0 ? (
      <div className='mb-32 mt-12'>
        <div>
          {' '}
          <section className=' py-6 text-white'>
            <div className='container mx-auto flex flex-col items-center justify-center space-y-8 pt-20 sm:pt-28'>
              <h1 className='text-center text-4xl font-bold leading-none sm:text-5xl'>
                {author?.name}
              </h1>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt='user_image'
                height={96}
                width={96}
                className='mb-4 h-24 w-24 flex-shrink-0 self-center rounded-full bg-cover bg-center '
                src={author?.imageUrl as string}
              />
              <p className='max-w-2xl text-center'>{author?.email}</p>
            </div>
          </section>
        </div>
        <TrendingBlogs blogs={blogs} />
      </div>
    ) : (
      <p>Author is not present</p>
    )
  } catch (error) {
    console.error('Error fetching blogs:', error)
  }
}

export default Author
