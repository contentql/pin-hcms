const Nav_1 = () => {
  return (
    <header className='border-b border-gray-800 bg-gray-900'>
      <div className='mx-auto px-4 sm:px-6 lg:px-8 xl:px-12'>
        <div className='flex h-16 items-center justify-between lg:h-[72px]'>
          <div className='flex flex-shrink-0 items-center'>
            <a href='#' title='' className='inline-flex'>
              <span className='sr-only'> Rareblocks logo </span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className='h-8 w-auto'
                src='https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/logo-alt.svg'
                alt=''
              />
            </a>
          </div>

          <div className='hidden lg:flex lg:justify-center lg:space-x-10 xl:space-x-14'>
            <a
              href='#'
              title=''
              className='rounded text-base font-medium text-gray-400 transition-all duration-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2'>
              {' '}
              Live Preview{' '}
            </a>

            <a
              href='#'
              title=''
              className='rounded text-base font-medium text-gray-400 transition-all duration-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2'>
              {' '}
              Features{' '}
            </a>

            <a
              href='#'
              title=''
              className='rounded text-base font-medium text-gray-400 transition-all duration-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2'>
              {' '}
              Documentation{' '}
            </a>

            <a
              href='#'
              title=''
              className='rounded text-base font-medium text-gray-400 transition-all duration-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2'>
              {' '}
              Help{' '}
            </a>
          </div>

          <div className='flex items-center justify-end space-x-5'>
            <button
              type='button'
              className='-m-2 p-2 text-white transition-all duration-200 hover:text-gray-200 lg:hidden'>
              <svg
                className='h-6 w-6'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            </button>

            <button
              type='button'
              className='relative -m-2 p-2 text-white transition-all duration-200 hover:text-gray-200'>
              <svg
                className='h-6 w-6'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z'
                />
              </svg>

              <span className='absolute right-0 top-0 flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600 text-xs font-bold text-white'>
                {' '}
                3{' '}
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Nav_1
