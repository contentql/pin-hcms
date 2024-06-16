'use client'

import { Media, Page, SiteSetting, User } from '@payload-types'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

import useReadingProgress from '@/hooks/useReadingProgress'
import { trpc } from '@/trpc/client'
import { cn } from '@/utils/cn'

import { HoveredLink, Menu, MenuItem, SingleLink } from './Header'
import ProfileDropdown from './dropdown'

type Header = keyof SiteSetting['header']

export function NavbarDemo({
  initData,
  user,
}: {
  initData: SiteSetting
  user: User | null
}) {
  const { data = initData } = trpc.SiteSettings.getSiteSettings.useQuery()

  if (!data?.header?.menuItems?.length) return null

  return (
    <div className='relative flex w-full items-center justify-center'>
      <Navbar user={user} data={data as SiteSetting} />
    </div>
  )
}
export default NavbarDemo

function Navbar({
  className,
  data,
  user,
}: {
  className?: string
  data: SiteSetting
  user: User | null
}) {
  // const { data: user } = useSession()
  const [active, setActive] = useState<string | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => setMenuOpen(!menuOpen)
  const [dropdownOpen, setDropdownOpen] = useState(null)
  const [doubleDropdownOpen, setDoubleDropdownOpen] = useState(null)

  const pathName = usePathname()
  const pathSegments = pathName.split('/').filter(segment => segment)

  const [bgColor, setBgColor] = useState('transparent')

  const completion = useReadingProgress()
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setBgColor('gray-800')
    } else {
      setBgColor('transparent')
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const toggleDropdown = (index: any) => {
    setDropdownOpen(dropdownOpen === index ? null : index)
  }

  const toggleDoubleDropdown = (index: any) => {
    setDoubleDropdownOpen(doubleDropdownOpen === index ? null : index)
  }
  const [navSize, setNavSize] = useState('6rem')
  const [navColor, setNavColor] = useState('transparent')

  const listenScrollEvent = () => {
    window.scrollY > 10 ? setNavColor('#1e2846') : setNavColor('transparent')
    window.scrollY > 10 ? setNavSize('4rem') : setNavSize('6rem')
  }

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent)
    return () => {
      window.removeEventListener('scroll', listenScrollEvent)
    }
  }, [])
  return (
    <div className={cn('fixed top-0 z-50 w-full', className)}>
      <div
        style={{
          backgroundColor: navColor,
          height: navSize,
          transition: 'all 1s',
        }}
        className='fixed z-50 flex w-full items-center justify-between border-gray-200 bg-black px-2 dark:bg-gray-900 md:px-16'>
        <div>
          <Link href={'/'}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={(data?.header?.logo_image as Media)?.url || ''}
              className='h-12 w-12'
              width={80}
              height={40}
              alt='Logo'
            />
          </Link>
        </div>
        <div className='hidden md:block'>
          <Menu setActive={setActive}>
            <div className='flex  items-center justify-center rounded-full bg-[#e779c11a] px-4 py-1'>
              {data?.header?.menuItems?.map((menuItem, index) => {
                if (menuItem?.subMenuItems?.length! <= 0) {
                  return (
                    <SingleLink
                      index={index}
                      key={index}
                      path={(menuItem?.page?.value as Page)?.path || ''}
                      item={(menuItem?.page?.value as Page)?.title || ''}
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
                      <div className='flex flex-col text-sm'>
                        {menuItem?.subMenuItems?.map(
                          (submenuItem, subIndex) => {
                            return (
                              <HoveredLink
                                key={index}
                                href={
                                  (submenuItem?.page?.value as Page)?.path || ''
                                }
                                index={subIndex}
                                title={
                                  (submenuItem?.page?.value as Page)?.slug!
                                }
                                icon={submenuItem?.icon || 'HiFolderMinus'}
                                description={submenuItem?.description!}
                              />
                            )
                          },
                        )}
                      </div>
                    </MenuItem>
                  )
                }
              })}
            </div>
          </Menu>
        </div>
        <div>
          {user === null ? (
            <div className='flex gap-3'>
              <a
                className='hidden cursor-pointer items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold capitalize text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-gray-50 sm:inline-flex'
                href={data?.header?.primary_button_path!}>
                {data?.header?.primary_button_text}
              </a>
              <a
                className='inline-flex cursor-pointer items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold capitalize text-white shadow-sm transition-all duration-300 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
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
          ) : (
            <ProfileDropdown user={user} />
          )}
        </div>
      </div>
      {/* mobile view */}
      <div
        className={`mt-12 block w-full  md:hidden ${menuOpen ? 'block' : 'hidden'}`}
        id='navbar-multi-level'>
        <ul className=' flex flex-col border border-gray-100 bg-gray-50 p-4 font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-gray-900 rtl:space-x-reverse'>
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
                  className='block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500'
                  aria-current='page'>
                  {(menuItem?.page?.value as Page)?.slug}
                </a>
              </li>
            )
          })}
        </ul>
      </div>

      {pathName ===
        `/${pathSegments[pathSegments.length - 2]}/${pathSegments[pathSegments.length - 1]}` && (
        <span
          style={{ transform: `translateX(${completion - 100}%)` }}
          className='absolute bottom-0 h-1 w-full bg-purple-700'
        />
      )}
    </div>
  )
}
