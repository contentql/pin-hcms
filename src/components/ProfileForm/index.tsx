'use client'

import type { User } from '@payload-types'
import { useState } from 'react'
import { useFormState } from 'react-dom'

import DeleteAccountSection from './DeleteAccountSection'
import { updateUser } from './actions'

const ProfileForm = ({ user }: { user: User }) => {
  const [formData, setFormData] = useState<User>(user)

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const [response, updateUserAction, isPending] = useFormState(async () => {
    const response = await updateUser(formData)
    if (!response || !response.user) return null
    alert('Profile updated successfully!')
    // toast.success('Profile updated successfully!', {
    //   duration: 2000,
    //   position: 'top-center',
    //   dismissible: true,
    // })
    return response
  }, null)

  return (
    <div className='p-2 md:p-4'>
      <div className='mt-8 w-full px-6 pb-8 sm:rounded-lg'>
        <h2 className='pl-6 text-2xl font-bold sm:text-xl'>Public Profile</h2>

        <div className='mx-auto mt-8 grid'>
          <div className='flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0'>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className='h-40 w-40 rounded-full object-cover p-1 ring-2 ring-indigo-300 dark:ring-indigo-500'
              src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZhY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
              alt='Bordered avatar'
            />

            <div className='flex flex-col space-y-5 sm:ml-8'>
              <button
                type='button'
                className='rounded-lg border border-indigo-200 bg-[#202142] px-7 py-3.5 text-base font-medium text-indigo-100 hover:bg-indigo-900 focus:z-10 focus:outline-none focus:ring-4 focus:ring-indigo-200 '>
                Change picture
              </button>
              <button
                type='button'
                className='rounded-lg border border-indigo-200 bg-white px-7 py-3.5 text-base font-medium text-indigo-900 hover:bg-indigo-100 hover:text-[#202142] focus:z-10 focus:outline-none focus:ring-4 focus:ring-indigo-200 '>
                Delete picture
              </button>
            </div>
          </div>

          <form
            action={updateUserAction}
            className='mt-8 items-center text-[#202142] sm:mt-14'>
            <div className='mb-4 sm:mb-6'>
              <label
                htmlFor='name'
                className='block text-sm font-medium text-gray-700'>
                Name
              </label>
              <input
                type='text'
                id='name'
                name='name'
                placeholder='John'
                value={formData.name || ''}
                onChange={handleOnChange}
                className='mt-1 w-full rounded-md border p-2 transition-colors duration-300 focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2'
              />
            </div>

            <div className='mb-4 sm:mb-6'>
              <label
                htmlFor='email'
                className='block text-sm font-medium text-gray-700'>
                E-Mail
              </label>
              <input
                type='text'
                id='email'
                name='email'
                placeholder='john.doe@example.com'
                value={formData.email}
                disabled
                className='mt-1 w-full rounded-md border p-2 transition-colors duration-300 focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2'
              />
            </div>

            <div className='mb-4 flex w-full flex-col items-center space-x-0 space-y-2 sm:mb-6 sm:flex-row sm:space-x-4 sm:space-y-0'>
              <div className='w-full'>
                <label
                  htmlFor='password'
                  className='block text-sm font-medium text-gray-700'>
                  New Password
                </label>
                <input
                  type='password'
                  id='password'
                  name='password'
                  placeholder='● ● ● ● ● ● ● ● ●'
                  onChange={handleOnChange}
                  className='mt-1 w-full rounded-md border p-2 transition-colors duration-300 focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2'
                />
              </div>

              <div className='w-full'>
                <label
                  htmlFor='confirmPassword'
                  className='block text-sm font-medium text-gray-700'>
                  Confirm Password
                </label>
                <input
                  type='password'
                  id='confirmPassword'
                  name='confirmPassword'
                  placeholder='● ● ● ● ● ● ● ● ●'
                  onChange={handleOnChange}
                  className='mt-1 w-full rounded-md border p-2 transition-colors duration-300 focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2'
                />
              </div>
            </div>

            <div className='flex justify-end'>
              <button
                type='submit'
                className='w-full rounded-lg  bg-indigo-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-indigo-800 focus:outline-none focus:ring-4 focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800 sm:w-auto'>
                {isPending ? 'Updating...' : 'Update Profile'}
              </button>
            </div>
          </form>
        </div>
      </div>
      <DeleteAccountSection />
    </div>
  )
}

export default ProfileForm
