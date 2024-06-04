import { User as PayloadUser } from '@payload-types'
import { DefaultSession } from 'next-auth'
import 'next-auth/jwt'

declare module 'next-auth' {
  interface Session {
    user: PayloadUser & DefaultSession['user']
  }
  interface User extends PayloadUser {}
}

declare module 'next-auth/jwt' {
  interface JWT {
    id?: string
    name?: string
    imageUrl?: string
    role?: string
    emailVerified?: string
  }
}
