'use server'

import { redirect } from 'next/navigation'

import { signOut } from '@/lib/auth'

export const signOutWithRedirect = async () => {
  await signOut()
  redirect('/')
}
