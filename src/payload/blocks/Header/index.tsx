'use client'

import Image from 'next/image'
import { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

import { cn } from '@/utils/cn'

import { Media, Page, SiteSetting } from '~/payload-types'
import { trpc } from '~/src/trpc/client'
import { HoveredLink, Menu, MenuItem, SingleLink } from './Header'

export function NavbarDemo({ initData }: { initData: SiteSetting }) {
  const { data = initData } = trpc.SiteSettings.getSiteSettings.useQuery()
  return (
    <div className='relative w-full flex items-center justify-center'>
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
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [doubleDropdownOpen, setDoubleDropdownOpen] = useState(false)
  const toggleMenu = () => setMenuOpen(!menuOpen)
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen)
  const toggleDoubleDropdown = () => setDoubleDropdownOpen(!doubleDropdownOpen)
  console.log('header data', data)
  return (
    <div
      className={cn(
        'fixed top-10 inset-x-0 max-w-7xl mx-auto z-50',
        className,
      )}>
      <div className='relative rounded-full px-5 flex justify-between items-center boder border-transparent dark:bg-black dark:border-white/[0.2] bg-white shadow-input'>
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
            className='hidden items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-gray-50 sm:inline-flex capitalize cursor-pointer'
            href={data?.header?.primary_button_path!}>
            {data?.header?.primary_button_text}
          </a>
          <a
            className='inline-flex items-center justify-center rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 capitalize cursor-pointer'
            href={data?.header?.secondary_button_path!}>
            {data?.header?.secondary_button_text}
          </a>
          <button
            type='button'
            className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
            aria-controls='navbar-multi-level'
            aria-expanded={menuOpen}
            onClick={toggleMenu}>
            <svg
              className='w-5 h-5'
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
        className={`w-full block md:hidden ${menuOpen ? 'block' : 'hidden'}`}
        id='navbar-multi-level'>
        <ul className='flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
          {data?.header?.menuItems?.map((menuItem,index)=>{
            return menuItem?.subMenuItems?.length!>=1?(
               <li>
            <button
              id='dropdownNavbarLink'
              onClick={toggleDropdown}
              className='flex items-center justify-between w-full py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent'>
              {(menuItem?.page?.value as Page)?.slug} {dropdownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </button>
            <div
              className={`z-10 ${dropdownOpen ? 'block' : 'hidden'} w-full font-normal bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600`}
              id='dropdownNavbar'>
              <ul
                className='py-2 text-md text-gray-700 w-full dark:text-gray-200'
                aria-labelledby='dropdownLargeButton'>
                  {menuItem?.subMenuItems?.map((subMenu,index)=>{
                    return subMenu?.subMenuItems?.length!>=1?(<li aria-labelledby='dropdownNavbarLink'>
                  <button
                    id='doubleDropdownButton'
                    onClick={toggleDoubleDropdown}
                    type='button'
                    className='flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>
                    {(subMenu?.page?.value as Page)?.slug}
                    {doubleDropdownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  </button>
                  <div
                    className={`z-10 ${doubleDropdownOpen ? 'block' : 'hidden'} bg-white divide-y divide-gray-100 rounded-lg shadow w-full dark:bg-gray-700`}
                    id='doubleDropdown'>
                    <ul
                      className='py-2 text-md text-gray-700 dark:text-gray-200'
                      aria-labelledby='doubleDropdownButton'>
                      <li>
                        <a
                          href='#'
                          className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'>
                          Overview
                        </a>
                      </li>
                      <li>
                        <a
                          href='#'
                          className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'>
                          My downloads
                        </a>
                      </li>
                      <li>
                        <a
                          href='#'
                          className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'>
                          Billing
                        </a>
                      </li>
                      <li>
                        <a
                          href='#'
                          className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'>
                          Rewards
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>):(
                <li>
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
          </li>):( 
          <li>
            <a
              href={(menuItem?.page?.value as Page)?.path || '#'}
              className='block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent'
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
