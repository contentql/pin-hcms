import { User } from '@payload-types'
import {
  FaFacebook,
  FaLinkedin,
  FaSquareInstagram,
  FaSquareXTwitter,
} from 'react-icons/fa6'
import { IoLogoWhatsapp } from 'react-icons/io'

const listOfIcons = {
  Twitter: (
    <div className='mx-1 w-6 hover:text-black'>
      {' '}
      <FaSquareXTwitter size={20} />
    </div>
  ),
  Facebook: (
    <div className='mx-1 w-6 hover:text-[#1877F2]'>
      <FaFacebook size={20} />
    </div>
  ),
  Whatsapp: (
    <div className='mx-1 w-6 hover:text-[#25D366]'>
      {' '}
      <IoLogoWhatsapp size={20} />
    </div>
  ),
  LinkedIn: (
    <div className='mx-1 w-6 hover:text-[#0072b1]'>
      {' '}
      <FaLinkedin size={20} />
    </div>
  ),
  Instagram: (
    <div className='mx-1 w-6 hover:text-[#C13584]'>
      <FaSquareInstagram size={20} />
    </div>
  ),
}

const Profile = ({ user }: { user: User }) => {
  function capitalizeWords(words: string) {
    return words
      .split(' ')
      .map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      })
      .join(' ')
  }
  return (
    <div>
      <div className='max-w-sm rounded p-5 text-center text-gray-500'>
        <div
          style={{
            backgroundImage: `url(${user?.imageUrl})`,
          }}
          className={`mx-auto flex h-[141px] w-[141px] justify-center rounded-full bg-blue-300/20 bg-cover bg-center bg-no-repeat`}>
          <div className='ml-28 mt-4 h-6 w-6 rounded-full bg-white/90 text-center'>
            <input
              type='file'
              name='profile'
              id='upload_profile'
              hidden
              required></input>

            <label htmlFor='upload_profile'>
              <svg
                data-slot='icon'
                className='h-5 w-6 text-blue-700'
                fill='none'
                stroke-width='1.5'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
                aria-hidden='true'>
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z'></path>
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z'></path>
              </svg>
            </label>
          </div>
        </div>
        <div className='mt-5 text-sm'>
          <a
            href='#'
            className='text-xl font-medium leading-none text-white transition duration-500 ease-in-out hover:text-indigo-600'>
            {capitalizeWords(user?.name!)}
          </a>
          {user?.role === 'author' && <p className='mt-2 text-white'>Author</p>}
        </div>

        <p className='mt-2 text-sm text-white'>{user?.bio}</p>

        <div className='mt-4 flex justify-center'>
          {user?.socialMedia?.map(item => (
            <a key={item?.id} href={item?.url}>
              {listOfIcons[item?.icon!]}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Profile
