'use client'

import { Media, Page, SiteSetting } from '@payload-types'
import Image from 'next/image'

import { trpc } from '@/trpc/client'

const Footer = ({ initData }: { initData: SiteSetting }) => {
  const { data = initData } = trpc.SiteSettings.getSiteSettings.useQuery()

  if (!data?.footer.logo_image) return null

  return (
    <footer className='bg-white p-4 dark:bg-gray-800 md:px-6 md:py-8'>
      <div className='sm:flex sm:items-center sm:justify-between'>
        <a href='#' target='_blank' className='mb-4 flex items-center sm:mb-0'>
          <Image
            src={(data?.footer?.logo_image as Media)?.url || ''}
            className='mr-4 h-7 w-auto'
            alt={(data?.footer?.logo_image as Media)?.alt || ''}
            height={100}
            width={100}
          />
          <span className='self-center whitespace-nowrap text-xl font-semibold dark:text-white'>
            {data?.footer?.logo}
          </span>
        </a>
        <ul className='mb-6 flex flex-wrap items-center sm:mb-0'>
          {data?.footer?.menuItems?.map((item: any, index: number) => (
            <li key={index}>
              <a
                href={(item?.page?.value as Page)?.path || ''}
                className='mr-4 text-sm text-gray-500 hover:underline dark:text-gray-400 md:mr-6'>
                {(item?.page?.value as Page)?.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <hr className='my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8' />
      <span className='block text-sm text-gray-500 dark:text-gray-400 sm:text-center'>
        {data?.footer?.copyright}
      </span>
    </footer>
  )
}

export default Footer
