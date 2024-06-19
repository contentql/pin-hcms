import { redirect } from 'next/navigation'

import ProfileForm from '@/components/ProfileForm'
import { getCurrentUser } from '@/lib/payload'

const ProfilePage = async () => {
  const user = await getCurrentUser()

  if (!user) return redirect('/sign-in')

  return (
    <div className='flex w-full flex-col gap-5 bg-transparent px-3 pt-16 text-[#161931] md:flex-row md:px-16 lg:px-28'>
      <aside className='hidden py-4 md:block md:w-1/3 lg:w-1/4'>
        <div className='sticky top-12 flex flex-col gap-2 border-r border-indigo-100 p-4 text-sm'>
          <h2 className='mb-4 pl-3 text-2xl font-semibold text-white'>
            Settings
          </h2>

          <a
            href='/profile'
            className='rounded-full border border-indigo-600 px-3 py-2.5 text-center font-semibold text-white duration-500 hover:bg-indigo-600'>
            Account Settings
          </a>
        </div>
      </aside>
      <main className='min-h-screen w-full py-1'>
        <ProfileForm user={user} />
      </main>
    </div>
  )
}

export default ProfilePage
