import { AlignJustify } from 'lucide-react'

const Nav = () => {
  return (
    <nav className='relative flex h-16 w-full items-center justify-between bg-black px-5 lg:px-32'>
      <h3 className='text-lg  font-bold uppercase text-sky-600'>Koronix</h3>
      <ul className='hidden items-center   justify-center gap-7 text-white lg:flex'>
        <li>
          <a
            className='underline-offset-4 transition-all duration-300 hover:text-sky-600 hover:underline focus:text-sky-600 focus:underline'
            href='#'>
            Process
          </a>
        </li>
        <li>
          <a
            className='underline-offset-4 transition-all duration-300 hover:text-sky-600 hover:underline focus:text-sky-600 focus:underline'
            href='#'>
            Benefits
          </a>
        </li>
        <li>
          <a
            className='underline-offset-4 transition-all duration-300 hover:text-sky-600 hover:underline focus:text-sky-600 focus:underline'
            href='#'>
            Services
          </a>
        </li>
        <li>
          <a
            className='underline-offset-4 transition-all duration-300 hover:text-sky-600 hover:underline focus:text-sky-600 focus:underline'
            href='#'>
            Portfolio
          </a>
        </li>
        <li>
          <a
            className='underline-offset-4 transition-all duration-300 hover:text-sky-600 hover:underline focus:text-sky-600 focus:underline'
            href='#'>
            FAQ
          </a>
        </li>
        <a
          className='rounded-md bg-sky-500 px-8 py-2 text-white transition hover:bg-sky-700 focus:ring focus:ring-sky-600'
          href='#'>
          Get Started
        </a>
      </ul>
      <AlignJustify
        size={24}
        className='block text-gray-100 transition hover:opacity-80 lg:hidden'
      />
    </nav>
  )
}

export default Nav
