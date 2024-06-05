import { redirect } from 'next/navigation'

import SignUpForm from '@/components/SignUpForm'
import { auth } from '@/lib/auth'

const SignInPage = async () => {
  const session = await auth()
  if (session) return redirect('/profile')
  return <SignUpForm />
}

export default SignInPage
