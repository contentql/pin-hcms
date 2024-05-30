const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
]

export default function Navbar() {
  return (
    <nav className='w-100 md:px-auto bg-gray-200 px-8 shadow shadow-gray-300'>
      <div className='container mx-auto flex h-28 flex-wrap items-center justify-between md:h-16 md:flex-nowrap md:px-4'>
        <div className='text-indigo-500 md:order-1'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-10 w-10'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z'
            />
          </svg>
        </div>
        <div className='order-3 w-full text-gray-500 md:order-2 md:w-auto'>
          <ul className='flex justify-between font-semibold'>
            <li className='text-indigo-500 md:px-4 md:py-2'>
              <a href='#'>Dashboard</a>
            </li>
            <li className='hover:text-indigo-400 md:px-4 md:py-2'>
              <a href='#'>Search</a>
            </li>
            <li className='hover:text-indigo-400 md:px-4 md:py-2'>
              <a href='#'>Explore</a>
            </li>
            <li className='hover:text-indigo-400 md:px-4 md:py-2'>
              <a href='#'>About</a>
            </li>
            <li className='hover:text-indigo-400 md:px-4 md:py-2'>
              <a href='#'>Contact</a>
            </li>
          </ul>
        </div>
        <div className='order-2 md:order-3'>
          <button className='flex items-center gap-2 rounded-xl bg-indigo-500 px-4 py-2 text-gray-50 hover:bg-indigo-600'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fill-rule='evenodd'
                d='M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z'
                clip-rule='evenodd'
              />
            </svg>
            <span>Login</span>
          </button>
        </div>
      </div>
    </nav>
  )
}
