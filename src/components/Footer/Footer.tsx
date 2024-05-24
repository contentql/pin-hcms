'use client'

import Image from 'next/image'

import { Media, Page } from '~/payload-types'
import { trpc } from '~/src/trpc/client'

const Footer = () => {
  const { data } = trpc.SiteSettings.getSiteSettings.useQuery()
  return (
    <div>
      <div className=' w-full'>
        <footer className='mx-20 p-4 bg-white md:px-6 md:py-8 dark:bg-gray-800'>
          <div className='sm:flex sm:items-center sm:justify-between'>
            <a
              href='#'
              target='_blank'
              className='flex items-center mb-4 sm:mb-0'>
              <Image
                src={(data?.footer?.logo_image as Media)?.url || ''}
                className='mr-4 h-7 w-auto'
                alt={(data?.footer?.logo_image as Media)?.alt || ''}
                height={100}
                width={100}
              />
              <span className='self-center text-xl font-semibold whitespace-nowrap dark:text-white'>
                {data?.footer?.logo}
              </span>
            </a>
            <ul className='flex flex-wrap items-center mb-6 sm:mb-0'>
              {data?.footer?.menuItems?.map((item, index) => (
                <li key={index}>
                  <a
                    href={(item?.page?.value as Page)?.path || ''}
                    className='mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400'>
                    {(item?.page?.value as Page)?.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
          <span className='block text-sm text-gray-500 sm:text-center dark:text-gray-400'>
            {data?.footer?.copyright}
          </span>
        </footer>
      </div>
    </div>
  )
}

export default Footer
