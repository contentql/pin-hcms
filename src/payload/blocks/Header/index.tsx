'use client'

import Image from 'next/image'
import { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

import { cn } from '@/utils/cn'

import { HoveredLink, Menu, MenuItem, SingleLink } from './Header'
import { Media, Page, SiteSetting } from '~/payload-types'
import { trpc } from '~/src/trpc/client'

type Header = keyof SiteSetting['header']

export function NavbarDemo({ initData }: { initData: SiteSetting }) {
  const { data = initData } = trpc.SiteSettings.getSiteSettings.useQuery()

  if (!data?.header?.menuItems?.length) return null

  return (
    <div className='relative flex w-full items-center justify-center'>
      <Navbar className='top-2' data={data as SiteSetting} />
    </div>
  )
}
export default NavbarDemo

function Navbar({
  className,
  data,
}: {
  className?: string
  data: SiteSetting
}) {
  const [active, setActive] = useState<string | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => setMenuOpen(!menuOpen)
  const [dropdownOpen, setDropdownOpen] = useState(null)
  const [doubleDropdownOpen, setDoubleDropdownOpen] = useState(null)

  const toggleDropdown = (index: any) => {
    setDropdownOpen(dropdownOpen === index ? null : index)
  }

  const toggleDoubleDropdown = (index: any) => {
    setDoubleDropdownOpen(doubleDropdownOpen === index ? null : index)
  }
  return (
    <div
      className={cn(
        'fixed inset-x-0 top-10 z-50 mx-auto max-w-7xl',
        className,
      )}>
      <div className='shadow-input relative flex items-center justify-between rounded-full border border-transparent bg-white px-5 dark:border-white/[0.2] dark:bg-black'>
        <div>
          <Image
            src={(data?.header?.logo_image as Media)?.url || ''}
            className='h-12 w-12'
            width={80}
            height={40}
            alt='Logo'
          />
        </div>
        <div className='hidden md:block'>
          <Menu setActive={setActive}>
            {data?.header?.menuItems?.map((menuItem, index) => {
              if (menuItem?.subMenuItems?.length! <= 0) {
                return (
                  <SingleLink
                    index={index}
                    key={index}
                    path={(menuItem?.page?.value as Page)?.path || ''}
                    item={(menuItem?.page?.value as Page)?.slug || ''}
                  />
                )
              }
              if (menuItem?.subMenuItems?.length! > 0) {
                return (
                  <MenuItem
                    key={index}
                    index={index}
                    setActive={setActive}
                    active={active}
                    item={(menuItem?.page?.value as Page)?.slug as string}
                    path={(menuItem?.page?.value as Page)?.path || ''}>
                    <div className='flex flex-col space-y-4 text-sm'>
                      {menuItem?.subMenuItems?.map((submenuItem, subIndex) => {
                        return (
                          <HoveredLink
                            key={index}
                            href={
                              (submenuItem?.page?.value as Page)?.path || ''
                            }
                            index={subIndex}
                            title={(submenuItem?.page?.value as Page)?.slug!}
                            icon={submenuItem?.icon || 'HiFolderMinus'}
                            description={submenuItem?.description!}
                          />
                        )
                      })}
                    </div>
                  </MenuItem>
                )
              }
            })}
          </Menu>
        </div>
        <div className='flex gap-3'>
          <a
            className='hidden cursor-pointer items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold capitalize text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-gray-50 sm:inline-flex'
            href={data?.header?.primary_button_path!}>
            {data?.header?.primary_button_text}
          </a>
          <a
            className='inline-flex cursor-pointer items-center justify-center rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold capitalize text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
            href={data?.header?.secondary_button_path!}>
            {data?.header?.secondary_button_text}
          </a>
          <button
            type='button'
            className='inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden'
            aria-controls='navbar-multi-level'
            aria-expanded={menuOpen}
            onClick={toggleMenu}>
            <svg
              className='h-5 w-5'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 17 14'>
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M1 1h15M1 7h15M1 13h15'
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`block w-full md:hidden ${menuOpen ? 'block' : 'hidden'}`}
        id='navbar-multi-level'>
        <ul className='mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-gray-900 rtl:space-x-reverse'>
          {data?.header?.menuItems?.map((menuItem, index) => {
            return menuItem?.subMenuItems?.length! >= 1 ? (
              <li key={index}>
                <button
                  id='dropdownNavbarLink'
                  onClick={() => toggleDropdown(index)}
                  className='flex w-full items-center justify-between px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:focus:text-white md:w-auto md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500'>
                  {(menuItem?.page?.value as Page)?.slug}{' '}
                  {dropdownOpen === index ? (
                    <IoIosArrowUp />
                  ) : (
                    <IoIosArrowDown />
                  )}
                </button>
                <div
                  className={`z-10 ${dropdownOpen === index ? 'block' : 'hidden'} w-full divide-y divide-gray-100 rounded-lg bg-white font-normal shadow dark:divide-gray-600 dark:bg-gray-700`}
                  id='dropdownNavbar'>
                  <ul
                    className='text-md w-full py-2 text-gray-700 dark:text-gray-200'
                    aria-labelledby='dropdownLargeButton'>
                    {menuItem?.subMenuItems?.map((subMenu, subIndex) => {
                      return subMenu?.subMenuItems?.length! >= 1 ? (
                        <li key={subIndex} aria-labelledby='dropdownNavbarLink'>
                          <button
                            id='doubleDropdownButton'
                            onClick={() => toggleDoubleDropdown(subIndex)}
                            type='button'
                            className='flex w-full items-center justify-between px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>
                            {(subMenu?.page?.value as Page)?.slug}
                            {doubleDropdownOpen === subIndex ? (
                              <IoIosArrowUp />
                            ) : (
                              <IoIosArrowDown />
                            )}
                          </button>
                          <div
                            className={`z-10 ${doubleDropdownOpen === subIndex ? 'block' : 'hidden'} w-full divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700`}
                            id='doubleDropdown'>
                            <ul
                              className='text-md py-2 text-gray-700 dark:text-gray-200'
                              aria-labelledby='doubleDropdownButton'>
                              {subMenu?.subMenuItems?.map(
                                (nestedMenu, nestedIndex) => (
                                  <li key={nestedIndex}>
                                    <a
                                      href={
                                        (nestedMenu?.page?.value as Page)
                                          ?.path || '#'
                                      }
                                      className='block px-4 py-2 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white'>
                                      {(nestedMenu?.page?.value as Page)
                                        ?.slug || '#'}
                                    </a>
                                  </li>
                                ),
                              )}
                            </ul>
                          </div>
                        </li>
                      ) : (
                        <li key={subIndex}>
                          <a
                            href={(subMenu?.page?.value as Page)?.path || '#'}
                            className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>
                            {(subMenu?.page?.value as Page)?.slug}
                          </a>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </li>
            ) : (
              <li key={index}>
                <a
                  href={(menuItem?.page?.value as Page)?.path || '#'}
                  className='block rounded bg-blue-700 px-3 py-2 text-white dark:bg-blue-600 md:bg-transparent md:p-0 md:text-blue-700 md:dark:bg-transparent md:dark:text-blue-500'
                  aria-current='page'>
                  {(menuItem?.page?.value as Page)?.slug}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
