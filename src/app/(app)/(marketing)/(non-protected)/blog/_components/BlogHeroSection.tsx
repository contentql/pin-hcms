import { Blog } from '@payload-types'

import { SwipeCarousel } from './SwipeCarousel'

function BlogHeroSection({ blogsData }: { blogsData: Blog[] }) {
  return (
    <section className='mt-32 flex w-full flex-col items-center justify-center gap-x-2 overflow-hidden text-white md:mx-10 lg:mx-20 lg:flex-row lg:justify-between'>
      <div className='flex w-full items-center  lg:w-[40%]'>
        <div className='mb-8 max-w-7xl px-2 text-center  lg:max-w-2xl lg:text-left'>
          <h1 className='text-4xl font-bold leading-snug tracking-tight text-gray-800 dark:text-white lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight'>
            Free Blogs Posting Page for startups
          </h1>
          <p className='py-5 text-xl leading-normal text-gray-500 dark:text-gray-300 lg:text-xl xl:text-2xl'>
            ContentQL is a free Blog Posting page & marketing website template
            for startups and indie projects. Its built with Next.js &
            TailwindCSS. And its completely open-source.
          </p>

          <div className='flex flex-col items-center justify-center space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0 lg:justify-start'>
            <a
              href='https://web3templates.com/templates/nextly-landing-page-template-for-startups'
              target='_blank'
              rel='noopener'
              className='rounded-md bg-indigo-600 px-8 py-4 text-center text-lg font-medium text-white '>
              Download for Free
            </a>
            <a
              href='https://github.com/web3templates/nextly-template/'
              target='_blank'
              rel='noopener'
              className='flex items-center space-x-2 text-gray-500 dark:text-gray-400'>
              <svg
                role='img'
                width='24'
                height='24'
                className='h-5 w-5'
                viewBox='0 0 24 24'
                fill='currentColor'
                xmlns='http://www.w3.org/2000/svg'>
                <title>GitHub</title>
                <path d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12' />
              </svg>
              <span> View on Github</span>
            </a>
          </div>
        </div>
      </div>
      <div className='flex w-full items-center md:w-[50%]'>
        <SwipeCarousel blogsData={blogsData} />
      </div>
    </section>
  )
}

export default BlogHeroSection
