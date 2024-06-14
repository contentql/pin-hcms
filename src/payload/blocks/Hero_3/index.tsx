import { Hero_3Type, Media, Tag } from '@payload-types'
import Link from 'next/link'
import * as HiIcons from 'react-icons/hi2'

type HiIconKeys = keyof typeof HiIcons

const IconComponent = (icon: string) => {
  const Icon = HiIcons[icon as HiIconKeys]
  if (!Icon) {
    console.error(`Icon ${icon} does not exist in react-icons/hi2`)
    return null
  }
  return <Icon />
}

const Hero_3 = (data: Hero_3Type) => {
  return (
    <section className='relative flex h-auto min-h-[116vh] w-full flex-col items-center justify-center pt-10 lg:pt-40'>
      <div className='absolute left-[50%] top-[24%] h-[20%] w-[20%] -translate-x-1/2 rounded-full bg-indigo-600 blur-[110px]'></div>
      <h1 className='w-full max-w-2xl text-center text-3xl font-bold text-white md:text-4xl lg:text-7xl'>
        {data?.headline}
      </h1>
      <h1 className='mt-3 w-full max-w-2xl text-center text-3xl font-bold text-white md:text-4xl lg:text-7xl'>
        {data?.subHeadline?.split(' ').slice(0, -1).join(' ')}
        <span className='ml-3 text-indigo-600'>
          {data?.subHeadline?.split(' ')?.at(-1)}
        </span>
      </h1>
      <p className='mt-10 max-w-xl text-center text-sky-200 lg:text-xl'>
        {'  ' + data?.sub_title}
      </p>
      <div className='flex space-x-2 '>
        {data?.buttons?.map((button, idx) => (
          <Link
            href={button?.link}
            key={idx}
            className='mt-16 rounded-md bg-indigo-600 px-5 py-3 text-white transition hover:bg-indigo-700'>
            {button?.button}
          </Link>
        ))}
      </div>

      <div className='mt-10 flex items-center justify-center gap-5 text-sm font-semibold uppercase text-white lg:text-xl'>
        <div className='h-0.5 w-6 rounded-full bg-indigo-600 lg:h-1.5 lg:w-12'></div>
        {data?.tag_title}
        <div className='h-0.5 w-6 rounded-full bg-indigo-600 lg:h-1.5 lg:w-12'></div>
      </div>
      <div className='mx-2 my-2 flex h-auto w-[80%] flex-wrap items-center justify-center gap-5 rounded-3xl md:flex md:flex-row lg:mx-auto lg:my-10 lg:h-24 lg:gap-14 lg:bg-gray-600'>
        {data?.tags?.map((tag, idx) => (
          <div
            key={idx}
            className='flex h-auto w-auto items-center justify-center gap-4 text-sm font-bold text-white md:text-xl lg:text-2xl'>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={((tag?.value as Tag)?.tagImage as Media)?.url || ''}
              alt='brand log'
              width={50}
              height={50}
              className='rounded-full'
            />

            {(tag?.value as Tag)?.title}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Hero_3
