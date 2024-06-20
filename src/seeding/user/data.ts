import { User } from '@payload-types'
import path from 'path'

export type UserData = Omit<User, 'id' | 'createdAt' | 'updatedAt'>

export type UserImageData = { data: { alt: string }; filePath: string }

export const userImageData = {
  data: {
    alt: 'Demo User',
  },
  filePath: path.join(process.cwd(), '/public/images/seed/demo-user-logo.png'),
}

export const userData: UserData = {
  name: 'cql',
  email: 'demo@contentql.io',
  password: 'password',
  role: 'author',
  imageUrl: '${{user_image_1_id}}',
}
