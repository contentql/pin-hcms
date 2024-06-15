'use client'

import { Media, Page, SiteSetting } from '@payload-types'

import { trpc } from '@/trpc/client'

const Footer = ({ initData }: { initData: SiteSetting }) => {
  const { data = initData } = trpc.SiteSettings.getSiteSettings.useQuery()

  if (!data?.footer?.logo_image) return null

  return (
    <footer className='bg-white p-4 dark:bg-[#1e2846] md:px-6 md:py-4'>
      <div className='sm:flex sm:items-center sm:justify-between'>
        <a href='#' target='_blank' className='mb-4 flex items-center sm:mb-0'>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
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
        <ul className='flex flex-wrap items-center sm:mb-0'>
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
      <span className='mt-2 block text-sm text-gray-500 dark:text-gray-400 sm:text-center'>
        {data?.footer?.copyright}
      </span>
    </footer>
  )
}

export default Footer
