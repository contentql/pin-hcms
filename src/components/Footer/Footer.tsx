import { Page, SiteSetting } from '~/payload-types'

const Footer = ({ data }: { data: SiteSetting }) => {
  return (
    <div>
      <div className=' mx-auto'>
        <footer className='p-4 bg-white md:px-6 md:py-8 dark:bg-gray-800'>
          <div className='sm:flex sm:items-center sm:justify-between'>
            <a
              href='#'
              target='_blank'
              className='flex items-center mb-4 sm:mb-0'>
              <img
                src='https://flowbite.com/docs/images/logo.svg'
                className='mr-4 h-8'
                alt='Flowbite Logo'
              />
              <span className='self-center text-xl font-semibold whitespace-nowrap dark:text-white'>
                {data?.header?.logo}
              </span>
            </a>
            <ul className='flex flex-wrap items-center mb-6 sm:mb-0'>
              {data?.header?.menuItems?.map((item, index) => (
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
