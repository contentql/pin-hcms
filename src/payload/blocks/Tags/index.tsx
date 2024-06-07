import { Media, TagsType } from '@payload-types'
import Image from 'next/image'

/* eslint-disable @next/next/no-img-element */
const Tags = (data: TagsType) => {
  return (
    <section className='bg-gray-800 pb-40 pt-20'>
      <div className='container mx-auto px-4'>
        <div className='mb-24 flex flex-wrap justify-center text-center'>
          <div className='w-full px-4 lg:w-6/12'>
            <h2 className='text-4xl font-semibold text-white'>{data?.title}</h2>
            <p className='m-4 text-lg leading-relaxed text-gray-300'>
              {data?.sub_title}
            </p>
          </div>
        </div>
        <div className='flex flex-wrap'>
          {data?.tags?.map((tag, idx) => (
            <div
              key={idx}
              className='mb-12 w-full px-4 md:w-6/12 lg:mb-0 lg:w-3/12'>
              <div className='px-6'>
                <Image
                  alt={(tag?.image as Media)?.alt as string}
                  src={(tag?.image as Media)?.url as string}
                  height={1000}
                  width={1000}
                  className='mx-auto max-w-full rounded-full shadow-lg'
                  style={{ maxWidth: '120px' }}
                />
                <div className='pt-6 text-center'>
                  <h5 className='text-xl font-bold text-white'>{tag?.name}</h5>
                  <p className='mt-1 text-sm font-semibold uppercase text-gray-500'>
                    {tag?.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Tags
