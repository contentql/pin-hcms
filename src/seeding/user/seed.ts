import { Payload } from 'payload'

import { UserData, UserImageData } from './data'

export interface SeedUser {
  payload: Payload
  userImageData: UserImageData
  userData: UserData
}

export const seedUser = async ({
  payload,
  userImageData,
  userData,
}: SeedUser) => {
  try {
    const userImageResult = await payload.create({
      collection: 'media',
      data: { ...userImageData.data },
      filePath: userImageData.filePath,
    })

    const userDataWithImageId = JSON.stringify(userData).replace(
      new RegExp(`\\$\\{\\{user_image_1_id\\}\\}`, 'g'),
      userImageResult.id || '',
    )

    const finalUserData: UserData = JSON.parse(userDataWithImageId)

    const userResult = await payload.create({
      collection: 'users',
      data: finalUserData,
    })

    return userResult
  } catch (error) {
    throw error
  }
}
