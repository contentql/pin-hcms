'use client'

import { User } from '@payload-types'
import {
  FaFacebook,
  FaLinkedin,
  FaSquareInstagram,
  FaSquareXTwitter,
} from 'react-icons/fa6'
import { IoLogoWhatsapp, IoMdRefresh } from 'react-icons/io'
import { toast } from 'react-toastify'

import { trpc } from '@/trpc/client'

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

const Profile = ({ initialUser }: { initialUser: User }) => {
  const { data: user } = trpc.user.getUser.useQuery(undefined, {
    initialData: initialUser,
  })
  const trpcUtils = trpc.useUtils()

  function capitalizeWords(words: string) {
    return words
      ?.split(' ')
      ?.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      })
      ?.join(' ')
  }

  const { mutate: updateProfileMutation } =
    trpc.user.updateProfileImage.useMutation({
      onMutate: async data => {
        // const userQueryKey = getQueryKey(trpc.user.getUser, undefined, 'query')
        trpcUtils.user.getUser.setData(undefined, oldUser => {
          if (oldUser) {
            return { ...oldUser, imageUrl: data.imageUrl }
          }
          return oldUser
        })
      },
      onSuccess: async () => {
        toast.success('Avatar updated successfully!')
      },
      onError: async () => {
        trpcUtils.user.invalidate()
        toast.error('Avatar failed to update!')
      },
    })

  function updateImage() {
    const randomNum = Math.floor(Math.random() * (24 - 1 + 1)) + 1
    const imageUrl = `/images/avatar/avatar_${randomNum}.jpg`
    updateProfileMutation({ imageUrl })
  }

  return (
    <div className='max-w-sm rounded p-5 text-center text-gray-500'>
      <div className='group relative mx-auto h-[141px] w-[141px]'>
        <div
          style={{ backgroundImage: `url(${user?.imageUrl})` }}
          className='duration-600 h-full w-full rounded-full bg-blue-300/20 bg-cover bg-center bg-no-repeat transition ease-in-out group-hover:blur-sm'></div>
        <button
          onClick={updateImage}
          className='duration-600 absolute inset-0 m-auto flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-indigo-600 opacity-0 transition-opacity ease-in-out group-hover:opacity-100'>
          <IoMdRefresh size={24} />
        </button>
      </div>
      <div className='mt-5 text-sm'>
        <a
          href='#'
          className='text-xl font-medium leading-none text-white transition duration-500 ease-in-out hover:text-indigo-600'>
          {capitalizeWords(user?.name!)}
        </a>
        {user?.role === 'author' && <p className='mt-2 text-white'>Author</p>}
      </div>
      <p className='mt-2 line-clamp-3 text-sm text-white'>{user?.bio}</p>
      <div className='mt-4 flex justify-center'>
        {user?.socialMedia?.map(item => (
          <a key={item?.id} href={item?.url}>
            {listOfIcons[item?.icon!]}
          </a>
        ))}
      </div>
    </div>
  )
}

export default Profile
