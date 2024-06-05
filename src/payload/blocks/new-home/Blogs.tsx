/* eslint-disable @next/next/no-img-element */
const Blogs = () => {
  return (
    <div className='flex items-center justify-center bg-gray-900 pb-40 pt-20'>
      <div className='w-96 px-4 2xl:container sm:w-auto md:px-6 lg:px-20 2xl:mx-auto'>
        <div role='main' className='flex flex-col items-center justify-center'>
          <h1 className='text-center text-4xl font-semibold leading-9 text-gray-50'>
            Popular Blogs
          </h1>
          <p className='mt-4 w-11/12 text-center text-base leading-normal text-white md:w-10/12 lg:w-1/2'>
            Dive into our latest articles featuring a wide range of topics and
            technologies. Discover insights, tips, and more!
          </p>
        </div>
        <div className='mt-8 items-stretch md:mt-12 lg:flex'>
          <div className='lg:w-1/2'>
            <div className='items-center justify-between gap-x-6 sm:flex xl:gap-x-8'>
              <div className='relative sm:w-1/2'>
                <div>
                  <p className='absolute right-0 top-0 p-6 text-xs font-medium leading-3 text-white'>
                    12 April 2024
                  </p>
                  <div className='absolute bottom-0 left-0 p-6'>
                    <h2 className='5 text-xl font-semibold text-white'>
                      Exploring React JS
                    </h2>
                    <p className='mt-2 text-base leading-4 text-white'>
                      Learn the basics and advanced features of React.
                    </p>
                    <a
                      href='javascript:void(0)'
                      className='mt-4 flex cursor-pointer items-center text-white hover:text-gray-200 hover:underline focus:underline focus:outline-none'>
                      <p className='pr-2 text-sm font-medium leading-none'>
                        Read More
                      </p>
                      <svg
                        className='fill-stroke'
                        width='16'
                        height='16'
                        viewBox='0 0 16 16'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path
                          d='M5.75 12.5L10.25 8L5.75 3.5'
                          stroke='currentColor'
                          stroke-width='2'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                <img
                  src='https://i.ibb.co/DYxtCJq/img-1.png'
                  className='w-full'
                  alt='React JS'
                />
              </div>
              <div className='relative mt-4 sm:mt-0 sm:w-1/2'>
                <div>
                  <p className='absolute right-0 top-0 p-6 text-xs font-medium leading-3 text-white'>
                    12 April 2024
                  </p>
                  <div className='absolute bottom-0 left-0 p-6'>
                    <h2 className='5 text-xl font-semibold text-white'>
                      Mastering Next JS
                    </h2>
                    <p className='mt-2 text-base leading-4 text-white'>
                      Server-side rendering and more with Next.js.
                    </p>
                    <a
                      href='javascript:void(0)'
                      className='mt-4 flex cursor-pointer items-center text-white hover:text-gray-200 hover:underline focus:underline focus:outline-none'>
                      <p className='pr-2 text-sm font-medium leading-none'>
                        Read More
                      </p>
                      <svg
                        className='fill-stroke'
                        width='16'
                        height='16'
                        viewBox='0 0 16 16'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path
                          d='M5.75 12.5L10.25 8L5.75 3.5'
                          stroke='currentColor'
                          stroke-width='2'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                <img
                  src='https://i.ibb.co/3C5HvxC/img-2.png'
                  className='w-full'
                  alt='Next JS'
                />
              </div>
            </div>
            <div className='relative'>
              <div>
                <p className='absolute right-0 top-0 p-6 text-xs font-medium leading-3 text-white md:p-10'>
                  12 April 2024
                </p>
                <div className='absolute bottom-0 left-0 p-6 md:p-10'>
                  <h2 className='5 text-xl font-semibold text-white'>
                    Payload CMS Insights
                  </h2>
                  <p className='mt-2 text-base leading-4 text-white'>
                    Discover how to use Payload CMS effectively.
                  </p>
                  <a
                    href='javascript:void(0)'
                    className='mt-4 flex cursor-pointer items-center text-white hover:text-gray-200 hover:underline focus:underline focus:outline-none'>
                    <p className='pr-2 text-sm font-medium leading-none'>
                      Read More
                    </p>
                    <svg
                      className='fill-stroke'
                      width='16'
                      height='16'
                      viewBox='0 0 16 16'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M5.75 12.5L10.25 8L5.75 3.5'
                        stroke='currentColor'
                        stroke-width='2'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <img
                src='https://i.ibb.co/Ms4qyXp/img-3.png'
                alt='Payload CMS'
                className='mt-8 hidden w-full sm:block md:mt-6'
              />
              <img
                className='mt-4 w-full sm:hidden'
                src='https://i.ibb.co/6XYbN7f/Rectangle-29.png'
                alt='Payload CMS'
              />
            </div>
          </div>
          <div className='mt-4 flex-col justify-between md:mt-6 lg:ml-4 lg:mt-0 lg:flex lg:w-1/2 xl:ml-8'>
            <div className='relative'>
              <div>
                <p className='absolute right-0 top-0 p-6 text-xs font-medium leading-3 text-white md:p-10'>
                  12 April 2024
                </p>
                <div className='absolute bottom-0 left-0 p-6 md:p-10'>
                  <h2 className='5 text-xl font-semibold text-white'>
                    Auth JS in Depth
                  </h2>
                  <p className='mt-2 text-base leading-4 text-white'>
                    Everything you need to know about authentication with
                    Auth.js.
                  </p>
                  <a
                    href='javascript:void(0)'
                    className='mt-4 flex cursor-pointer items-center text-white hover:text-gray-200 hover:underline focus:underline focus:outline-none'>
                    <p className='pr-2 text-sm font-medium leading-none'>
                      Read More
                    </p>
                    <svg
                      className='fill-stroke'
                      width='16'
                      height='16'
                      viewBox='0 0 16 16'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M5.75 12.5L10.25 8L5.75 3.5'
                        stroke='currentColor'
                        stroke-width='2'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <img
                src='https://i.ibb.co/6Wfjf2w/img-4.png'
                alt='Auth JS'
                className='hidden w-full sm:block'
              />
              <img
                className='w-full sm:hidden'
                src='https://i.ibb.co/dpXStJk/Rectangle-29.png'
                alt='Auth JS'
              />
            </div>
            <div className='mt-4 items-center justify-between gap-x-6 sm:flex md:mt-6 xl:gap-x-8'>
              <div className='relative w-full'>
                <div>
                  <p className='absolute right-0 top-0 p-6 text-xs font-medium leading-3 text-white'>
                    12 April 2024
                  </p>
                  <div className='absolute bottom-0 left-0 p-6'>
                    <h2 className='5 text-xl font-semibold text-white'>
                      Understanding GraphQL
                    </h2>
                    <p className='mt-2 text-base leading-4 text-white'>
                      A deep dive into GraphQL and its benefits.
                    </p>
                    <a
                      href='javascript:void(0)'
                      className='mt-4 flex cursor-pointer items-center text-white hover:text-gray-200 hover:underline focus:underline focus:outline-none'>
                      <p className='pr-2 text-sm font-medium leading-none'>
                        Read More
                      </p>
                      <svg
                        className='fill-stroke'
                        width='16'
                        height='16'
                        viewBox='0 0 16 16'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path
                          d='M5.75 12.5L10.25 8L5.75 3.5'
                          stroke='currentColor'
                          stroke-width='2'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                <img
                  src='https://i.ibb.co/3yvZBpm/img-5.png'
                  className='w-full'
                  alt='GraphQL'
                />
              </div>
              <div className='relative mt-4 w-full sm:mt-0'>
                <div>
                  <p className='absolute right-0 top-0 p-6 text-xs font-medium leading-3 text-white'>
                    12 April 2024
                  </p>
                  <div className='absolute bottom-0 left-0 p-6'>
                    <h2 className='5 text-xl font-semibold text-white'>
                      Exploring TypeScript
                    </h2>
                    <p className='mt-2 text-base leading-4 text-white'>
                      Enhance your JavaScript with TypeScript.
                    </p>
                    <a
                      href='javascript:void(0)'
                      className='mt-4 flex cursor-pointer items-center text-white hover:text-gray-200 hover:underline focus:underline focus:outline-none'>
                      <p className='pr-2 text-sm font-medium leading-none'>
                        Read More
                      </p>
                      <svg
                        className='fill-stroke'
                        width='16'
                        height='16'
                        viewBox='0 0 16 16'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path
                          d='M5.75 12.5L10.25 8L5.75 3.5'
                          stroke='currentColor'
                          stroke-width='2'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                <img
                  src='https://i.ibb.co/gDdnJb5/img-6.png'
                  className='w-full'
                  alt='TypeScript'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blogs
