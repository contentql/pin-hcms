import { Payload } from 'payload'

import { UserData, userData, userImageData } from './data'

export interface SeedUser {
  payload: Payload
}

export const seedUser = async ({ payload }: SeedUser) => {
  try {
    const userImageResult = await payload.create({
      collection: 'media',
      data: { ...userImageData.data },
      filePath: userImageData.filePath,
    })

    // const userDataWithImageId = JSON.stringify(userData).replace(
    //   new RegExp(`\\$\\{\\{user_image_1_id\\}\\}`, 'g'),
    //   userImageResult.id || '',
    // )

    // const finalUserData: UserData = JSON.parse(userDataWithImageId)

    const finalUserData: UserData = {
      ...userData,
      imageUrl: userImageResult.url,
    }

    const userResult = await payload.create({
      collection: 'users',
      data: finalUserData,
    })

    return userResult
  } catch (error) {
    throw error
  }
}
