const Hero_2 = () => {
  return (
    <div className='relative flex min-h-screen items-center bg-black'>
      <div className='absolute inset-0 hidden lg:block'>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className='h-full w-full object-cover object-right-bottom'
          src='https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/hero/1/background.png'
          alt=''
        />
      </div>
      <div className='relative max-w-7xl px-8 sm:px-12 lg:px-40'>
        <div className='mx-auto max-w-xl text-center lg:mx-0 lg:max-w-md lg:text-left xl:max-w-lg'>
          <h1 className='text-3xl font-bold text-white sm:text-4xl xl:text-5xl xl:leading-tight'>
            Build SaaS Landing Page without Writing a Single Code
          </h1>
          <p className='mt-8 text-base font-normal leading-7 text-gray-400 lg:max-w-md lg:pr-16 xl:pr-0'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nunc
            nisl eu consectetur. Mi massa elementum odio eu viverra amet.
          </p>

          <div className='mt-8 flex items-center justify-center space-x-5 lg:justify-start xl:mt-16'>
            <a
              href='#'
              title=''
              className='inline-flex items-center justify-center rounded-md border border-transparent bg-white px-3 py-3 text-base font-bold leading-7 text-gray-900 transition-all duration-200 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 sm:px-6'
              role='button'>
              Get UI Kit Now
            </a>

            <a
              href='#'
              title=''
              className='
                            inline-flex
                            items-center
                            justify-center
                            rounded-md
                            border
                            border-transparent
                            bg-transparent
                            px-2
                            py-3
                            text-base
                            font-bold
                            leading-7
                            text-white transition-all
                            duration-200
                            hover:bg-gray-700
                            focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-900
                            sm:px-4
                        '
              role='button'>
              Check live preview
            </a>
          </div>
        </div>
      </div>
      <div className='absolute left-[40%] top-[30%] h-[20%] w-[20%] -translate-x-1/2 rounded-full bg-sky-500 blur-[110px]'></div>
      <div className='mt-8 lg:hidden'>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className='h-full w-full object-cover'
          src='https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/hero/1/bg.png'
          alt=''
        />
      </div>
    </div>
  )
}
export default Hero_2
