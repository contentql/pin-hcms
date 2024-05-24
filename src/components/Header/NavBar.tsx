'use client'

import Image from 'next/image'

import { Media, Page } from '~/payload-types'
import { trpc } from '~/src/trpc/client'

export function NavBar() {
  const { data } = trpc.SiteSettings.getSiteSettings.useQuery()

  return (
    <header className='fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/70 py-3 shadow backdrop-blur-sm md:top-6 md:rounded-3xl lg:max-w-screen-lg'>
      <div className='px-4'>
        <div className='flex items-center justify-between'>
          <div className='flex shrink-0'>
            <a aria-current='page' className='flex items-center' href='/'>
              <Image
                className='h-7 w-auto'
                src={(data?.header?.logo_image as Media)?.url || ''}
                alt={(data?.header?.logo_image as Media)?.alt || ''}
                height={100}
                width={100}
              />
              {/* <p className='sr-only'>{data?.header?.logo}</p> */}
            </a>
          </div>
          <div className='hidden md:flex md:items-center md:justify-center md:gap-5'>
            {data?.header?.menuItems?.map((item, index) => (
              <a
                key={index}
                aria-current='page'
                className='inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 capitalize'
                href={(item?.page?.value as Page)?.path || '#'}>
                {(item?.page?.value as Page)?.title.toLowerCase()}
              </a>
            ))}
          </div>
          <div className='flex items-center justify-end gap-3'>
            <a
              className='hidden items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-gray-50 sm:inline-flex capitalize cursor-pointer'
              href={data?.header?.primary_button_path || '#'}>
              {data?.header?.primary_button_text?.toLowerCase()}
            </a>
            <a
              className='inline-flex items-center justify-center rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 capitalize cursor-pointer'
              href={data?.header?.secondary_button_path || '#'}>
              {data?.header?.secondary_button_text?.toLowerCase()}
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
