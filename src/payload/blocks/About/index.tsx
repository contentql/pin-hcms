import { AboutType, Media } from '@payload-types'

const About = (data: AboutType) => {
  return (
    <div>
      <section className='bg-white pb-10 dark:bg-gray-900'>
        <div className='mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0'>
          <div className='mr-auto place-self-center lg:col-span-7'>
            <h1 className='mb-4 max-w-2xl text-4xl font-bold leading-none tracking-tight dark:text-white md:text-3xl lg:text-5xl'>
              {data?.title}
            </h1>
            <p className='mb-6 max-w-2xl text-lg font-light text-gray-500 dark:text-gray-400 lg:mb-8'>
              {data?.description}
            </p>
            <a
              href='#'
              className='bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:focus:ring-primary-900 mr-3 inline-flex items-center justify-center rounded-lg px-5 py-3 text-center text-base font-medium text-gray-900 focus:ring-4'>
              Get started
              <svg
                className='-mr-1 ml-2 h-5 w-5'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  fill-rule='evenodd'
                  d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                  clip-rule='evenodd'></path>
              </svg>
            </a>
            <a
              href='#'
              className='inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-center text-base font-medium text-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800'>
              {data?.button}
            </a>
          </div>
          <div className='hidden rounded-lg lg:col-span-5 lg:mt-0 lg:flex'>
            <img
              src={(data?.image as Media)?.url || ''}
              alt={(data?.image as Media)?.alt || ''}
              className='rounded-lg'
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
