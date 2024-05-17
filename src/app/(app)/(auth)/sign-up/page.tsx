import { redirect } from 'next/navigation'

import SignUpForm from '@/components/SignUpForm'
import { auth } from '@/lib/auth'

const SignInPage = async () => {
  const session = await auth()
  if (session) return redirect('/profile')
  return (
    <div className='my-auto flex h-full justify-center pb-10 pt-[100px]'>
      <SignUpForm />
    </div>
  )
}

export default SignInPage
